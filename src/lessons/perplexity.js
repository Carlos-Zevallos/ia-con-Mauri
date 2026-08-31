import { track } from "./kit.js";

const conoce = track({
  id: "conoce",
  title: "Perplexity no es Google ni ChatGPT",
  blurb: "Busca, resume y apunta a fuentes. Tú abres el enlace.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Google te tira diez anuncios y un wiki. ChatGPT te suelta un párrafo fluido que a veces no tiene de dónde. Perplexity se sienta en el medio: busca en la web, te arma un recorte y te enseña de qué páginas salió.",
    "No es un oráculo. Es un rastreador con cita. Si te quedas en el recorte y no abres la fuente, estás leyendo un resumen de segunda mano. En esta ruta armas preguntas que se pueden checar y briefs que el equipo sí usa.",
  ],
  body: {
    title: "Tres oficios distintos",
    text: "Google rankea páginas: tú cazas. ChatGPT completa texto: inventa si no busca. Perplexity siempre arranca de una búsqueda y te deja las pistas. Elige según el oficio, no según el logo de moda.",
  },
  bullets: [
    "Google: enlaces, ads, tú haces el recorte",
    "ChatGPT: borrador rápido; sin búsqueda, habla de memoria",
    "Perplexity: síntesis + fuentes numeradas",
    "Tú: abres, contrastas y decides qué se queda",
  ],
  quiz: {
    question: "¿Qué hace Perplexity que Google y ChatGPT no hacen igual?",
    options: [
      "Sustituye abrir cualquier página",
      "Busca, resume y te deja las fuentes a la vista",
      "Cobra el dominio .mx por ti",
      "Escribe el mail del cliente sin contexto",
    ],
    answer: 1,
    explain: "El valor es el recorte con pistas. Validar sigue siendo tuyo.",
  },
  practice: {
    title: "Elige la mesa",
    lead: "Oficio, no hábito.",
    template: "Si quiero {blank}, uso Google. Si quiero {blank}, ChatGPT. Si quiero {blank} con pista, Perplexity.",
    answers: ["cazar una página concreta", "un borrador de mail", "un recorte con fuentes"],
    slots: ["cazar", "redactar", "investigar"],
    simReply: {
      intro: "Reparto listo. Cada herramienta un oficio. No mezcles el mail con la pesquisa.",
      sections: [
        { title: "Google", text: "Entras al sitio del SAT o al registrar. Cero ensayo." },
        { title: "ChatGPT", text: "Reescribes el mail con rol, tono y límite." },
        { title: "Perplexity", text: "Tres fuentes sobre el mismo dato. Tú abres dos." },
      ],
    },
    review: {
      question: "¿Perplexity reemplaza abrir el enlace?",
      options: ["Sí, el recorte basta", "No: el recorte acerca, tú validas", "Solo los fines de semana"],
      answer: 1,
      explain: "Sin el clic, estás leyendo un recorte. Contrastar es el oficio.",
    },
  },
  close: {
    tip: "Perplexity acerca. Google caza. ChatGPT redacta. Tú eliges el oficio.",
    items: [
      "No uses Perplexity para un mail",
      "No uses ChatGPT a ciegas para un precio de hoy",
      "El clic a la fuente no es opcional",
    ],
  },
});

