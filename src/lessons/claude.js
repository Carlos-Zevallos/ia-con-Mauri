import { coursivFlow } from "./kit.js";

const img = (file) => ({ kind: "image", src: `/lessons/claude/${file}?v=7` });
const B = "Claude";
const q = (n) => `/lessons/claude/q${n}.png?v=7`;

const meet = coursivFlow({
  id: "meet",
  title: "Conoce a Claude",
  blurb: "Textos largos, tono contenido y citas. No es para memes al por mayor",
  brand: B,
  hero: img("meet.png"),
  ui: img("meet-b.png"),
  problemImg: q(1),
  open: [
    "Piensa en el último PDF que dejaste a medias: un contrato, una política, un mail delicado. Sabías que el matiz importaba, pero un chat genérico te devolvía un brochure.",
    "Claude se luce cuando el documento es largo, delicado o no puedes distorsionar lo que dice. Un mail de 8 líneas se resuelve en cualquier mesa. Un PDF de políticas, no. En esta guía, como en Coursiv, vas a pedir citas, tono contenido y entregables que sí se pueden copiar.",
  ],
  quiz1: {
    question: "Claude se luce más cuando…",
    options: [
      "Quieres memes al por mayor",
      "Hay que leer un documento largo con matices",
      "Minas criptomonedas",
      "Editas video 4K",
    ],
    answer: 1,
    explain: "Contexto largo y tono contenido son su fuerte. El chiste corto vive en otra mesa.",
  },
  meetTitle: "Cuándo te conviene Claude",
  meetText:
    "No es para mails cortos del día. Es para documentos que duelen: contratos, políticas, un tono que no puede sonar agresivo. Pídele que señale el fragmento. Si no puede citarlo, no lo des por cierto.",
  meetList: [
    "PDFs y textos largos",
    "Tono sin ironía ni urgencia falsa",
    "Citas y encabezados a la vista",
    "Menos prisa, más matiz",
  ],
  pair: {
    title: "Revisión de capacidades",
    card: {
      lead: "Tomando en cuenta lo anterior, decide si Claude podría trabajar con este prompt.",
      prompt:
        "Resume este PDF. En cada punto: la idea, una cita corta del párrafo y una pregunta que el texto no responde.",
    },
    question: "¿Claude podría trabajar con este prompt?",
    options: ["Sí, Claude puede hacerlo", "No, esto es demasiado complejo"],
    answer: 0,
    explain:
      "Buen punto. Pide mapa con ancla, no un ladrillo. Si un punto no tiene cita, queda como hipótesis.",
  },
  discovery:
    "Claude destaca cuando le pides anclas. En lugar de “resúmelo”, pegas el PDF y pides idea + cita + hueco. Eso recorta la invención.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Imagina un PDF de políticas de 40 páginas. Tú no quieres un ensayo. Quieres tres puntos que se puedan checar contra el documento.",
  exampleList: [
    "Idea en una frase",
    "Cita corta del párrafo",
    "Una pregunta que el texto no responde",
  ],
  exampleImg: img("meet-b.png"),
  multi: {
    title: "Qué recorta la invención",
    question: "Para consolidar, ¿qué hace útil un pedido a Claude?",
    options: [
      "Pegar el documento, no un “resúmelo” suelto",
      "Pedir cita o encabezado por punto",
      "Marcar como hipótesis lo que no se puede señalar",
    ],
    answers: [0, 1, 2],
    explain: "Las tres juntas. El adjetivo “profundo” no recorta nada.",
  },
  practice: {
    title: "Pide anclas",
    lead: "Un resumen sin cita es un borrador, no una fuente.",
    template: "Resume este PDF. En cada punto: {blank}, {blank} y una {blank} que el texto no responde.",
    answers: ["idea", "cita corta", "pregunta"],
    slots: ["idea", "ancla", "hueco"],
    simReply: {
      intro: "Tres puntos con ancla. El 2 no tenía párrafo: lo marqué como hipótesis.",
      sections: [
        {
          title: "Punto 1",
          text: "La política cubre proveedores locales — §3.2 — ¿aplica a freelancers?",
        },
        {
          title: "Punto 2",
          text: "Hipótesis: el plazo de 48 h no aparece en el PDF. No lo trates como hecho.",
        },
      ],
    },
  },
  review: {
    question: "Después de ver la respuesta, si Claude no puede citar el párrafo, ¿qué haces?",
    options: [
      "Lo publicas igual",
      "Lo tratas como hipótesis y vuelves al documento",
      "Le pides que invente la cita",
    ],
    answer: 1,
    explain: "Sin ancla, es un borrador, no una fuente.",
  },
  discovery2:
    "La fórmula para Claude: documento pegado + cita a la vista + tú vuelves al PDF. En las próximas lecciones vas a Projects, Artifacts y marcos. Este trío es el punto de partida.",
  closeItems: [
    "Úsalo en texto largo",
    "Tono contenido a propósito",
    "Tú vuelves al PDF",
  ],
});

