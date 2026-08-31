import { track } from "./kit.js";

const escena = track({
  id: "escena",
  title: "Sujeto, lugar, luz",
  blurb: "“Imagen profesional” no se dibuja. Nombra qué hay, dónde y de dónde viene la luz.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "DALL·E (hoy, la imagen de ChatGPT) no adivina tu marca. Nombra el sujeto, el lugar y la luz. “Foto profesional 8k” es un wish. “Termo mate 500 ml sobre mármol, luz de ventana a la izquierda” es una toma.",
    "Si omites el lugar, inventa un estudio genérico. Si omites la luz, aplana todo. Midjourney pide lo mismo: receta de cámara, no mood de Pinterest.",
  ],
  body: {
    title: "Se puede imaginar",
    text: "Sujeto + lugar + luz. Con esas tres, DALL·E encuadra. El slogan no entra aquí: las letras se escriben después en Canva.",
  },
  bullets: [
    "Qué hay (un objeto, no “un vibe”)",
    "Dónde está (mesa, calle, estudio)",
    "De dónde viene la luz",
    "Veto de texto desde el primer prompt",
  ],
  quiz: {
    question: "¿Qué describe mejor una imagen para DALL·E?",
    options: [
      "Ultra 8k cinematic",
      "Sujeto, lugar y luz, y veta el texto",
      "Un hashtag",
      "Solo el nombre de la marca",
    ],
    answer: 1,
    explain: "Se puede imaginar. El 8k no aporta.",
  },
  practice: {
    title: "Completa la escena",
    lead: "Tres piezas. El wow no es una de ellas.",
    template: "Un {blank} sobre {blank}, luz de {blank}, sin texto.",
    answers: ["vaso", "mármol", "ventana"],
    slots: ["sujeto", "lugar", "luz"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Cuatro tomas. Elige la de ventana. El slogan se escribe en Canva, no en el PNG." },
    review: {
      question: "¿Por qué no basta “imagen profesional”?",
      options: ["Porque suena barato", "Porque no nombra sujeto, lugar ni luz", "Porque DALL·E cobra más"],
      answer: 1,
      explain: "El adjetivo no se encuadra. La mesa sí.",
    },
  },
  close: {
    tip: "sujeto, luz y encuadre. Las letras déjalas para Canva.",
    items: ["Qué hay", "Dónde", "De dónde viene la luz"],
  },
});

const estilo = track({
  id: "estilo",
  title: "El estilo se nombra",
  blurb: "Foto 50 mm, ilustración plana, 3D de producto. Un medio. No “artsy”.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "Si no dices el medio, DALL·E promedia: medio foto, medio cartoon, cero marca. “Foto de revista, 50 mm, paleta carbón y naranja mate” se puede repetir mañana. “Estilo único y premium” no.",
    "Congela el estilo si el feed tiene que parecer de la misma casa. Cambia solo el sujeto. Stable Diffusion y Midjourney viven de esa receta; DALL·E también.",
  ],
  body: {
    title: "Un medio, una paleta",
    text: "Foto / ilustración / 3D. Tres palabras de paleta. Un veto de estilo ajeno (“no anime, no neon cyberpunk”). El producto entra y sale.",
  },
  bullets: [
    "Medio: foto, ilustración o 3D",
    "Paleta corta (2–3 colores)",
    "Lente o trazo (50 mm, línea plana)",
    "Veto de estilos que no son la marca",
  ],
  quiz: {
    question: "Para un feed coherente, ¿qué congelas?",
    options: [
      "Solo el hashtag",
      "Medio y paleta, y cambias el objeto",
      "Un filtro distinto cada día",
    ],
    answer: 1,
    explain: "La receta se queda. El producto cambia.",
  },
  practice: {
    title: "Guarda la receta",
    lead: "Misma casa. Otro objeto mañana.",
    template: "Estilo {blank}, paleta {blank}, cambia solo el {blank}.",
    answers: ["foto de revista 50mm", "carbón y naranja mate", "producto"],
    slots: ["medio", "paleta", "variable"],
    resultImage: "/lessons/results/oficina.png",
    simReply: { intro: "Receta lista. Mañana el vaso, no el termo. La casa se reconoce." },
    review: {
      question: "¿Qué no cambias cada post?",
      options: ["El sujeto", "El medio y la paleta", "Nada, cambias todo para “innovar”"],
      answer: 1,
      explain: "Si cambias la casa, no hay serie.",
    },
  },
  close: {
    tip: "nombra el medio y la paleta. “Artsy” no es un estilo.",
    items: ["Un medio", "Paleta corta", "El sujeto entra y sale"],
  },
});

