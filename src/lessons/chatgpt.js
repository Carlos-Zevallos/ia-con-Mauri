import { track } from "./kit.js";

const conoce = track({
  id: "conoce",
  title: "Para qué sirve un chat de IA (de verdad)",
  blurb: "No es un oráculo. Es un borrador que acelera si le das contexto.",
  scene: "desk",
  brand: "ChatGPT",
  hook: [
    "Piensa en el último mail que dejaste a medias: sabías el tono, el dato y el límite de palabras, pero te trabaste en la primera frase. Un chat de IA no “sabe” tu trabajo. Completa a partir de lo que le pegas.",
    "Si omites para quién es el mensaje, el tono o el largo, rellena con frases genéricas. En esta ruta vas a armar pedidos para mails, resúmenes e ideas que sí puedas pegar en la chamba.",
  ],
  body: {
    title: "Tres piezas que cambian el resultado",
    text: "ChatGPT predice el siguiente texto. Tú recortas el espacio de lo posible con rol, pedido y límites. Sin una de las tres, improvisa un brochure.",
  },
  bullets: [
    "Rol: quién finge ser (copy de tienda, analista, editor)",
    "Pedido: qué tiene que entregar (mail, tabla, 5 viñetas)",
    "Límites: tono, idioma, largo, lo prohibido",
  ],
  quiz: {
    question: "¿Qué le falta a este pedido? “Hazme un correo para clientes.”",
    options: [
      "Nada, está perfecto",
      "Quién habla, para quién, tono y formato",
      "El nombre del proveedor de internet",
      "Una foto de perfil",
    ],
    answer: 1,
    explain: "Sin rol, audiencia ni formato, el modelo rellena. El trío recorta el relleno.",
  },
  practice: {
    title: "Arma un mail que no suene a robot",
    lead: "Pega el contexto. ChatGPT no abre tu bandeja.",
    template: "Eres {blank}. Reescribe este mail en tono {blank}, máximo {blank} palabras, un CTA claro.",
    answers: ["copy de una tienda chica", "cercano", "80"],
    slots: ["rol", "tono", "límite"],
    simReply: {
      intro: "Aquí va un borrador listo para pegar. Revisa nombres y la fecha antes de mandarlo.",
      sections: [
        { title: "Asunto", text: "Tu pedido sigue apartado — 80 palabras, un botón." },
        { title: "Cuerpo", text: "Hola Ana, dejaste el termo mate en el carrito. Lo apartamos hasta mañana a las 12. Si quieres, termina el pago aquí. Cualquier duda, responde este mail." },
      ],
    },
    review: {
      question: "¿Qué hizo útil este pedido?",
      options: [
        "Que era corto",
        "Rol, tono y un límite de palabras claros",
        "Que usó emojis",
      ],
      answer: 1,
      explain: "Las tres piezas le quitan espacio al relleno. El adjetivo “mejor” no.",
    },
  },
  close: {
    tip: "rol + pedido + límites. Tres piezas y ya suena a humano.",
    items: [
      "Pega el borrador real, no un “escríbeme algo”",
      "Di para quién es y cómo debe sentirse",
      "Tú editas datos y voz antes de enviar",
    ],
  },
});

