import { coursivFlow } from "./kit.js";

const img = (file) => ({ kind: "image", src: `/lessons/perplexity/${file}?v=7` });
const B = "Perplexity";
const q = (n) => `/lessons/perplexity/q${n}.png?v=7`;

const conoce = coursivFlow({
  id: "conoce",
  title: "Perplexity no es Google ni ChatGPT",
  blurb: "Busca, resume y apunta a fuentes. Tú abres el enlace",
  brand: B,
  hero: img("conoce.png"),
  ui: img("conoce-b.png"),
  problemImg: q(1),
  open: [
    "Google te tira diez anuncios y un wiki. ChatGPT te suelta un párrafo fluido que a veces no tiene de dónde. Perplexity se sienta en el medio: busca en la web, te arma un recorte y te enseña de qué páginas salió.",
    "No es un oráculo. Es un rastreador con cita. Si te quedas en el recorte y no abres la fuente, estás leyendo un resumen de segunda mano. En esta ruta, como en Coursiv, armas preguntas que se pueden checar y briefs que el equipo sí usa.",
  ],
  quiz1: {
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
  meetTitle: "Tres oficios distintos",
  meetText:
    "Google rankea páginas: tú cazas. ChatGPT completa texto: inventa si no busca. Perplexity siempre arranca de una búsqueda y te deja las pistas. Elige según el oficio, no según el logo de moda.",
  meetList: [
    "Google: enlaces, ads, tú haces el recorte",
    "ChatGPT: borrador rápido; sin búsqueda, habla de memoria",
    "Perplexity: síntesis + fuentes numeradas",
    "Tú: abres, contrastas y decides qué se queda",
  ],
  pair: {
    title: "Revisión de oficios",
    card: {
      lead: "Tomando en cuenta lo anterior, decide si este pedido usa Perplexity en su oficio.",
      prompt: "Busca tres fuentes sobre el costo de un dominio .mx en 2026. Tabla corta. Yo abro dos enlaces.",
    },
    question: "¿Perplexity podría trabajar con este prompt?",
    options: ["Sí: busca, recorta y deja pistas", "No: esto es un mail, no una pesquisa"],
    answer: 0,
    explain: "Hay búsqueda, año y un clic tuyo al final. El mail se va a ChatGPT.",
  },
  discovery:
    "Perplexity acerca. Google caza. ChatGPT redacta. Tú eliges el oficio. El clic a la fuente no es opcional.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Necesitas un precio de hoy, no un ensayo. Perplexity arma el recorte. Tú abres dos fuentes. El mail del cliente se escribe en otra mesa.",
  exampleList: [
    "Google: entrar al registrar",
    "ChatGPT: reescribir el mail",
    "Perplexity: tres fuentes sobre el mismo dato",
  ],
  exampleImg: img("conoce-b.png"),
  multi: {
    question: "Para consolidar, ¿qué hace útil Perplexity?",
    options: [
      "Buscar y dejar fuentes numeradas",
      "Recortar, no sustituir el clic",
      "No usarlo para un mail ni para cazar una URL concreta",
    ],
    answers: [0, 1, 2],
    explain: "Tres oficios. Mezclarlos ensucia el brief.",
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
  },
  review: {
    question: "Después de ver la respuesta, ¿Perplexity reemplaza abrir el enlace?",
    options: ["Sí, el recorte basta", "No: el recorte acerca, tú validas", "Solo los fines de semana"],
    answer: 1,
    explain: "Sin el clic, estás leyendo un recorte. Contrastar es el oficio.",
  },
  discovery2:
    "No uses Perplexity para un mail. No uses ChatGPT a ciegas para un precio de hoy. El clic a la fuente no es opcional.",
  closeItems: [
    "No uses Perplexity para un mail",
    "No uses ChatGPT a ciegas para un precio de hoy",
    "El clic a la fuente no es opcional",
  ],
});

const fuentes = coursivFlow({
  id: "fuentes",
  title: "No te quedes con el resumen",
  blurb: "Las citas son pistas. La fuente la abres tú",
  brand: B,
  hero: img("fuentes.png"),
  ui: img("fuentes-b.png"),
  problemImg: q(2),
  open: [
    "Perplexity numera las fuentes al costado. Esa cifra no es un sello de verdad: es un atajo. Un blog sin fecha, un comunicado de la marca y un paper no pesan igual.",
    "Si no abres el enlace, estás leyendo un recorte. Contrastar es parte del oficio, no un adorno para quedar bien.",
  ],
  quiz1: {
    question: "¿Qué haces si cita un blog sin fecha?",
    options: ["Lo tomas como ley", "Abres otra fuente y buscas fecha", "Lo retuiteas", "Le pides un poema"],
    answer: 1,
    explain: "Sin fecha, es pista, no hecho. Otra fuente, o lo marcas como hueco.",
  },
  meetTitle: "Cómo leer el panel de fuentes",
  meetText:
    "Mira quién firma, cuándo se publicó y si el medio tiene incentivo. Pide fuentes. Ábrelas. Si una no tiene fecha, es pista, no hecho.",
  meetList: [
    "Quién escribe y para quién cobra",
    "Fecha a la vista; sin fecha, pista",
    "Dos fuentes mínimo, no la más dramática",
    "El recorte de Perplexity no es la página",
  ],
  pair: {
    card: {
      lead: "¿Este pedido obliga a contrastar o se queda en el recorte?",
      prompt: "Busca con fecha y lugar. Después abre 2 fuentes y anota quién firma.",
    },
    question: "¿Este prompt pide el oficio de las fuentes?",
    options: ["Sí: recortes y clic", "No: el recorte basta"],
    answer: 0,
    explain: "Fecha, lugar y dos clics. El recorte solo no valida.",
  },
  discovery: "Pregunta con fecha y lugar, y abre al menos dos fuentes.",
  exampleTitle: "Dos URLs, un hueco",
  exampleText: "Una nota de 2026 con medio local. Un blog sin fecha. La segunda no entra al brief hasta que aparezca otra.",
  exampleList: ["Fecha en la pregunta", "Lugar", "Dos fuentes abiertas"],
  exampleImg: img("fuentes-b.png"),
  multi: {
    question: "¿Qué caza un recorte usable?",
    options: ["Quién firma y cuándo", "Dos fuentes, no la más dramática", "Marcar sin fecha como pista"],
    answers: [0, 1, 2],
    explain: "La herramienta acelera. Tú contrastas.",
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
  },
  review: {
    question: "¿Quién valida el dato?",
    options: ["Perplexity", "Tú, abriendo el enlace", "El becario"],
    answer: 1,
    explain: "La herramienta acelera. Tú contrastas.",
  },
  discovery2: "Recortes en la pregunta. Enlaces abiertos. Choques a la vista.",
  closeItems: ["Recortes en la pregunta", "Enlaces abiertos", "Choques a la vista"],
});

const acotar = coursivFlow({
  id: "acotar",
  title: "Acota país y año",
  blurb: "Si no recortas, te da el mundo entero",
  brand: B,
  hero: img("acotar.png"),
  ui: img("acotar-b.png"),
  problemImg: q(3),
  open: [
    "“Mejores prácticas de marketing” es infinito. “México, 2026, pymes de comida” se puede checar. Un recorte de más vale más que un párrafo de menos.",
    "Perplexity no adivina tu mercado. Si omites el país, mezcla California con Guadalajara. Si omites el año, te recicla un ensayo de 2019.",
  ],
  quiz1: {
    question: "¿Qué recorta el pozo infinito?",
    options: ["“Dime todo”", "México + 2026 + pymes", "Pedir que sea exhaustivo"],
    answer: 1,
    explain: "Tres recortes. El mundo no cabe en un recorte.",
  },
  meetTitle: "Tres recortes y un formato",
  meetText: "Tema, geografía, tiempo. Luego el entregable: tabla, no ensayo. “Sé exhaustivo” no recorta: infla.",
  meetList: [
    "Tema concreto, no “todo sobre…”",
    "País o ciudad",
    "Año o rango (2025–2026)",
    "Formato: tabla, 5 viñetas, no un paper",
  ],
  pair: {
    card: {
      lead: "¿Este pedido recorta o pide el planeta?",
      prompt: "Busca en México, año 2026, para pymes de comida. Tabla corta, con fuente.",
    },
    question: "¿Este prompt acota el mercado?",
    options: ["Sí: país, año y audiencia", "No: falta “sé exhaustivo”"],
    answer: 0,
    explain: "Tres recortes. El ensayo global se queda fuera.",
  },
  discovery: "Si no recortas, Perplexity te da el mundo entero.",
  exampleTitle: "Pymes de comida, no el planeta",
  exampleText: "Tabla de 4 filas. Nada de “a nivel global”. Cada fila con enlace. Tú abres dos.",
  exampleList: ["México", "2026", "Pymes de comida", "Tabla, no ensayo"],
  exampleImg: img("acotar-b.png"),
  multi: {
    question: "¿Qué recorta una pesquisa usable?",
    options: ["País o ciudad", "Año visible", "Un formato (tabla, no paper)"],
    answers: [0, 1, 2],
    explain: "El dato vive. El ensayo de 2019 no.",
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
  },
  review: {
    question: "¿Por qué el año en la pregunta?",
    options: ["Por moda", "Porque 2019 no sirve para un precio de 2026", "Por SEO"],
    answer: 1,
    explain: "El dato vive. El ensayo de 2019 no.",
  },
  discovery2: "País. Año. Para quién. Tres recortes antes de buscar.",
  closeItems: ["País", "Año", "Para quién"],
});

const colecciones = coursivFlow({
  id: "colecciones",
  title: "Colecciones y enfoque",
  blurb: "El cajón del caso y el tipo de fuente. No el mismo buscador para todo",
  brand: B,
  hero: img("colecciones.png"),
  ui: img("colecciones-b.png"),
  problemImg: q(4),
  open: [
    "Si cada pesquisa del cliente vive en un hilo suelto, la próxima semana no encuentras nada. Una colección en Perplexity es el cajón: mismo caso, mismos hilos, mismo recorte de mercado.",
    "El enfoque cambia de dónde jala: Académico para papers, Reddit para quejas reales, YouTube para demos, Todo para el recorte general. Pedir precio de tacos en Académico es pedir un paper de antropología.",
  ],
  quiz1: {
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
  meetTitle: "Cajón y filtro, no dos búsquedas iguales",
  meetText:
    "Colección = el caso se queda. Enfoque = de qué tipo de página tira. Cambia el enfoque cuando cambia el tipo de evidencia, no por aburrimiento.",
  meetList: [
    "Colección: un cliente o un proyecto, no 40 temas",
    "Académico: papers y revistas, no un review de taquería",
    "Reddit: experiencia vivida; sesgo a la vista",
    "Todo: recorte amplio; luego tú filtras",
  ],
  pair: {
    card: {
      lead: "¿Este pedido usa cajón y filtro?",
      prompt: "Guarda esto en la colección cliente taquería Roma. Usa enfoque Reddit y pide 3 quejas repetidas con fuente.",
    },
    question: "¿Este prompt usa colección y enfoque bien?",
    options: ["Sí: un caso y el filtro de evidencia", "No: debería ir todo a Académico"],
    answer: 0,
    explain: "Quieres voz de cliente, no un paper. Reddit aplica. Académico no.",
  },
  discovery: "Colección por caso, enfoque según la evidencia. No un hilo eterno.",
  exampleTitle: "La taquería de la Roma",
  exampleText: "Tres hilos de Reddit con la misma queja de espera. Académico no aplicaba. Abre los hilos y copia citas.",
  exampleList: ["Cajón: un cliente", "Filtro: Reddit", "Entregable: 3 quejas"],
  exampleImg: img("colecciones-b.png"),
  multi: {
    question: "¿Qué sostiene una pesquisa repetible?",
    options: ["Un cajón por caso", "El filtro según el tipo de evidencia", "Académico no es para todo"],
    answers: [0, 1, 2],
    explain: "El cajón mezclado contamina el siguiente brief.",
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
  },
  review: {
    question: "¿Una colección para todos los clientes?",
    options: ["Sí, más simple", "No: un cajón por caso, o se mezcla el recorte", "Da igual"],
    answer: 1,
    explain: "El cajón mezclado contamina el siguiente brief.",
  },
  discovery2: "Un cajón, un cliente. Cambia el filtro con el oficio. Académico no es para todo.",
  closeItems: ["Un cajón, un cliente", "Cambia el filtro con el oficio", "Académico no es para todo"],
});

const contrastar = coursivFlow({
  id: "contrastar",
  title: "Dos fuentes, un criterio",
  blurb: "Si se contradicen, eso es el hallazgo. No elijas la más dramática",
  brand: B,
  hero: img("contrastar.png"),
  ui: img("contrastar-b.png"),
  problemImg: q(1),
  open: [
    "Perplexity te puede citar un medio que dice “el mercado crece 40%” y otro que dice “se estanca”. Elegir el titular más fuerte es periodismo de grupo de WhatsApp.",
    "Contrastar es anotar el choque, la fecha de cada uno y qué incentivo tiene quien publica. El brief del equipo necesita el desacuerdo a la vista, no un promedio mágico.",
  ],
  quiz1: {
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
  meetTitle: "Un criterio, no un empate técnico",
  meetText:
    "Antes de buscar, di qué te haría creer el dato: muestra, año, organismo. Si las dos fuentes fallan el criterio, el hallazgo es “no hay cifra usable”.",
  meetList: [
    "Criterio primero (quién, cuándo, muestra)",
    "Dos fuentes, no la más viral",
    "El choque se anota, no se esconde",
    "Sin criterio, gana el titular más largo",
  ],
  pair: {
    card: {
      lead: "¿Este pedido deja el choque a la vista?",
      prompt: "Compara fuente A y fuente B. Si chocan, anota fecha e incentivo y no promedies.",
    },
    question: "¿Este prompt pide contrastar de verdad?",
    options: ["Sí: dos fuentes y el choque anotado", "No: debería pedir que elija la verdad"],
    answer: 0,
    explain: "Cita pistas. El criterio es tuyo. El promedio mágico miente.",
  },
  discovery: "Si chocan, anótalo. Contrastar es el oficio, no el adorno.",
  exampleTitle: "40% vs estancado",
  exampleText:
    "A: consultora 2024 que vende el estudio. B: INEGI 2025. Organismo público + año reciente gana a un PDF de venta. No hay promedio.",
  exampleList: ["Criterio antes de buscar", "Dos fuentes", "Choque en el brief"],
  exampleImg: img("contrastar-b.png"),
  multi: {
    question: "¿Qué va en un contraste usable?",
    options: ["Criterio primero", "Dos fuentes, no la más viral", "El choque anotado, no un promedio"],
    answers: [0, 1, 2],
    explain: "El drama no puntúa.",
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
  },
  review: {
    question: "¿Perplexity decide cuál fuente es verdad?",
    options: ["Sí, por eso cita", "No: tú aplicas el criterio y dejas el choque", "Solo en Pro"],
    answer: 1,
    explain: "Cita pistas. El criterio es tuyo.",
  },
  discovery2: "Criterio antes de buscar. Dos fuentes mínimo. El drama no puntúa.",
  closeItems: ["Criterio antes de buscar", "Dos fuentes mínimo", "El drama no puntúa"],
});

const mercado = coursivFlow({
  id: "mercado",
  title: "Una pesquisa de mercado que se puede usar",
  blurb: "Competidores, precio y hueco. Tabla, no un ensayo de 12 páginas",
  brand: B,
  hero: img("mercado.png"),
  ui: img("mercado-b.png"),
  problemImg: q(2),
  open: [
    "“Analiza el mercado” le da permiso de escribir un folleto. Lo que el equipo necesita cabe en una tabla: quién vende, a qué precio, a quién, y qué hueco ves tú.",
    "País y año otra vez. Un ticket de 2022 en dólares no arma tu lista de precios en pesos este mes.",
  ],
  quiz1: {
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
  meetTitle: "La tabla manda",
  meetText:
    "Tres competidores, un rango de precio, un público, un hueco. Cada celda con fuente. Lo que no tenga enlace va como hipótesis.",
  meetList: [
    "Categoría + país + año",
    "3 competidores, no 30",
    "Precio o rango, con fecha",
    "Hueco: lo que nadie cubre (hipótesis tuya)",
  ],
  pair: {
    card: {
      lead: "¿Este pedido cabe en una tabla o pide un folleto?",
      prompt: "En México, 2026: 3 competidores de café de especialidad para oficina, precio y fuente. Tabla.",
    },
    question: "¿Este prompt pide un recorte usable?",
    options: ["Sí: mercado recortado y tabla", "No: falta “analiza el mercado”"],
    answer: 0,
    explain: "Se puede checar. El ensayo de tendencias se queda fuera.",
  },
  discovery: "Tabla de 3, con precio y fuente. El ensayo de tendencias se queda fuera.",
  exampleTitle: "Café de oficina, México 2026",
  exampleText: "Tres filas. Precios en pesos. El tercero sin ticket: hipótesis. El hueco lo firmas tú.",
  exampleList: ["México + 2026", "3 competidores", "Hueco: recarga semanal en zona industrial"],
  exampleImg: img("mercado-b.png"),
  multi: {
    question: "¿Qué va en una pesquisa de mercado usable?",
    options: ["Recorte de país y año", "Celdas con enlace", "El hueco lo firmas tú"],
    answers: [0, 1, 2],
    explain: "La herramienta junta pistas. La apuesta es tuya.",
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
  },
  review: {
    question: "¿El hueco lo inventa Perplexity?",
    options: ["Sí, es el experto", "No: lo propones tú con los huecos de la tabla", "El becario"],
    answer: 1,
    explain: "La herramienta junta pistas. La apuesta es tuya.",
  },
  discovery2: "Recorta mercado. Celdas con enlace. El hueco lo firmas tú.",
  closeItems: ["Recorta mercado", "Celdas con enlace", "El hueco lo firmas tú"],
});

const brief = coursivFlow({
  id: "brief",
  title: "De la pista al brief del equipo",
  blurb: "Hallazgos, fuentes, huecos y el siguiente paso. Una página, no un ladrillo",
  brand: B,
  hero: img("brief.png"),
  ui: img("brief-b.png"),
  problemImg: q(3),
  open: [
    "Pegar el recorte entero en el chat del equipo no es un brief: es tarea para otra persona. Un brief cabe en una pantalla: qué vimos, de dónde, qué no está claro y qué se hace el lunes.",
    "Perplexity arma el recorte. Tú armas el documento que alguien puede ejecutar sin volver a preguntarte “¿y esto de dónde salió?”.",
  ],
  quiz1: {
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
  meetTitle: "Cuatro bloques, nada más",
  meetText: "Hallazgo, fuente (enlace + fecha), hueco, siguiente paso con dueño. Si un bloque falta, el equipo improvisa.",
  meetList: [
    "Hallazgo en una frase",
    "Fuente con enlace y fecha",
    "Hueco o choque a la vista",
    "Siguiente paso + quién lo hace",
  ],
  pair: {
    card: {
      lead: "¿Este pedido es un brief o un ladrillo?",
      prompt: "Hallazgo: el ticket local subió 15% vs 2025. Fuente: nota de 2026, enlace abierto. Siguiente paso: Ana cotiza a 3 proveedores el lunes.",
    },
    question: "¿Este prompt cabe en una página ejecutable?",
    options: ["Sí: hallazgo, fuente y dueño", "No: falta pegar el recorte crudo"],
    answer: 0,
    explain: "El equipo ejecuta. No rehace tu pesquisa.",
  },
  discovery: "Una página: hallazgo, fuente, hueco, siguiente paso. El ladrillo no se ejecuta.",
  exampleTitle: "El lunes de Ana",
  exampleText: "Ticket local +15% vs 2025. Fuente abierta. No hay dato de zona industrial: hipótesis. Ana cotiza.",
  exampleList: ["Frase, no párrafo", "Enlace a la vista", "Dueño del lunes"],
  exampleImg: img("brief-b.png"),
  multi: {
    question: "¿Qué hace ejecutable un brief?",
    options: ["Hallazgo en una frase", "Fuente con fecha", "Un dueño para el lunes"],
    answers: [0, 1, 2],
    explain: "Ejecutar. No rehacer tu pesquisa.",
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
  },
  review: {
    question: "¿El equipo necesita el recorte crudo?",
    options: ["Sí, para “transparencia”", "No: necesita hallazgo, fuente, hueco y dueño", "Solo el becario"],
    answer: 1,
    explain: "Ejecutar. No rehacer tu pesquisa.",
  },
  discovery2: "Frase, no párrafo. Enlace a la vista. Dueño del lunes.",
  closeItems: ["Frase, no párrafo", "Enlace a la vista", "Dueño del lunes"],
});

const limites = coursivFlow({
  id: "limites",
  title: "Alucinación, muro de pago y el clic",
  blurb: "Sigue inventando. El recorte no paga el artículo. Tú abres el enlace",
  brand: B,
  hero: img("limites.png"),
  ui: img("limites-b.png"),
  problemImg: q(4),
  trophy: true,
  open: [
    "Perplexity cita y aun así puede torcer un número, mezclar dos notas o resumir un artículo que está detrás de un muro de pago. El recorte no es el texto completo: es lo que alcanzó a ver.",
    "Si el enlace pide suscripción, no des el recorte por ley. Si la cita no está en la página, es alucinación con traje de fuente. El clic no es desconfianza: es el oficio.",
  ],
  quiz1: {
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
  meetTitle: "Tres trampas del recorte",
  meetText:
    "Alucina con fluidez. Resume muros de pago como si los hubiera leído. Y te acostumbra a no abrir. Las tres se cazan igual: abres, buscas el dato, y si no está, lo bajas a hipótesis.",
  meetList: [
    "El número que no está en la página: fuera",
    "Muro de pago: el recorte no es el artículo",
    "Tú abres el enlace; Perplexity no firma el brief",
    "Si no puedes citar el párrafo, no va al cliente",
  ],
  pair: {
    card: {
      lead: "¿Este pedido caza la trampa o se fía del recorte?",
      prompt: "Abre el enlace. Si hay muro de pago, no lo des por cierto. Si el dato no está, es hipótesis.",
    },
    question: "¿Este prompt caza alucinación y muro?",
    options: ["Sí: clic, muro e hipótesis", "No: el recorte ya citó, basta"],
    answer: 0,
    explain: "La herramienta acelera. El clic es tuyo. Sin eso, el brief miente.",
  },
  discovery:
    "Abre el enlace. Muro de pago y alucinación se cazan igual: el dato tiene que estar en la página.",
  exampleTitle: "El 15% que sí estaba",
  exampleText:
    "Enlace 2: muro de pago, dato a hipótesis. Enlace 1 abierto: el 15% sí está en el párrafo 4. El recorte había mezclado dos notas.",
  exampleList: ["Clic antes de la presentación", "El recorte no es el artículo", "Hipótesis se etiqueta"],
  exampleImg: img("limites-b.png"),
  multi: {
    question: "¿Qué caza un recorte mentiroso?",
    options: ["Abrir el enlace", "No tratar el muro como artículo leído", "Bajar a hipótesis lo que no está en la página"],
    answers: [0, 1, 2],
    explain: "Cero “según la IA”. Cifra verificada + hueco explícito.",
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
  },
  review: {
    question: "¿Quién abre el enlace?",
    options: ["Perplexity, en silencio", "Tú, siempre", "Nadie, el recorte basta"],
    answer: 1,
    explain: "La herramienta acelera. El clic es tuyo. Sin eso, el brief miente.",
  },
  discovery2:
    "Ya tienes oficios, fuentes, recortes de país y año, colecciones, choques, tablas de mercado, briefs de una página y el clic que caza el muro. Eso es Perplexity al ritmo de Coursiv: una idea por clic, una tarea en el workspace, tú firmas la fuente.",
  closeItems: ["Clic antes de la presentación", "El recorte no es el artículo", "Hipótesis se etiqueta"],
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