const letras = track({
  id: "letras",
  title: "Nada de texto en la imagen",
  blurb: "DALL·E inventa palabras. El copy vive en Canva, no en el PNG.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "Si pides “un post con el slogan Envío 48 h”, DALL·E te dibuja letras que no se pueden leer. A veces acierta; casi nunca en tu tipografía. El copy se pega después, en Canva AI o en el anuncio.",
    "Veta desde el prompt: “sin texto, sin letras, sin logos, sin watermark”. Si igual salen, no tires la escena: edita o regenera con el mismo veto.",
  ],
  body: {
    title: "Dos piezas, un post",
    text: "La imagen ilustra el producto. El texto se escribe en el canal. Juntos en Canva. Nunca pidas que DALL·E “ya deje el titular listo”.",
  },
  bullets: [
    "Veto: sin texto, sin letras, sin logos ajenos",
    "El slogan sale de Jasper o de tu mano",
    "Canva (o el ad) monta las dos capas",
    "Si aparecen letras, no reescribas toda la escena",
  ],
  quiz: {
    question: "¿El copy va en la imagen de DALL·E?",
    options: ["Sí, para que se lea", "No: después, en Canva AI", "A veces un watermark queda bien"],
    answer: 1,
    explain: "DALL·E inventa palabras. El post se arma en dos piezas.",
  },
  practice: {
    title: "Separa las capas",
    lead: "Foto sin letras. Copy en otra mesa.",
    template: "Genera {blank} {blank}. El texto {blank} se escribe en Canva.",
    answers: ["el termo", "sin letras ni logos", "Envío 48 h"],
    slots: ["sujeto", "veto", "copy"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "PNG limpio. El “Envío 48 h” se pega en Canva, en tu tipo, no en un garabato de DALL·E." },
    review: {
      question: "Salieron letras inventadas. ¿Reescribes todo el prompt?",
      options: ["Sí, de cero", "No: refuerzas el veto y editas o regeneras", "Las dejas, “se ve IA”"],
      answer: 1,
      explain: "La escena se queda. El sucio se veta.",
    },
  },
  close: {
    tip: "si el post lleva copy, ponlo después en Canva AI, no en la imagen.",
    items: ["Veto de letras", "Dos capas", "Tu tipografía, no la del modelo"],
  },
});

const ratios = track({
  id: "ratios",
  title: "El ratio es el canal",
  blurb: "Stories no es feed. Di 1:1, 4:5 o 9:16 antes de generar.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "Si no pides el tamaño, ChatGPT / DALL·E improvisan un recuadro. Luego recortas a ciegas y le cortas la tapa al termo. 1:1 feed, 4:5 retrato, 9:16 stories, 16:9 portada. Elige antes.",
    "Midjourney usa `--ar`. Aquí lo dices en español: “horizontal 16:9 para YouTube” o “vertical 9:16 para stories”. El sujeto se encuadra distinto. No es el mismo prompt con un sticker de tamaño.",
  ],
  body: {
    title: "Canal primero, luego el obturador",
    text: "El sujeto sube en 9:16. En 1:1 cabe más mesa. Si reciclas un 16:9 en stories, comes cabeza. Genera al ratio del canal o deja margen para recortar tú.",
  },
  bullets: [
    "1:1 feed",
    "4:5 retrato / Pinterest",
    "9:16 stories y Reels",
    "16:9 portada o web",
  ],
  quiz: {
    question: "¿Cuándo pides el ratio?",
    options: ["Después de enamorar te de la toma", "Antes de generar", "Nunca, Canva recorta milagros"],
    answer: 1,
    explain: "Si no, recortas a ciegas.",
  },
  practice: {
    title: "Elige el canal",
    lead: "Un ratio, un recorte.",
    template: "Misma escena en {blank} para {blank}. Sujeto {blank} para que no se corte.",
    answers: ["9:16", "stories", "más arriba en el cuadro"],
    slots: ["ratio", "canal", "encuadre"],
    resultImage: "/lessons/results/cielo.png",
    simReply: { intro: "9:16. El termo subió. En 1:1 se veía sentado en mucha mesa." },
    review: {
      question: "¿Por qué no reusar 1:1 en stories?",
      options: ["Por snob", "Porque el recorte se come el sujeto", "Por el color"],
      answer: 1,
      explain: "El canal recorta. Tú anticipas.",
    },
  },
  close: {
    tip: "di 9:16 o 1:1 antes de generar.",
    items: ["Canal = ratio", "Sujeto a salvo", "No un único archivo para todo"],
  },
});

