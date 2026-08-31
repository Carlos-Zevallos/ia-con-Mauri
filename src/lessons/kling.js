import { track } from "./kit.js";

const plano = track({
  id: "plano",
  title: "El plano, no “un video cool”",
  blurb: "Se puede filmar. Lo viral no.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Coursiv enseña Kling (y Omni en el mismo oficio, 4 h / 10 lecciones) como cámara, no como oráculo de Reels. “Quiero algo viral / cool / cinematic” no se filma. Un plano sí: sujeto, acción, segundos, un gesto de cámara.",
    "Kling 2.1 / Omni genera clips cortos. Si el prompt es un párrafo de atmósfera, el modelo improvisa un comercial de perfume. Tú no puedes cortar eso en CapCut.",
  ],
  body: {
    title: "Una frase que se puede encender",
    text: "Quién está, qué hace, cuánto dura, si la cámara se queda o se mueve. Luz en una palabra (ventana, neon, estudio). El adjetivo cool se queda fuera.",
  },
  bullets: [
    "Sujeto nombrado (no “una persona aesthetic”)",
    "Un verbo: camina, gira el termo, sonríe",
    "Duración y ratio",
    "Un gesto de cámara, o fijo",
  ],
  quiz: {
    question: "¿Qué describe mejor un clip para Kling?",
    options: [
      "Que se vea viral",
      "Segundos, movimiento de cámara y una acción",
      "Solo el nombre de la canción",
      "Un slogan",
    ],
    answer: 1,
    explain: "Se puede filmar. Lo viral no.",
  },
  practice: {
    title: "Completa el plano",
    lead: "Se puede filmar.",
    template: "Clip de {blank} segundos, cámara {blank}, el sujeto {blank}.",
    answers: ["5", "fija", "gira el termo"],
    slots: ["duración", "cámara", "acción"],
    resultImage: "/lessons/results/reel-producto.jpg",
    simReply: { intro: "5 s, fija, gira el termo. El baile se va a otro clip." },
    review: {
      question: "¿Por qué una acción?",
      options: ["Por tacaño", "Porque tres verbos desarman el clip", "Por el algoritmo"],
      answer: 1,
      explain: "Un clip, un verbo.",
    },
  },
  close: {
    tip: "habla como cámara: movimiento, duración y acción del sujeto.",
    items: ["Un plano", "Un verbo", "Cool no se filma"],
  },
});

const duracion = track({
  id: "duracion",
  title: "Duración y recuadro",
  blurb: "5 s no es 10. 9:16 no es 16:9. Se pide antes.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Kling te deja elegir duración (5 s, 10 s en muchos modos) y aspecto. Si no lo dices, recortas a ciegas y le cortas la cabeza al termo. Coursiv: el cajón primero, el adjetivo después.",
    "Un anuncio de 30 s no es un clip de Kling. Son varios planos de 5 s pegados en CapCut. Pedir 30 s de una sentada suele salir gelatina.",
  ],
  body: {
    title: "Un clip, un cajón",
    text: "5 s para un gesto. 10 s si la acción cabe sin relleno. 9:16 stories/Reels/TikTok. 16:9 YouTube/web. 1:1 feed. El sujeto se encuadra distinto: en 9:16 va más arriba.",
  },
  bullets: [
    "Duración del modo (5 / 10), no un “medio minuto”",
    "Ratio del canal antes de generar",
    "Sujeto a salvo del recorte",
    "30 s = varios clips, no un prompt largo",
  ],
  quiz: {
    question: "¿Cuándo pides duración y ratio?",
    options: ["Al exportar, con fe", "Antes de generar", "Nunca, Kling adivina el canal"],
    answer: 1,
    explain: "Si no, recortas a ciegas.",
  },
  practice: {
    title: "Elige el cajón",
    lead: "Un clip. Un canal.",
    template: "Genero {blank} s en {blank} para Reels. El termo va {blank} en el cuadro.",
    answers: ["5", "9:16", "más arriba"],
    slots: ["duración", "ratio", "encuadre"],
    simReply: {
      intro: "5 s, 9:16. El termo subió. En 16:9 se veía corto de piernas… no tenía.",
    },
    review: {
      question: "¿Por qué no un clip de 30 s de una sentada?",
      options: ["Por snob", "Porque se vuelve gelatina; 30 s se arman con varios planos", "Por el color"],
      answer: 1,
      explain: "Un gesto por clip. El corte vive en el editor.",
    },
  },
  close: {
    tip: "di 5 s y 9:16 antes de generar. El canal recorta.",
    items: ["Duración del modo", "Ratio del canal", "30 s se pegan, no se piden"],
  },
});

