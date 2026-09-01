import { enrichSimReply } from "./fillResults.js";

export const shot = (scene) => ({ kind: "image", scene, caption: "" });
export const p = (text) => ({ kind: "p", text });
export const h = (text) => ({ kind: "h", text });
export const ul = (items) => ({ kind: "ul", items });
export const tip = (text) => ({
  kind: "callout",
  text: /^(Truco Mauri|💡)/i.test(text) ? text : `Truco Mauri: ${text}`,
});

/** Carpeta de fotos Coursiv por marca (01 hero, 02 problema, 03 captura). */
const BRAND_PACK = {
  ChatGPT: "chatgpt",
  Claude: "claude",
  DeepSeek: "deepseek",
  Perplexity: "perplexity",
  Jasper: "jasper",
  Midjourney: "midjourney",
  "Stable Diffusion": "sd",
  Kling: "kling",
  Omni: "omni",
  "Claude Excel": "claude-excel",
  "Claude: A fondo": "claude-fondo",
  Lovable: "lovable",
  Grok: "grok",
  "DALL·E": "dalle",
  "Nano Banana": "nano",
};

function packPhoto(folder, file) {
  return {
    kind: "image",
    src: `/lessons/${folder}/${file}?v=7`,
  };
}

const LESSON_ORDER = {
  chatgpt: [
    "conoce",
    "modos",
    "imagenes",
    "projects",
    "gpts",
    "productividad",
    "research",
    "marketing",
    "comunicacion",
    "flujos",
    "finanzas",
    "creativo",
    "eventos",
  ],
  claude: [
    "meet",
    "proyectos",
    "artifacts",
    "razon",
    "marcos",
    "creatividad",
    "escritura",
    "sintesis",
    "critico",
    "junto",
  ],
  deepseek: [
    "como",
    "usos",
    "etica",
    "preguntas",
    "detalle",
    "avanzado",
    "trampas",
    "mercado",
    "competidores",
    "automatizar",
  ],
  perplexity: ["conoce", "fuentes", "acotar", "colecciones", "contrastar", "mercado", "brief", "limites"],
  jasper: [
    "conoce",
    "voz",
    "knowledge",
    "estilo",
    "canvas",
    "plantillas",
    "blog",
    "canal",
    "mails",
    "campana",
    "grid",
    "revision",
    "imagen",
    "extension",
    "planes",
  ],
  midjourney: [
    "navegar",
    "primera",
    "luz",
    "tamano",
    "punto",
    "direccion",
    "afinar",
    "modos",
    "estilo",
    "personaje",
    "refs",
    "upscale",
    "publicar",
  ],
  sd: ["paleta", "vs", "prompt", "lora", "consistencia", "img2img", "inpaint", "pose", "lote", "revision"],
  kling: ["plano", "duracion", "camara", "i2v", "anclas", "corte", "ads", "social", "artefactos", "revision"],
  omni: ["conoce", "duracion", "camara", "i2v", "anclas", "corte", "ads", "social", "artefactos", "revision"],
  "claude-excel": ["conoce", "instalar", "flujo", "mapa", "formulas", "escenarios", "limites"],
  "claude-fondo": ["vs", "mapa", "cita", "contrato", "tono", "tablas", "compara", "riesgos", "flujo", "artifacts", "proyectos", "alucina", "otras"],
  lovable: ["pantallas", "pedido", "flujo", "datos", "iterar", "forms", "publicar", "limites"],
  grok: ["error", "minimo", "causa", "debug", "humor", "archivos", "actualidad", "otras"],
  dalle: ["escena", "estilo", "letras", "ratios", "editar", "variaciones", "producto", "canva"],
  nano: ["boceto", "idea", "palanca", "posts", "mockups", "pasar"],
};

function lessonIndex(folder, id) {
  const i = (LESSON_ORDER[folder] || []).indexOf(id);
  return i < 0 ? 0 : i;
}

export function cap(id, title, blurb, steps) {
  const list = steps.filter(Boolean);
  const last = list[list.length - 1];
  if (last?.type === "content") last.last = true;
  return { id, title, blurb, type: "content", hasAudio: true, steps: list };
}

export function theory(title, blocks) {
  return { type: "content", title, blocks: blocks.filter(Boolean) };
}

function withPhoto(blocks, photo) {
  const list = (blocks || []).filter(Boolean);
  if (photo && !list.some((b) => b.kind === "image" || b.kind === "video")) list.push(photo);
  return list;
}

function asImage(photo) {
  if (!photo) return null;
  if (typeof photo === "string") return { kind: "image", src: photo };
  return photo.kind ? photo : null;
}

function photoSrc(photo) {
  if (!photo) return "";
  if (typeof photo === "string") return photo.split("?")[0];
  return String(photo.src || "").split("?")[0];
}

/** Cada pantalla de teoría usa una foto distinta. No se recicla la misma. */
function uniquePhotos(hero, ui, problemImg) {
  const out = [];
  const seen = new Set();
  for (const item of [hero, ui, asImage(problemImg)]) {
    const src = photoSrc(item);
    if (!src || seen.has(src)) continue;
    seen.add(src);
    out.push(asImage(item));
  }
  return out;
}

export function quiz(title, question, options, answer, explain, extra = {}) {
  return { type: "quiz", title, question, options, answer, explain, ...extra };
}

export function multi(title, question, options, answers, explain, extra = {}) {
  return {
    type: "multiquiz",
    title,
    question,
    hint: extra.hint || "Selecciona todas las respuestas posibles",
    options,
    answers,
    explain,
    ...extra,
  };
}