const proyectos = coursivFlow({
  id: "proyectos",
  title: "Projects en Claude",
  blurb: "El brief y los PDFs se quedan. El caso de esta semana se pega encima",
  brand: B,
  hero: img("proyectos.png"),
  ui: img("proyectos-b.png"),
  problemImg: q(2),
  open: [
    "Un Project en Claude es el cajón del cliente: instrucciones, archivos y chats. Si cada vez subes el mismo PDF, estás pagando el peaje dos veces.",
    "Coursiv llama a esto Projects. El brief vive arriba. El caso de esta semana se pega encima. Cuando el documento cambia, reemplázalo. Claude no se entera solo.",
  ],
  quiz1: {
    question: "¿Qué va primero en el Project?",
    options: ["Un meme", "Instrucciones y archivos, luego el caso", "El color de la marca"],
    answer: 1,
    explain: "El caso sin brief improvisa. Las instrucciones recortan el tono.",
  },
  meetTitle: "Qué hereda el Project",
  meetText: "Instrucciones duras + archivos vigentes. Los chats son tareas, no un diario de 40 páginas.",
  meetList: [
    "Rol y tono (sin ironía, sin urgencia falsa)",
    "PDFs del caso, no de toda la empresa",
    "Formato de salida (mapa, no ladrillo)",
    "Un chat por tarea, no un hilo eterno",
  ],
  pair: {
    card: {
      lead: "Decide si este pedido usa el Project como cajón, no como chat suelto.",
      prompt: "Project del cliente. Instrucciones: sin ironía, sin urgencia falsa, un siguiente paso claro. Esta semana pega el PDF nuevo.",
    },
    question: "¿Este prompt usa el Project bien?",
    options: ["Sí: brief fijo, PDF de esta semana", "No: debería reescribir el rol cada vez"],
    answer: 0,
    explain: "El brief se queda. El archivo se actualiza.",
  },
  discovery: "El PDF se actualiza. Las instrucciones se quedan.",
  exampleTitle: "El cajón del cliente sensible",
  exampleText: "Mismo tono cada semana. Otro contrato. El Project evita reescribir “sin ironía” cada lunes.",
  exampleList: ["Instrucciones arriba", "PDF vigente adentro", "Chat corto para esta semana"],
  exampleImg: img("proyectos-b.png"),
  multi: {
    question: "¿Qué sostiene un Project en Claude?",
    options: [
      "Instrucciones de tono que se repiten",
      "Archivos vigentes, no versiones viejas",
      "Un chat por tarea, no un diario",
    ],
    answers: [0, 1, 2],
    explain: "Cajón. No un hilo de 40 páginas.",
  },
  practice: {
    title: "Instrucciones del cajón",
    lead: "Van arriba. El PDF de esta semana, adentro.",
    template: "Sin {blank}, sin {blank} falsa, con un {blank} claro al final.",
    answers: ["ironía", "urgencia", "siguiente paso"],
    slots: ["veto 1", "veto 2", "cierre"],
    simReply: {
      intro: "Instrucciones listas. El próximo PDF solo se pega.",
      sections: [
        { title: "Tono", text: "Sin ironía. Sin urgencia falsa. Un siguiente paso al cierre." },
        { title: "Archivo", text: "Reemplaza el PDF si cambió. Claude no adivina la versión nueva." },
      ],
    },
  },
  review: {
    question: "¿Para quién es este tono?",
    options: ["Un anuncio de Black Friday", "Un aviso interno o un cliente sensible", "Un stand-up"],
    answer: 1,
    explain: "Claude se luce cuando le dices a quién duele el mensaje.",
  },
  discovery2: "Si el PDF cambia, súbelo de nuevo. El Project no adivina la versión nueva.",
  closeItems: ["Un Project por cliente", "Chats cortos", "Reemplaza archivos viejos"],
});

