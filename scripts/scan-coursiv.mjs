import fs from "fs";

const s = fs.readFileSync(process.env.TEMP + "\\coursiv.js", "utf8");

const needles = [
  "Claude para Excel",
  "Claude: A fondo",
  "ChatGPT: A fondo",
  "Jasper AI",
  "Stable Diffusion",
  "Comunicación con IA",
  "Claude Code",
  "Omni",
  "Perplexity",
  "Kling",
  "Canva AI",
  "Lovable",
  "DeepSeek",
  "Midjourney",
  "Investigación y análisis",
  "Aplicaciones sin código",
  "Generación de imágenes",
  "Trabajo estratégico",
  "Anuncios en video",
  "Verificación de fuentes",
];

for (const n of needles) {
  let i = 0;
  let c = 0;
  while ((i = s.indexOf(n, i)) !== -1 && c < 3) {
    console.log("\n====", n, "@", i, "====");
    console.log(s.slice(Math.max(0, i - 180), i + n.length + 280).replace(/\n/g, " "));
    i += n.length;
    c++;
  }
  if (c === 0) console.log("MISSING", n);
}
