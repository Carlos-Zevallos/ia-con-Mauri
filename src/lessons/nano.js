import { track } from "./kit.js";

const boceto = track({
  id: "boceto",
  title: "Nano Banana es boceto, no el arte final",
  blurb: "Rápido, barato, para ver si la idea se entiende. El cine se va a Midjourney.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "Nano Banana es el apodo de la imagen rápida de Gemini: un boceto en segundos, no un key visual de campaña. Sirve para probar si el concepto se lee en el celular. No para el arte que le mandas al cliente como final.",
    "Si le pides “cine, 8k, premio de fotografía”, estás en la mesa equivocada. Eso es Midjourney o DALL·E con calma. Aquí: una idea, un encuadre, tres variaciones. Eliges. Paras.",
  ],
  body: {
    title: "Para qué sí (y para qué no)",
    text: "Sí: posts, mockups, “¿esto se entiende?”. No: packshot legal, tipografía, el hero de la campaña. Cuando el concepto se entiende, cambias de IA.",
  },
  bullets: [
    "Gemini / Nano Banana = velocidad",
    "Tres encuadres del mismo concepto",
    "Eliges uno; el resto es ruido",
    "Acabado en Midjourney, DALL·E o Canva",
  ],
  quiz: {
    question: "¿Para qué usas Nano Banana en esta ruta?",
    options: [
      "El render final de un anuncio",
      "Probar si el concepto se entiende en un post",
      "Sustituir al fotógrafo siempre",
      "Escribir el slogan dentro de la foto",
    ],
    answer: 1,
    explain: "Boceto. El final se decide después.",
  },
  practice: {
    title: "Completa el boceto",
    lead: "Idea, formato, cantidad.",
    template: "Concepto: {blank}. Encuadre: {blank}. Variaciones: {blank}.",
    answers: ["post del termo en la combi", "vertical", "3"],
    slots: ["qué", "cómo", "cuántas"],
    simReply: { intro: "Tres. El 2 se entiende a 5 cm. Pásalo a Midjourney o Canva. No pidas la 31." },
    review: {
      question: "¿El cliente recibe el boceto como final?",
      options: ["Sí, para “agilidad”", "No: cuando se entiende, acabas en otra herramienta", "Si está cute"],
      answer: 1,
      explain: "Boceto. El final tiene otro oficio.",
    },
  },
  close: {
    tip: "tres variaciones del mismo concepto, no treinta.",
    items: ["Probar", "Elegir", "Acabar en otra mesa"],
  },
});

const idea = track({
  id: "idea",
  title: "La idea primero",
  blurb: "Si no puedes decirla en una frase, Nano Banana no la va a salvar.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "El modelo dibuja lo que le das. “Algo cool para el feed” no es una idea. “El termo que no suda en la combi, visto de lado, hora de ir al trabajo” sí. Una frase. Un sujeto. Un para quién.",
    "Canva y Jasper piden el mensaje antes del layout. Aquí igual: si la frase no se entiende, el PNG tampoco. Escribe la idea en el bloc. Luego pides el boceto.",
  ],
  body: {
    title: "Una frase que se puede dibujar",
    text: "Sujeto + situación + para quién. Sin eso, Gemini rellena stock. Con eso, tres encuadres sirven para decidir.",
  },
  bullets: [
    "Una frase, no un moodboard de 12 refs",
    "Quién lo va a ver (stories, ficha, pitch)",
    "Qué tiene que entenderse a 5 cm",
    "Si no cabe en una línea, recorta la idea",
  ],
  quiz: {
    question: "¿Qué va antes del prompt de Nano Banana?",
    options: [
      "Diez estilos de Pinterest",
      "Una frase que se puede dibujar",
      "El logo en 4K",
    ],
    answer: 1,
    explain: "La idea. El modelo no piensa el brief.",
  },
  practice: {
    title: "Escribe la frase",
    lead: "Se puede dibujar. Se puede leer en el bus.",
    template: "Para {blank}: {blank} en {blank}. Una frase, cero “cool”.",
    answers: ["dueñas de tienda", "el termo que no suda", "la combi a las 8"],
    slots: ["quién", "promesa", "situación"],
    simReply: { intro: "Frase lista. Ahora sí tres encuadres. El “lifestyle premium” sobraba." },
    review: {
      question: "¿Por qué no un moodboard de 12 imágenes primero?",
      options: [
        "Por flojera",
        "Porque mezclas 12 películas y el boceto no decide nada",
        "Porque Gemini no acepta refs",
      ],
      answer: 1,
      explain: "Una idea. Luego refs, si hacen falta, en Midjourney.",
    },
  },
  close: {
    tip: "si no cabe en una frase, no pidas el PNG.",
    items: ["Una línea", "Un sujeto", "Un para quién"],
  },
});