const editar = track({
  id: "editar",
  title: "Editar, no tirar la toma",
  blurb: "Si el 80% sirve, pides el cambio. No una escena nueva.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "ChatGPT deja editar la imagen: señalas o describes qué cambia. “Quita el camión del fondo, mantén el termo y la luz” es un oficio. “Hazla otra vez más wow” es tirar el trabajo.",
    "Una palanca. Si mueves luz, sujeto y fondo, no sabes qué salvó la toma. El editor de Midjourney y el de DALL·E hacen lo mismo: parche, no campaña nueva.",
  ],
  body: {
    title: "Qué se queda, qué se va",
    text: "Lista corta. Mantén luz y encuadre. Cambia el sucio. Si la escena nunca sirvió, entonces sí regeneras — con el mismo brief, no con otro universo.",
  },
  bullets: [
    "Mantén: sujeto, luz, encuadre",
    "Cambia: un objeto, un reflejo, un color",
    "Veto de letras otra vez",
    "Si no sirvió nunca, regenera; no edites un brief flojo",
  ],
  quiz: {
    question: "¿Cuándo editas en vez de generar de cero?",
    options: [
      "Siempre, por ahorrar",
      "Cuando la toma ya sirve y un detalle estorba",
      "Nunca, DALL·E no edita",
    ],
    answer: 1,
    explain: "El editor rescata. No esconde un prompt flojo.",
  },
  practice: {
    title: "Un sucio, un parche",
    lead: "El camión estorba. El termo ya está bien.",
    template: "Mantén {blank}. Quita {blank}. No cambies {blank}.",
    answers: ["el termo y la luz de ventana", "el camión del fondo", "el encuadre ni la paleta"],
    slots: ["qué se queda", "qué se va", "qué no tocas"],
    resultImage: "/lessons/results/calle.png",
    simReply: { intro: "Fondo limpio. El termo no se regeneró entero: ganaste." },
    review: {
      question: "¿Por qué no regenerar toda la foto?",
      options: ["Por pereza", "Porque el resto ya servía", "Por los créditos"],
      answer: 1,
      explain: "El editor es un parche. El prompt es la escena.",
    },
  },
  close: {
    tip: "cambia una palanca: fondo, cielo o sujeto. No todo a la vez.",
    items: ["Qué se queda", "Un sucio", "Regenerar solo si nunca sirvió"],
  },
});

const variaciones = track({
  id: "variaciones",
  title: "Una palanca por variación",
  blurb: "“Más wow” no es una instrucción. Luz más suave, vaso más cerca: sí.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "DALL·E y ChatGPT te dan variaciones. Sirven para elegir, no para acumular 30 PNGs. Misma escena, una palanca: luz, distancia, ángulo. Eliges una. El resto es ruido.",
    "Nano Banana y Midjourney viven de lo mismo: tres candidatos, una pieza. Si te enamoras de las cuatro, no elegiste.",
  ],
  body: {
    title: "El experimento cabe en una frase",
    text: "“Misma escena, luz más suave.” “Misma escena, cámara más cerca.” Dos pedidos. No “mejor, más premium, más viral”.",
  },
  bullets: [
    "Tres variaciones, no treinta",
    "Una palanca por intento",
    "Eliges una y recién ahí editas",
    "La receta de estilo se queda quieta",
  ],
  quiz: {
    question: "¿Qué pides en una variación?",
    options: [
      "Más wow y 8k",
      "La misma escena con una palanca (luz, crop o ángulo)",
      "Otro producto, otra paleta y otra ciudad",
    ],
    answer: 1,
    explain: "Si mueves tres, no aprendes qué funcionó.",
  },
  practice: {
    title: "Varía una cosa",
    lead: "Misma receta. Otra luz.",
    template: "Misma escena, cambia solo la {blank}. Mantén {blank} y {blank}.",
    answers: ["luz", "el vaso", "el mármol"],
    slots: ["palanca", "qué se queda", "qué se queda"],
    resultImage: "/lessons/results/oficina.png",
    simReply: { intro: "Variación B: luz más suave. El vaso no se movió. Eliges esa y paras." },
    review: {
      question: "¿Por qué una palanca?",
      options: ["Por ahorrar GPU", "Para saber qué funcionó", "Por moda de 2024"],
      answer: 1,
      explain: "El experimento se lee. El caos no.",
    },
  },
  close: {
    tip: "“más wow” no es una instrucción. Una palanca por intento.",
    items: ["Tres, no treinta", "Eliges una", "Luego editas"],
  },
});

