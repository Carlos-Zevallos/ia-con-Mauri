import { enrichAllGuides } from "./lessons/expand.js";
import { geminiUnits } from "./lessons/gemini.js";
import { disenoGuide } from "./lessons/diseno.js";
import { chatgptUnits } from "./lessons/chatgpt.js";
import { claudeUnits } from "./lessons/claude.js";
import { midjourneyUnits } from "./lessons/midjourney.js";
import { deepseekUnits } from "./lessons/deepseek.js";
import { jasperUnits } from "./lessons/jasper.js";
import { perplexityUnits } from "./lessons/perplexity.js";
import { canvaUnits } from "./lessons/canva.js";
import { klingUnits } from "./lessons/kling.js";
import { lovableUnits } from "./lessons/lovable.js";
import { sdUnits } from "./lessons/sd.js";

export const userSeed = {
  name: "Mauri",
  email: "",
  streak: 5,
  tokens: 12,
  industry: "Creación",
};

export const challenges = [
  {
    id: "21-dias",
    title: "21 días con IA, a tu ritmo",
    days: 21,
    currentDay: 5,
    minutes: 10,
    cover: "linear-gradient(135deg,#FF5A3C,#FFB020)",
    blurb: "Una idea práctica cada día. Sin deberes eternos.",
  },
  {
    id: "bolsillo",
    title: "10 días: IA para tu bolsillo",
    days: 10,
    currentDay: 2,
    minutes: 12,
    cover: "linear-gradient(135deg,#12C4B0,#3D6BD6)",
    blurb: "Mini proyectos que puedes cobrar o usar en tu chamba.",
  },
  {
    id: "sin-codigo",
    title: "Semana sin código",
    days: 7,
    currentDay: 1,
    minutes: 10,
    cover: "linear-gradient(135deg,#FF6B9A,#7C6CFF)",
    blurb: "Automatiza lo aburrido con bloques, no con terminal.",
  },
  {
    id: "primeros-pasos",
    title: "Arranque suave",
    days: 5,
    currentDay: 1,
    minutes: 8,
    cover: "linear-gradient(135deg,#12C4B0,#FF8A65)",
    blurb: "Si nunca hablaste con una IA, empieza aquí.",
  },
  {
    id: "claude-largo",
    title: "14 días con Claude",
    days: 14,
    currentDay: 1,
    minutes: 12,
    cover: "linear-gradient(135deg,#d97706,#f59e0b)",
    blurb: "Documentos largos, tono humano y menos relleno.",
  },
  {
    id: "claude-corto",
    title: "Claude en 5 tardes",
    days: 5,
    currentDay: 1,
    minutes: 8,
    cover: "linear-gradient(135deg,#f59e0b,#12C4B0)",
    blurb: "Para perderle el miedo a los textos largos.",
  },
];

export const aiTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Texto y razonamiento",
    desc: "Borradores, ideas y tareas del día a día, con contexto claro.",
    color: "#10a37f",
  },
  {
    id: "claude",
    name: "Claude",
    category: "Texto y razonamiento",
    desc: "Documentos largos, tono cuidado y matices.",
    color: "#d97706",
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Texto y razonamiento",
    desc: "Texto, imagen y contexto amplio en un mismo hilo.",
    color: "#4285f4",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "Texto y razonamiento",
    desc: "Pasos claros cuando hay números, reglas o lógica.",
    color: "#4f6ef7",
  },
  {
    id: "grok",
    name: "Grok",
    category: "Código y lógica",
    desc: "Scripts, errores y respuestas cortas de código.",
    color: "#1b1c1f",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "Investigación",
    desc: "Búsqueda con pistas de fuentes. Tú contrastas.",
    color: "#20b8cd",
  },
  {
    id: "dalle",
    name: "DALL·E",
    category: "Imagen",
    desc: "Escenas e ideas visuales a partir de una frase.",
    color: "#ef4444",
  },
  {
    id: "sd",
    name: "Stable Diffusion",
    category: "Imagen",
    desc: "Variaciones de estilo para un mismo concepto.",
    color: "#7c3aed",
  },
  {
    id: "nano",
    name: "Nano Banana",
    category: "Imagen",
    desc: "Bocetos rápidos para posts y mockups.",
    color: "#F9AB00",
  },
  {
    id: "jasper",
    name: "Jasper AI",
    category: "Texto y razonamiento",
    desc: "Copy de marketing con Brand Voice, plantillas y campañas.",
    color: "#f97316",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Imagen",
    desc: "Escenas con sujeto, luz y encuadre.",
    color: "#1e293b",
  },
  {
    id: "canva",
    name: "Canva AI",
    category: "Imagen",
    desc: "De mensaje a pieza lista para publicar.",
    color: "#00c4cc",
  },
  {
    id: "kling",
    name: "Kling",
    category: "Video",
    desc: "Clips cortos a partir de un plano claro.",
    color: "#111827",
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Producto",
    desc: "De una idea suelta a pantallas que se pueden tocar.",
    color: "#e11d48",
  },
];