export function fill({
  title,
  lead,
  template,
  answers,
  bank,
  slots,
  brand,
  simReply,
  hint,
  resultImage,
}) {
  return {
    type: "fill",
    title,
    lead,
    template,
    answers,
    bank: bank || answers,
    slots: slots || answers.map(() => "____"),
    lead: lead || "Llena los espacios en blanco para ver cómo puedes construir un prompt.",
    ...(hint ? { hint } : {}),
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    workspaceBrand: brand,
    simReply: enrichSimReply({ template, answers, slots, simReply, resultImage, title }),
    resultImage,
  };
}

/** Lección Coursiv: una idea por clic → quiz → captura → descubrimiento → tarea → cierre. */
export function coursivFlow({
  id,
  title,
  blurb,
  trophy,
  brand,
  hero,
  ui,
  problemImg,
  open = [],
  quiz1,
  meetTitle,
  meetText,
  meetList,
  pair,
  discovery,
  exampleTitle,
  exampleText,
  exampleList,
  exampleImg,
  multi: mq,
  practice,
  review,
  discovery2,
  closeItems,
}) {
  const openPs = (Array.isArray(open) ? open : [open]).filter(Boolean);
  const photos = uniquePhotos(hero, ui, problemImg);
  const lesson = cap(id, title, blurb, [
      theory(title, withPhoto(openPs.map((text) => p(text)), photos[0])),
      quiz1
        ? quiz(quiz1.title || "El verdadero reto", quiz1.question, quiz1.options, quiz1.answer, quiz1.explain, {
            image: quiz1.image || problemImg,
            ...(quiz1.extra || {}),
          })
        : null,
      meetText || meetList
        ? theory(
            meetTitle || "Conoce la herramienta",
            withPhoto(
              [meetText ? p(meetText) : null, meetList?.length ? ul(meetList) : null],
              photos[1] || null
            )
          )
        : null,
      pair
        ? quiz(pair.title || "Revisión", pair.question, pair.options, pair.answer, pair.explain, {
            pair: true,
            card: pair.card,
            success: pair.success || "¡Increíble!",
          })
        : null,
      exampleTitle || discovery || closeItems?.length
        ? theory(
            exampleTitle || "Cómo funciona en la práctica",
            withPhoto(
              [
                exampleText ? p(exampleText) : null,
                exampleList?.length ? ul(exampleList) : null,
                discovery ? tip(discovery) : null,
                closeItems?.length ? ul(closeItems) : null,
                discovery2 && discovery2 !== discovery ? tip(discovery2) : null,
                review?.after ? p(review.after) : null,
              ],
              photos[2] || null
            )
          )
        : null,
      mq
        ? multi(mq.title || "Consolida lo anterior", mq.question, mq.options, mq.answers, mq.explain, {
            hint: mq.hint,
            blocks: mq.blocks,
          })
        : null,
      practice
        ? fill({
            brand,
            title: practice.title,
            lead: practice.lead,
            template: practice.template,
            answers: practice.answers,
            bank: practice.bank,
            slots: practice.slots,
            hint: practice.hint || undefined,
            simReply: practice.simReply,
            resultImage: practice.resultImage,
          })
        : null,
      review
        ? quiz(review.title || "Por qué funcionó el pedido", review.question, review.options, review.answer, review.explain, {
            doneBanner: practice?.title,
            doneLead: practice?.lead,
          })
        : null,
  ]);
  if (trophy) lesson.trophy = true;
  return lesson;
}

function fillBlanks(template, answers = []) {
  let i = 0;
  return String(template || "").replace(/\{blank\}/g, () => answers[i++] ?? "…");
}

/** Lección Coursiv: una idea por clic. No amontones teoría, quiz y tarea en la misma pantalla. */
export function track({
  id,
  title,
  blurb,
  scene = "desk",
  brand,
  pack,
  hook,
  body,
  bullets,
  quiz: q,
  practice,
  close,
  trophy,
}) {
  const folder = pack || BRAND_PACK[brand];
  const n = lessonIndex(folder, id);
  const hero = folder ? packPhoto(folder, `${id}.png`) : shot(scene);
  const ui = folder ? packPhoto(folder, `${id}-b.png`) : shot(scene);
  const problem = folder ? `/lessons/${folder}/q${(n % 4) + 1}.png?v=7` : undefined;
  const hooks = Array.isArray(hook) ? hook : [hook];
  const list = (bullets || []).filter(Boolean);

  return coursivFlow({
    id,
    title,
    blurb,
    trophy,
    brand,
    hero,
    ui,
    problemImg: problem,
    open: hooks,
    quiz1: q,
    meetTitle: body?.title || "Conoce la herramienta",
    meetText: body?.text,
    meetList: list,
    pair: practice
      ? {
          card: {
            lead: practice.lead || "Tomando en cuenta lo anterior, decide si este pedido se puede trabajar.",
            prompt: fillBlanks(practice.template, practice.answers),
          },
          question: "¿Este pedido está listo para el workspace?",
          options: ["Sí: tiene recorte y entregable", "No: está demasiado vago"],
          answer: 0,
          explain: practice.review?.explain || "Si los huecos se pueden llenar, el pedido se ejecuta.",
        }
      : null,
    discovery: close?.tip,
    exampleTitle: "Cómo funciona en la práctica",
    exampleText: body?.after || body?.text,
    exampleList: list.slice(0, 3),
    exampleImg: ui,
    multi:
      list.length >= 2
        ? {
            question: "Para consolidar, ¿qué piezas cambian el resultado?",
            options: list.slice(0, 3),
            answers: list.slice(0, 3).map((_, i) => i),
            explain: "Las tres juntas. El adjetivo suelto no recorta nada.",
          }
        : null,
    practice,
    review: practice?.review,
    discovery2: close?.text || (close?.items?.length ? close.items.join(". ") + "." : close?.tip),
    closeItems: close?.items,
  });
}