const modos = track({
  id: "modos",
  title: "Modos y funciones",
  blurb: "Chat, voz, búsqueda y el modelo que eliges cambian el resultado.",
  scene: "desk",
  brand: "ChatGPT",
  hook: [
    "ChatGPT no es un solo botón. Hay chat de texto, voz, búsqueda con fuentes, subida de archivos y distintos modelos. Elegir mal el modo es como mandar un WhatsApp por correo certificado: llega, pero tarde y caro.",
    "En el día a día: texto para redactar, búsqueda cuando el dato tiene que ser de este año, archivos cuando el contexto ya está en un PDF.",
  ],
  body: {
    title: "Qué modo para qué",
    text: "No cambies de modelo cada renglón. Cambia de modo cuando cambia la tarea.",
  },
  bullets: [
    "Chat: mails, recaps, ideas, reescritura",
    "Búsqueda: precios, noticias, fechas; luego abres el enlace",
    "Archivos: PDF o tabla que no quieres reescribir a mano",
    "Voz: dictar un brief cuando vas en el camión",
  ],
  quiz: {
    question: "¿Cuándo conviene la búsqueda y no el chat a ciegas?",
    options: [
      "Para un chiste interno",
      "Cuando el dato puede haber cambiado este mes",
      "Para cambiar el tono de un mail que ya tienes",
      "Nunca",
    ],
    answer: 1,
    explain: "El chat inventa con lo que aprendió. La búsqueda trae pistas; tú abres la fuente.",
  },
  practice: {
    title: "Elige modo y pedido",
    lead: "Necesitas el precio de un dominio .mx hoy, no un ensayo.",
    template: "Usa {blank}. Busca el costo de un dominio .mx en {blank} y dame {blank} con fuente.",
    answers: ["búsqueda", "2026", "una tabla de 3 registrars"],
    slots: ["modo", "año", "formato"],
    simReply: {
      intro: "Con búsqueda activa, esto es un recorte. Abre al menos dos enlaces antes de pagar.",
      sections: [
        { title: "Qué pedí", text: "Tabla corta, año explícito, fuente." },
        { title: "Qué falta", text: "Tú confirmas en el sitio del registrar. ChatGPT no cobra el dominio." },
      ],
    },
    review: {
      question: "¿Qué recortó el relleno?",
      options: ["Pedir “infórmame”", "Modo + año + formato", "Un saludo largo"],
      answer: 1,
      explain: "Modo, fecha y entregable. Sin eso, sale un párrafo de 2019.",
    },
  },
  close: {
    tip: "cambia de modo cuando cambia la tarea, no de modelo por aburrimiento.",
    items: ["Texto para redactar", "Búsqueda para datos vivos", "Archivo cuando el contexto ya existe"],
  },
});