const camara = track({
  id: "camara",
  title: "Un movimiento de cámara",
  blurb: "Dolly, pan o fijo. Tres gestos a la vez se ve mareado.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Kling entiende verbos de cámara si se los das uno. Dolly in al termo. Pan izquierda. Fijo. Omni / motion control no salvan un prompt que pide zoom + órbita + tilt + handheld a la vez: sale nauseabundo.",
    "Coursiv: un gesto. Si quieres otro, es otro clip. La “cámara de cine” no es una pila de palabras de Reddit de 2024.",
  ],
  body: {
    title: "Un verbo para el rig",
    text: "Fijo para producto que gira en la mano. Dolly in para el CTA. Tracking lateral si camina. Di la velocidad (lento). No pidas “cinematic camera, epic orbit, drone, handheld, rack focus” en un renglón.",
  },
  bullets: [
    "Un gesto: dolly, pan, tilt, tracking o fijo",
    "Velocidad: lento, no un latigazo",
    "El sujeto no compite con la cámara (o se mueve él, o se mueve ella)",
    "El siguiente gesto = siguiente clip",
  ],
  quiz: {
    question: "¿Cuántos gestos de cámara por clip?",
    options: ["Todos los que quepan", "Uno", "Dolly + zoom + giro, para que se vea pro"],
    answer: 1,
    explain: "Tres a la vez se ve mareado.",
  },
  practice: {
    title: "Elige el rig",
    lead: "Un verbo.",
    template: "Cámara {blank} {blank} al termo. El sujeto {blank}. Sin órbita.",
    answers: ["dolly", "in lento", "se queda"],
    slots: ["gesto", "cómo", "sujeto"],
    resultImage: "/lessons/results/reel-producto.jpg",
    simReply: {
      intro: "Dolly in. El giro del termo se va al clip 2. El orbit sobraba.",
    },
    review: {
      question: "¿El sujeto camina y la cámara orbita en el mismo clip?",
      options: ["Sí, más dinamismo", "No: o se mueve uno o se mueve la otra", "Solo en Omni"],
      answer: 1,
      explain: "Un movimiento que leer. El resto es mareo.",
    },
  },
  close: {
    tip: "un gesto de cámara. Dolly + zoom + giro a la vez se ve mareado.",
    items: ["Un verbo de rig", "Lento", "El otro gesto, otro clip"],
  },
});