const palanca = track({
  id: "palanca",
  title: "Itera una palanca",
  blurb: "Misma idea. Cambias luz, crop o ángulo. No el universo.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "“Más wow” no es una palanca. “Más cerca”, “luz de mañana”, “cenital” sí. Nano Banana es barato de iterar: precisamente por eso se te va la mano y mezclas tres cambios. Entonces no sabes qué se entendió.",
    "DALL·E y Midjourney enseñan lo mismo. Aquí duele más porque vas rápido. Una palanca. Miras. Otra. Cuando se lee, paras.",
  ],
  body: {
    title: "El experimento cabe en una palabra",
    text: "Crop, luz o ángulo. El sujeto y la idea se quedan. Si cambias el concepto, es otro boceto, no una iteración.",
  },
  bullets: [
    "Una palanca por tanda",
    "Sujeto e idea fijos",
    "Paras cuando se entiende, no cuando “queda lindo”",
    "El wow se busca en Midjourney, no aquí",
  ],
  quiz: {
    question: "¿Qué cambias en la siguiente tanda?",
    options: [
      "Idea, paleta, ciudad y sujeto",
      "Una palanca: luz, crop o ángulo",
      "Todo, para “explorar”",
    ],
    answer: 1,
    explain: "Si mueves tres, no aprendes. Es magia, no oficio.",
  },
  practice: {
    title: "Mueve una sola",
    lead: "La idea se queda.",
    template: "Misma idea, cambia solo {blank}. Mantén {blank} y {blank}.",
    answers: ["el crop más cerca", "el termo", "la combi de fondo"],
    slots: ["palanca", "sujeto", "situación"],
    simReply: { intro: "Más cerca. Se lee el termo. La combi sigue ahí. Eliges esta y paras." },
    review: {
      question: "Ya se entiende. ¿Pides otras 20?",
      options: ["Sí, cantidad es calidad", "No: pasas a acabado o a Canva", "Solo si Gemini está “creativo”"],
      answer: 1,
      explain: "El boceto cumplió. Seguir es ruido.",
    },
  },
  close: {
    tip: "una palanca por tanda. Cuando se lee, paras.",
    items: ["Crop, luz o ángulo", "La idea se queda", "No persigas el wow aquí"],
  },
});

const posts = track({
  id: "posts",
  title: "Posts que se entienden a 5 cm",
  blurb: "Stories y feed. Un sujeto. Sin letras. El copy va en Canva.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "Un post de Nano Banana tiene que leerse en el celular, con pulgar en el andén. Un sujeto, un gesto, fondo que no robe. Si llenas de props, en 9:16 se vuelve sopa.",
    "Ratio del canal desde el pedido: vertical para stories, 1:1 para feed. Letras: cero. Canva las pone. Si el post es copy-first, empieza en Jasper, no aquí.",
  ],
  body: {
    title: "El cajón del canal",
    text: "Misma idea, dos cortes: 9:16 y 1:1. No un único cuadrado recortado a tijera. El sujeto sube en stories.",
  },
  bullets: [
    "Un sujeto, un gesto",
    "Ratio del canal (9:16 o 1:1)",
    "Sin texto en la imagen",
    "Tres tomas, una se va a Canva",
  ],
  quiz: {
    question: "¿Qué pides primero para un post?",
    options: ["Diez stickers", "Canal, sujeto y veto de letras", "Un degradado"],
    answer: 1,
    explain: "El cajón. Luego el boceto. El copy, en Canva.",
  },
  practice: {
    title: "Brief del post",
    lead: "Se lee en el andén.",
    template: "Post {blank}: {blank}, {blank}, sin letras.",
    answers: ["stories 9:16", "termo a la altura del pecho", "combi desenfocada atrás"],
    slots: ["canal", "sujeto", "fondo"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Tres verticales. El 1 se lee. Canva pone “no suda en la combi”. Nano Banana no escribió nada." },
    review: {
      question: "¿Por qué cero letras aquí?",
      options: ["Tristeza", "Porque Gemini las inventa; el copy se pega en Canva", "Moda de 2014"],
      answer: 1,
      explain: "Boceto visual. El texto es otra capa.",
    },
  },
  close: {
    tip: "un sujeto, un canal, cero letras. El copy se pega después.",
    items: ["Se lee a 5 cm", "Ratio primero", "Tres, eliges una"],
  },
});

