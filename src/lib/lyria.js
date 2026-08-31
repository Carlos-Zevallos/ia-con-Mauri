import { formatLyrics } from "./lyrics.js";

export async function generateLyria({ prompt, imageUrl }) {
  const res = await fetch("/api/lyria", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, imageUrl }),
    signal: AbortSignal.timeout(180000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || "No se pudo generar la música con Gemini.");
    err.code = data.error;
    throw err;
  }
  if (data.lyrics) data.lyrics = formatLyrics(data.lyrics);
  return data;
}