const imagenes = track({
  id: "imagenes",
  title: "Imágenes con ChatGPT",
  blurb: "Sujeto, lugar y luz. El copy se escribe después, en otro lado.",
  scene: "camera",
  brand: "ChatGPT",
  hook: [
    "Puedes pedir una imagen desde el mismo chat. “Hazla profesional” no se dibuja. Se dibuja un vaso sobre mármol, luz de ventana a la derecha, sin letras.",
    "ChatGPT (y DALL·E dentro del chat) inventa palabras en la foto. Si el post lleva copy, ponlo en Canva, no en la imagen.",
  ],
  body: {
    title: "La escena se describe, no se adjetiva",
    text: "Sujeto, lugar, luz, encuadre y una lista de no. Una palanca por intento si sale mal.",
  },
  bullets: [
    "Qué hay en cuadro",
    "De dónde viene la luz",
    "Foto o ilustración",
    "Veta: texto, marcas de agua, manos de más",
  ],
  quiz: {
    question: "¿Qué suele arruinar más una imagen generada?",
    options: [
      "Nombrar el sujeto",
      "Dejar que aparezcan letras y pedir “ultra 8k”",
      "Decir de dónde viene la luz",
      "Usar 50 mm",
    ],
    answer: 1,
    explain: "El 8k no aporta. Las letras inventadas sí ensucian.",
  },
  practice: {
    title: "Describe la toma",
    lead: "Un producto real, no un collage de stock.",
    template: "Foto de un {blank} sobre {blank}, luz de {blank}, 50 mm, sin texto.",
    answers: ["termo mate", "mesa de pino", "ventana a la izquierda"],
    slots: ["sujeto", "lugar", "luz"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Toma lista. Si el copy va encima, ábrelo en Canva AI. La imagen no escribe." },
    review: {
      question: "¿Por qué este pedido se puede dibujar?",
      options: ["Porque dice “bonito”", "Porque nombra sujeto, lugar y luz", "Porque pide 8k"],
      answer: 1,
      explain: "Se puede imaginar. El slogan vacío no.",
    },
  },
  close: {
    tip: "sujeto + lugar + luz. Las letras déjalas para Canva.",
    items: ["Una palanca por reintento", "Veta el texto en la imagen", "El post se arma en dos piezas"],
  },
});

const projects = track({
  id: "projects",
  title: "Projects: no empieces de cero",
  blurb: "Un Project guarda archivos, instrucciones y el hilo. El chat suelto se pierde.",
  scene: "docs",
  brand: "ChatGPT",
  hook: [
    "Si cada lunes reescribes “eres mi editor y el tono es cercano”, estás pagando el mismo peaje. Projects guarda el brief, los PDFs y las instrucciones para no repetirlas.",
    "Úsalo cuando el trabajo se parece semana a semana: recaps, reportes, una marca, un cliente.",
  ],
  body: {
    title: "Qué va dentro del Project",
    text: "No es un folder mágico. Es contexto fijo + conversaciones encima. Si el PDF cambia, súbelo de nuevo.",
  },
  bullets: [
    "Instrucciones: rol, tono, formato de salida",
    "Archivos: el reporte, la guía de voz, la tabla de precios",
    "Chats: cada tarea del mes, no un hilo eterno",
  ],
  quiz: {
    question: "¿Qué NO es un Project?",
    options: [
      "Un lugar para el brief que se repite",
      "Un chat suelto que se olvida a la semana",
      "Un contenedor de PDFs de un cliente",
      "Instrucciones que no quieres pegar cada vez",
    ],
    answer: 1,
    explain: "El chat suelto no hereda el brief. El Project sí.",
  },
  practice: {
    title: "Instrucciones del Project",
    lead: "Van arriba. El caso del lunes va abajo.",
    template: "Rol: {blank}. Formato: {blank}. Nunca {blank}.",
    answers: ["editor de una pyme de comida", "tabla de decisiones / dueño / fecha", "inventes cifras"],
    slots: ["rol", "formato", "veto"],
    simReply: {
      intro: "Instrucciones guardadas. El próximo recap solo pega las notas nuevas.",
      sections: [{ title: "Qué se hereda", text: "Rol, tabla y el veto de cifras." }],
    },
    review: {
      question: "¿Dónde van las reglas?",
      options: ["Al final del chat, como nota", "En las instrucciones del Project, antes del caso", "En un emoji"],
      answer: 1,
      explain: "Si van al final, el modelo ya improvisó.",
    },
  },
  close: {
    tip: "el brief se guarda. Las notas de esta semana se pegan.",
    items: ["Un Project por cliente o ritual", "Archivos al día", "Chats cortos, no novelas"],
  },
});

const gpts = track({
  id: "gpts",
  title: "Custom GPTs: un empleado con manual",
  blurb: "Un GPT propio es un rol + archivos + lo que nunca debe hacer.",
  scene: "product",
  brand: "ChatGPT",
  hook: [
    "Un Custom GPT no es “más inteligente”. Es más obediente: siempre el mismo tono, el mismo formato, los mismos vetos. Sirve cuando otra persona del equipo también lo va a usar.",
    "Si solo lo usas tú una vez al mes, una instrucción en un Project alcanza. Si lo usa el equipo cada día, el GPT evita que cada quien invente el prompt.",
  ],
  body: {
    title: "El manual cabe en tres cajas",
    text: "Nombre claro, instrucciones duras, archivos de referencia. Sin ejemplos de tu voz, copia un tono de brochure.",
  },
  bullets: [
    "Qué hace (un trabajo, no diez)",
    "Cómo responde (tabla, mail, viñetas)",
    "Qué no hace (cifras inventadas, tono de anuncio)",
  ],
  quiz: {
    question: "¿Cuándo vale la pena un Custom GPT?",
    options: [
      "Para un chiste de una vez",
      "Cuando el mismo brief se usa todos los días y lo toca más de una persona",
      "Para reemplazar a legal",
      "Nunca, es adorno",
    ],
    answer: 1,
    explain: "Se paga el armado una vez. Se cobra en consistencia.",
  },
  practice: {
    title: "Instrucciones del GPT",
    lead: "Un solo oficio. Un formato. Un veto.",
    template: "Eres {blank}. Entregas {blank}. Nunca {blank}.",
    answers: ["el editor de recaps de la pyme", "una tabla de 4 columnas", "inventes dueños ni fechas"],
    slots: ["oficio", "formato", "veto"],
    simReply: {
      intro: "GPT listo para el equipo. Prueba con notas reales antes de compartirlo.",
      sections: [{ title: "Prueba", text: "Pega un recap de esta semana y mira si respeta el veto." }],
    },
    review: {
      question: "¿Qué evita que el GPT se vaya de tema?",
      options: ["Un nombre creativo", "Un oficio, un formato y un veto", "Pedile que sea “pro”"],
      answer: 1,
      explain: "Tres cajas. El adjetivo “pro” no es una caja.",
    },
  },
  close: {
    tip: "un GPT = un trabajo. Si hace tres, se desarma.",
    items: ["Ejemplos de tu voz dentro", "Prueba con un caso real", "Comparte cuando ya no improvisé"],
  },
});

const productividad = track({
  id: "productividad",
  title: "Productividad del día a día",
  blurb: "Listas, recaps y recordatorios. ChatGPT acelera el borrador, no la firma.",
  scene: "meeting",
  brand: "ChatGPT",
  hook: [
    "La chamba no es un ensayo. Es una lista de qué sigue, quién y cuándo. Si le pides “resumí la junta”, te suelta una novelita. Pide tabla.",
    "Automatizar el borrador está bien. Automatizar el envío sin leerte el texto no.",
  ],
  body: {
    title: "Pedidos que sí reutilizas el lunes",
    text: "Guarda 3 plantillas: recap, mail incómodo, lista del día. Cambias nombres y fechas. El molde se queda.",
  },
  bullets: [
    "Recap: decisiones, dueños, fechas, riesgos",
    "Mail: rol + tono + CTA + máximo de palabras",
    "Día: 5 tareas, 25 minutos, un bloque sin chat",
  ],
  quiz: {
    question: "Para un recap de junta, ¿qué formato ayuda más?",
    options: ["Un cuento de 900 palabras", "Decisiones, acciones y responsables", "Solo stickers", "Un script de Python"],
    answer: 1,
    explain: "El equipo quiere saber qué sigue, no prosa.",
  },
  practice: {
    title: "De notas caóticas a recap",
    lead: "Pega las notas. Pide tabla, no novelita.",
    template: "Convierte estas notas en tabla: {blank}, {blank} y {blank}. Si falta un dato, pon “por confirmar”.",
    answers: ["decisión", "dueño", "fecha"],
    slots: ["col 1", "col 2", "col 3"],
    simReply: {
      intro: "Recap en cuatro filas. Lo que no estaba en las notas quedó como “por confirmar”.",
      sections: [
        { title: "Decisión", text: "Subir el precio del combo 8% — Ana — viernes" },
        { title: "Pendiente", text: "Hablar con el proveedor — por confirmar — lunes" },
      ],
    },
    review: {
      question: "¿Por qué “por confirmar” es mejor que inventar?",
      options: ["Queda más largo", "No fabrica un dueño que no existía", "Se ve más formal"],
      answer: 1,
      explain: "Inventar un responsable es peor que un hueco honesto.",
    },
  },
  close: {
    tip: "pide tabla, no novelita. El pasillo no lee 900 palabras.",
    items: ["Tres plantillas en un archivo", "Tú pones cifras reales", "El chat no firma el mail"],
  },
});

const research = track({
  id: "research",
  title: "Investigación y análisis",
  blurb: "Acota país, año y para quién. Luego contrastas dos fuentes.",
  scene: "search",
  brand: "ChatGPT",
  hook: [
    "“Mejores prácticas de marketing” es infinito. “México, 2026, pymes de comida” se puede checar. ChatGPT con búsqueda acelera; tú abres el enlace.",
    "Si las dos fuentes se contradicen, anótalo. No elijas la más dramática.",
  ],
  body: {
    title: "La pregunta tiene recortes",
    text: "Fecha, lugar, audiencia y qué NO quieres (opinión, tutorial de 2019, un país que no es el tuyo).",
  },
  bullets: [
    "Año y país",
    "Para quién es el dato",
    "Formato: tabla, 5 hallazgos, riesgos",
    "Pide fuentes y ábrelas",
  ],
  quiz: {
    question: "¿Qué haces si el chat cita un blog sin fecha?",
    options: ["Lo tomas como ley", "Abres otra fuente y buscas fecha", "Lo retuiteas", "Le pides un poema"],
    answer: 1,
    explain: "Sin fecha, es pista, no hecho.",
  },
  practice: {
    title: "Acota la búsqueda",
    lead: "Un mercado real, no “el mundo”.",
    template: "Investiga {blank} en {blank} para {blank}. Tabla: hallazgo, fuente, riesgo.",
    answers: ["precios de menú digital", "México 2026", "pymes de comida"],
    slots: ["tema", "lugar y año", "audiencia"],
    simReply: {
      intro: "Tres hallazgos. Abre las dos URLs antes de armar el brief.",
      sections: [{ title: "Riesgo", text: "Un blog sin fecha quedó marcado como pista." }],
    },
    review: {
      question: "¿Qué recorta el ensayo infinito?",
      options: ["“Dime todo”", "Tema + lugar/año + audiencia", "Pedir que sea “exhaustivo”"],
      answer: 1,
      explain: "Tres recortes. El mundo entero no cabe en un chat.",
    },
  },
  close: {
    tip: "pregunta con fecha y lugar, y abre al menos dos fuentes.",
    items: ["La herramienta acelera", "Tú contrastas", "Lo sin fecha es pista"],
  },
});

const marketing = track({
  id: "marketing",
  title: "Contenido de marketing",
  blurb: "Canal, caracteres y un mensaje. El sticker va al final.",
  scene: "phone",
  brand: "ChatGPT",
  hook: [
    "Instagram no es un landing. Un mail no es un reel. Di el canal, el largo y si hay emoji o no. Si no, ChatGPT escribe un manifiesto.",
    "El mensaje se lee en un segundo. Luego el formato. El diseño no salva un texto flojo.",
  ],
  body: {
    title: "Un concepto, tres cortes",
    text: "Pide el mismo mensaje en feed, stories y mail. No tres ideas distintas.",
  },
  bullets: [
    "Una promesa",
    "Un canal y un largo",
    "Un CTA",
    "Tres variaciones, eliges una",
  ],
  quiz: {
    question: "¿Qué pides primero para un post?",
    options: ["Diez stickers", "El mensaje y el formato del canal", "Un degradado", "Un sello genérico"],
    answer: 1,
    explain: "Mensaje + ratio. Lo demás es adorno.",
  },
  practice: {
    title: "Un post que se lee ya",
    lead: "Misma promesa, distinto corte.",
    template: "Escribe para {blank}, máximo {blank} caracteres, {blank} emojis, un CTA.",
    answers: ["Instagram", "120", "cero"],
    slots: ["canal", "largo", "emoji"],
    simReply: {
      intro: "Tres cortes. Elige uno y no mezcles el de stories con el de mail.",
      sections: [{ title: "Feed", text: "El termo que no suda en la combi. Pídelo hoy. Link en bio." }],
    },
    review: {
      question: "¿Por qué “cero emojis” ayuda?",
      options: ["Queda más triste", "Es un límite que el modelo respeta", "Es moda"],
      answer: 1,
      explain: "Un veto claro. “Sé cool” no es un veto.",
    },
  },
  close: {
    tip: "el texto manda: mensaje, formato y dónde se publica.",
    items: ["Tres variaciones, una gana", "Revisa en el tamaño real", "No pidas 30 estilos"],
  },
});

const comunicacion = track({
  id: "comunicacion",
  title: "Comunicación que se puede mandar",
  blurb: "Mails, mensajes internos y el tono de alguien de carne.",
  scene: "desk",
  brand: "ChatGPT",
  hook: [
    "Un mail de disculpa escrito por un modelo suena a departamento de disculpas. Pega el borrador, di si es seguimiento u oferta, y cómo quieres que se sienta la otra persona.",
    "Si no cabe en una frase lo que debe lograr el mensaje, el modelo tampoco lo va a adivinar.",
  ],
  body: {
    title: "Pide palo, no palmadas",
    text: "Agrégale: “Sé directo. Marca 3 fallas y reescribe el párrafo más flojo.” Si no dices qué está mal, ChatGPT aplaude.",
  },
  bullets: [
    "Para quién es",
    "Qué debe pasar después de leerlo",
    "Tono: cercano, firme, sin urgencia falsa",
    "Largo máximo",
  ],
  quiz: {
    question: "¿Qué haces justo después de que la IA te suelte un texto?",
    options: [
      "Publicarlo sin leer",
      "Ajustarlo con tus datos y tu voz",
      "Pedir 40 versiones y tirar un dado",
      "Cambiar de herramienta cada renglón",
    ],
    answer: 1,
    explain: "La máquina acelera el borrador. Tú pones hechos, criterio y estilo.",
  },
  practice: {
    title: "Reescribe con criterio",
    lead: "Di qué falló. “Mejóralo” no es una instrucción.",
    template: "Esta versión está {blank}. Quítale {blank} y deja un {blank} al final.",
    answers: ["larga", "adverbios", "CTA"],
    slots: ["falla", "qué quitar", "cierre"],
    simReply: {
      intro: "Versión 2. 70 palabras, un botón, sin “sinceramente”.",
      sections: [{ title: "Cambio", text: "Corté el párrafo 2. El CTA quedó en una línea." }],
    },
    review: {
      question: "¿Qué convierte la segunda versión en un editor, no en un fan?",
      options: ["Pedir “hazlo viral”", "Nombrar la falla, el recorte y el CTA", "Un emoji de aplauso"],
      answer: 1,
      explain: "Criterio. El fan aplaude. El editor marca.",
    },
  },
  close: {
    tip: "si no lo dirías tú, no lo mandes.",
    items: ["Lee en voz alta", "Cifras y nombres los pones tú", "Un CTA, no tres"],
  },
});

const flujos = track({
  id: "flujos",
  title: "Flujos de varios pasos",
  blurb: "Parte, cruza, redacta, revisa. Un chat no es un pipeline si lo mezclas todo.",
  scene: "meeting",
  brand: "ChatGPT",
  hook: [
    "Pedir “hazme la campaña completa” es un deseo. Un flujo es: extrae hechos → arma mensajes → recorta al canal → revisa vetos. Cada paso con un entregable.",
    "Si mezclas investigación y copy en el mismo mensaje, las cifras se contaminan de eslogan.",
  ],
  body: {
    title: "Cuatro estaciones",
    text: "No pases a la siguiente si la anterior no tiene dueño. ChatGPT no guarda tu tablero: lo pegas tú.",
  },
  bullets: [
    "Hechos (con fuente o “por confirmar”)",
    "Mensajes (una promesa)",
    "Piezas (canal y largo)",
    "Revisión (vetos y nombres)",
  ],
  quiz: {
    question: "¿Por qué no mezclar research y copy en el mismo pedido?",
    options: [
      "Porque queda más corto",
      "Porque el eslogan se come las cifras",
      "Porque OpenAI lo prohíbe",
      "Porque se ve feo",
    ],
    answer: 1,
    explain: "Primero hechos. Después frases. Si no, el copy inventa el dato.",
  },
  practice: {
    title: "Arma el pipeline",
    lead: "Un paso, un entregable.",
    template: "Paso 1: {blank}. Paso 2: {blank}. Paso 3: {blank}. No adelantes el copy.",
    answers: ["extrae 5 hechos con fuente", "elige una promesa", "escribe el post de 120 caracteres"],
    slots: ["hechos", "promesa", "pieza"],
    simReply: {
      intro: "Pipeline listo. Corre un paso por chat si el hilo se ensucia.",
      sections: [{ title: "Regla", text: "Si un hecho no tiene fuente, no entra al post." }],
    },
    review: {
      question: "¿Qué evita el copy inventado?",
      options: ["Pedir “sé creativo”", "Separar hechos y frases", "Un modelo más caro"],
      answer: 1,
      explain: "El orden. No el precio del modelo.",
    },
  },
  close: {
    tip: "un paso, un entregable. El deseo no es un flujo.",
    items: ["Hechos primero", "Copy después", "Revisión al final, con vetos"],
  },
});

const finanzas = track({
  id: "finanzas",
  title: "Números de la casa",
  blurb: "Unidades, rangos y “por confirmar”. ChatGPT no ve tu banco.",
  scene: "desk",
  brand: "ChatGPT",
  hook: [
    "Si no pones pesos, días y porcentajes, el modelo mezcla escalas. “Ayúdame con las finanzas” no es un pedido: es una nube.",
    "Pega la tabla. Di la moneda. Di qué decisión tienes que tomar. El chat no sustituye a un contador.",
  ],
  body: {
    title: "Las reglas van antes del caso",
    text: "“No inventes cifras. Si falta un dato, escribe por confirmar.” Eso vale más que un tono elegante.",
  },
  bullets: [
    "Moneda y periodo",
    "Qué decisión sale de la tabla",
    "Veto: no inventar",
    "Formato: 5 filas, no un ensayo",
  ],
  quiz: {
    question: "¿Dónde van las reglas de “no inventes”?",
    options: ["Al final, como nota", "Al inicio, antes de la tabla", "En un sticker", "Nunca"],
    answer: 1,
    explain: "Si van al final, el modelo ya rellenó un número.",
  },
  practice: {
    title: "Tabla con unidades",
    lead: "Pesos, no “unidades mágicas”.",
    template: "Calcula en {blank}. Muestra {blank}. Si falta un dato, {blank}.",
    answers: ["pesos MXN", "pasos", "pon por confirmar"],
    slots: ["moneda", "formato", "hueco"],
    simReply: {
      intro: "Tres filas. El IVA quedó como por confirmar: no estaba en tu pegado.",
      sections: [{ title: "Decisión", text: "¿Subes el combo 8%? Falta el costo real del insumo." }],
    },
    review: {
      question: "¿Por qué “por confirmar” es parte del pedido?",
      options: ["Queda cute", "Impide que fabrique un IVA", "Es más largo"],
      answer: 1,
      explain: "El hueco honesto. El número lindo mentiroso no.",
    },
  },
  close: {
    tip: "di las unidades. Si no, mezcla escalas.",
    items: ["Pega la tabla", "Veto de cifras al inicio", "Tú firmas el número"],
  },
});

const creativo = track({
  id: "creativo",
  title: "Una idea que se puede producir",
  blurb: "Divergir con reglas. Luego elegir. Treinta estilos es ruido.",
  scene: "camera",
  brand: "ChatGPT",
  hook: [
    "“Dame ideas creativas” es un pozo. “Tres conceptos para un termo mate, público de combi, presupuesto chico, sin mascota animada” se puede filmar, escribir o diseñar.",
    "Primero cantidad con límites. Después una ficha: qué es, para quién, qué no es.",
  ],
  body: {
    title: "Tres, no treinta",
    text: "Pide 3 conceptos con la misma restricción. Eliges uno. El resto se archiva o se tira.",
  },
  bullets: [
    "Restricción (canal, presupuesto, veto)",
    "Tres conceptos",
    "Una ficha del ganador",
    "Siguiente pieza: copy o imagen, no las dos mezcladas",
  ],
  quiz: {
    question: "¿Para qué pides tres y no treinta?",
    options: ["Porque el modelo se cansa", "Para elegir uno y producirlo", "Por moda", "Porque 30 se ve pro"],
    answer: 1,
    explain: "El resto es ruido. Un concepto se produce.",
  },
  practice: {
    title: "Tres conceptos con veto",
    lead: "Misma restricción. Distinto ángulo.",
    template: "Dame {blank} conceptos para {blank}. Veto: {blank}. Ficha: qué / para quién / qué no es.",
    answers: ["3", "un termo mate en Instagram", "mascota animada y urgencia falsa"],
    slots: ["cantidad", "producto", "veto"],
    simReply: {
      intro: "Tres fichas. El 2 se puede producir esta semana.",
      sections: [
        { title: "Concepto 2", text: "El termo que no suda en la combi. Foto real, 120 caracteres, cero mascota." },
      ],
    },
    review: {
      question: "¿Qué hace producible un concepto?",
      options: ["Que sea “wow”", "Restricción, veto y una ficha clara", "Que tenga 30 variaciones"],
      answer: 1,
      explain: "Se puede hacer. El wow no se filma.",
    },
  },
  close: {
    tip: "tres variaciones del mismo concepto, no treinta estilos.",
    items: ["Reglas primero", "Eliges uno", "Luego copy o imagen, no todo junto"],
  },
});

const eventos = track({
  id: "eventos",
  title: "Planear un evento sin caos",
  blurb: "Fecha, aforo, presupuesto y dueños. No un moodboard de “experiencia inolvidable”.",
  scene: "meeting",
  brand: "ChatGPT",
  hook: [
    "Coursiv usa el evento como prueba de pedidos de varios pasos: no “arma un lanzamiento wow”. Pide agenda, checklist de compras y un mail a invitados, con números que tú pegas.",
    "Si no hay fecha ni presupuesto, inventa un rooftop que no puedes pagar. Tú pones el techo; el chat ordena.",
  ],
  body: {
    title: "Tres entregables, un solo hilo",
    text: "1) Timeline de 10 días. 2) Lista de compras con tope. 3) Mail de confirmación. Si mezclas los tres en un párrafo, no se puede asignar.",
  },
  bullets: [
    "Fecha, lugar y aforo reales",
    "Presupuesto tope en MXN",
    "Dueño por pendiente",
    "Mail con un CTA, no un manifiesto",
  ],
  quiz: {
    question: "¿Qué le pegas primero para un evento?",
    options: [
      "“Hazlo viral e inolvidable”",
      "Fecha, aforo y tope de presupuesto",
      "Un Pinterest de globos",
    ],
    answer: 1,
    explain: "Números. El wow no se agenda.",
  },
  practice: {
    title: "Encargo del lanzamiento",
    lead: "Tres cajas. Luego el mail.",
    template: "Evento el {blank}, 40 personas, tope {blank} MXN. Entrega timeline, compras y un mail con {blank}.",
    answers: ["viernes 7 pm", "8000", "un CTA de confirmar"],
    slots: ["cuándo", "presupuesto", "mail"],
    simReply: {
      intro: "Timeline de 10 días. Compras bajo 8 000. El mail pide confirmar asistencia, no “únete a la magia”.",
    },
    review: {
      question: "¿Por qué no un solo ensayo de 2.000 palabras?",
      options: ["Queda feo", "El equipo no puede asignar dueños ni compras", "Por tokens"],
      answer: 1,
      explain: "Tres entregables. Un ladrillo no se reparte.",
    },
  },
  close: {
    tip: "fecha, aforo y tope. El chat ordena. Tú firmas el local.",
    items: ["Números pegados", "Tres entregables", "Un CTA en el mail"],
  },
});

export const chatgptUnits = [
  {
    id: "u1",
    title: "ChatGPT para el día a día",
    lessons: [conoce, modos, imagenes, projects, gpts, productividad],
  },
  {
    id: "u2",
    title: "Del brief a la pieza",
    lessons: [research, marketing, comunicacion, flujos, finanzas, creativo, eventos],
  },
];
