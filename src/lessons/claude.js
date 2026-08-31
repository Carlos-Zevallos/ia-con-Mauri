import { track } from "./kit.js";

const meet = track({
  id: "meet",
  title: "Conoce a Claude",
  blurb: "Textos largos, tono contenido y citas. No es para memes al por mayor.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Claude se luce cuando el documento es largo, delicado o no puedes distorsionar lo que dice. Un mail de 8 líneas se resuelve en cualquier chat. Un PDF de políticas, no.",
    "Pídele que señale el fragmento en el que se apoya. Si no puede citarlo, no lo des por cierto.",
  ],
  body: {
    title: "Cuándo te conviene Claude",
    text: "No es para mails cortos. Es para documentos que duelen: contratos, políticas, un tono que no puede sonar agresivo.",
  },
  bullets: [
    "PDFs y textos largos",
    "Tono sin ironía ni urgencia falsa",
    "Citas y encabezados a la vista",
    "Menos prisa, más matiz",
  ],
  quiz: {
    question: "Claude se luce más cuando…",
    options: [
      "Quieres memes al por mayor",
      "Hay que leer un documento largo con matices",
      "Minas criptomonedas",
      "Editas video 4K",
    ],
    answer: 1,
    explain: "Contexto largo y tono contenido son su fuerte.",
  },
  practice: {
    title: "Pide anclas",
    lead: "Un resumen sin cita es un borrador, no una fuente.",
    template: "Resume este PDF. En cada punto: {blank}, {blank} y una {blank} que el texto no responde.",
    answers: ["idea", "cita corta", "pregunta"],
    slots: ["idea", "ancla", "hueco"],
    simReply: {
      intro: "Tres puntos con ancla. El 2 no tenía párrafo: lo marqué como hipótesis.",
      sections: [{ title: "Punto 1", text: "La política cubre proveedores locales — §3.2 — ¿aplica a freelancers?" }],
    },
    review: {
      question: "Si Claude no puede citar el párrafo, ¿qué haces?",
      options: ["Lo publicas igual", "Lo tratas como hipótesis y vuelves al documento", "Le pides que invente la cita"],
      answer: 1,
      explain: "Sin ancla, es un borrador, no una fuente.",
    },
  },
  close: {
    tip: "pide que cite el fragmento. Si no puede señalarlo, no lo des por cierto.",
    items: ["Úsalo en texto largo", "Tono contenido a propósito", "Tú vuelves al PDF"],
  },
});

const proyectos = track({
  id: "proyectos",
  title: "Projects en Claude",
  blurb: "El brief y los PDFs se quedan. El caso de esta semana se pega encima.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Un Project en Claude es el cajón del cliente: instrucciones, archivos y chats. Si cada vez subes el mismo PDF, estás pagando el peaje dos veces.",
    "Cuando el documento cambia, reemplázalo. Claude no se entera solo.",
  ],
  body: {
    title: "Qué hereda el Project",
    text: "Instrucciones duras + archivos vigentes. Los chats son tareas, no un diario de 40 páginas.",
  },
  bullets: [
    "Rol y tono (sin ironía, sin urgencia falsa)",
    "PDFs del caso",
    "Formato de salida (mapa, no ladrillo)",
  ],
  quiz: {
    question: "¿Qué va primero en el Project?",
    options: ["Un meme", "Instrucciones y archivos, luego el caso", "El color de la marca"],
    answer: 1,
    explain: "El caso sin brief improvisa.",
  },
  practice: {
    title: "Instrucciones del cajón",
    lead: "Van arriba. El PDF de esta semana, adentro.",
    template: "Sin {blank}, sin {blank} falsa, con un {blank} claro al final.",
    answers: ["ironía", "urgencia", "siguiente paso"],
    slots: ["veto 1", "veto 2", "cierre"],
    simReply: { intro: "Instrucciones listas. El próximo PDF solo se pega." },
    review: {
      question: "¿Para quién es este tono?",
      options: ["Un anuncio de Black Friday", "Un aviso interno o un cliente sensible", "Un stand-up"],
      answer: 1,
      explain: "Claude se luce cuando le dices a quién duele el mensaje.",
    },
  },
  close: {
    tip: "el PDF se actualiza. Las instrucciones se quedan.",
    items: ["Un Project por cliente", "Chats cortos", "Reemplaza archivos viejos"],
  },
});