export const exploreAiCatalog = [
  {
    id: "claude-excel",
    title: "Claude para Excel",
    coverId: "claude",
    to: "/guides/claude",
    lessons: 7,
    hours: 3,
    progress: 0,
    tags: ["Trabajo estratégico", "Análisis de hojas de cálculo", "Automatización empresarial"],
  },
  {
    id: "claude-fondo",
    title: "Claude: A fondo",
    coverId: "claude",
    to: "/guides/claude",
    lessons: 13,
    hours: 5,
    progress: 0,
    tags: ["Documentos largos", "Trabajo estratégico", "Automatización empresarial"],
  },
  {
    id: "lovable",
    title: "Lovable",
    coverId: "lovable",
    to: "/guides/lovable",
    lessons: 8,
    hours: 4,
    progress: 90,
    tags: ["Sitios web personales y profesionales", "Páginas de aterrizaje", "Apps sin código"],
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    coverId: "chatgpt",
    to: "/guides/chatgpt",
    lessons: 13,
    hours: 6,
    progress: 40,
    tags: ["Lluvia de ideas", "Respuestas rápidas", "Ayuda diaria"],
  },
  {
    id: "chatgpt-fondo",
    title: "ChatGPT: A fondo",
    coverId: "chatgpt",
    to: "/guides/chatgpt",
    lessons: 12,
    hours: 4,
    progress: 25,
    tags: ["Trabajo estratégico", "Tareas de varios pasos", "Investigación"],
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    coverId: "deepseek",
    to: "/guides/deepseek",
    lessons: 10,
    hours: 5,
    progress: 12,
    tags: ["Trabajo estratégico", "Aprendizaje", "Tareas de varios pasos"],
  },
  {
    id: "claude",
    title: "Claude",
    coverId: "claude",
    to: "/guides/claude",
    lessons: 10,
    hours: 5,
    progress: 16,
    tags: ["Análisis profundo", "Documentos largos", "Trabajo estratégico"],
  },
  {
    id: "midjourney",
    title: "Midjourney",
    coverId: "midjourney",
    to: "/guides/midjourney",
    lessons: 13,
    hours: 6,
    progress: 22,
    tags: ["Imágenes conceptuales", "Ilustraciones", "Visuales de alta calidad"],
  },
  {
    id: "gemini",
    title: "Gemini",
    coverId: "gemini",
    to: "/guides/gemini",
    lessons: 10,
    hours: 4,
    progress: 40,
    tags: ["Análisis de hojas de cálculo", "Contenido multimedia", "Razonamiento cuidadoso"],
  },
  {
    id: "jasper",
    title: "Jasper AI",
    coverId: "jasper",
    to: "/guides/jasper",
    lessons: 15,
    hours: 6,
    progress: 85,
    tags: ["Voz de marca", "Redacción de contenido", "Textos publicitarios", "Plantillas", "Campañas"],
  },
  {
    id: "sd",
    title: "Stable Diffusion",
    coverId: "sd",
    to: "/guides/sd",
    lessons: 10,
    hours: 4,
    progress: 0,
    tags: ["Edición detallada", "Consistencia de marca", "Imágenes personalizadas"],
  },
  {
    id: "omni",
    title: "Omni",
    coverId: "kling",
    to: "/guides/kling",
    lessons: 10,
    hours: 4,
    progress: 100,
    tags: ["Anuncios en video", "Redes sociales", "Metraje realista"],
  },
  {
    id: "grok",
    title: "Grok",
    coverId: "grok",
    to: "/guides/grok",
    lessons: 8,
    hours: 3,
    progress: 0,
    tags: ["Código", "Respuestas cortas", "Depuración"],
  },
  {
    id: "perplexity",
    title: "Perplexity",
    coverId: "perplexity",
    to: "/guides/perplexity",
    lessons: 8,
    hours: 3,
    progress: 0,
    tags: ["Investigación", "Fuentes", "Búsqueda"],
  },
  {
    id: "dalle",
    title: "DALL·E",
    coverId: "dalle",
    to: "/guides/dalle",
    lessons: 8,
    hours: 3,
    progress: 0,
    tags: ["Imágenes", "Escenas", "Bocetos"],
  },
  {
    id: "nano",
    title: "Nano Banana",
    coverId: "nano",
    to: "/guides/nano",
    lessons: 6,
    hours: 2,
    progress: 0,
    tags: ["Bocetos rápidos", "Posts", "Mockups"],
  },
  {
    id: "canva",
    title: "Canva AI",
    coverId: "canva",
    to: "/guides/canva",
    lessons: 8,
    hours: 3,
    progress: 0,
    tags: ["Diseño", "Publicaciones", "Piezas listas"],
  },
  {
    id: "diseno",
    title: "Diseño",
    coverId: "diseno",
    to: "/guides/diseno",
    lessons: 8,
    hours: 3,
    progress: 10,
    tags: ["Interfaces", "Flujos", "Producto"],
  },
];

