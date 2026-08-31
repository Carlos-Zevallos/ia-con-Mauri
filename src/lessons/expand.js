import { padContentBlocks, told } from "./storyPad.js";
import { grokUnits } from "./grok.js";
import { dalleUnits } from "./dalle.js";
import { nanoUnits } from "./nano.js";

function lesson(id, title, scene, blocks) {
  return {
    id,
    title,
    type: "content",
    hasAudio: true,
    blocks: [{ kind: "image", scene, caption: title }, ...blocks],
  };
}

function cap(guideId, id, title, scene, h, p, extra) {
  return lesson(id, title, scene, told(guideId, { h, p, extra }));
}

function quiz(id, title, question, options, answer, explain) {
  return { id, title, type: "quiz", hasAudio: false, question, options, answer, explain };
}

function fill(id, title, template, answers, hint) {
  return {
    id,
    title,
    type: "fill",
    hasAudio: false,
    template,
    answers,
    bank: answers,
    hint,
  };
}

export const extraByGuide = {
  chatgpt: {
    u1: [
      lesson("contexto-largo", "Dale contexto, no adivina", "desk", [
        { kind: "h", text: "Tres datos que cambian el resultado" },
        { kind: "p", text: "Quién eres, para quién es el texto y qué no debe incluir. ChatGPT rellena huecos; si no se los das, inventa un tono de brochure." },
        { kind: "callout", text: "Truco Mauri: pega el borrador real. Un “escríbeme un mail” suelto casi nunca sirve." },
        { kind: "p", text: "Si hay cifras, nombres o plazos, mételos. La IA no abre tu bandeja." },
      ]),
      quiz(
        "quiz-contexto",
        "Mini prueba: contexto",
        "¿Qué suele arreglar más un mail genérico?",
        ["Pedir “hazlo viral”", "Pegar el borrador, el destinatario y el límite de palabras", "Cambiar de modelo cada renglón", "Añadir diez emojis"],
        1,
        "Hechos y límites recortan el relleno. El adjetivo “mejor” no."
      ),
    ],
    u2: [
      lesson(
        "plantilla-semanal",
        "Una plantilla para cada lunes",
        "meeting",
        told("chatgpt", {
          h: "Mismo molde. Otras notas.",
          p: "Guarda un pedido de recap y solo cambia las notas. Mismo formato, menos fricción.",
          extra: [
            {
              kind: "example",
              title: "Pedido fijo",
              text: "Convierte notas en tabla: decisión, dueño, fecha, riesgo. Si falta un dato, pon “por confirmar”.",
            },
          ],
        })
      ),
    ],
    u3: [
      lesson(
        "iterar",
        "Pide la segunda versión con criterio",
        "desk",
        told("chatgpt", {
          h: "Di qué falló. “Mejóralo” no sirve.",
          p: "Di qué falló: muy largo, muy formal, sin CTA. “Mejóralo” no es una instrucción.",
          extra: [{ kind: "fill-note", text: "Ejemplo: “Corta a 70 palabras y quita los adverbios.”" }],
        })
      ),
      fill(
        "fill-iterar",
        "Completa la iteración",
        "Esta versión está {blank}. Quítale {blank} y deja un {blank} al final.",
        ["larga", "adverbios", "CTA"],
        "Toca las palabras en ese orden."
      ),
    ],
    u4: [
      lesson(
        "checklist-final",
        "Checklist antes de enviar",
        "desk",
        told("chatgpt", {
          h: "Si no lo dirías tú, no lo mandes.",
          p: "Datos, nombres, tono y un leído en voz alta. Si no lo dirías tú, no lo mandes.",
        })
      ),
    ],
  },
  claude: {
    u1: [
      lesson(
        "citar",
        "Que señale el párrafo",
        "docs",
        told("claude", {
          h: "Pide anclas. Sin cita, no hay matiz.",
          p: "Cuando Claude resume un PDF, pide la cita o el encabezado. Si no puede señalarlo, no te fíes del matiz.",
        })
      ),
      lesson(
        "tono-calma",
        "Tono contenido a propósito",
        "docs",
        told("claude", {
          h: "Sin ironía. Sin urgencia falsa.",
          p: "Si el texto va a legal o a un cliente sensible, di “sin ironía, sin urgencia falsa”.",
        })
      ),
    ],
  },
  gemini: {},
  deepseek: {
    u1: [
      lesson(
        "verificar",
        "La revisión al final no es adorno",
        "code",
        told("deepseek", {
          h: "El primer borrador miente con el signo.",
          p: "Pide que recorra el resultado otra vez. Un error de signo se cuela si solo miras el primer borrador.",
        })
      ),
    ],
  },
  perplexity: {
    u1: [
      lesson(
        "abrir-fuente",
        "Abre dos enlaces, siempre",
        "search",
        told("perplexity", {
          h: "Perplexity te acerca. La fuente la abres tú.",
          p: "Fecha y lugar en la pregunta evitan respuestas de otro país o de 2019. Luego abre al menos dos enlaces.",
        })
      ),
    ],
  },
  jasper: {
    u1: [
      lesson(
        "ejemplos-voz",
        "Enséñale con ejemplos, no con adjetivos",
        "desk",
        told("jasper", {
          h: "“Sé disruptivo” no es un patrón.",
          p: "Pega lo que sí suena a ti. Jasper copia patrones. Los adjetivos sueltos no.",
        })
      ),
    ],
  },
  midjourney: {
    u1: [
      lesson(
        "negativos",
        "Di también lo que no quieres",
        "camera",
        told("midjourney", {
          h: "Si no lo vetas, suele aparecer.",
          p: "Manos de más, letras ilegibles, marcas de agua. Si no lo vetas, suele aparecer.",
        })
      ),
    ],
  },
  sd: {
    u1: [
      lesson(
        "seed-estilo",
        "Una receta, varios sujetos",
        "camera",
        told("sd", {
          h: "Misma casa. Otro objeto.",
          p: "Congela paleta y estilo. Cambia solo el objeto. Así no parece que cada post es de otra marca.",
        })
      ),
    ],
  },
  canva: {
    u1: [
      lesson(
        "jerarquia",
        "Jerarquía antes que decoración",
        "phone",
        told("canva", {
          h: "Si nadie entiende la frase, el layout no salva.",
          p: "En Canva AI el mensaje va primero. Stickers, degradados y marcos van al final.",
        })
      ),
    ],
  },
  kling: {
    u1: [
      lesson(
        "duracion",
        "Duración y movimiento",
        "camera",
        told("kling", {
          h: "“Que se vea pro” no se puede filmar.",
          p: "Di segundos, dolly o plano fijo, y la acción. Un gesto de cámara por clip.",
        })
      ),
    ],
  },
  lovable: {
    u1: [
      lesson(
        "flujo",
        "Una acción por pantalla",
        "product",
        told("lovable", {
          h: "Si hace tres cosas, el mock se desarma.",
          p: "Lista qué toca la persona en cada pantalla. Una acción. Un propósito.",
        })
      ),
    ],
  },
};