const fuentes = track({
  id: "fuentes",
  title: "No te quedes con el resumen",
  blurb: "Las citas son pistas. La fuente la abres tú.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Perplexity numera las fuentes al costado. Esa cifra no es un sello de verdad: es un atajo. Un blog sin fecha, un comunicado de la marca y un paper no pesan igual.",
    "Si no abres el enlace, estás leyendo un recorte. Contrastar es parte del oficio, no un adorno para quedar bien.",
  ],
  body: {
    title: "Cómo leer el panel de fuentes",
    text: "Mira quién firma, cuándo se publicó y si el medio tiene incentivo. Pide fuentes. Ábrelas. Si una no tiene fecha, es pista, no hecho.",
  },
  bullets: [
    "Quién escribe y para quién cobra",
    "Fecha a la vista; sin fecha, pista",
    "Dos fuentes mínimo, no la más dramática",
    "El recorte de Perplexity no es la página",
  ],
  quiz: {
    question: "¿Qué haces si cita un blog sin fecha?",
    options: [
      "Lo tomas como ley",
      "Abres otra fuente y buscas fecha",
      "Lo retuiteas",
      "Le pides un poema",
    ],
    answer: 1,
    explain: "Sin fecha, es pista, no hecho. Otra fuente, o lo marcas como hueco.",
  },
  practice: {
    title: "Completa la búsqueda",
    lead: "Tres recortes que se pueden checar.",
    template: "Busca con {blank} y {blank}. Después abre {blank} fuentes y anota quién firma.",
    answers: ["fecha", "lugar", "2"],
    slots: ["cuándo", "dónde", "cuántas"],
    simReply: {
      intro: "Dos URLs. Una sin fecha: la marqué como pista. La del INEGI sí tiene año.",
      sections: [
        { title: "Fuente 1", text: "Nota de 2026, medio local. Dato usable." },
        { title: "Fuente 2", text: "Blog sin fecha. Fuera del brief hasta que aparezca otra." },
      ],
    },
    review: {
      question: "¿Quién valida el dato?",
      options: ["Perplexity", "Tú, abriendo el enlace", "El becario"],
      answer: 1,
      explain: "La herramienta acelera. Tú contrastas.",
    },
  },
  close: {
    tip: "pregunta con fecha y lugar, y abre al menos dos fuentes.",
    items: ["Recortes en la pregunta", "Enlaces abiertos", "Choques a la vista"],
  },
});

const acotar = track({
  id: "acotar",
  title: "Acota país y año",
  blurb: "Si no recortas, te da el mundo entero.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "“Mejores prácticas de marketing” es infinito. “México, 2026, pymes de comida” se puede checar. Un recorte de más vale más que un párrafo de menos.",
    "Perplexity no adivina tu mercado. Si omites el país, mezcla California con Guadalajara. Si omites el año, te recicla un ensayo de 2019.",
  ],
  body: {
    title: "Tres recortes y un formato",
    text: "Tema, geografía, tiempo. Luego el entregable: tabla, no ensayo. “Sé exhaustivo” no recorta: infla.",
  },
  bullets: [
    "Tema concreto, no “todo sobre…”",
    "País o ciudad",
    "Año o rango (2025–2026)",
    "Formato: tabla, 5 viñetas, no un paper",
  ],
  quiz: {
    question: "¿Qué recorta el pozo infinito?",
    options: ["“Dime todo”", "México + 2026 + pymes", "Pedir que sea exhaustivo"],
    answer: 1,
    explain: "Tres recortes. El mundo no cabe en un recorte.",
  },
  practice: {
    title: "Completa el recorte",
    lead: "Un mercado, no el planeta.",
    template: "Busca en {blank}, año {blank}, para {blank}. Tabla corta, con fuente.",
    answers: ["México", "2026", "pymes de comida"],
    slots: ["país", "año", "audiencia"],
    simReply: {
      intro: "Tabla de 4 filas. Nada de “a nivel global”. Cada fila con enlace.",
      sections: [
        { title: "Qué pedí", text: "México, 2026, pymes de comida. Tabla, no ensayo." },
        { title: "Qué falta", text: "Tú abres dos enlaces. El recorte no paga el anuncio." },
      ],
    },
    review: {
      question: "¿Por qué el año en la pregunta?",
      options: ["Por moda", "Porque 2019 no sirve para un precio de 2026", "Por SEO"],
      answer: 1,
      explain: "El dato vive. El ensayo de 2019 no.",
    },
  },
  close: {
    tip: "si no recortas, Perplexity te da el mundo entero.",
    items: ["País", "Año", "Para quién"],
  },
});