const artifacts = coursivFlow({
  id: "artifacts",
  title: "Artifacts: algo que se puede copiar",
  blurb: "Un artefacto es un entregable, no un chat. Tabla, draft, checklist",
  brand: B,
  hero: img("artifacts.png"),
  ui: img("artifacts-b.png"),
  problemImg: q(3),
  open: [
    "Si el resultado vive en el hilo, se pierde. Pide un Artifact: un documento aparte que puedes copiar, iterar y pegar en el trabajo.",
    "Coursiv llama a esto Artifacts. Di el formato. “Hazlo bonito” no es un artefacto. Un memo, una tabla, un checklist: una cosa.",
  ],
  quiz1: {
    question: "¿Qué es un Artifact?",
    options: ["Un sticker", "Un entregable aparte del chat", "Un modelo más caro"],
    answer: 1,
    explain: "Se puede copiar. El hilo se ensucia.",
  },
  meetTitle: "Qué cabe en un Artifact",
  meetText: "Un memo, una tabla, un checklist, un borrador de política. Una cosa. El chat es el taller; el Artifact es el archivo.",
  meetList: ["Un título", "Un formato", "Una audiencia", "Un veto de tono"],
  pair: {
    card: {
      lead: "¿Este pedido pide un entregable o un chat?",
      prompt: "Crea un Artifact: checklist de 8 puntos para el equipo de tienda, tono interno, sin urgencia falsa.",
    },
    question: "¿Claude puede entregar esto como Artifact?",
    options: ["Sí: formato, audiencia y veto", "No: falta decir “hazlo bonito”"],
    answer: 0,
    explain: "Hay qué, para quién y cómo no debe sonar. Eso se copia. El hilo no.",
  },
  discovery: "Pide un Artifact cuando el texto tiene que salir del chat.",
  exampleTitle: "El checklist que sí se pega",
  exampleText: "El equipo de tienda necesita 8 puntos, no un ensayo. El Artifact se copia. El chat se queda.",
  exampleList: ["Checklist de 8 puntos", "Equipo de tienda", "Tono interno", "Sin urgencia falsa"],
  exampleImg: img("artifacts-b.png"),
  multi: {
    question: "¿Qué hace copiable un Artifact?",
    options: ["Un formato concreto", "Una audiencia", "Un veto de tono"],
    answers: [0, 1, 2],
    explain: "Se pega en el trabajo. El “hazlo bonito” no.",
  },
  practice: {
    title: "Pide el entregable",
    lead: "Formato primero.",
    template: "Crea un Artifact: {blank} para {blank}, tono {blank}, sin urgencia falsa.",
    answers: ["checklist de 8 puntos", "el equipo de tienda", "interno"],
    slots: ["qué", "para quién", "tono"],
    simReply: {
      intro: "Checklist en Artifact. Cópialo. No lo dejes en el chat.",
      sections: [
        { title: "Título", text: "Apertura de tienda — 8 puntos, tono interno." },
        { title: "Siguiente", text: "Itera el mismo objeto. No abras otro hilo para el mismo checklist." },
      ],
    },
  },
  review: {
    question: "¿Por qué no dejarlo en el hilo?",
    options: ["Porque se ve feo", "Porque el entregable se pierde entre mensajes", "Por moda"],
    answer: 1,
    explain: "El Artifact es el archivo. El chat es el taller.",
  },
  discovery2: "Luego iteras el mismo objeto. No abras otro chat para el mismo checklist.",
  closeItems: ["Un entregable", "Un formato", "Luego iteras el mismo objeto"],
});