const mockups = track({
  id: "mockups",
  title: "Mockups para decidir, no para vender",
  blurb: "Una pantalla, una caja, un stand. Para alinear al equipo. No para el catálogo.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "El mockup de Nano Banana sirve para decir “¿esto es la home?” en una reunión de 12 minutos. No para la ficha de Mercado Libre. Lovable arma pantallas que se tocan; aquí solo ves si el layout se entiende.",
    "Di qué objeto: celular, bolsa, stand. Di el ángulo. Di que el texto de la UI puede ser falso — y que no se publica como producto. Si el logo tiene que ser exacto, pegas el PNG real en Canva encima.",
  ],
  body: {
    title: "Falso a propósito",
    text: "El mockup miente en tipografía y en pixel. Está bien si todos en la sala saben que es un boceto. Mal si se va al cliente como captura real.",
  },
  bullets: [
    "Qué objeto (phone, pack, stand)",
    "Un ángulo, una luz",
    "UI o label como placeholder",
    "Logo real se monta en Canva, no se deja al modelo",
  ],
  quiz: {
    question: "¿El mockup de Nano Banana se manda al cliente como final?",
    options: [
      "Sí, “se ve moderno”",
      "No: alinea al equipo; el acabado es otra mesa",
      "Sí, si el stand se ve caro",
    ],
    answer: 1,
    explain: "Decidir. No vender una mentira de pixel.",
  },
  practice: {
    title: "Brief del mockup",
    lead: "Para la reunión. No para el catálogo.",
    template: "Mockup de {blank}, ángulo {blank}, {blank} como placeholder. No publicar.",
    answers: ["un celular con la home", "a 45 grados sobre mesa", "texto de UI"],
    slots: ["objeto", "ojo", "qué puede mentir"],
    resultImage: "/lessons/results/oficina.png",
    simReply: { intro: "Se entiende la home. El logo se pega en Canva. Esto no sale en el pitch como captura real." },
    review: {
      question: "El modelo deformó el logo. ¿Qué haces?",
      options: ["Lo dejas, “es IA”", "Montas el logo real en Canva o no lo usas", "Pides 40 más"],
      answer: 1,
      explain: "El logo no se improvisa. El mockup sí puede ser tosco.",
    },
  },
  close: {
    tip: "el mockup alinea. No vende un SKU falso.",
    items: ["Un objeto", "Placeholder a la vista", "Logo real aparte"],
  },
});

const pasar = track({
  id: "pasar",
  title: "Pásalo a Midjourney o Canva",
  blurb: "El boceto cumplió. El acabado es otro oficio.",
  scene: "phone",
  brand: "Nano Banana",
  hook: [
    "Cuando el concepto se entiende, paras Nano Banana. Si el post necesita letras y logo, Canva AI. Si el key visual pide luz de cine y serie de marca, Midjourney. Si es un packshot más limpio en el mismo chat, DALL·E.",
    "Llevarte el PNG de Gemini al cliente “porque ya se entiende” es ahorrar el paso que sí se cobra: el acabado. Coursiv insiste: herramienta por oficio.",
  ],
  body: {
    title: "Tres salidas, no un apego",
    text: "Canva = pieza del canal. Midjourney = arte. DALL·E = escena más controlada. Nano Banana no compite: abre. Tú cierras en otra mesa.",
  },
  bullets: [
    "Se entiende → paras",
    "Canva: copy, ratio, logo",
    "Midjourney: cine y serie",
    "DALL·E: escena con más control de edición",
  ],
  quiz: {
    question: "El boceto ya se lee. ¿Qué sigue?",
    options: [
      "Otras 30 en Nano Banana",
      "Canva, Midjourney o DALL·E según el oficio del final",
      "Publicar el PNG con letras inventadas",
    ],
    answer: 1,
    explain: "Cuando el concepto se entiende, cambias de mesa.",
  },
  practice: {
    title: "Elige la salida",
    lead: "El boceto ya sirvió.",
    template: "El post con copy se va a {blank}. El key visual, a {blank}. Una escena para editar, a {blank}.",
    answers: ["Canva", "Midjourney", "DALL·E"],
    slots: ["layout", "cine", "escena"],
    simReply: {
      intro: "Hand-off listo. Nano Banana no firma el anuncio. Midjourney no pone el 9:16 con tu tipo. Canva no inventa la luz de la combi.",
    },
    review: {
      question: "¿Nano Banana reemplaza a Midjourney?",
      options: [
        "Sí, Gemini ya ganó",
        "No: boceta; Midjourney (o DALL·E) acaba cuando el arte lo pide",
        "Solo en stories",
      ],
      answer: 1,
      explain: "Velocidad vs acabado. No es el mismo cajón.",
    },
  },
  close: {
    tip: "cuando el concepto se entiende, pásalo a Midjourney, DALL·E o Canva para el acabado.",
    items: ["Paras aquí", "Layout en Canva", "Cine en Midjourney"],
  },
});

export const nanoUnits = [
  {
    id: "u1",
    title: "Boceto rápido",
    lessons: [boceto, idea, palanca],
  },
  {
    id: "u2",
    title: "Del boceto al canal",
    lessons: [posts, mockups, pasar],
  },
];
