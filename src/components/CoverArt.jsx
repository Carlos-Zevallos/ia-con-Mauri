import AiIcon from "./AiIcon.jsx";
import { iconIdForGuide } from "../lib/certs.js";

const art = {
  chatgpt: { bg: ["#34d399", "#10a37f"], d: "M18 62c18-22 38-18 52-8 12 9 28 6 38-8 8-12 4-28-10-34-16-8-22 8-38 6S32 4 18 16 0 84 18 62Z" },
  claude: { bg: ["#f59e0b", "#d97706"], d: "M12 48c8-28 40-36 58-18 10 10 28 8 36-4 6 18 4 40-14 50-22 12-40-6-56 0S4 76 12 48Z" },
  gemini: { bg: ["#60a5fa", "#2563eb"], d: "M8 70 40 12l36 20 20 38-48 10Z" },
  deepseek: { bg: ["#818cf8", "#4f6ef7"], d: "M36 8h16l8 72H28Z" },
  grok: { bg: ["#4b5563", "#1b1c1f"], d: "M10 50c20-30 70-30 90 0-20 30-70 30-90 0Z" },
  perplexity: { bg: ["#22d3ee", "#0e8a96"], d: "M54 10 70 54 54 98 38 54Z" },
  dalle: { bg: ["#fb7185", "#ef4444"], d: "M20 80c10-40 40-60 68-48-8 28-30 44-68 48Z" },
  sd: { bg: ["#a78bfa", "#7c3aed"], d: "M16 30h76v48H16Z" },
  nano: { bg: ["#fbbf24", "#f59e0b"], d: "M54 8 64 42h34L70 62l12 34-28-20-28 20 12-34L16 42h34Z" },
  jasper: { bg: ["#fb923c", "#f97316"], d: "M24 28h20v52H24zm40 10h20v32H64z" },
  midjourney: { bg: ["#475569", "#1e293b"], d: "M12 72 54 16l50 56H12Z" },
  canva: { bg: ["#2dd4bf", "#14b8a6"], d: "M18 22h72v16H18zm0 28h48v28H18z" },
  kling: { bg: ["#374151", "#111827"], d: "M20 24h68v12H20zm0 22h68v8H20zm0 18h44v8H20z" },
  omni: { bg: ["#fb7185", "#ea580c"], d: "M20 24h68v12H20zm0 22h68v8H20zm0 18h44v8H20z" },
  "claude-excel": { bg: ["#34d399", "#059669"], d: "M12 48c8-28 40-36 58-18 10 10 28 8 36-4 6 18 4 40-14 50-22 12-40-6-56 0S4 76 12 48Z" },
  "claude-fondo": { bg: ["#b45309", "#7c2d12"], d: "M12 48c8-28 40-36 58-18 10 10 28 8 36-4 6 18 4 40-14 50-22 12-40-6-56 0S4 76 12 48Z" },
  lovable: { bg: ["#fb7185", "#e11d48"], d: "M28 18h52v72H28zM40 30h28v12H40z" },
  diseno: { bg: ["#818cf8", "#5b5fff"], d: "M18 22h72v16H18zm0 28h48v28H18z" },
};

const photos = {
  chatgpt: "/covers/cover-chatgpt.png",
  claude: "/covers/cover-claude.png",
  gemini: "/covers/cover-gemini.png",
  deepseek: "/covers/cover-deepseek.png",
  grok: "/covers/cover-grok.png",
  perplexity: "/covers/cover-perplexity.png",
  dalle: "/covers/cover-dalle.png",
  sd: "/covers/cover-sd.png",
  nano: "/covers/cover-nano.png",
  jasper: "/covers/cover-jasper.png",
  midjourney: "/covers/cover-midjourney.png",
  canva: "/covers/cover-canva.png",
  kling: "/covers/cover-kling.png",
  omni: "/covers/cover-omni.png",
  "claude-excel": "/covers/cover-claude-excel.png",
  "claude-fondo": "/covers/cover-claude-fondo.png",
  lovable: "/covers/cover-lovable.png",
  diseno: "/covers/cover-diseno.png",
};

export default function CoverArt({ id, size = "md" }) {
  const resolved = iconIdForGuide(id);
  const spec = art[id] || art[resolved] || art.chatgpt;
  const photo = photos[id] || photos[resolved];
  const h = size === "lg" ? 160 : size === "sm" ? 92 : 120;
  return (
    <div
      className={`cover-art${photo ? " has-photo" : ""}`}
      style={{ height: h, background: `linear-gradient(145deg, ${spec.bg[0]}, ${spec.bg[1]})` }}
    >
      {photo ? (
        <img src={photo} alt="" className="cover-art-photo" />
      ) : (
        <svg viewBox="0 0 108 108" aria-hidden>
          <path d={spec.d} fill="rgba(255,255,255,.28)" />
          <circle cx="84" cy="24" r="10" fill="rgba(255,255,255,.35)" />
          <circle cx="22" cy="82" r="7" fill="rgba(255,255,255,.22)" />
        </svg>
      )}
      <div className="cover-art-icon">
        <AiIcon id={resolved} size={size === "lg" ? 40 : size === "sm" ? 28 : 32} />
      </div>
    </div>
  );
}