const razon = coursivFlow({
  id: "razon",
  title: "Razonamiento en cadena",
  blurb: "Que muestre el camino entre dos ideas. No un salto de fe",
  brand: B,
  hero: img("razon.png"),
  ui: img("razon-b.png"),
  problemImg: q(4),
  open: [
    "Claude puede conectar un contrato con un mail y una tabla. Pídele el puente: qué dice A, qué dice B, dónde chocan.",
    "Coursiv llama a esto Reasoning. Si solo pides “la conclusión”, te comes el salto. El salto es donde se esconde el error.",
  ],
  quiz1: {
    question: "¿Qué pides para no tragarte un salto?",
    options: ["Solo la conclusión", "El puente entre dos ideas y dónde chocan", "Un poema"],
    answer: 1,
    explain: "El camino. La conclusión suelta miente fácil.",
  },
  meetTitle: "Pide el puente",
  meetText: "Idea A → evidencia → idea B → duda abierta. Así cazas la distorsión.",
  meetList: [
    "Qué afirma el texto",
    "Con qué se apoya",
    "Qué no dice",
    "Qué chocaría con otro archivo",
  ],
  pair: {
    card: {
      lead: "¿Este pedido pide el camino o solo la tesis?",
      prompt: "Compara la política §3 y el mail del proveedor. Lista coincidencias y choques y una duda abierta.",
    },
    question: "¿Este prompt pide razonamiento en cadena?",
    options: ["Sí: dos fuentes, choques y duda", "No: debería pedir solo la conclusión"],
    answer: 0,
    explain: "Hay puente. La tesis suelta se come el error.",
  },
  discovery: "Pide el puente, no solo la tesis.",
  exampleTitle: "PDF + mail del proveedor",
  exampleText: "La política dice un plazo. El mail dice otro. El pedido pide coincidencias, choques y una duda, no un veredicto.",
  exampleList: ["Fuente A: política §3", "Fuente B: mail del proveedor", "Salida: coincidencias y choques"],
  exampleImg: img("razon-b.png"),
  multi: {
    question: "¿Qué va en un cruce útil?",
    options: ["Dos fuentes nombradas", "Choques a la vista", "Una duda abierta al final"],
    answers: [0, 1, 2],
    explain: "Contrastar es el oficio. El veredicto suelto no.",
  },
  practice: {
    title: "Cruza dos fuentes",
    lead: "PDF + mail. Dónde no coinciden.",
    template: "Compara {blank} y {blank}. Lista {blank} y una duda abierta.",
    answers: ["la política §3", "el mail del proveedor", "coincidencias y choques"],
    slots: ["fuente A", "fuente B", "salida"],
    simReply: {
      intro: "Dos choques. El plazo del mail no está en la política. Hipótesis, no hecho.",
      sections: [
        { title: "Coincidencia", text: "Ambos hablan de entrega local." },
        { title: "Choque", text: "El mail promete 48 h. La política no lo dice. Márcalo y vuelve a las dos fuentes." },
      ],
    },
  },
  review: {
    question: "¿Qué haces con el choque?",
    options: ["Lo publicas como verdad", "Lo marcas y vuelves a las dos fuentes", "Eliges el más dramático"],
    answer: 1,
    explain: "Contrastar es el oficio.",
  },
  discovery2: "El salto es donde se esconde el error. El puente lo deja a la vista.",
  closeItems: ["Dos fuentes", "Choques a la vista", "Duda abierta al final"],
});

const marcos = coursivFlow({
  id: "marcos",
  title: "Marcos para pensar",
  blurb: "Un marco es una tabla. “Analízalo” es una nube",
  brand: B,
  hero: img("marcos.png"),
  ui: img("marcos-b.png"),
  problemImg: q(1),
  open: [
    "Riesgo / impacto / evidencia / qué falta. O tesis / antítesis / qué no dice el texto. Elige un marco y no lo mezcles a mitad de camino.",
    "Coursiv llama a esto Frameworks for Thinking. Claude llena el marco. Tú eliges si el marco era el correcto.",
  ],
  quiz1: {
    question: "¿Qué es un marco útil?",
    options: ["La palabra “estratégico”", "Columnas que se pueden llenar con citas", "Un logo"],
    answer: 1,
    explain: "Se llena. No se admira.",
  },
  meetTitle: "Un marco por pedido",
  meetText: "Si pides “análisis profundo” te suelta un ensayo. Pide columnas.",
  meetList: ["Riesgo", "Evidencia (cita)", "Impacto", "Qué falta en el documento"],
  pair: {
    card: {
      lead: "¿Este pedido se puede llenar o es una nube?",
      prompt: "Arma tabla: riesgo, cita, impacto, qué falta. Nada de prosa.",
    },
    question: "¿Este prompt es un marco ejecutable?",
    options: ["Sí: columnas que se llenan", "No: falta decir “análisis profundo”"],
    answer: 0,
    explain: "Se llena con citas. El ensayo “estratégico” no.",
  },
  discovery: "Un marco, unas columnas. “Analízalo” no se ejecuta.",
  exampleTitle: "Cuatro columnas, nada de prosa",
  exampleText: "El PDF de la política entra a la tabla. Si una fila no tiene cita, el impacto queda en gris.",
  exampleList: ["Riesgo", "Cita", "Impacto", "Qué falta"],
  exampleImg: img("marcos-b.png"),
  multi: {
    question: "¿Qué hace llenable un marco?",
    options: ["Columnas nombradas", "Citas en la evidencia", "Una columna de “qué falta”"],
    answers: [0, 1, 2],
    explain: "El documento no dice todo. El marco lo admite.",
  },
  practice: {
    title: "Llena el marco",
    lead: "Cuatro columnas. Nada de prosa.",
    template: "Arma tabla: {blank}, {blank}, {blank}, qué falta.",
    answers: ["riesgo", "cita", "impacto"],
    slots: ["col 1", "col 2", "col 3"],
    simReply: {
      intro: "Cuatro filas. La 3 no tenía cita: impacto en gris.",
      sections: [
        { title: "Fila 1", text: "Riesgo: plazo ambiguo — §3.2 — impacto en proveedores locales." },
        { title: "Fila 3", text: "Sin cita: no sube como hecho. Qué falta: el caso freelancer." },
      ],
    },
  },
  review: {
    question: "¿Por qué la columna “qué falta” importa?",
    options: ["Queda bonita", "Evita tratar el PDF como la verdad completa", "Es más largo"],
    answer: 1,
    explain: "El documento no dice todo. El marco lo admite.",
  },
  discovery2: "Elige el marco antes. Si lo mezclas a mitad, Claude rellena dos lógicas a la vez.",
  closeItems: ["Elige el marco antes", "Citas en la evidencia", "Qué falta siempre"],
});

