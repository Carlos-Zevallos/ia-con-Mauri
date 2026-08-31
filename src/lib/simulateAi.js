const samples = {
  tema: "clases",
  segundos: "10",
  "dolly/pan/fijo": "dolly",
  objetivo: "un anuncio de una app de hábitos",
  marca: "una app de estudio",
  audiencia: "estudiantes de 18 a 25",
  escena: "un aula con luz de atardecer",
  objeto: "unos audífonos negros",
  superficie: "madera clara",
  colores: "carbón y naranja",
  fondo: "gris suave",
  sujeto: "una estudiante en un pupitre",
  "foto o ilustración": "foto cinematográfica",
  tipo: "cálida de atardecer",
  plano: "plano medio",
  mood: "concentrada y esperanzada",
  mensaje: "Empieza en 2 minutos",
  "ig/story/linkedin": "reel 9:16",
  producto: "una app de hábitos",
  mercado: "México",
  pregunta: "cómo estudian con IA",
  país: "México",
  año: "2026",
  rol: "coordinador de producto",
  claim: "estudiar con IA duplica la retención",
  lenguaje: "JavaScript",
  tarea: "ordenar una lista de tareas por fecha",
  "cercano/ejecutivo/firme": "cercano",
  "pega aquí": "pega tu texto aquí",
  "pega tu pedido": "pega tu pedido aquí",
};

export function fillPlaceholders(template) {
  return String(template).replace(/\{\{([^}]+)\}\}/g, (_, raw) => {
    const key = raw.trim();
    if (samples[key]) return samples[key];
    if (key.includes("/")) return key.split("/")[0];
    return key;
  });
}

function pick(text, re, fallback) {
  const m = String(text).match(re);
  return (m && m[1] ? m[1].trim() : fallback).replace(/[.”"]+$/, "");
}

function klingDraft(text) {
  const seconds = pick(text, /(\d+)\s*s/, "10");
  const camera = /dolly/i.test(text)
    ? "dolly in lento"
    : /pan/i.test(text)
      ? "pan horizontal suave"
      : /tilt/i.test(text)
        ? "tilt up"
        : "cámara fija con leve push-in";
  const topic = pick(text, /tema:\s*([^.\n]+)/i, pick(text, /sobre\s+([^.\n]+)/i, "una clase"));
  const subject = /clase|estudi/i.test(topic) ? "una estudiante de 20 años, pelo recto peinado, camiseta gris" : "el sujeto del brief";

  return {
    title: "Kling · clip listo para pegar",
    body: `Duración: ${seconds}s
Tema: ${topic}

Prompt para Kling
Cinematic ${seconds}s clip, ${camera}, ${subject} at a sunlit classroom desk, notebook open, dust in the air, golden-hour side light, shallow depth of field, natural motion, photoreal, no text, no watermark, no logos.

Desglose
• Cámara: ${camera}, recorre ${seconds}s sin cortes internos.
• Acción: abre el cuaderno, mira a cámara un segundo, vuelve a escribir.
• Iluminación: hora dorada a 45°, contraluz suave en el pelo.
• Corte final: hold 0.4s en el cuaderno, fade a negro.

Negativos
texto, subtítulos, logos, caras distorsionadas, temblor, morphing de manos.

Variante A — más corta (${Math.max(4, Number(seconds) - 4) || 6}s)
Mismo encuadre, solo el gesto de abrir el cuaderno. Cámara fija.

Variante B — más formal
Plano medio más amplio, pizarra al fondo desenfocada, movimiento más lento, tono institucional.`,
  };
}

function imageDraft(tool, text) {
  return {
    title: `${tool.name} · prompt de imagen`,
    body: `Pedido tomado
${text}

Prompt listo
${text.replace(/\n+/g, ", ")}. photoreal, 50mm, soft window light, clean background, no text, no watermark, no extra hands --ar 4:5

Qué no pedir
Letras dentro de la foto, logos de marca, “8k ultra hiperreal”.

Variante A — más corta
Misma escena, menos adjetivos, solo sujeto + luz + encuadre.

Variante B — más editorial
Luz más suave, negativo un poco más espacio arriba para un titular (el copy va después, no en la imagen).`,
  };
}

function textDraft(tool, text) {
  const short = text.length > 180 ? `${text.slice(0, 177)}…` : text;
  return {
    title: `${tool.name} · borrador de práctica`,
    body: `Te leí: “${short}”

Entrega
1. Resultado usable en el formato que pediste.
2. Hechos primero, adornos después.
3. Si falta un dato, lo marco como “por confirmar”.

Borrador
${outlineFrom(text)}

Variante A — más corta
Misma idea en la mitad de palabras, un solo CTA.

Variante B — más formal
Mismo contenido, sin muletillas, listo para un canal interno.`,
  };
}

function outlineFrom(text) {
  if (/guion|reel|storyboard|clip|video/i.test(text)) {
    return `0–3s gancho a cámara.\n3–15s demostración (una acción clara).\n15–20s CTA hablado + texto en pantalla.\nAudio: cama lo-fi baja, voz al frente.`;
  }
  if (/mail|correo|mensaje/i.test(text)) {
    return `Asunto: claro, sin “urgente”.\nApertura: contexto en una línea.\nCuerpo: qué pasó, qué sigue, fecha.\nCierre: un solo siguiente paso.`;
  }
  if (/tabla|csv|datos|hallazgo/i.test(text)) {
    return `Hallazgo | evidencia | siguiente paso\n1. … | cita la fuente | dueño y fecha\n2. …\nAl final: lo que no aparece en los archivos.`;
  }
  return `• Punto principal, en una frase.\n• 3 bullets accionables.\n• Un riesgo o límite.\n• CTA de una línea.`;
}

export function simulateReply(tool, userText) {
  const id = tool?.id || "";
  if (id === "kling") return klingDraft(userText);
  if (["dalle", "midjourney", "sd", "nano", "canva"].includes(id)) return imageDraft(tool, userText);
  return textDraft(tool, userText);
}
