import { OfficialMark, hasOfficialMark } from "./aiLogos.jsx";
import { iconIdForGuide } from "../lib/certs.js";

const colors = {
  chatgpt: "#10a37f",
  claude: "#D97757",
  gemini: "#3186FF",
  deepseek: "#4D6BFE",
  grok: "#1b1c1f",
  perplexity: "#20808D",
  dalle: "#111111",
  sd: "#7c3aed",
  nano: "#F9AB00",
  jasper: "#FA4028",
  midjourney: "#1e293b",
  canva: "#00c4cc",
  kling: "#111827",
  omni: "#E85D4C",
  lovable: "#1c1917",
  diseno: "#5b5fff",
};

function Glyph({ id }) {
  if (hasOfficialMark(id)) {
    return <OfficialMark id={id} fill="white" />;
  }
  if (id === "omni") {
    return (
      <g fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round">
        <rect x="7" y="12" width="16" height="12" rx="2" />
        <path d="M23 16l6-3v10l-6-3" />
        <circle cx="15" cy="18" r="2.2" fill="white" stroke="none" />
      </g>
    );
  }
  if (id === "diseno") {
    return (
      <g fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round">
        <rect x="8" y="10" width="14" height="14" rx="3" />
        <rect x="14" y="12" width="14" height="14" rx="3" />
        <path d="M17 19h8" />
      </g>
    );
  }
  return <circle cx="18" cy="18" r="8" fill="white" />;
}

export default function AiIcon({ id, size = 40, plain = false }) {
  const resolved = iconIdForGuide(id);
  const bg = colors[resolved] || colors[id] || "#FF5A3C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className="ai-icon"
      aria-hidden
    >
      {plain ? null : <rect width="36" height="36" rx="10" fill={bg} />}
      <Glyph id={resolved} />
    </svg>
  );
}

export { colors as aiColors, Glyph as AiGlyph };