export const extraUnitsByGuide = {
  claude: [
    {
      id: "u2",
      title: "Documentos largos",
      lessons: [
        cap("claude", "mapa", "Pide un mapa, no un ladrillo", "docs", "Tesis, secciones, riesgos. No un ladrillo.", "Para un PDF de 40 páginas pide: tesis, 5 secciones, riesgos y lo que el texto no dice.", [
          { kind: "example", title: "Pedido", text: "Resume por encabezados. En cada uno: idea, cita corta y una duda abierta." },
        ]),
        fill(
          "fill-mapa",
          "Completa el mapa",
          "Dame la {blank}, cinco {blank} y una {blank} que el texto no responde.",
          ["tesis", "secciones", "pregunta"],
          "Toca las fichas en orden."
        ),
        quiz(
          "quiz-pdf",
          "Pregunta relámpago",
          "Si Claude no puede citar el párrafo, ¿qué haces?",
          ["Lo publicas igual", "Lo tratas como hipótesis y vuelves al documento", "Le pides que invente la cita", "Cambias el título"],
          1,
          "Sin ancla, es un borrador, no una fuente."
        ),
      ],
    },
    {
      id: "u3",
      title: "Tono humano",
      lessons: [
        cap("claude", "cartas", "Cartas y políticas sin frío", "docs", "Cercanía sin chiste.", "Pide cercanía sin chiste. Claude se luce cuando le dices a quién duele el mensaje."),
        fill(
          "fill-tono",
          "Completa el tono",
          "Sin {blank}, sin {blank} falsa, con un {blank} claro.",
          ["ironía", "urgencia", "siguiente paso"],
          "Usa estas tres piezas."
        ),
      ],
    },
  ],
  gemini: [],
  deepseek: [
    {
      id: "u2",
      title: "Números",
      lessons: [
        cap("deepseek", "unidades", "Di las unidades", "code", "Pesos, días, porcentaje. Si no, mezcla escalas.", "Porcentaje, pesos, días. Si no las pones, DeepSeek mezcla escalas."),
        fill(
          "fill-unidades",
          "Completa las unidades",
          "Calcula en {blank}, muestra {blank} y revisa el {blank}.",
          ["pesos", "pasos", "signo"],
          "Toca las tres fichas."
        ),
      ],
    },
    {
      id: "u3",
      title: "Reglas",
      lessons: [
        cap("deepseek", "constraints", "Las reglas van primero", "code", "Si van al final, ya improvisó.", "Pega la tabla de reglas antes del caso. Si van al final, el modelo ya improvisó."),
        quiz(
          "quiz-reglas",
          "Pregunta",
          "¿Dónde van las reglas en el pedido?",
          ["Al final, como nota", "Al inicio, antes del caso", "En un emoji", "Nunca"],
          1,
          "El caso se resuelve con las reglas a la vista."
        ),
      ],
    },
  ],
  perplexity: [
    {
      id: "u2",
      title: "Preguntas finas",
      lessons: [
        cap("perplexity", "acotar", "Acota país y año", "search", "Si no recortas, te da el mundo entero.", "“Mejores prácticas de marketing” es infinito. “México, 2026, pymes de comida” se puede checar."),
        fill(
          "fill-acota",
          "Completa el recorte",
          "Busca en {blank}, año {blank}, para {blank}.",
          ["México", "2026", "pymes"],
          "Tres recortes, tres palabras."
        ),
      ],
    },
    {
      id: "u3",
      title: "Contrastar",
      lessons: [
        cap("perplexity", "dos-fuentes", "Dos fuentes, un criterio", "search", "No elijas la más dramática.", "Si las dos fuentes se contradicen, anótalo. Contrastar es el oficio, no el adorno."),
        quiz(
          "quiz-fuentes",
          "Pregunta",
          "¿Qué haces si Perplexity cita un blog sin fecha?",
          ["Lo tomas como ley", "Abres otra fuente y buscas fecha", "Lo retuiteas", "Le pides un poema"],
          1,
          "Sin fecha, es pista, no hecho."
        ),
      ],
    },
  ],
  jasper: [
    {
      id: "u2",
      title: "Copy usable",
      lessons: [
        cap("jasper", "largo", "Largo y canal", "desk", "Instagram no es un landing.", "Di caracteres, canal y si hay emoji o no. El mismo copy no cabe en todos lados."),
        fill(
          "fill-canal",
          "Completa el canal",
          "Escribe para {blank}, máximo {blank} caracteres, {blank} emojis.",
          ["Instagram", "120", "cero"],
          "Toca las fichas."
        ),
      ],
    },
    {
      id: "u3",
      title: "Voz estable",
      lessons: [
        cap("jasper", "guia-si-no", "Una guía de sí / no", "desk", "Jasper se pega a lo que le vetas.", "Sí: “tú”, frases cortas. No: “sinergia”, “revolucionar”. Eso ya es una voz."),
        quiz(
          "quiz-voz",
          "Pregunta",
          "¿Qué enseña mejor tu voz a Jasper?",
          ["El adjetivo “cool”", "Tres textos reales y una lista de no", "Un slogan de 2012", "Solo el nombre de la marca"],
          1,
          "Ejemplos + vetos. Los adjetivos no."
        ),
      ],
    },
  ],
  midjourney: [
    {
      id: "u2",
      title: "Luz y lente",
      lessons: [
        cap("midjourney", "lente", "Habla como fotógrafo", "camera", "50 mm gana a “ultra realista”.", "Luz de ventana, contraluz, hora dorada. Es más útil que una pila de adjetivos vacíos."),
        fill(
          "fill-lente",
          "Completa la toma",
          "Lente {blank}, luz de {blank}, fondo {blank}.",
          ["50mm", "ventana", "suave"],
          "Tres piezas de cámara."
        ),
      ],
    },
    {
      id: "u3",
      title: "Series",
      lessons: [
        cap("midjourney", "serie", "Misma receta, otro producto", "camera", "Cambia el sujeto. No la casa.", "Si el feed debe verse de una casa, no cambies luz y estilo a cada rato."),
      ],
    },
    {
      id: "u4",
      title: "Cierre visual",
      lessons: [
        cap("midjourney", "veta", "Veta lo que ensucia", "camera", "Lista de no. Siempre.", "Texto en la imagen, marcas de agua, manos extra. Si no lo vetas, el modelo lo improvisa."),
        quiz(
          "quiz-veta",
          "Pregunta",
          "¿Qué suele arruinar más una toma generada?",
          ["Nombrar el sujeto", "Dejar que aparezcan letras y manos de más", "Decir de dónde viene la luz", "Usar 50 mm"],
          1,
          "Si no lo vetas, el modelo lo improvisa."
        ),
      ],
    },
  ],
  sd: [
    {
      id: "u2",
      title: "Variaciones",
      lessons: [
        cap("sd", "una-variable", "Cambia una sola cosa", "camera", "Si mueves tres palancas, no aprendes.", "Si mueves paleta, lente y sujeto a la vez, no sabes qué funcionó."),
        fill(
          "fill-variable",
          "Completa la variación",
          "Mantén {blank} y {blank}. Cambia solo el {blank}.",
          ["paleta", "luz", "sujeto"],
          "Una variable a la vez."
        ),
      ],
    },
    {
      id: "u3",
      title: "Feed",
      lessons: [
        cap("sd", "casa", "Que se sienta de la misma casa", "camera", "El feed se copia. No se memoriza.", "Guarda el pedido base en un block de notas. El siguiente post se monta encima."),
        quiz(
          "quiz-feed",
          "Pregunta",
          "Para un feed coherente, ¿qué congelas?",
          ["Solo el hashtag", "Paleta y estilo, y cambias el objeto", "Un filtro distinto cada día", "El nombre del archivo"],
          1,
          "La receta se queda. El producto cambia."
        ),
      ],
    },
  ],
  canva: [
    {
      id: "u2",
      title: "Layout",
      lessons: [
        cap("canva", "titulo-grande", "Un titular que se lee ya", "phone", "Titular, apoyo, botón. Stickers al final.", "En Canva AI pide jerarquía: titular, apoyo, botón. Los stickers van al final."),
        fill(
          "fill-jera",
          "Completa la jerarquía",
          "Primero el {blank}, luego el {blank}, al final el {blank}.",
          ["titular", "apoyo", "adorno"],
          "Orden de lectura."
        ),
      ],
    },
    {
      id: "u3",
      title: "Publicar",
      lessons: [
        cap("canva", "formato", "Formato del canal", "phone", "Stories no es feed.", "Di 9:16 o 1:1 antes de generar. Si no, recortas a ciegas."),
        quiz(
          "quiz-formato",
          "Pregunta",
          "¿Qué pides primero en Canva AI?",
          ["Diez stickers", "El mensaje y el formato del canal", "Un degradado", "Un sello genérico"],
          1,
          "Mensaje + ratio. Lo demás es adorno."
        ),
      ],
    },
  ],
  kling: [
    {
      id: "u2",
      title: "Planos",
      lessons: [
        cap("kling", "plano", "Un movimiento por clip", "camera", "Tres gestos a la vez se ve mareado.", "Dolly + zoom + giro a la vez se ve mareado. Un gesto de cámara."),
        fill(
          "fill-plano",
          "Completa el plano",
          "Clip de {blank} segundos, cámara {blank}, el sujeto {blank}.",
          ["4", "fija", "camina"],
          "Duración, cámara, acción."
        ),
      ],
    },
    {
      id: "u3",
      title: "Acción",
      lessons: [
        cap("kling", "sujeto", "El sujeto hace una cosa", "camera", "Una acción. Un clip.", "“La persona cocina, baila y saluda” no se sostiene. Elige un verbo y fílmalo."),
        quiz(
          "quiz-kling",
          "Pregunta",
          "¿Qué describe mejor un clip para Kling?",
          ["Que se vea viral", "Segundos, movimiento de cámara y una acción", "Solo el nombre de la canción", "Un slogan"],
          1,
          "Se puede filmar. Lo viral no."
        ),
      ],
    },
  ],
  lovable: [
    {
      id: "u2",
      title: "Pantallas",
      lessons: [
        cap("lovable", "lista", "Lista antes del mock", "product", "Quién entra y qué toca. Luego el mock.", "Home, detalle, pago. Quién entra y qué toca. Luego pides el primer mock a Lovable."),
        fill(
          "fill-pantallas",
          "Completa las pantallas",
          "Usuario: {blank}. Pantallas: {blank}. Acción: {blank}.",
          ["cliente", "home-pago", "comprar"],
          "Tres piezas del brief."
        ),
      ],
    },
    {
      id: "u3",
      title: "Iterar el mock",
      lessons: [
        cap("lovable", "una-pantalla", "Itera una pantalla", "product", "“Hazlo más premium” no se construye.", "“El botón de pagar más grande y el precio arriba” sí se construye. Un cambio concreto."),
        quiz(
          "quiz-lovable",
          "Pregunta",
          "¿Qué pide mejor un cambio en Lovable?",
          ["Hazlo wow", "El botón de pagar más grande y el precio arriba", "Más IA", "Otro color random"],
          1,
          "Cambio concreto. Adjetivo vacío no."
        ),
      ],
    },
  ],
  chatgpt: [
    {
      id: "u5",
      title: "Hábitos",
      lessons: [
        cap("chatgpt", "guardar", "Guarda lo que ya te funcionó", "desk", "Cinco pedidos. No el chat de marzo.", "Cinco pedidos en un archivo valen más que buscar el chat de hace un mes."),
        quiz(
          "quiz-kit",
          "Pregunta de cierre",
          "¿Qué reutilizas la próxima semana?",
          ["El chat entero sin leer", "Los 5 pedidos que ya sirvieron", "Un prompt de internet sin adaptar", "Solo el saludo"],
          1,
          "El kit corto se pega. El historial se pierde."
        ),
      ],
    },
  ],
};