const colecciones = track({
  id: "colecciones",
  title: "Colecciones y enfoque",
  blurb: "El cajón del caso y el tipo de fuente. No el mismo buscador para todo.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Si cada pesquisa del cliente vive en un hilo suelto, la próxima semana no encuentras nada. Una colección en Perplexity es el cajón: mismo caso, mismos hilos, mismo recorte de mercado.",
    "El enfoque cambia de dónde jala: Académico para papers, Reddit para quejas reales, YouTube para demos, Todo para el recorte general. Pedir precio de tacos en Académico es pedir un paper de antropología.",
  ],
  body: {
    title: "Cajón y filtro, no dos búsquedas iguales",
    text: "Colección = el caso se queda. Enfoque = de qué tipo de página tira. Cambia el enfoque cuando cambia el tipo de evidencia, no por aburrimiento.",
  },
  bullets: [
    "Colección: un cliente o un proyecto, no 40 temas",
    "Académico: papers y revistas, no un review de taquería",
    "Reddit: experiencia vivida; sesgo a la vista",
    "Todo: recorte amplio; luego tú filtras",
  ],
  quiz: {
    question: "¿Cuándo cambias el enfoque?",
    options: [
      "Cada renglón, por costumbre",
      "Cuando cambia el tipo de evidencia que necesitas",
      "Nunca, siempre Todo",
      "Solo si el logo se ve bonito",
    ],
    answer: 1,
    explain: "Papers, quejas o recorte general no salen del mismo cajón.",
  },
  practice: {
    title: "Arma el cajón",
    lead: "Caso + filtro + entregable.",
    template: "Guarda esto en la colección {blank}. Usa enfoque {blank} y pide {blank} con fuente.",
    answers: ["cliente taquería Roma", "Reddit", "3 quejas repetidas"],
    slots: ["cajón", "filtro", "entregable"],
    simReply: {
      intro: "Colección creada. Tres hilos de Reddit con la misma queja de espera. Académico no aplicaba.",
      sections: [
        { title: "Por qué Reddit", text: "Quieres voz de cliente, no un paper." },
        { title: "Siguiente", text: "Abre los tres hilos. Copia citas, no el recorte entero." },
      ],
    },
    review: {
      question: "¿Una colección para todos los clientes?",
      options: ["Sí, más simple", "No: un cajón por caso, o se mezcla el recorte", "Da igual"],
      answer: 1,
      explain: "El cajón mezclado contamina el siguiente brief.",
    },
  },
  close: {
    tip: "colección por caso, enfoque según la evidencia. No un hilo eterno.",
    items: ["Un cajón, un cliente", "Cambia el filtro con el oficio", "Académico no es para todo"],
  },
});

const contrastar = track({
  id: "contrastar",
  title: "Dos fuentes, un criterio",
  blurb: "Si se contradicen, eso es el hallazgo. No elijas la más dramática.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Perplexity te puede citar un medio que dice “el mercado crece 40%” y otro que dice “se estanca”. Elegir el titular más fuerte es periodismo de grupo de WhatsApp.",
    "Contrastar es anotar el choque, la fecha de cada uno y qué incentivo tiene quien publica. El brief del equipo necesita el desacuerdo a la vista, no un promedio mágico.",
  ],
  body: {
    title: "Un criterio, no un empate técnico",
    text: "Antes de buscar, di qué te haría creer el dato: muestra, año, organismo. Si las dos fuentes fallan el criterio, el hallazgo es “no hay cifra usable”.",
  },
  bullets: [
    "Criterio primero (quién, cuándo, muestra)",
    "Dos fuentes, no la más viral",
    "El choque se anota, no se esconde",
    "Sin criterio, gana el titular más largo",
  ],
  quiz: {
    question: "Si dos fuentes se contradicen, ¿qué haces?",
    options: [
      "Te quedas con la más dramática",
      "Anotas el choque, fechas e incentivo, y lo dejas en el brief",
      "Pides a Perplexity que elija por ti",
      "Borras la que no te gusta",
    ],
    answer: 1,
    explain: "El desacuerdo es información. Promediar a escondidas miente.",
  },
  practice: {
    title: "Contrasta el dato",
    lead: "Choque a la vista.",
    template: "Compara {blank} y {blank}. Si chocan, anota {blank} y no promedies.",
    answers: ["fuente A", "fuente B", "fecha e incentivo"],
    slots: ["una", "otra", "el choque"],
    simReply: {
      intro: "A: 40% (consultora, 2024, vende el estudio). B: estancado (INEGI, 2025). Choque anotado. No hay promedio.",
      sections: [
        { title: "Criterio", text: "Organismo público + año ≥ 2025 gana a un PDF de venta." },
        { title: "Brief", text: "“No hay cifra única. Usar rango y citar ambas.”" },
      ],
    },
    review: {
      question: "¿Perplexity decide cuál fuente es verdad?",
      options: ["Sí, por eso cita", "No: tú aplicas el criterio y dejas el choque", "Solo en Pro"],
      answer: 1,
      explain: "Cita pistas. El criterio es tuyo.",
    },
  },
  close: {
    tip: "si chocan, anótalo. Contrastar es el oficio, no el adorno.",
    items: ["Criterio antes de buscar", "Dos fuentes mínimo", "El drama no puntúa"],
  },
});