const creatividad = coursivFlow({
  id: "creatividad",
  title: "Creatividad con reglas",
  blurb: "Claude también inventa. Las reglas evitan el anuncio de 2012",
  brand: B,
  hero: img("creatividad.png"),
  ui: img("creatividad-b.png"),
  problemImg: q(2),
  open: [
    "Pide cercanía sin chiste. Claude se luce cuando le dices a quién duele el mensaje y qué no puede sonar a urgencia falsa.",
    "Coursiv llama a esto Creativity. Tres ángulos, un veto, una ficha. Luego eliges. “Sé creativo” suelta eslóganes de 2012.",
  ],
  quiz1: {
    question: "¿Qué estimula mejor a Claude?",
    options: ["“Hazlo viral”", "Audiencia + veto + tres ángulos", "Un emoji de fuego"],
    answer: 1,
    explain: "Reglas. El viral no es un brief.",
  },
  meetTitle: "Estímulo, no firework",
  meetText: "“Sé creativo” suelta eslóganes. “Tres cartas a proveedores, tono interno, sin amenaza” se puede mandar.",
  meetList: ["Audiencia", "Veto de tono", "Tres opciones", "Una se edita"],
  pair: {
    card: {
      lead: "¿Este brief se puede producir?",
      prompt: "Tres versiones para un proveedor que se atrasó. Sin amenaza ni ironía. Elige la más clara.",
    },
    question: "¿Claude puede trabajar con este brief creativo?",
    options: ["Sí: audiencia, veto y criterio", "No: falta “hazlo viral”"],
    answer: 0,
    explain: "Se puede mandar. El firework no.",
  },
  discovery: "Cercanía sin chiste. El anuncio no es un aviso interno.",
  exampleTitle: "Tres cartas, un veto",
  exampleText: "Misma noticia, distinto ángulo. El proveedor se atrasó. Nadie amenaza. Tú eliges la más clara.",
  exampleList: ["Audiencia: proveedor", "Veto: amenaza e ironía", "Criterio: la más clara"],
  exampleImg: img("creatividad-b.png"),
  multi: {
    question: "¿Qué recorta un brief creativo en Claude?",
    options: ["A quién le duele el mensaje", "Un veto de tono", "Tres ángulos, no ochenta"],
    answers: [0, 1, 2],
    explain: "Reglas. Luego editas la ganadora.",
  },
  practice: {
    title: "Tres cartas, un veto",
    lead: "Misma noticia, distinto ángulo.",
    template: "Tres versiones para {blank}. Sin {blank}. Elige la más {blank}.",
    answers: ["un proveedor que se atrasó", "amenaza ni ironía", "clara"],
    slots: ["audiencia", "veto", "criterio"],
    simReply: {
      intro: "La 2 se puede mandar. La 1 aún suena a recado de gerencia.",
      sections: [
        { title: "Versión 2", text: "Hecho, fecha nueva, un siguiente paso. Sin amenaza." },
        { title: "Descartada", text: "La 1 usa “como ya sabrás”. Eso es ironía disfrazada." },
      ],
    },
  },
  review: {
    question: "¿Qué hace humana la carta?",
    options: ["Más adjetivos", "Un veto de tono y a quién duele", "Mayúsculas"],
    answer: 1,
    explain: "A quién le duele. No el adjetivo “humano”.",
  },
  discovery2: "Tres ángulos. Un veto. Editas la ganadora. Claude no publica.",
  closeItems: ["Tres ángulos", "Un veto", "Editas la ganadora"],
});