export const industryGuides = [
  { id: "negocio", title: "Negocio", lessons: 10, art: "jasper" },
  { id: "ops", title: "Operaciones", lessons: 8, art: "deepseek" },
  { id: "crecimiento", title: "Crecimiento", lessons: 12, art: "chatgpt" },
  { id: "habitos", title: "Hábitos", lessons: 7, art: "claude" },
  { id: "crear", title: "Crear", lessons: 11, art: "midjourney" },
];

const guidesRaw = [
  disenoGuide,
  {
    id: "chatgpt",
    title: "ChatGPT",
    subtitle: "Texto y razonamiento",
    color: "#10a37f",
    progress: 40,
    units: 4,
    minutes: 360,
    blurb: "Pide mails, resúmenes, eventos y flujos que sí sirvan, no párrafos de relleno.",
    unitsList: chatgptUnits,
  },
  {
    id: "claude",
    title: "Claude",
    subtitle: "Texto y razonamiento",
    color: "#d97706",
    progress: 16,
    units: 3,
    minutes: 300,
    blurb: "Textos largos, tono más humano y menos prisa.",
    unitsList: claudeUnits,
  },
  {
    id: "gemini",
    title: "Gemini",
    subtitle: "Texto y razonamiento",
    color: "#4285f4",
    progress: 0,
    units: 2,
    minutes: 140,
    blurb: "Qué es Gemini, cómo piensa, y cómo escribir, investigar, crear imágenes y música.",
    unitsList: geminiUnits,
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    subtitle: "Texto y razonamiento",
    color: "#4f6ef7",
    progress: 0,
    units: 3,
    minutes: 300,
    blurb: "Cuando hay reglas o números, pide el paso a paso. Mercado, rivales y un flujo que se puede repetir.",
    unitsList: deepseekUnits,
  },
  {
    id: "perplexity",
    title: "Perplexity",
    subtitle: "Texto y razonamiento",
    color: "#20b8cd",
    progress: 10,
    units: 2,
    minutes: 180,
    blurb: "Investiga con fuentes. Tú contrastas y armas el brief.",
    unitsList: perplexityUnits,
  },
  {
    id: "jasper",
    title: "Jasper AI",
    subtitle: "Texto y razonamiento",
    color: "#f97316",
    progress: 0,
    units: 3,
    minutes: 360,
    blurb: "Como en Coursiv: Brand Voice, plantillas y el flujo de marketing. Copy que suena a tu equipo, no a un brochure.",
    unitsList: jasperUnits,
  },
  {
    id: "midjourney",
    title: "Midjourney",
    subtitle: "Visual y video",
    color: "#334155",
    progress: 22,
    units: 4,
    minutes: 360,
    blurb: "Describe sujeto, luz y encuadre. Adiós al “ultra 8k”.",
    unitsList: midjourneyUnits,
  },
  {
    id: "sd",
    title: "Stable Diffusion",
    subtitle: "Visual y video",
    color: "#8B5CF6",
    progress: 0,
    units: 2,
    minutes: 240,
    blurb: "Una paleta, muchas piezas. El feed se siente de la misma casa.",
    unitsList: sdUnits,
  },
  {
    id: "canva",
    title: "Canva AI",
    subtitle: "Visual y video",
    color: "#14B8A6",
    progress: 0,
    units: 2,
    minutes: 180,
    blurb: "De mensaje a pieza: Magic Studio, kit de marca y el archivo del canal.",
    unitsList: canvaUnits,
  },
  {
    id: "kling",
    title: "Kling",
    subtitle: "Visual y video",
    color: "#1F2937",
    progress: 0,
    units: 2,
    minutes: 240,
    blurb: "Describe el plano, no pidas “un video cool”.",
    unitsList: klingUnits,
  },
  {
    id: "lovable",
    title: "Lovable",
    subtitle: "Producto",
    color: "#E11D48",
    progress: 0,
    units: 2,
    minutes: 240,
    blurb: "De una idea suelta a pantallas que se pueden tocar.",
    unitsList: lovableUnits,
  },
];