const mercado = track({
  id: "mercado",
  title: "Una pesquisa de mercado que se puede usar",
  blurb: "Competidores, precio y hueco. Tabla, no un ensayo de 12 páginas.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "“Analiza el mercado” le da permiso de escribir un folleto. Lo que el equipo necesita cabe en una tabla: quién vende, a qué precio, a quién, y qué hueco ves tú.",
    "País y año otra vez. Un ticket de 2022 en dólares no arma tu lista de precios en pesos este mes.",
  ],
  body: {
    title: "La tabla manda",
    text: "Tres competidores, un rango de precio, un público, un hueco. Cada celda con fuente. Lo que no tenga enlace va como hipótesis.",
  },
  bullets: [
    "Categoría + país + año",
    "3 competidores, no 30",
    "Precio o rango, con fecha",
    "Hueco: lo que nadie cubre (hipótesis tuya)",
  ],
  quiz: {
    question: "¿Qué entregable sirve para decidir precio?",
    options: [
      "Un ensayo de “tendencias globales”",
      "Una tabla de 3 competidores con precio, público y fuente",
      "Un mapa mental con nubes",
      "Diez hashtags",
    ],
    answer: 1,
    explain: "Se puede checar. El ensayo no se cobra ni se publica.",
  },
  practice: {
    title: "Pide la tabla",
    lead: "Mercado recortado, no el planeta.",
    template: "En {blank}, {blank}: 3 competidores de {blank}, precio y fuente. Tabla.",
    answers: ["México", "2026", "café de especialidad para oficina"],
    slots: ["país", "año", "categoría"],
    simReply: {
      intro: "Tres filas. Precios en pesos, dos con fecha 2026. El tercero sin ticket: hipótesis.",
      sections: [
        { title: "Fila 1", text: "Marca A, 89–129 MXN, oficinas CDMX — enlace abierto." },
        { title: "Hueco", text: "Nadie vende recarga semanal en zona industrial. Hipótesis tuya, no de Perplexity." },
      ],
    },
    review: {
      question: "¿El hueco lo inventa Perplexity?",
      options: ["Sí, es el experto", "No: lo propones tú con los huecos de la tabla", "El becario"],
      answer: 1,
      explain: "La herramienta junta pistas. La apuesta es tuya.",
    },
  },
  close: {
    tip: "tabla de 3, con precio y fuente. El ensayo de tendencias se queda fuera.",
    items: ["Recorta mercado", "Celdas con enlace", "El hueco lo firmas tú"],
  },
});

const brief = track({
  id: "brief",
  title: "De la pista al brief del equipo",
  blurb: "Hallazgos, fuentes, huecos y el siguiente paso. Una página, no un ladrillo.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Pegar el recorte entero en el chat del equipo no es un brief: es tarea para otra persona. Un brief cabe en una pantalla: qué vimos, de dónde, qué no está claro y qué se hace el lunes.",
    "Perplexity arma el recorte. Tú armas el documento que alguien puede ejecutar sin volver a preguntarte “¿y esto de dónde salió?”.",
  ],
  body: {
    title: "Cuatro bloques, nada más",
    text: "Hallazgo, fuente (enlace + fecha), hueco, siguiente paso con dueño. Si un bloque falta, el equipo improvisa.",
  },
  bullets: [
    "Hallazgo en una frase",
    "Fuente con enlace y fecha",
    "Hueco o choque a la vista",
    "Siguiente paso + quién lo hace",
  ],
  quiz: {
    question: "¿Qué le falta a “les dejo lo que me dio Perplexity”?",
    options: [
      "Nada, está perfecto",
      "Hallazgo, fuente, hueco y un siguiente paso con dueño",
      "Más emojis",
      "El logo de Perplexity",
    ],
    answer: 1,
    explain: "El ladrillo no se ejecuta. El brief de una página sí.",
  },
  practice: {
    title: "Arma el brief",
    lead: "Una página para el equipo.",
    template: "Hallazgo: {blank}. Fuente: {blank}. Siguiente paso: {blank}.",
    answers: ["el ticket local subió 15% vs 2025", "nota de 2026, enlace abierto", "Ana cotiza a 3 proveedores el lunes"],
    slots: ["qué vimos", "de dónde", "quién hace qué"],
    simReply: {
      intro: "Brief de una pantalla. El ladrillo de 12 viñetas se quedó fuera.",
      sections: [
        { title: "Hallazgo", text: "Ticket local +15% vs 2025. Fuente abierta, fecha 2026." },
        { title: "Hueco", text: "No hay dato de zona industrial. Hipótesis, no cifra." },
        { title: "Lunes", text: "Ana cotiza. Tú no reenvías el recorte crudo." },
      ],
    },
    review: {
      question: "¿El equipo necesita el recorte crudo?",
      options: ["Sí, para “transparencia”", "No: necesita hallazgo, fuente, hueco y dueño", "Solo el becario"],
      answer: 1,
      explain: "Ejecutar. No rehacer tu pesquisa.",
    },
  },
  close: {
    tip: "una página: hallazgo, fuente, hueco, siguiente paso. El ladrillo no se ejecuta.",
    items: ["Frase, no párrafo", "Enlace a la vista", "Dueño del lunes"],
  },
});