const escritura = coursivFlow({
  id: "escritura",
  title: "Escribir y editar con Claude",
  blurb: "Pide palo. Marca fallas. Reescribe el párrafo flojo",
  brand: B,
  hero: img("escritura.png"),
  ui: img("escritura-b.png"),
  problemImg: q(3),
  open: [
    "Claude puede ser un editor si le das el texto y el criterio. “Mejóralo” aplaude. “Corta a 200 palabras, quita la urgencia, marca 3 fallas” edita.",
    "Coursiv llama a esto Writing and Editing. Pega el original. Si no, reescribe un fantasma. Primero diagnóstico. Después reescritura.",
  ],
  quiz1: {
    question: "¿Qué pides primero?",
    options: ["La versión final", "Las fallas, luego el recorte", "Un like"],
    answer: 1,
    explain: "Diagnóstico antes de cirujano.",
  },
  meetTitle: "Dos pasadas",
  meetText: "Primero diagnóstico (fallas). Después reescritura. Si las juntas, se le va el diagnóstico.",
  meetList: ["Pega el original", "Lista de fallas", "Reescritura con límites", "Tú aceptas o rechazas"],
  pair: {
    card: {
      lead: "¿Este pedido edita o aplaude?",
      prompt: "Marca 3 fallas. Reescribe a 200 palabras, tono interno sin urgencia.",
    },
    question: "¿Este prompt pide edición real?",
    options: ["Sí: fallas, largo y tono", "No: debería decir “mejóralo”"],
    answer: 0,
    explain: "Hay criterio. “Mejóralo” aplaude.",
  },
  discovery: "Sé directo. Marca fallas. Reescribe el párrafo flojo.",
  exampleTitle: "El aviso interno de 400 palabras",
  exampleText: "Pegas el original. Pides 3 fallas y luego 200 palabras sin urgencia. El párrafo 2 suele ser el flojo.",
  exampleList: ["3 fallas a la vista", "200 palabras", "Tono interno sin urgencia"],
  exampleImg: img("escritura-b.png"),
  multi: {
    question: "¿Qué hace útil una pasada de edición?",
    options: ["Pegar el original", "Separar diagnóstico y reescritura", "Límites de tono y largo"],
    answers: [0, 1, 2],
    explain: "Si mezcla, el error se esconde en la prosa nueva.",
  },
  practice: {
    title: "Edita con criterio",
    lead: "Fallas primero.",
    template: "Marca {blank} fallas. Reescribe a {blank} palabras, tono {blank}.",
    answers: ["3", "200", "interno sin urgencia"],
    slots: ["cuántas", "largo", "tono"],
    simReply: {
      intro: "Tres fallas. Versión 2 en 198 palabras. El párrafo 2 era el flojo.",
      sections: [
        { title: "Fallas", text: "Urgencia falsa, sujeto borroso, CTA escondido al final." },
        { title: "Reescritura", text: "198 palabras. Tono interno. Tú firmas o rechazas el párrafo 2." },
      ],
    },
  },
  review: {
    question: "¿Por qué separar diagnóstico y reescritura?",
    options: ["Por capricho", "Para no perder las fallas en el texto nuevo", "Por SEO"],
    answer: 1,
    explain: "Si mezcla, el error se esconde en la prosa nueva.",
  },
  discovery2: "Tú aceptas o rechazas. Claude no firma el aviso.",
  closeItems: ["Original pegado", "Límites de tono", "Tú firmas"],
});