const artifacts = track({
  id: "artifacts",
  title: "Artifacts: algo que se puede copiar",
  blurb: "Un artefacto es un entregable, no un chat. Tabla, draft, checklist.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Si el resultado vive en el hilo, se pierde. Pide un Artifact: un documento aparte que puedes copiar, iterar y pegar en el trabajo.",
    "Di el formato. “Hazlo bonito” no es un artefacto.",
  ],
  body: {
    title: "Qué cabe en un Artifact",
    text: "Un memo, una tabla, un checklist, un borrador de política. Una cosa.",
  },
  bullets: ["Un título", "Un formato", "Una audiencia", "Un veto de tono"],
  quiz: {
    question: "¿Qué es un Artifact?",
    options: ["Un sticker", "Un entregable aparte del chat", "Un modelo más caro"],
    answer: 1,
    explain: "Se puede copiar. El hilo se ensucia.",
  },
  practice: {
    title: "Pide el entregable",
    lead: "Formato primero.",
    template: "Crea un Artifact: {blank} para {blank}, tono {blank}, sin urgencia falsa.",
    answers: ["checklist de 8 puntos", "el equipo de tienda", "interno"],
    slots: ["qué", "para quién", "tono"],
    simReply: { intro: "Checklist en Artifact. Cópialo. No lo dejes en el chat." },
    review: {
      question: "¿Por qué no dejarlo en el hilo?",
      options: ["Porque se ve feo", "Porque el entregable se pierde entre mensajes", "Por moda"],
      answer: 1,
      explain: "El Artifact es el archivo. El chat es el taller.",
    },
  },
  close: {
    tip: "pide un Artifact cuando el texto tiene que salir del chat.",
    items: ["Un entregable", "Un formato", "Luego iteras el mismo objeto"],
  },
});

const razon = track({
  id: "razon",
  title: "Razonamiento en cadena",
  blurb: "Que muestre el camino entre dos ideas. No un salto de fe.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Claude puede conectar un contrato con un mail y una tabla. Pídele el puente: qué dice A, qué dice B, dónde chocan.",
    "Si solo pides “la conclusión”, te comes el salto. El salto es donde se esconde el error.",
  ],
  body: {
    title: "Pide el puente",
    text: "Idea A → evidencia → idea B → duda abierta. Así cazas la distorsión.",
  },
  bullets: ["Qué afirma el texto", "Con qué se apoya", "Qué no dice", "Qué chocaría con otro archivo"],
  quiz: {
    question: "¿Qué pides para no tragarte un salto?",
    options: ["Solo la conclusión", "El puente entre dos ideas y dónde chocan", "Un poema"],
    answer: 1,
    explain: "El camino. La conclusión suelta miente fácil.",
  },
  practice: {
    title: "Cruza dos fuentes",
    lead: "PDF + mail. Dónde no coinciden.",
    template: "Compara {blank} y {blank}. Lista {blank} y una duda abierta.",
    answers: ["la política §3", "el mail del proveedor", "coincidencias y choques"],
    slots: ["fuente A", "fuente B", "salida"],
    simReply: {
      intro: "Dos choques. El plazo del mail no está en la política. Hipótesis, no hecho.",
    },
    review: {
      question: "¿Qué haces con el choque?",
      options: ["Lo publicas como verdad", "Lo marcas y vuelves a las dos fuentes", "Eliges el más dramático"],
      answer: 1,
      explain: "Contrastar es el oficio.",
    },
  },
  close: {
    tip: "pide el puente, no solo la tesis.",
    items: ["Dos fuentes", "Choques a la vista", "Duda abierta al final"],
  },
});

const marcos = track({
  id: "marcos",
  title: "Marcos para pensar",
  blurb: "Un marco es una tabla. “Analízalo” es una nube.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Riesgo / impacto / evidencia / qué falta. O tesis / antítesis / qué no dice el texto. Elige un marco y no lo mezcles a mitad de camino.",
    "Claude llena el marco. Tú eliges si el marco era el correcto.",
  ],
  body: {
    title: "Un marco por pedido",
    text: "Si pides “análisis profundo” te suelta un ensayo. Pide columnas.",
  },
  bullets: ["Riesgo", "Evidencia (cita)", "Impacto", "Qué falta en el documento"],
  quiz: {
    question: "¿Qué es un marco útil?",
    options: ["La palabra “estratégico”", "Columnas que se pueden llenar con citas", "Un logo"],
    answer: 1,
    explain: "Se llena. No se admira.",
  },
  practice: {
    title: "Llena el marco",
    lead: "Cuatro columnas. Nada de prosa.",
    template: "Arma tabla: {blank}, {blank}, {blank}, qué falta.",
    answers: ["riesgo", "cita", "impacto"],
    slots: ["col 1", "col 2", "col 3"],
    simReply: { intro: "Cuatro filas. La 3 no tenía cita: impacto en gris." },
    review: {
      question: "¿Por qué la columna “qué falta” importa?",
      options: ["Queda bonita", "Evita tratar el PDF como la verdad completa", "Es más largo"],
      answer: 1,
      explain: "El documento no dice todo. El marco lo admite.",
    },
  },
  close: {
    tip: "un marco, unas columnas. “Analízalo” no se ejecuta.",
    items: ["Elige el marco antes", "Citas en la evidencia", "Qué falta siempre"],
  },
});