const limites = track({
  id: "limites",
  title: "Alucinación, muro de pago y el clic",
  blurb: "Sigue inventando. El recorte no paga el artículo. Tú abres el enlace.",
  scene: "search",
  brand: "Perplexity",
  hook: [
    "Perplexity cita y aun así puede torcer un número, mezclar dos notas o resumir un artículo que está detrás de un muro de pago. El recorte no es el texto completo: es lo que alcanzó a ver.",
    "Si el enlace pide suscripción, no des el recorte por ley. Si la cita no está en la página, es alucinación con traje de fuente. El clic no es desconfianza: es el oficio.",
  ],
  body: {
    title: "Tres trampas del recorte",
    text: "Alucina con fluidez. Resume muros de pago como si los hubiera leído. Y te acostumbra a no abrir. Las tres se cazan igual: abres, buscas el dato, y si no está, lo bajas a hipótesis.",
  },
  bullets: [
    "El número que no está en la página: fuera",
    "Muro de pago: el recorte no es el artículo",
    "Tú abres el enlace; Perplexity no firma el brief",
    "Si no puedes citar el párrafo, no va al cliente",
  ],
  quiz: {
    question: "El enlace está detrás de un muro de pago. ¿Qué haces con el recorte?",
    options: [
      "Lo pegas en la presentación del cliente",
      "Lo marcas como no verificado y buscas otra fuente abierta",
      "Asumes que Perplexity ya pagó la nota",
      "Le pides que invente el resto",
    ],
    answer: 1,
    explain: "Sin el artículo, no hay dato. Otra fuente, o hueco a la vista.",
  },
  practice: {
    title: "Caza la trampa",
    lead: "Tres filtros antes de publicar.",
    template: "Abre el {blank}. Si hay {blank}, no lo des por cierto. Si el dato no está, es {blank}.",
    answers: ["enlace", "muro de pago", "hipótesis"],
    slots: ["clic", "muro", "qué es"],
    simReply: {
      intro: "Enlace 2: muro de pago. Dato bajado a hipótesis. Enlace 1 abierto: el 15% sí está en el párrafo 4.",
      sections: [
        { title: "Qué pasó", text: "El recorte mezcló dos notas. Solo una se pudo leer." },
        { title: "Al brief", text: "Cifra verificada + hueco explícito. Cero “según la IA”." },
      ],
    },
    review: {
      question: "¿Quién abre el enlace?",
      options: ["Perplexity, en silencio", "Tú, siempre", "Nadie, el recorte basta"],
      answer: 1,
      explain: "La herramienta acelera. El clic es tuyo. Sin eso, el brief miente.",
    },
  },
  close: {
    tip: "abre el enlace. Muro de pago y alucinación se cazan igual: el dato tiene que estar en la página.",
    items: ["Clic antes de la presentación", "El recorte no es el artículo", "Hipótesis se etiqueta"],
  },
});

export const perplexityUnits = [
  {
    id: "u1",
    title: "Investigar con fuentes",
    lessons: [conoce, fuentes, acotar, colecciones],
  },
  {
    id: "u2",
    title: "De la pista al brief",
    lessons: [contrastar, mercado, brief, limites],
  },
];