const sintesis = coursivFlow({
  id: "sintesis",
  title: "Investigar y sintetizar",
  blurb: "Tesis, secciones, riesgos y lo que el texto no dice",
  brand: B,
  hero: img("sintesis.png"),
  ui: img("sintesis-b.png"),
  problemImg: q(4),
  open: [
    "Para un PDF de 40 páginas no pidas “un resumen”. Pide un mapa: tesis, 5 secciones, riesgos y una pregunta que el texto no responde.",
    "Coursiv llama a esto Research and Synthesis. El ladrillo no se lee. El mapa sí.",
  ],
  quiz1: {
    question: "¿Qué pides para un PDF largo?",
    options: ["“Resúmelo”", "Tesis, secciones, riesgos y una pregunta abierta", "Un acróstico"],
    answer: 1,
    explain: "Mapa. El ladrillo se ignora.",
  },
  meetTitle: "El mapa cabe en una página",
  meetText: "Por encabezado: idea, cita corta, duda. Si no hay cita, no hay sección.",
  meetList: ["Tesis en una frase", "Cinco secciones", "Riesgos", "Lo que no dice"],
  pair: {
    card: {
      lead: "¿Este pedido cabe en una página o pide un ladrillo?",
      prompt: "Dame la tesis, cinco secciones y una pregunta que el texto no responde.",
    },
    question: "¿Este prompt pide un mapa útil?",
    options: ["Sí: tesis, mapa y hueco", "No: debería pedir “un resumen”"],
    answer: 0,
    explain: "Se lee. El ladrillo se ignora.",
  },
  discovery: "Pide un mapa, no un ladrillo.",
  exampleTitle: "40 páginas, una cara",
  exampleText: "La sección 4 no tenía cita: baja a hipótesis. El mapa cabe en una página.",
  exampleList: ["Tesis corta", "Cinco secciones con cita", "Una pregunta abierta"],
  exampleImg: img("sintesis-b.png"),
  multi: {
    question: "¿Qué va en un mapa de síntesis?",
    options: ["Tesis en una frase", "Citas por sección", "Una pregunta que el texto no responde"],
    answers: [0, 1, 2],
    explain: "Sin ancla, la sección no sube al mapa firme.",
  },
  practice: {
    title: "Pide el mapa",
    lead: "40 páginas no caben en un párrafo.",
    template: "Dame la {blank}, cinco {blank} y una {blank} que el texto no responde.",
    answers: ["tesis", "secciones", "pregunta"],
    slots: ["tesis", "mapa", "hueco"],
    simReply: {
      intro: "Mapa en una página. La sección 4 no tenía cita: la bajé a hipótesis.",
      sections: [
        { title: "Tesis", text: "La política cubre proveedores locales; no dice freelancers." },
        { title: "Hueco", text: "¿El plazo de 48 h aplica fuera de la ciudad? El texto no responde." },
      ],
    },
  },
  review: {
    question: "¿Qué haces con la sección sin cita?",
    options: ["La publicas", "La marcas como hipótesis", "La pones en negritas"],
    answer: 1,
    explain: "Sin ancla, no sube al mapa firme.",
  },
  discovery2: "Tesis corta. Citas por sección. Una pregunta abierta. Tú vuelves al PDF.",
  closeItems: ["Tesis corta", "Citas por sección", "Una pregunta abierta"],
});

const critico = coursivFlow({
  id: "critico",
  title: "Revisión crítica",
  blurb: "Qué sostiene el texto, qué asume y qué pasaría si la asunción falla",
  brand: B,
  hero: img("critico.png"),
  ui: img("critico-b.png"),
  problemImg: q(1),
  open: [
    "Pensar con Claude no es que “opine”. Es que separe hechos, asunciones y recomendaciones. Si las mezcla, te come un consejo disfrazado de dato.",
    "Coursiv llama a esto Critical Thinking. Pide: qué está respaldado, qué se asume, qué probarías antes de actuar.",
  ],
  quiz1: {
    question: "¿Qué es una asunción?",
    options: ["Una cita del PDF", "Algo que el texto da por sentado sin prueba", "Un logo"],
    answer: 1,
    explain: "Se marca. No se obedece.",
  },
  meetTitle: "Tres cajones",
  meetText: "Hecho / asunción / palanca. No dejes que el tono seguro mezcle los tres.",
  meetList: ["Hecho con cita", "Asunción sin cita", "Qué probarías esta semana"],
  pair: {
    card: {
      lead: "¿Este pedido separa cajones o pide una opinión?",
      prompt: "Lista hechos con cita, asunciones sin prueba y una prueba para esta semana.",
    },
    question: "¿Este prompt pide revisión crítica?",
    options: ["Sí: hecho, asunción y palanca", "No: debería pedir “qué opinas”"],
    answer: 0,
    explain: "Los cajones evitan el consejo disfrazado de dato.",
  },
  discovery: "Separa hecho, asunción y palanca.",
  exampleTitle: "El informe que “suena seguro”",
  exampleText: "Dos hechos con cita. Una asunción de demanda. Una prueba chica esta semana: 20 clientes.",
  exampleList: ["Hechos con cita", "Asunciones a la vista", "Una prueba, no un plan de 90 días"],
  exampleImg: img("critico-b.png"),
  multi: {
    question: "¿Qué va en una revisión crítica?",
    options: ["Cita en el hecho", "Asunción marcada", "Una prueba chica, no un plan eterno"],
    answers: [0, 1, 2],
    explain: "El tono seguro miente. El cajón no.",
  },
  practice: {
    title: "Separa los cajones",
    lead: "Hecho, asunción, palanca.",
    template: "Lista {blank} con cita, {blank} sin prueba y {blank} para esta semana.",
    answers: ["hechos", "asunciones", "una prueba"],
    slots: ["hechos", "huecos", "acción"],
    simReply: {
      intro: "Dos hechos. Una asunción de demanda. Prueba: 20 clientes esta semana.",
      sections: [
        { title: "Hecho", text: "El PDF cita 12 proveedores locales — §2." },
        { title: "Asunción", text: "Que la demanda sube en marzo. Sin prueba. No la ejecutes como dato." },
      ],
    },
  },
  review: {
    question: "¿Por qué marcar la asunción?",
    options: ["Por pedantería", "Para no ejecutar un consejo como si fuera dato", "Por diseño"],
    answer: 1,
    explain: "El tono seguro miente. El cajón no.",
  },
  discovery2: "Una prueba chica esta semana. El plan de 90 días espera a esa prueba.",
  closeItems: ["Cita en el hecho", "Asunción a la vista", "Una prueba chica"],
});