const creatividad = track({
  id: "creatividad",
  title: "Creatividad con reglas",
  blurb: "Claude también inventa. Las reglas evitan el anuncio de 2012.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Pide cercanía sin chiste. Claude se luce cuando le dices a quién duele el mensaje y qué no puede sonar a urgencia falsa.",
    "Tres ángulos, un veto, una ficha. Luego eliges.",
  ],
  body: {
    title: "Estímulo, no firework",
    text: "“Sé creativo” suelta eslóganes. “Tres cartas a proveedores, tono interno, sin amenaza” se puede mandar.",
  },
  bullets: ["Audiencia", "Veto de tono", "Tres opciones", "Una se edita"],
  quiz: {
    question: "¿Qué estimula mejor a Claude?",
    options: ["“Hazlo viral”", "Audiencia + veto + tres ángulos", "Un emoji de fuego"],
    answer: 1,
    explain: "Reglas. El viral no es un brief.",
  },
  practice: {
    title: "Tres cartas, un veto",
    lead: "Misma noticia, distinto ángulo.",
    template: "Tres versiones para {blank}. Sin {blank}. Elige la más {blank}.",
    answers: ["un proveedor que se atrasó", "amenaza ni ironía", "clara"],
    slots: ["audiencia", "veto", "criterio"],
    simReply: { intro: "La 2 se puede mandar. La 1 aún suena a recado de gerencia." },
    review: {
      question: "¿Qué hace humana la carta?",
      options: ["Más adjetivos", "Un veto de tono y a quién duele", "Mayúsculas"],
      answer: 1,
      explain: "A quién le duele. No el adjetivo “humano”.",
    },
  },
  close: {
    tip: "cercanía sin chiste. El anuncio no es un aviso interno.",
    items: ["Tres ángulos", "Un veto", "Editas la ganadora"],
  },
});

const escritura = track({
  id: "escritura",
  title: "Escribir y editar con Claude",
  blurb: "Pide palo. Marca fallas. Reescribe el párrafo flojo.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Claude puede ser un editor si le das el texto y el criterio. “Mejóralo” aplaude. “Corta a 200 palabras, quita la urgencia, marca 3 fallas” edita.",
    "Pega el original. Si no, reescribe un fantasma.",
  ],
  body: {
    title: "Dos pasadas",
    text: "Primero diagnóstico (fallas). Después reescritura. Si las juntas, se le va el diagnóstico.",
  },
  bullets: ["Pega el original", "Lista de fallas", "Reescritura con límites", "Tú aceptas o rechazas"],
  quiz: {
    question: "¿Qué pides primero?",
    options: ["La versión final", "Las fallas, luego el recorte", "Un like"],
    answer: 1,
    explain: "Diagnóstico antes de cirujano.",
  },
  practice: {
    title: "Edita con criterio",
    lead: "Fallas primero.",
    template: "Marca {blank} fallas. Reescribe a {blank} palabras, tono {blank}.",
    answers: ["3", "200", "interno sin urgencia"],
    slots: ["cuántas", "largo", "tono"],
    simReply: { intro: "Tres fallas. Versión 2 en 198 palabras. El párrafo 2 era el flojo." },
    review: {
      question: "¿Por qué separar diagnóstico y reescritura?",
      options: ["Por capricho", "Para no perder las fallas en el texto nuevo", "Por SEO"],
      answer: 1,
      explain: "Si mezcla, el error se esconde en la prosa nueva.",
    },
  },
  close: {
    tip: "sé directo. Marca fallas. Reescribe el párrafo flojo.",
    items: ["Original pegado", "Límites de tono", "Tú firmas"],
  },
});

const sintesis = track({
  id: "sintesis",
  title: "Investigar y sintetizar",
  blurb: "Tesis, secciones, riesgos y lo que el texto no dice.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Para un PDF de 40 páginas no pidas “un resumen”. Pide un mapa: tesis, 5 secciones, riesgos y una pregunta que el texto no responde.",
    "El ladrillo no se lee. El mapa sí.",
  ],
  body: {
    title: "El mapa cabe en una página",
    text: "Por encabezado: idea, cita corta, duda. Si no hay cita, no hay sección.",
  },
  bullets: ["Tesis en una frase", "Cinco secciones", "Riesgos", "Lo que no dice"],
  quiz: {
    question: "¿Qué pides para un PDF largo?",
    options: ["“Resúmelo”", "Tesis, secciones, riesgos y una pregunta abierta", "Un acróstico"],
    answer: 1,
    explain: "Mapa. El ladrillo se ignora.",
  },
  practice: {
    title: "Pide el mapa",
    lead: "40 páginas no caben en un párrafo.",
    template: "Dame la {blank}, cinco {blank} y una {blank} que el texto no responde.",
    answers: ["tesis", "secciones", "pregunta"],
    slots: ["tesis", "mapa", "hueco"],
    simReply: { intro: "Mapa en una página. La sección 4 no tenía cita: la bajé a hipótesis." },
    review: {
      question: "¿Qué haces con la sección sin cita?",
      options: ["La publicas", "La marcas como hipótesis", "La pones en negritas"],
      answer: 1,
      explain: "Sin ancla, no sube al mapa firme.",
    },
  },
  close: {
    tip: "pide un mapa, no un ladrillo.",
    items: ["Tesis corta", "Citas por sección", "Una pregunta abierta"],
  },
});

