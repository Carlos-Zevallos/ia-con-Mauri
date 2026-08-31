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
  Lovable: "lovable",
  Grok: "grok",
  "DALL·E": "dalle",
  "Nano Banana": "nano",
};

function packPhoto(folder, file) {
  return {
    kind: "image",
    src: `/lessons/${folder}/${file}?v=5`,
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
    hint: hint || "Toca las fichas en ese orden.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    workspaceBrand: brand,
    simReply,
    resultImage,
  };
}

/** Lección Coursiv: teoría → quiz → práctica en workspace → cierre. */
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
}) {
  const folder = pack || BRAND_PACK[brand];
  const n = lessonIndex(folder, id);
  const hero = folder ? packPhoto(folder, `${id}.png`) : shot(scene);
  const ui = folder ? packPhoto(folder, `${id}-b.png`) : shot(scene);
  const problem = folder ? `/lessons/${folder}/q${(n % 4) + 1}.png?v=5` : undefined;

  return cap(id, title, blurb, [
    theory(title, [p(hook[0]), hook[1] ? p(hook[1]) : null, hero]),
    q
      ? quiz(q.title || "Revisa lo anterior", q.question, q.options, q.answer, q.explain, {
          image: problem,
          ...(q.extra || {}),
        })
      : null,
    theory(body.title || "Cómo se usa", [
      p(body.text),
      bullets?.length ? ul(bullets) : null,
      body.after ? p(body.after) : null,
      ui,
    ]),
    practice
      ? fill({
          brand,
          title: practice.title,
          lead: practice.lead,
          template: practice.template,
          answers: practice.answers,
          bank: practice.bank,
          slots: practice.slots,
          hint: practice.hint,
          simReply: practice.simReply,
          resultImage: practice.resultImage,
        })
      : null,
    practice?.review
      ? quiz(
          practice.review.title || "Por qué funcionó el pedido",
          practice.review.question,
          practice.review.options,
          practice.review.answer,
          practice.review.explain,
          {
            doneBanner: practice.title,
            doneLead: practice.lead,
          }
        )
      : null,
    theory("Para llevar", [
      tip(close.tip),
      close.text ? p(close.text) : null,
      close.items ? ul(close.items) : null,
    ]),
  ]);
}