const i2v = track({
  id: "i2v",
  title: "De la imagen al clip",
  blurb: "Una foto que ya sirve. Kling la mueve. No le pidas otra película.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Image-to-video (Kling, Omni, Runway en el mismo oficio) parte de un still: el termo, la dueña, la paleta. Si la foto está sucia, el clip hereda el sucio y le suma deformación. Coursiv: eliges el frame como eliges el grid de Midjourney.",
    "El prompt de i2v dice el movimiento, no reescribe el producto. “Misma persona, dolly lento, el termo gira”. Si pides “ahora es un desierto al atardecer”, tiraste la ancla.",
  ],
  body: {
    title: "El still es el plano 0",
    text: "Foto nítida, sujeto grande, 9:16 si el clip es 9:16. Prompt: acción + cámara. Conserva ropa y objeto. Duración corta. Si el rostro se derrite, baja el motion o cambia de still.",
  },
  bullets: [
    "Still bueno (encuadre, luz, SKU)",
    "Prompt de movimiento, no de otra escena",
    "Mismo ratio foto/clip",
    "Si muta el producto, el still no era el plano",
  ],
  quiz: {
    question: "¿Qué hace el prompt en image-to-video?",
    options: [
      "Inventar un escenario nuevo",
      "Decir cómo se mueve lo que ya está en la foto",
      "Pedir 30 s de anuncio completo",
    ],
    answer: 1,
    explain: "Mueve el plano 0. No lo sustituye.",
  },
  practice: {
    title: "Anima el still",
    lead: "La foto ya era el ad.",
    template: "Parto de {blank}. Cámara {blank}. El termo {blank}. Misma ropa.",
    answers: ["la foto del termo en mesa", "fija", "gira lento"],
    slots: ["origen", "rig", "acción"],
    simReply: {
      intro: "El naranja se quedó. El desierto no se pidió: no salió.",
    },
    review: {
      question: "La cara se deforma a los 4 s. ¿Qué haces?",
      options: ["Pides “más realista”", "Acortas el clip o cambias el still; no rezas", "Subes a 10 s"],
      answer: 1,
      explain: "El still y la duración. El adjetivo realista no pega caras.",
    },
  },
  close: {
    tip: "el still es el plano. Kling lo mueve. No le pidas otra película.",
    items: ["Foto que ya sirve", "Prompt de gesto", "Mismo ratio"],
  },
});

const anclas = track({
  id: "anclas",
  title: "Anclas del sujeto",
  blurb: "Ropa, pelo, objeto. Si no, mutea entre clips.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Tres anclas concretas para que no mute entre generados: camisa naranja, pelo corto negro, termo mate en la mano. “La misma chica cool” no es un ancla. Coursiv lo repite en Omni/Kling: el corte grita si el extra de gorra aparece en el clip 2.",
    "Image-to-video hereda anclas de la foto. Text-to-video las necesita escritas, cada clip. Copia el bloque. No lo reescribas de memoria.",
  ],
  body: {
    title: "Tres cosas que no cambian",
    text: "Ropa, pelo, objeto (el SKU). Luz de la escena si es la misma toma. Las transiciones se piden aparte, no todo en un prompt. Un extra que no estaba en las anclas: fuera.",
  },
  bullets: [
    "Ropa (color + prenda)",
    "Pelo / cara en 4 palabras",
    "Objeto de marca en la mano o en mesa",
    "El bloque se copia clip a clip",
  ],
  quiz: {
    question: "¿Cómo evitas que el sujeto mute?",
    options: ["Pidiendo “igualito”", "Tres anclas concretas (ropa, pelo, objeto)", "Un filtro"],
    answer: 1,
    explain: "Anclas. “Igualito” no se filma.",
  },
  practice: {
    title: "Ancla al sujeto",
    lead: "Tres cosas que no cambian.",
    template: "Sujeto: {blank}, {blank}, {blank}. Misma luz de ventana.",
    answers: ["camisa naranja", "pelo corto negro", "termo mate en la mano"],
    slots: ["ancla 1", "ancla 2", "ancla 3"],
    simReply: { intro: "El termo se quedó. El extra de gorra no estaba en las anclas: fuera." },
    review: {
      question: "¿La transición va en el mismo prompt?",
      options: ["Sí, todo junto", "No: un clip, luego el corte", "Da igual"],
      answer: 1,
      explain: "Un problema por generación.",
    },
  },
  close: {
    tip: "un plano claro vale más que un párrafo de atmósfera.",
    items: ["Tres anclas", "Se copian", "El extra no invitado, fuera"],
  },
});

