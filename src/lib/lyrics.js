/** Quita marcas de tiempo y etiquetas de sección que Lyria añade a la letra. */
export function formatLyrics(text) {
  if (!text) return "";
  return String(text)
    .replace(/\[\d+(?:\.\d+)?(?::\d+(?:\.\d+)?)?\]\s*/g, "")
    .replace(/^\s*\[(?:Verse|Chorus|Bridge|Intro|Outro|Hook|Pre-Chorus|Refrain)[^\]]*\]\s*$/gim, "")
    .split(/\n+/)
    .map((line) => line.trim().replace(/^[-–—]\s*/, ""))
    .filter(Boolean)
    .join("\n");
}