const producto = track({
  id: "producto",
  title: "Foto de producto",
  blurb: "El SKU se reconoce. Hero de catálogo, no una película.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "Una foto de producto no es un concept art. El termo se ve entero, la etiqueta se intuye, el fondo no compite. Luz de ventana o softbox. Cenital si es mesa servida; 50 mm a altura de mesa si es hero.",
    "Si DALL·E deforma el logo o inventa un cuarto botón, no lo publiques. Jasper Image Suite y Midjourney fallan igual: el SKU tiene que ser cierto. Tú contrastas con la foto real o el render del fabricante.",
  ],
  body: {
    title: "El objeto manda",
    text: "Sujeto nítido, fondo suave, sin letras. Un ángulo. Si necesitas la etiqueta legible, a veces gana una foto real recortada. DALL·E ilustra; no reemplaza al packshot del e-commerce cuando el dígito tiene que ser exacto.",
  },
  bullets: [
    "El SKU se reconoce a primera vista",
    "Un ángulo (hero o cenital), no los dos",
    "Fondo que no robe (suave, no feria)",
    "Si el logo sale mal, no se publica",
  ],
  quiz: {
    question: "¿Cuándo DALL·E no basta para el producto?",
    options: [
      "Nunca, la IA ya ganó",
      "Cuando el logo, el color o un dígito tienen que ser exactos",
      "Solo si es un termo",
    ],
    answer: 1,
    explain: "Ilustra. El packshot legal a veces es foto real.",
  },
  practice: {
    title: "Brief del packshot",
    lead: "SKU, luz, veto.",
    template: "Foto de {blank}, luz {blank}, fondo {blank}, sin letras ni logos inventados.",
    answers: ["el termo mate 500 ml entero", "de ventana a la izquierda", "suave gris cálido"],
    slots: ["SKU", "luz", "fondo"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Hero a altura de mesa. Si la tapa sale con otro color, no va al catálogo: se edita o se dispara de verdad." },
    review: {
      question: "El modelo inventó un botón extra. ¿Se publica?",
      options: ["Sí, “se ve tech”", "No: el SKU tiene que ser cierto", "Sí, si el SEO está en 90"],
      answer: 1,
      explain: "La foto de producto no es un concept. Es el objeto.",
    },
  },
  close: {
    tip: "el SKU se reconoce. Si el logo miente, no se publica.",
    items: ["Un ángulo", "Fondo suave", "Contrasta con el objeto real"],
  },
});

const canva = track({
  id: "canva",
  title: "El copy se pega en Canva",
  blurb: "DALL·E entrega la toma. Canva arma el post. Midjourney, si el arte pide más.",
  scene: "camera",
  brand: "DALL·E",
  hook: [
    "Cuando la escena se entiende, paras de generar. Exportas. En Canva AI pegas el copy, el ratio del canal y la tipografía de la marca. DALL·E no es un editor de piezas. Canva sí.",
    "Si el arte pide cine (humo, lente rara, serie de marca), te vas a Midjourney. Si es un mockup rápido, Nano Banana. El hand-off es el oficio, no “una IA para todo”.",
  ],
  body: {
    title: "Tres mesas, un post",
    text: "DALL·E = escena. Canva = layout y letras. Jasper o tú = el texto. Si mezclas las tres en un solo prompt de ChatGPT, el slogan sale mal y el layout también.",
  },
  bullets: [
    "Escena lista → exportar (sin letras)",
    "Canva: copy, logo real, ratio del canal",
    "Midjourney si el key visual pide más cine",
    "Tú revisas el tamaño real antes de publicar",
  ],
  quiz: {
    question: "La toma ya se entiende. ¿Qué sigue?",
    options: [
      "Pedir 30 variaciones más",
      "Pasar copy y logo a Canva; no seguir generando",
      "Pintar el slogan en DALL·E “para ahorrar un paso”",
    ],
    answer: 1,
    explain: "Cuando la escena se entiende, el copy se va a otra mesa.",
  },
  practice: {
    title: "Arma el hand-off",
    lead: "Tres cajones. Un post.",
    template: "La toma sale de {blank}. El texto se escribe en {blank}. El slogan lo pongo en {blank}, no en el PNG.",
    answers: ["DALL·E", "Jasper o a mano", "Canva"],
    slots: ["escena", "copy", "layout"],
    simReply: {
      intro: "PNG limpio + “Envío 48 h” en Canva, tipo de la marca. Stories 9:16. No volviste a DALL·E a pedirle letras.",
    },
    review: {
      question: "¿DALL·E reemplaza a Canva?",
      options: [
        "Sí, ChatGPT ya hace posts",
        "No: genera la escena; Canva arma la pieza del canal",
        "Solo los lunes",
      ],
      answer: 1,
      explain: "Oficio. La imagen no escribe. El layout no encuadra la luz.",
    },
  },
  close: {
    tip: "cuando la escena se entiende, pasa el copy a otro lado. La imagen no escribe.",
    items: ["Exportar limpio", "Letras en Canva", "Midjourney solo si el arte lo pide"],
  },
});

export const dalleUnits = [
  {
    id: "u1",
    title: "La escena",
    lessons: [escena, estilo, letras, ratios],
  },
  {
    id: "u2",
    title: "Editar y entregar",
    lessons: [editar, variaciones, producto, canva],
  },
];