const corte = track({
  id: "corte",
  title: "Un clip, luego el corte",
  blurb: "Kling no edita el anuncio. CapCut sí. Tú pegas.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Un clip, un verbo. “La persona cocina, baila y saluda” no se sostiene. Coursiv: generas plano A, plano B, plano C. El corte, el texto en pantalla y el audio viven en CapCut, Premiere o el editor de Reels. Kling no es tu timeline.",
    "Si pides la transición “morph al siguiente look” dentro del mismo prompt, suele salir un accidente. Corta en duro. Es más limpio.",
  ],
  body: {
    title: "Storyboard de 3, no un one-shot",
    text: "Clip 1: gancho (cara o termo, 5 s). Clip 2: demo (gira el producto). Clip 3: CTA (precio / Pedir). Cada uno con anclas y un gesto. Luego pegas. 15–20 s de anuncio salen de tres clips, no de un párrafo.",
  },
  bullets: [
    "Un verbo por archivo",
    "Tres planos para un reel de 15 s",
    "Corte en el editor, no en el prompt",
    "Audio y captions después",
  ],
  quiz: {
    question: "¿Quién hace el corte?",
    options: ["Kling, si se lo pides lindo", "Tú, en el editor, con clips de un verbo", "El algoritmo de TikTok"],
    answer: 1,
    explain: "Kling filma el plano. El montaje es otro oficio.",
  },
  practice: {
    title: "Arma tres planos",
    lead: "Gancho, demo, CTA.",
    template: "Clip 1: {blank}. Clip 2: {blank}. Clip 3: {blank}. Cada uno 5 s, anclas iguales.",
    answers: ["el termo en mesa, cámara fija", "la mano lo gira, dolly in", "precio y Pedir, fijo"],
    slots: ["gancho", "demo", "cierre"],
    simReply: {
      intro: "Tres MP4. El morph no está. En CapCut el duro pega mejor.",
    },
    review: {
      question: "¿Pides el anuncio entero en un prompt?",
      options: ["Sí, para “flujo”", "No: un clip, un verbo; el corte después", "Solo en Omni"],
      answer: 1,
      explain: "El one-shot de 20 s se desarma. El storyboard no.",
    },
  },
  close: {
    tip: "un clip, un verbo. El corte vive en el editor.",
    items: ["Tres planos", "Pegas en CapCut", "Sin morph de relleno"],
  },
});

const ads = track({
  id: "ads",
  title: "El clip como anuncio",
  blurb: "Un claim, un SKU, un CTA. No un cortometraje.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Un ad de Meta o un UGC de 15 s no es “cinematic storytelling”. Es: problema o producto a los 2 s, demo, CTA. Kling entrega la imagen en movimiento. El claim (“no suda en la combi”) lo escribes tú en captions, no se lo pides al modelo como letrero en el aire.",
    "Coursiv: mismos hechos que el copy de Jasper. El clip no inventa un 2x1 que el brief no tenía.",
  ],
  body: {
    title: "Tres beats, un producto",
    text: "Beat 1: el termo en contexto (combi, mesa, mano). Beat 2: el gesto que prueba el claim. Beat 3: CTA hablado o en texto (Pedir, link). Un SKU. Si enseñas cinco productos, no hay anuncio: hay catálogo mareado.",
  },
  bullets: [
    "Un SKU, un claim",
    "El texto del precio va en caption, no generado en frame",
    "CTA al final, 2–3 s",
    "Sin beneficios que el brief no tenga",
  ],
  quiz: {
    question: "¿Qué no puede hacer el clip al “filmar” el brief?",
    options: [
      "Usar un encuadre más corto",
      "Inventar un 2x1 que el brief no tenía",
      "Cambiar de 5 s a otro clip",
    ],
    answer: 1,
    explain: "El anuncio recorta. No fabrica ofertas.",
  },
  practice: {
    title: "Brief del ad",
    lead: "Un claim. Un CTA.",
    template: "SKU: {blank}. Claim: {blank}. CTA: {blank}. Sin 2x1.",
    answers: ["termo mate 500 ml", "no suda en la combi", "Pedir"],
    slots: ["qué", "prueba", "cierre"],
    simReply: {
      intro: "Tres beats. El 2x1 no estaba: no salió. El precio se escribe en CapCut.",
    },
    review: {
      question: "¿Kling escribe el “349 MXN” en el video?",
      options: ["Sí, para que se lea", "No: captions o Canva; el modelo inventa letras", "Solo en 9:16"],
      answer: 1,
      explain: "Igual que SD: el PNG/clip no escribe el post.",
    },
  },
  close: {
    tip: "un SKU, un claim, un CTA. El clip no inventa la oferta.",
    items: ["Brief primero", "Texto fuera del frame", "Tres beats"],
  },
});

