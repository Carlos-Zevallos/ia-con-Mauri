const img = (file) => ({
  kind: "image",
  src: `/lessons/diseno/${file}?v=4`,
});

const edicionSteps = [
  {
    type: "content",
    title: "Gran foto, fondo complicado",
    blocks: [
      {
        kind: "p",
        text: "Tienes la foto de un corredor a media zancada en una calle de la ciudad. Pose dinámica, enfoque nítido y la energía ideal para una campaña de artículos deportivos: es casi perfecta. El problema es que en el fondo hay un camión de reparto estacionado, tres peatones y un letrero de construcción. ¿Cómo rescatas la imagen sin tener que repetir las fotos de toda la campaña?",
      },
      img("04.png"),
    ],
  },
  {
    type: "content",
    title: "Conoce el Editor de Midjourney",
    blocks: [
      img("03.png"),
      {
        kind: "p",
        text: "El Editor de Midjourney es una herramienta completa de edición de imágenes en el navegador. Sirve para limpiar objetos, eliminar fondos y aplicar relleno generativo.",
      },
    ],
  },
  {
    type: "content",
    title: "Qué vas a encontrar en el Editor",
    blocks: [
      { kind: "p", text: "El Editor se divide en tres áreas:" },
      {
        kind: "ul",
        items: [
          "A la izquierda: el panel de herramientas con Smart Select y Paint, que incluye los pinceles Erase y Restore.",
          "Al centro: tu lienzo de trabajo.",
          "A la derecha: el panel de resultados donde aparecen las imágenes generadas después de cada envío.",
        ],
      },
      img("03.png"),
    ],
  },
  {
    type: "content",
    title: "El campo del prompt",
    blocks: [
      img("03.png"),
      {
        kind: "p",
        text: "En la parte superior de la pantalla está el campo del prompt: ahí describes qué debe llenar cualquier área que hayas borrado o seleccionado. Cada edición sigue el mismo patrón: seleccionas o borras un área, escribes un prompt y lo envías.",
      },
    ],
  },
  {
    type: "content",
    title: "Eliminar el fondo con Paint",
    blocks: [
      {
        kind: "p",
        text: "Tienes una foto de un ciclista en la ciudad, pero hay un camión en el fondo. El primer paso es eliminar ese detalle no deseado.",
      },
      {
        kind: "p",
        text: "Paint es la herramienta ideal para esto: te permite seleccionar áreas problemáticas, como objetos que estorban o elementos del fondo que quieres reemplazar.",
      },
      img("04.png"),
    ],
  },
  {
    type: "fill",
    title: "Paso 2 — Escribir el prompt para Midjourney",
    question: "Escribe un prompt en el campo de texto en la parte superior del Editor para describir qué debe reemplazar el área borrada.",
    template: "Extiende la {blank} circundante de manera fluida hacia el área seleccionada --sin {blank}.",
    answers: ["calle de la ciudad", "vehículos o personas"],
    bank: ["calle de la ciudad", "vehículos o personas"],
    hint: "Toca las fichas. Primero el entorno, luego lo que no quieres.",
    success: "¡Increíble! Estás en el buen camino con tu enfoque.",
    workspaceBrand: "Midjourney",
    resultImage: "/lessons/results/calle.png",
  },
  {
    type: "content",
    title: "Paso 3 — Eliminar el detalle",
    blocks: [
      {
        kind: "p",
        text: "Una vez que la máscara cubra bien el camión y el prompt esté listo, haz clic en Submit Edit. Midjourney llena la región pintada para que coincida con los píxeles adyacentes y te da 4 opciones de resultado. Elige la que mejor se integre con la escena.",
      },
      img("03.png"),
    ],
  },
  {
    type: "content",
    title: "Aislar un sujeto con Smart Select",
    blocks: [
      {
        kind: "p",
        text: "El camión ya no está. Ahora Stride requiere otro resultado: un PNG transparente de un corredor para la página de un producto. Smart Select se encarga de esto: crea una máscara de selección usando puntos positivos y negativos, sin tener que pintar a mano.",
      },
      img("05.png"),
    ],
  },
  {
    type: "content",
    title: "Paso 2 — Marcar lo que vas a eliminar",
    blocks: [
      img("05.png"),
      {
        kind: "p",
        text: "Haz clic en Exclude y luego en el fondo. Estos son puntos negativos que excluyen esas áreas de la máscara.",
      },
    ],
  },
  {
    type: "content",
    title: "Reemplazar el cielo con relleno generativo",
    blocks: [
      {
        kind: "p",
        text: "El corredor está recortado y listo para integrarse en cualquier diseño.",
      },
      {
        kind: "p",
        text: "Hay un detalle más que frena la campaña de Stride en una de las imágenes: el cielo se ve plano y gris. No es la atmósfera que requiere una campaña de equipo deportivo. Aquí es donde entra el relleno generativo.",
      },
      img("05.png"),
    ],
  },
  {
    type: "fill",
    title: "Reemplazar el cielo con una escena de hora dorada",
    question: "Completa el prompt de relleno generativo.",
    template:
      "Toda la región del cielo que coincida con un {blank}. Luz cálida a nivel de la calle ya presente en la imagen --no {blank}.",
    answers: [
      "cielo dramático de la hora dorada, degradado cálido ámbar y naranja",
      "tonos grises planos, bordes duros en las nubes, superposiciones de texto",
    ],
    bank: [
      "cielo dramático de la hora dorada, degradado cálido ámbar y naranja",
      "tonos grises planos, bordes duros en las nubes, superposiciones de texto",
    ],
    hint: "Primero cómo debe verse el cielo, luego qué no quieres.",
    success: "¡Increíble! Estás en el buen camino con tu enfoque.",
    workspaceBrand: "Midjourney",
    resultImage: "/lessons/results/cielo.png",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      {
        kind: "callout",
        text: "Truco Mauri: selecciona o borra, escribe el prompt y envía. Ese es el ciclo.",
      },
      {
        kind: "ul",
        items: [
          "Paint para lo que estorba",
          "Smart Select para aislar el sujeto",
          "Relleno generativo para el cielo, no para reinventar la foto",
        ],
      },
    ],
  },
];