export const bonusGuides = [
  {
    id: "grok",
    title: "Grok",
    subtitle: "Texto y razonamiento",
    color: "#1b1c1f",
    progress: 0,
    units: 2,
    minutes: 180,
    blurb: "Errores, scripts cortos y respuestas que quepan en un mensaje.",
    unitsList: grokUnits,
  },
  {
    id: "dalle",
    title: "DALL·E",
    subtitle: "Visual y video",
    color: "#ef4444",
    progress: 0,
    units: 2,
    minutes: 180,
    blurb: "Escenas claras: sujeto, lugar y luz. Sin slogan de 8k.",
    unitsList: dalleUnits,
  },
  {
    id: "nano",
    title: "Nano Banana",
    subtitle: "Visual y video",
    color: "#f59e0b",
    progress: 0,
    units: 2,
    minutes: 120,
    blurb: "Bocetos rápidos para posts. Primero la idea, luego el retoque.",
    unitsList: nanoUnits,
  },
];

const sceneByGuide = {
  chatgpt: "desk",
  claude: "docs",
  gemini: "phone",
  deepseek: "code",
  grok: "code",
  perplexity: "search",
  dalle: "camera",
  sd: "camera",
  nano: "phone",
  jasper: "desk",
  midjourney: "camera",
  canva: "phone",
  kling: "camera",
  lovable: "product",
  diseno: "camera",
};