const social = track({
  id: "social",
  title: "9:16 para el feed que sí usas",
  blurb: "Reels, Stories, TikTok. El recuadro manda el plano.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Si el anuncio vive en Instagram Reels o TikTok, generas 9:16. Un master 16:9 recortado a tijera le come la frente al sujeto. Coursiv: un archivo por canal. Kling Omni deja elegir el aspecto; úsalo.",
    "Safe area: caras y termo al centro-arriba. UI de Reels (botones a la derecha, caption abajo) se come los bordes. No pongas el CTA pegado al filo.",
  ],
  body: {
    title: "El canal es el lienzo",
    text: "9:16, sujeto más arriba, gesto vertical (giro en la mano, dolly in). 16:9 solo si el destino es YouTube o web. No un único clip “para todos lados”.",
  },
  bullets: [
    "9:16 si el destino es Reels/TikTok/Stories",
    "Sujeto al centro-arriba",
    "CTA lejos de los botones de la app",
    "Otro ratio = otra generación, no un crop ciego",
  ],
  quiz: {
    question: "¿Qué pides primero para un Reel?",
    options: ["Diez stickers", "9:16 y el sujeto más arriba", "Un master 16:9 “por si acaso”"],
    answer: 1,
    explain: "El cajón. Luego el plano.",
  },
  practice: {
    title: "Encuadra el Reel",
    lead: "Un lienzo.",
    template: "Genero {blank} para {blank}. El termo va {blank}, CTA lejos del filo.",
    answers: ["9:16", "Reels", "arriba en el cuadro"],
    slots: ["ratio", "canal", "encuadre"],
    simReply: {
      intro: "9:16. El CTA no se pelea con el corazón de Instagram.",
    },
    review: {
      question: "¿Reusas 16:9 en Stories?",
      options: ["Sí, es el mismo anuncio", "No: el recorte se come el sujeto; genera 9:16", "Solo si hay música"],
      answer: 1,
      explain: "El canal recorta. Tú anticipas.",
    },
  },
  close: {
    tip: "9:16 si el anuncio vive en el celular vertical.",
    items: ["Ratio del canal", "Sujeto arriba", "CTA a salvo de la UI"],
  },
});