const critico = track({
  id: "critico",
  title: "Revisión crítica",
  blurb: "Qué sostiene el texto, qué asume y qué pasaría si la asunción falla.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Pensar con Claude no es que “opine”. Es que separe hechos, asunciones y recomendaciones. Si las mezcla, te come un consejo disfrazado de dato.",
    "Pide: qué está respaldado, qué se asume, qué probarías antes de actuar.",
  ],
  body: {
    title: "Tres cajones",
    text: "Hecho / asunción / palanca. No dejes que el tono seguro mezcle los tres.",
  },
  bullets: ["Hecho con cita", "Asunción sin cita", "Qué probarías esta semana"],
  quiz: {
    question: "¿Qué es una asunción?",
    options: ["Una cita del PDF", "Algo que el texto da por sentado sin prueba", "Un logo"],
    answer: 1,
    explain: "Se marca. No se obedece.",
  },
  practice: {
    title: "Separa los cajones",
    lead: "Hecho, asunción, palanca.",
    template: "Lista {blank} con cita, {blank} sin prueba y {blank} para esta semana.",
    answers: ["hechos", "asunciones", "una prueba"],
    slots: ["hechos", "huecos", "acción"],
    simReply: { intro: "Dos hechos. Una asunción de demanda. Prueba: 20 clientes esta semana." },
    review: {
      question: "¿Por qué marcar la asunción?",
      options: ["Por pedantería", "Para no ejecutar un consejo como si fuera dato", "Por diseño"],
      answer: 1,
      explain: "El tono seguro miente. El cajón no.",
    },
  },
  close: {
    tip: "separa hecho, asunción y palanca.",
    items: ["Cita en el hecho", "Asunción a la vista", "Una prueba chica"],
  },
});

const junto = track({
  id: "junto",
  title: "Claude junto a otras IAs",
  blurb: "Claude lee y matiza. ChatGPT borra. Perplexity busca. No son el mismo oficio.",
  scene: "docs",
  brand: "Claude",
  hook: [
    "Un flujo típico: Perplexity o búsqueda para pistas, Claude para leer el PDF y el tono, ChatGPT para el mail corto. Si le pides todo a uno, paga en matices o en velocidad.",
    "Elige el oficio, no la marca de moda.",
  ],
  body: {
    title: "Quién hace qué",
    text: "No es infidelidad cambiar de herramienta. Es no usar un destornillador de martillo.",
  },
  bullets: [
    "Claude: documentos, tono, citas",
    "ChatGPT: mails, plantillas, GPTs",
    "Perplexity: pistas con enlaces",
    "Tú: la firma",
  ],
  quiz: {
    question: "¿Qué le das a Claude en un flujo mixto?",
    options: ["El meme", "El PDF y el tono del aviso", "El render 4K"],
    answer: 1,
    explain: "Su oficio. El resto, otra mesa.",
  },
  practice: {
    title: "Reparte el trabajo",
    lead: "Tres estaciones.",
    template: "Busco con {blank}, leo el PDF con {blank}, redacto el mail con {blank}.",
    answers: ["Perplexity", "Claude", "ChatGPT"],
    slots: ["pistas", "documento", "mail"],
    simReply: { intro: "Reparto listo. No mezcles el PDF en el chat del meme." },
    review: {
      question: "¿Por qué no pedirle el mail a Claude si ya leyó el PDF?",
      options: [
        "Porque está prohibido",
        "Puedes, pero el mail corto a veces sale más limpio en ChatGPT; el matiz se quedó en Claude",
        "Porque Claude no escribe",
      ],
      answer: 1,
      explain: "Oficios. Puedes hacerlo todo en uno; pagas en algo.",
    },
  },
  close: {
    tip: "reparte oficios. La firma es tuya.",
    items: ["Pistas / documento / pieza", "No un chat único eterno", "Citas se quedan en Claude"],
  },
});

export const claudeUnits = [
  {
    id: "u1",
    title: "Claude para análisis",
    lessons: [meet, proyectos, artifacts, razon, marcos],
  },
  {
    id: "u2",
    title: "Escribir, sintetizar, decidir",
    lessons: [creatividad, escritura, sintesis, critico, junto],
  },
];