function enrichLesson(lessonItem, scene, guideId) {
  if (lessonItem.steps) return { ...lessonItem };
  if (lessonItem.type !== "content") {
    return { ...lessonItem, scene: lessonItem.image || lessonItem.noScene ? undefined : scene };
  }
  const hasImage = lessonItem.blocks?.some((b) => b.kind === "image");
  const withImage = {
    ...lessonItem,
    scene,
    blocks: hasImage
      ? lessonItem.blocks
      : [{ kind: "image", scene, caption: lessonItem.title }, ...(lessonItem.blocks || [])],
  };
  return {
    ...withImage,
    blocks: padContentBlocks(guideId, withImage),
  };
}

export function enrichGuide(guide) {
  const scene = sceneByGuide[guide.id] || "desk";
  const unitsList = guide.unitsList.map((unit) => ({
    ...unit,
    lessons: unit.lessons.map((item) => enrichLesson(item, scene, guide.id)),
  }));
  const lessonCount = unitsList.reduce((n, u) => n + u.lessons.length, 0);
  return {
    ...guide,
    units: unitsList.length,
    minutes: Math.max(guide.minutes || 0, lessonCount * 6),
    unitsList,
  };
}

export function enrichAllGuides(raw) {
  return [...raw, ...bonusGuides].map(enrichGuide);
}