const artefactos = track({
  id: "artefactos",
  title: "Caza artefactos",
  blurb: "Caras que se derriten, dedos, morph del SKU. El clip lindo puede estar roto.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Kling (y cualquier i2v) inventa: dientes que bailan, un tercer dedo, el termo que se vuelve vaso, texto fantasma. Coursiv cierra con ojo de editor: reproduces a 1×, luego a 0.5×. Si a la mitad muta, tiras el clip o recortas antes del accidente.",
    "Más segundos = más tiempo para que se rompa. Por eso 5 s gana a 10 si el gesto ya se leyó.",
  ],
  body: {
    title: "Dónde se rompe",
    text: "Rostro de frente en movimiento, manos cerca de cámara, logos, letras, bordes del producto. Si el claim depende de leer “500 ml” en el termo, no lo dejes al modelo: ponlo en caption.",
  },
  bullets: [
    "Cara y manos a 0.5×",
    "El SKU sigue siendo el mismo objeto",
    "Cero letras generadas",
    "Recorta antes del morph; no “arregles” con otro adjetivo",
  ],
  quiz: {
    question: "A los 4 s el termo se vuelve otro objeto. ¿Qué haces?",
    options: [
      "Lo publicas, “el motion se siente vivo”",
      "Tiras o recortas antes del morph; no pides “más coherente” a ciegas",
      "Lo alargas a 10 s para que se corrija",
    ],
    answer: 1,
    explain: "El accidente no se cura con un adverbio.",
  },
  practice: {
    title: "Pasa el clip a 0.5×",
    lead: "Tres cazas.",
    template: "Reviso {blank}, {blank} y que el {blank} no mute. Si muta, recorto.",
    answers: ["la cara", "las manos", "termo"],
    slots: ["rostro", "dedos", "SKU"],
    simReply: {
      intro: "En el segundo 4 se deformaba. Corté en 3.8. El adjetivo “coherente” no se pidió.",
    },
    review: {
      question: "¿Por qué 5 s suele fallar menos que 10?",
      options: ["Por moda", "Porque hay menos tiempo para que muten cara y SKU", "Por el bitrate"],
      answer: 1,
      explain: "Menos segundos, menos gelatina. El gesto ya se leyó.",
    },
  },
  close: {
    tip: "a 0.5× se ven los dedos. A 1× se te escapan.",
    items: ["Cara y manos", "SKU estable", "Recorta el morph"],
  },
});

const revision = track({
  id: "revision",
  title: "Revisa antes de publicar",
  blurb: "Kling no firma el anuncio. Claims, audio y recorte los valida una persona.",
  scene: "camera",
  brand: "Kling",
  hook: [
    "Coursiv cierra Omni/Kling con el mismo editor que en Jasper: factual, de marca y de canal. Un clip “bonito” puede seguir mintiendo un 2x1 o verse cortado en Reels. Tú pegas captions, música con licencia y das publicar.",
    "Checklist corta. Si una casilla falla, no sube. Da igual que el dolly haya quedado de revista.",
  ],
  body: {
    title: "Cuatro casillas de salida",
    text: "Anclas (sigue siendo la misma persona y el mismo termo). Claim (el brief, no un extra). Canal (9:16, CTA visible). Artefactos (cara, manos, letras). Audio aparte: no uses una canción que no puedes publicar.",
  },
  bullets: [
    "Anclas y SKU = el brief",
    "Sin ofertas inventadas",
    "Se lee en el celular vertical",
    "Audio y captions los pones tú",
  ],
  quiz: {
    question: "El dolly está perfecto y el precio no estaba en el brief. ¿Se publica?",
    options: ["Sí, convierte", "No: se confirma el precio o se quita del caption", "Sí, si tiene 9:16"],
    answer: 1,
    explain: "El motion no perdona un claim falso.",
  },
  practice: {
    title: "Checklist antes de subir",
    lead: "Cuatro casillas.",
    template: "Revisé {blank}, {blank} y {blank}. Si una falla, no se publica.",
    answers: ["las anclas del termo", "que no hay 2x1 inventado", "el 9:16 en el celular"],
    slots: ["sujeto", "claim", "canal"],
    simReply: {
      intro: "Anclas firmes. El 2x1 se cayó. Listo para Reels — el botón es tuyo.",
    },
    review: {
      question: "¿Kling publica solo en Instagram?",
      options: [
        "Sí, para “escalar”",
        "No: tú exportas, pones caption y das publicar",
        "Solo si Omni está en auto",
      ],
      answer: 1,
      explain: "El clip es el plano. El botón de publicar se queda en tu mano.",
    },
  },
  close: {
    tip: "cuando el plano ya se filma, reutiliza anclas y cajón. Tú sigues firmando.",
    items: ["Anclas al día", "Tres clips, un corte", "Kling acelera. No publica"],
  },
});

export const klingUnits = [
  {
    id: "u1",
    title: "El plano",
    lessons: [plano, duracion, camara, i2v, anclas],
  },
  {
    id: "u2",
    title: "De clip a anuncio",
    lessons: [corte, ads, social, artefactos, revision],
  },
];