function simple(id, title, blurb, paragraphs, photo, close) {
  const [hero, shot] = Array.isArray(photo) ? photo : [photo, photo];
  return {
    id,
    title,
    blurb,
    type: "content",
    hasAudio: true,
    steps: [
      {
        type: "content",
        title,
        blocks: [
          { kind: "p", text: paragraphs[0] },
          img(hero),
        ],
      },
      {
        type: "content",
        title: "Cómo se usa",
        blocks: [
          paragraphs[1] ? { kind: "p", text: paragraphs[1] } : null,
          img(shot),
        ].filter(Boolean),
      },
      {
        type: "content",
        title: "Para llevar",
        last: true,
        blocks: [
          {
            kind: "callout",
            text: `Truco Mauri: ${close.tip}`,
          },
          { kind: "ul", items: close.items },
        ],
      },
    ],
  };
}

export const disenoGuide = {
  id: "diseno",
  title: "IA en el diseño",
  subtitle: "Visual y video",
  color: "#5b5fff",
  progress: 44,
  units: 2,
  minutes: 90,
  blurb: "Del moodboard a piezas listas: identidad, edición, redes y pantallas.",
  unitsList: [
    {
      id: "u1",
      title: "Moodboards con IA",
      lessons: [
        simple(
          "moodboards",
          "Moodboards con IA",
          "Junta referencias con un pedido claro.",
          [
            "Un moodboard no es un collage al azar. Pide paleta, materiales, época y 3 referencias visuales. Cambia una sola variable por ronda.",
            "Ejemplo: “Moodboard para una marca de running urbana. Paleta carbón y naranja, textura de asfalto mojado, tipografía grotesca. 6 recortes, sin logos.”",
          ],
          ["01.png", "06.png"],
          {
            tip: "cambia una sola variable por ronda.",
            items: ["Paleta, materiales y época primero", "Tres referencias, no treinta", "Sin logos ajenos en el collage"],
          }
        ),
        simple(
          "identidad",
          "Identidad visual de marca",
          "Color, tipo y un sistema que se aguanta.",
          [
            "Define 1 paleta, 2 tipos y 3 reglas (qué sí / qué no). Luego pide variaciones de un mismo símbolo, no 20 logos distintos.",
            "Si el sistema no se reconoce en un icono de app y en una lona, todavía no es identidad.",
          ],
          ["01.png", "07.png"],
          {
            tip: "el mismo símbolo en icono y en lona.",
            items: ["Una paleta, dos tipos", "Tres reglas de sí / no", "Variaciones de un símbolo, no 20 logos"],
          }
        ),
      ],
    },
    {
      id: "u2",
      title: "Diseño: del concepto a los recursos finales",
      lessons: [
        {
          id: "edicion",
          title: "Edición y mejora de imágenes",
          blurb: "Eliminar, reemplazar y mejorar elementos visuales",
          type: "content",
          hasAudio: true,
          steps: edicionSteps,
        },
        simple(
          "redes",
          "Gráficos para redes sociales con IA",
          "El mensaje manda, el formato después.",
          [
            "Antes del layout: una frase que se lee en un segundo. Luego el ratio (1:1, 4:5, 9:16).",
            "Pide 3 variaciones del mismo concepto, no 30 estilos. Eliges una y la retocas.",
          ],
          ["01.png", "08.png"],
          {
            tip: "frase primero, ratio después.",
            items: ["Un segundo de lectura", "Tres variaciones del mismo concepto", "Retocas una, no las treinta"],
          }
        ),
        simple(
          "ui",
          "Pantallas de UI",
          "Una acción por pantalla.",
          [
            "Lista usuario, pantallas y qué se toca en cada una. Luego pide el primer mock.",
            "“Hazlo más premium” no se construye. “El botón de pagar más grande y el precio arriba” sí.",
          ],
          ["01.png", "09.png"],
          {
            tip: "una acción por pantalla.",
            items: ["Usuario en una línea", "Lista de pantallas antes del mock", "El botón que importa, grande"],
          }
        ),
      ],
    },
  ],
};