export const guides = enrichAllGuides(guidesRaw);

export function flattenLessons(guide) {
  const out = [];
  guide.unitsList.forEach((unit) => {
    unit.lessons.forEach((lesson) => {
      out.push({ ...lesson, unitId: unit.id, unitTitle: unit.title });
    });
  });
  return out;
}

export function findGuide(id) {
  return guides.find((g) => g.id === id);
}

export function guideHasLessons(id) {
  const guide = findGuide(id);
  return Boolean(guide && flattenLessons(guide).length > 0);
}

/** Rutas con lecciones (no herramientas del Taller). */
export const lessonGuides = guides.filter((g) => flattenLessons(g).length > 0);

/** Siguiente ruta en el mapa de IAs. Null si ya es la última. */
export function nextLessonGuide(currentId) {
  const i = lessonGuides.findIndex((g) => g.id === currentId);
  if (i < 0 || i >= lessonGuides.length - 1) return null;
  return lessonGuides[i + 1];
}

export const exploreLessonCatalog = exploreAiCatalog.filter((item) => {
  const match = String(item.to || "").match(/^\/guides\/([^/?#]+)/);
  return Boolean(match && guideHasLessons(match[1]));
});

export function findLesson(guideId, unitId, lessonId) {
  const guide = findGuide(guideId);
  if (!guide) return null;
  const unit = guide.unitsList.find((u) => u.id === unitId);
  if (!unit) return null;
  const lesson = unit.lessons.find((l) => l.id === lessonId);
  if (!lesson) return null;
  const all = flattenLessons(guide);
  const index = all.findIndex((l) => l.id === lessonId && l.unitId === unitId);
  return { guide, unit, lesson, all, index };
}

export const practiceScenarios = [
  {
    id: "email",
    title: "Salva un mail incómodo",
    xp: 20,
    prompt: "Un cliente espera un pedido que se atrasó 3 días. Escribe un mensaje honesto, corto y con nueva fecha.",
  },
  {
    id: "brief",
    title: "Una página de brief",
    xp: 25,
    prompt: "Arma un brief corto para una app de hábitos: a quién le hablas, la promesa, 3 canales y un número para medir.",
  },
  {
    id: "image",
    title: "Describe una foto de producto",
    xp: 15,
    prompt: "Describe una foto hero de unos audífonos negros sobre madera clara, luz suave, look de revista.",
  },
];

export const certificates = [
  { id: "gemini", title: "Ruta Gemini", status: "in-progress", pct: 40 },
  { id: "chatgpt", title: "Ruta ChatGPT", status: "in-progress", pct: 40 },
  { id: "midjourney", title: "Ruta Midjourney", status: "in-progress", pct: 22 },
  { id: "claude", title: "Ruta Claude", status: "in-progress", pct: 16 },
  { id: "grok", title: "Ruta Grok", status: "in-progress", pct: 0 },
  { id: "dalle", title: "Ruta DALL·E", status: "in-progress", pct: 0 },
];
