import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { formatLyrics } from "./src/lib/lyrics.js";

const MODEL = "lyria-3-clip-preview";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const inflight = new Map();

function hashKey(prompt, imageUrl) {
  return createHash("sha256").update(`${prompt}::${imageUrl || ""}`).digest("hex").slice(0, 24);
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

async function readEnvKey(root) {
  for (const name of [".env.local", ".env"]) {
    const file = path.join(root, name);
    if (!existsSync(file)) continue;
    const text = await readFile(file, "utf8");
    const match = text.match(/^(?:GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_GENAI_API_KEY)\s*=\s*(.+)$/m);
    if (match) return match[1].trim().replace(/^["']|["']$/g, "");
  }
  return (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY || "").trim();
}

async function fileToInline(publicDir, imageUrl) {
  if (!imageUrl) return null;
  const rel = imageUrl.replace(/^\//, "").split("?")[0];
  const file = path.join(publicDir, rel);
  if (!existsSync(file)) return null;
  const buf = await readFile(file);
  const ext = path.extname(file).toLowerCase();
  const mime = ext === ".png" ? "image/png" : "image/jpeg";
  return { inline_data: { mime_type: mime, data: buf.toString("base64") } };
}

async function generateClip({ publicDir, cacheDir, prompt, imageUrl, key }) {
  const id = hashKey(prompt, imageUrl);
  await mkdir(cacheDir, { recursive: true });
  const metaFile = path.join(cacheDir, `${id}.json`);
  const audioFile = path.join(cacheDir, `${id}.mp3`);
  if (existsSync(metaFile) && existsSync(audioFile)) {
    const meta = JSON.parse(await readFile(metaFile, "utf8"));
    return { ...meta, lyrics: formatLyrics(meta.lyrics), cached: true };
  }

  const parts = [{ text: prompt }];
  const imagePart = await fileToInline(publicDir, imageUrl);
  if (imagePart) parts.push(imagePart);

  const geminiRes = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "x-goog-api-key": key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        responseModalities: ["AUDIO", "TEXT"],
      },
    }),
    signal: AbortSignal.timeout(170000),
  });

  const raw = await geminiRes.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw Object.assign(new Error(raw.slice(0, 400) || "Gemini no devolvió JSON."), { status: 502, code: "gemini" });
  }

  if (!geminiRes.ok) {
    const msg = data?.error?.message || data?.error?.status || `Gemini respondió ${geminiRes.status}`;
    throw Object.assign(new Error(msg), { status: geminiRes.status, code: "gemini" });
  }

  const outParts = data?.candidates?.[0]?.content?.parts || [];
  const lyrics = [];
  let audioB64 = "";
  let mime = "audio/mp3";
  for (const part of outParts) {
    if (part.text) lyrics.push(part.text);
    const blob = part.inlineData || part.inline_data;
    if (blob?.data) {
      audioB64 = blob.data;
      mime = blob.mimeType || blob.mime_type || mime;
    }
  }

  if (!audioB64) {
    throw Object.assign(
      new Error(lyrics.join("\n") || "Gemini no devolvió audio. Revisa que Lyria 3 esté activo en tu proyecto de AI Studio."),
      { status: 502, code: "no_audio" }
    );
  }

  await writeFile(audioFile, Buffer.from(audioB64, "base64"));
  const payload = {
    id,
    audioUrl: `/lessons/lyria-cache/${id}.mp3`,
    lyrics: formatLyrics(lyrics.join("\n\n").trim()),
    mime,
  };
  await writeFile(metaFile, JSON.stringify(payload, null, 2));
  return { ...payload, cached: false };
}

export function lyriaPlugin() {
  return {
    name: "lyria-api",
    configureServer(server) {
      const root = server.config.root;
      const publicDir = path.resolve(root, "public");
      const cacheDir = path.join(publicDir, "lessons", "lyria-cache");

      server.middlewares.use("/api/lyria", async (req, res) => {
        const send = (code, body) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        };

        if (req.method !== "POST") {
          send(405, { error: "method" });
          return;
        }

        try {
          const key = await readEnvKey(root);
          if (!key) {
            send(501, {
              error: "missing_key",
              message:
                "Falta GEMINI_API_KEY. Crea un archivo .env en la raíz del proyecto con tu clave de Google AI Studio.",
            });
            return;
          }

          const body = await readJson(req);
          const prompt = String(body.prompt || "").trim();
          if (!prompt) {
            send(400, { error: "prompt", message: "El prompt está vacío." });
            return;
          }

          const id = hashKey(prompt, body.imageUrl);
          if (!inflight.has(id)) {
            inflight.set(
              id,
              generateClip({ publicDir, cacheDir, prompt, imageUrl: body.imageUrl, key }).finally(() =>
                inflight.delete(id)
              )
            );
          }
          const payload = await inflight.get(id);
          send(200, payload);
        } catch (err) {
          send(err.status || 500, {
            error: err.code || "server",
            message: err.message || "Error al generar la pista.",
          });
        }
      });
    },
  };
}
