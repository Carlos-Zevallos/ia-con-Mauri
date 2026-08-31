const TIPS = {
  chatgpt: "rol + pedido + límites. Tres piezas y ya suena a humano.",
  claude: "pide que cite el fragmento. Si no puede señalarlo, no lo des por cierto.",
  gemini: "di el entregable, el modo y los datos. Gemini rellena lo que no le das.",
  deepseek: "pide pasos numerados y una revisión al final. Así cazas el error.",
  grok: "pega el error completo, el archivo y el cambio mínimo que quieres.",
  perplexity: "pregunta con fecha y lugar, y abre al menos dos fuentes.",
  dalle: "sujeto, luz y encuadre. Las letras déjalas para Canva, no para la imagen.",
  sd: "congela paleta y estilo. Cambia solo el sujeto.",
  nano: "tres variaciones del mismo concepto, no treinta.",
  jasper: "enséñale con ejemplos de tu voz, no con adjetivos sueltos.",
  midjourney: "sujeto + estilo + luz. Lo que no pongas, lo inventa.",
  canva: "el texto manda: mensaje, formato y dónde se publica.",
  kling: "habla como cámara: movimiento, duración y acción del sujeto.",
  lovable: "usuario, pantallas y la acción principal de cada una.",
  diseno: "cambia una palanca por vez: fondo, cielo o sujeto.",
};

const CLOSES = {
  chatgpt: "La próxima vez no empieces de cero: cambia nombres, fechas y el límite de palabras.",
  claude: "Úsalo cuando el texto es largo, delicado o no puedes distorsionar lo que dice el documento.",
  gemini: "Prueba el pedido en un caso real tuyo y revisa cifras, nombres y tono antes de enviarlo.",
  deepseek: "Si el resultado no trae pasos, pide de nuevo el camino. No copies un número suelto.",
  grok: "Con el error a la vista, la respuesta cabe en un mensaje. Sin eso, improvisa.",
  perplexity: "La herramienta acelera la búsqueda. Tú abres el enlace y contrastas.",
  dalle: "Cuando la escena se entiende, pasa el copy a otro lado. La imagen no escribe.",
  sd: "Guarda la receta que sí funcionó. El siguiente sujeto se monta encima.",
  nano: "Cuando el concepto se entiende, pásalo a Midjourney, DALL·E o Canva para el acabado.",
  jasper: "Cuando la voz ya suena a la tuya, reutiliza el mismo brief en el siguiente texto.",
  midjourney: "Si la escena falla, cambia una palanca: luz, encuadre o sujeto. No todo a la vez.",
  canva: "Revisa el texto en el tamaño real de publicación antes de darlo por listo.",
  kling: "Un plano claro vale más que un párrafo de atmósfera. La cámara necesita verbos.",
  lovable: "Si una pantalla no tiene acción, no es una pantalla: es decorado.",
  diseno: "El editor sirve para rescatar la foto, no para esconder un brief flojo.",
};

const PUNCH = {
  "tono-calma": "Sin ironía. Sin urgencia falsa.",
  "plantilla-semanal": "Mismo molde. Otras notas.",
  iterar: "Di qué falló. “Mejóralo” no sirve.",
  "checklist-final": "Si no lo dirías tú, no lo mandes.",
  guardar: "El kit corto se pega. El chat se pierde.",
  "una-variable": "Una palanca. Si no, no aprendes.",
  tres: "Tres tomas. Eliges una.",
  "sin-letras": "La imagen no escribe el post.",
  "iter-img": "Cambia una palanca, no el universo.",
  minimo: "Una línea. No un rewrite.",
  eli5: "Causa corta. Parche corto.",
  pasar: "El boceto no es el arte final.",
};

function splitLead(text) {
  const t = String(text || "").trim();
  const m = t.match(/^([\s\S]+?[.!?…])\s+([\s\S]+)$/);
  if (!m) return null;
  let h = m[1].trim().replace(/[.!?…]+$/, "");
  if (h.length > 92) h = `${h.slice(0, 88).trim()}…`;
  return { h, p: m[2].trim() };
}

export function story({ h, p, tip, close, extra = [] }) {
  const tipText = !tip
    ? null
    : tip.startsWith("Truco Mauri")
      ? tip
      : `Truco Mauri: ${tip}`;
  return [
    h ? { kind: "h", text: h } : null,
    p ? { kind: "p", text: p } : null,
    tipText ? { kind: "callout", text: tipText } : null,
    ...extra,
    close ? { kind: "p", text: close } : null,
  ].filter(Boolean);
}

export function told(guideId, { h, p, extra = [], close }) {
  return story({
    h,
    p,
    extra,
    tip: TIPS[guideId] || TIPS.chatgpt,
    close: close || CLOSES[guideId] || CLOSES.chatgpt,
  });
}

/** Completa lecciones de contenido al formato: ilustración, encabezado, texto, Truco Mauri y cierre. */
export function padContentBlocks(guideId, lesson) {
  if (guideId === "gemini") {
    return Array.isArray(lesson.blocks) ? lesson.blocks : [];
  }

  const blocks = Array.isArray(lesson.blocks) ? lesson.blocks.map((b) => ({ ...b })) : [];
  const images = blocks.filter((b) => b.kind === "image");
  const rest = blocks.filter((b) => b.kind !== "image");

  const hasH = rest.some((b) => b.kind === "h");
  const hasCallout = rest.some((b) => b.kind === "callout");
  const firstP = rest.find((b) => b.kind === "p");

  if (!hasH) {
    const split = firstP ? splitLead(firstP.text) : null;
    if (split) {
      rest.unshift({ kind: "h", text: split.h });
      firstP.text = split.p;
    } else {
      rest.unshift({
        kind: "h",
        text: PUNCH[lesson.id] || lesson.title,
      });
    }
  }

  if (!hasCallout) {
    const callout = {
      kind: "callout",
      text: `Truco Mauri: ${TIPS[guideId] || TIPS.chatgpt}`,
    };
    const pIdx = rest.findIndex((b) => b.kind === "p");
    rest.splice(pIdx === -1 ? rest.length : pIdx + 1, 0, callout);
  } else {
    const box = rest.find((b) => b.kind === "callout");
    if (box?.text && !/^Truco Mauri/i.test(box.text)) {
      box.text = `Truco Mauri: ${box.text.replace(/^Firma Mauri:\s*/i, "")}`;
    }
  }

  const out = [...images, ...rest];
  const closeText = CLOSES[guideId] || CLOSES.chatgpt;
  const pCount = out.filter((b) => b.kind === "p").length;
  const alreadyClose = out.some((b) => b.kind === "p" && b.text === closeText);
  if (pCount < 2 && !alreadyClose) {
    out.push({ kind: "p", text: closeText });
  }
  return out;
}