const junto = coursivFlow({
  id: "junto",
  title: "Claude junto a otras IAs",
  blurb: "Claude lee y matiza. ChatGPT borra. Perplexity busca. No son el mismo oficio",
  brand: B,
  hero: img("junto.png"),
  ui: img("junto-b.png"),
  problemImg: q(2),
  trophy: true,
  open: [
    "Un flujo típico: Perplexity o búsqueda para pistas, Claude para leer el PDF y el tono, ChatGPT para el mail corto. Si le pides todo a uno, paga en matices o en velocidad.",
    "Coursiv cierra con Using Claude Alongside Other AIs. Elige el oficio, no la marca de moda. No es infidelidad cambiar de herramienta.",
  ],
  quiz1: {
    question: "¿Qué le das a Claude en un flujo mixto?",
    options: ["El meme", "El PDF y el tono del aviso", "El render 4K"],
    answer: 1,
    explain: "Su oficio. El resto, otra mesa.",
  },
  meetTitle: "Quién hace qué",
  meetText: "No es infidelidad cambiar de herramienta. Es no usar un destornillador de martillo.",
  meetList: [
    "Claude: documentos, tono, citas",
    "ChatGPT: mails, plantillas, GPTs",
    "Perplexity: pistas con enlaces",
    "Tú: la firma",
  ],
  pair: {
    card: {
      lead: "¿Este reparto respeta oficios?",
      prompt: "Busco con Perplexity, leo el PDF con Claude, redacto el mail con ChatGPT.",
    },
    question: "¿Este flujo usa a cada IA en su oficio?",
    options: ["Sí: pistas, documento, pieza", "No: todo debería ir a Claude"],
    answer: 0,
    explain: "Puedes hacerlo todo en uno; pagas en algo. El reparto es más limpio.",
  },
  discovery: "Reparte oficios. La firma es tuya.",
  exampleTitle: "Tres estaciones, un aviso",
  exampleText: "Pistas del mercado, PDF de política, mail de 90 palabras. No mezcles el PDF en el chat del meme.",
  exampleList: ["Perplexity: pistas", "Claude: PDF y tono", "ChatGPT: mail corto"],
  exampleImg: img("junto-b.png"),
  multi: {
    question: "¿Qué queda en cada estación?",
    options: ["Pistas con enlace", "Documento y matiz en Claude", "Pieza corta en ChatGPT"],
    answers: [0, 1, 2],
    explain: "Oficios. Las citas se quedan en Claude.",
  },
  practice: {
    title: "Reparte el trabajo",
    lead: "Tres estaciones.",
    template: "Busco con {blank}, leo el PDF con {blank}, redacto el mail con {blank}.",
    answers: ["Perplexity", "Claude", "ChatGPT"],
    slots: ["pistas", "documento", "mail"],
    simReply: {
      intro: "Reparto listo. No mezcles el PDF en el chat del meme.",
      sections: [
        { title: "Claude", text: "Citas y tono del aviso. El matiz se queda aquí." },
        { title: "ChatGPT", text: "Mail corto. El PDF no viaja a esa mesa." },
      ],
    },
  },
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
  discovery2:
    "Ya tienes anclas, Projects, Artifacts, puentes, marcos, creatividad con veto, edición en dos pasadas, mapas, cajones críticos y un reparto de oficios. Eso es Claude al ritmo de Coursiv: una idea por clic, una tarea en el workspace, tú firmas el PDF.",
  closeItems: ["Pistas / documento / pieza", "No un chat único eterno", "Citas se quedan en Claude"],
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
