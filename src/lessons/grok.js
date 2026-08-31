import { track } from "./kit.js";

const error = track({
  id: "error",
  title: "Grok: xAI, X y el error a la vista",
  blurb: "No es ChatGPT con memes. Es xAI, vive en X y brilla cuando pegas el fallo.",
  scene: "code",
  brand: "Grok",
  hook: [
    "Grok es el chat de xAI. En X ve lo que está pasando ahora: un hilo, una API que se cayó hace una hora, un rumor que ChatGPT aún no tiene. También escribe código corto. Si lo usas como oráculo de marca, se te va al chiste.",
    "El primer oficio no es “sé gracioso”. Es: pega el error completo. Mensaje, stack, archivo y lo que intentabas. Si recortas el traceback, Grok adivina. Si le das el fallo, la respuesta cabe en un mensaje.",
  ],
  body: {
    title: "Tres piezas del fallo (y qué es esta IA)",
    text: "xAI + X = actualidad y tono suelto. Código = el cajón diario. El pedido útil es error + archivo + cambio mínimo. No un rewrite. No un “arregla mi app”.",
  },
  bullets: [
    "Grok = xAI; actualidad entra por X, no por un PDF de 2019",
    "Pega el mensaje o el stack entero, no un resumen",
    "El archivo (o el recorte) donde revienta",
    "Qué querías que pasara, en una línea",
  ],
  quiz: {
    question: "¿Qué le das primero a Grok cuando algo revienta?",
    options: [
      "“Arregla mi app”",
      "El error completo, el archivo y el cambio mínimo que quieres",
      "Un meme de xAI",
      "Solo el nombre del framework",
    ],
    answer: 1,
    explain: "Contexto de falla. Sin el stack, improvisa arquitectura.",
  },
  practice: {
    title: "Completa el pedido de error",
    lead: "Tres piezas. El chiste puede esperar.",
    template: "Pega el {blank}, el {blank} y pide el {blank} mínimo. Nada de rewrite.",
    answers: ["error", "archivo", "cambio"],
    slots: ["qué falló", "dónde", "qué quieres"],
    simReply: {
      intro: "Causa en dos frases y un diff de 6 líneas. El rewrite sobraba. xAI no firmó tu deploy.",
    },
    review: {
      question: "¿Por qué Grok y no un chat genérico para este fallo?",
      options: [
        "Porque Elon lo dijo",
        "Porque pegas el error y quieres un parche corto, no un ensayo de marca",
        "Porque escribe mejor poesía",
      ],
      answer: 1,
      explain: "Oficio: fallo a la vista. ChatGPT y Claude brillan en otras mesas.",
    },
  },
  close: {
    tip: "pega el error completo, el archivo y el cambio mínimo que quieres.",
    items: ["Stack entero", "Archivo", "Diff chico, no arquitectura"],
  },
});

const minimo = track({
  id: "minimo",
  title: "El cambio mínimo, no el rewrite",
  blurb: "Si el bug es de una línea, dilo. Grok se va a arquitectura si le das permiso.",
  scene: "code",
  brand: "Grok",
  hook: [
    "“Refactoriza esto” es un permiso. Grok (y Cursor, y Claude) lo toman. Te devuelven otra app. Tú querías el `if` que faltaba.",
    "Di el techo: “solo la función que truena, cero archivos nuevos, no muevas nombres”. El cambio mínimo se puede revisar. El rewrite, no a las 6 de la tarde.",
  ],
  body: {
    title: "El techo va en el pedido",
    text: "Sin techo, el modelo “mejora” lo que no le pediste. Con techo, te da un diff. Tú pegas, corres, y si sigue roto, otra pasada.",
  },
  bullets: [
    "Di qué archivo puede tocar",
    "Di qué no: nombres, tests ajenos, “limpiar”",
    "Una hipótesis, no cinco refactors",
    "Si quieres arquitectura, pídela en otro hilo",
  ],
  quiz: {
    question: "¿Pides un refactor cuando el bug es de una línea?",
    options: ["Sí, siempre, para quedar pro", "No: pides el cambio mínimo y vetas el resto", "Solo si suena a senior"],
    answer: 1,
    explain: "Permiso explícito. Si no, se va a arquitectura.",
  },
  practice: {
    title: "Ponle techo al parche",
    lead: "Una función. Nada más.",
    template: "Solo toca {blank}. No {blank}. Devuelve el {blank} mínimo.",
    answers: ["la función que truena", "renombres ni archivos nuevos", "diff"],
    slots: ["dónde", "veto", "formato"],
    simReply: {
      intro: "Seis líneas. El nombre del helper se quedó. Bien: se puede revisar en un café.",
    },
    review: {
      question: "¿Qué pasa si no pones techo?",
      options: ["Trabaja más fino", "Reescribe la carpeta y no sabes qué arregló el bug", "Nada"],
      answer: 1,
      explain: "El rewrite esconde el fallo. El diff chico lo enseña.",
    },
  },
  close: {
    tip: "si el bug es de una línea, dilo. El rewrite es otro oficio.",
    items: ["Techo en el prompt", "Un archivo", "Otra pasada si sigue roto"],
  },
});

const causa = track({
  id: "causa",
  title: "Causa en dos frases",
  blurb: "Primero el porqué. Luego el parche. Si sale un ensayo, recorta.",
  scene: "code",
  brand: "Grok",
  hook: [
    "Un diff sin causa es magia. Mañana el mismo bug con otro nombre. Pide: causa en dos frases, después el parche. Como a un colega en stand-up, no como a un paper.",
    "Si Grok te suelta un hilo de 40 líneas sobre event loops, recorta: “dos frases y el diff. El ensayo, no”.",
  ],
  body: {
    title: "Diagnóstico corto, parche después",
    text: "La causa cabe en lo que un humano puede contradecir. “El índice se usa antes del await” sí. “Hay un problema de asincronía en el ecosistema” no.",
  },
  bullets: [
    "Causa: dos frases, un culpable concreto",
    "Parche: el cambio mínimo",
    "Si no puede nombrarlo, pide otra hipótesis",
    "Tú confirmas con el repro",
  ],
  quiz: {
    question: "¿Qué pides primero: el parche o la causa?",
    options: [
      "El parche, para ir rápido",
      "La causa en dos frases y luego el parche",
      "Un diagrama UML",
    ],
    answer: 1,
    explain: "Sin causa, el diff es un hechizo. No se audita.",
  },
  practice: {
    title: "Completa la explicación",
    lead: "Corto y accionable.",
    template: "Causa en {blank} frases y el {blank} en un {blank}. Sin ensayo.",
    answers: ["dos", "parche", "diff"],
    slots: ["largo", "qué", "formato"],
    simReply: {
      intro: "Causa: el `user` llega null porque el fetch no espera. Parche: un guard en la línea 42. Listo.",
      sections: [{ title: "Si no cuadra", text: "Pide otra hipótesis. No aceptes “asincronía” a secas." }],
    },
    review: {
      question: "Grok te escribe un ensayo de event loops. ¿Qué haces?",
      options: ["Lo publicas en el wiki", "Recortas: dos frases y el diff", "Cambias a Gemini por deporte"],
      answer: 1,
      explain: "El formato se pide. El modelo no adivina que tienes prisa.",
    },
  },
  close: {
    tip: "pide la causa en dos frases y el parche. Si sale un ensayo, recorta.",
    items: ["Diagnóstico corto", "Diff después", "Tú corres el repro"],
  },
});

const debug = track({
  id: "debug",
  title: "Debug: reproduce, no adivines",
  blurb: "Input que truena, output que esperabas, lo que salió. Grok no abre tu laptop.",
  scene: "code",
  brand: "Grok",
  hook: [
    "“No funciona” no es un ticket. “Con `id=0` debería devolver 200 y revienta en `parseInt`” sí. Grok debuggea lo que puede ver. El resto lo inventa, y suena seguro.",
    "Pega 10 líneas alrededor, no el repo. Di si ya corriste tests. Si el error es de tipos, pega el tipo. Cursor y Claude Code hacen lo mismo: sin repro, hay teatro.",
  ],
  body: {
    title: "El repro es el brief",
    text: "Pasos para romperlo + el recorte + el síntoma. Hipótesis al final, si tienes una. Si no, Grok propone una; tú la cazas en runtime.",
  },
  bullets: [
    "Input que truena (el caso, no “a veces”)",
    "Qué esperabas / qué salió",
    "10–30 líneas, no mil",
    "Una hipótesis tuya o “no sé, dame una”",
  ],
  quiz: {
    question: "¿Qué hace útil un pedido de debug?",
    options: [
      "Pegar todo el repo",
      "El caso que truena, el recorte y el síntoma",
      "Decirle que sea senior",
    ],
    answer: 1,
    explain: "Se puede reproducir. El repo entero es ruido.",
  },
  practice: {
    title: "Arma el repro",
    lead: "Caso, síntoma, recorte.",
    template: "Con {blank} esperaba {blank} y salió {blank}. Pega las 12 líneas. Cambio mínimo.",
    answers: ["id=0", "200 y un user", "TypeError en parseInt"],
    slots: ["input", "esperado", "síntoma"],
    simReply: {
      intro: "Hipótesis: `id=0` es falsy y el guard lo trata como vacío. Parche de 3 líneas. Corre el caso otra vez.",
    },
    review: {
      question: "¿Grok “ve” tu runtime?",
      options: ["Sí, siempre", "No: ve lo que pegas. El resto lo inventa", "Solo en xAI Premium"],
      answer: 1,
      explain: "Pegar es el oficio. La telepatía no.",
    },
  },
  close: {
    tip: "el repro es el brief. Sin caso, hay teatro.",
    items: ["Input que truena", "Recorte corto", "Tú corres después del diff"],
  },
});

const humor = track({
  id: "humor",
  title: "Humor de Grok vs el trabajo",
  blurb: "El tono suelto es un modo. Un mail a un cliente no es un hilo de X.",
  scene: "code",
  brand: "Grok",
  hook: [
    "Grok viene con personalidad: más filo, más meme, menos brochure. En X eso vende. En un aviso de nómina, te quema. El humor es palanca, no default.",
    "Di el registro: “cero chistes, tono de ticket, 8 líneas”. Si no lo vetas, Grok rellena con ironía. Claude hace lo contrario: se pasa de formal. Elige la mesa.",
  ],
  body: {
    title: "Dos modos, un mismo modelo",
    text: "Hilo, brainstorm y debug entre colegas: filo ok. Cliente, legal, RH: veta el chiste en la primera línea. No “sé profesional” — eso es un adjetivo. “Sin ironía, sin meme, sin emoji”.",
  },
  bullets: [
    "Humor: ideas, X, debug entre pares",
    "Sin humor: cliente, dinero, personas",
    "El veto va primero, no al final",
    "Si sale un chiste, recorta; no negocies el tono en el hilo 12",
  ],
  quiz: {
    question: "¿Cuándo dejas el humor de Grok encendido?",
    options: [
      "En un mail de cobro",
      "En un brainstorm o un debug entre colegas",
      "Siempre, porque es la marca de xAI",
    ],
    answer: 1,
    explain: "El filo es un modo. El cobro no es un stand-up.",
  },
  practice: {
    title: "Elige el registro",
    lead: "Una línea de veto. O de permiso.",
    template: "Este texto es para {blank}. Quiero tono {blank}, {blank} chistes.",
    answers: ["un cliente que espera un pago", "ticket, 8 líneas", "cero"],
    slots: ["quién", "registro", "humor"],
    simReply: {
      intro: "Ocho líneas. Cero ironía. El meme del deploy se queda en el canal interno.",
    },
    review: {
      question: "¿“Sé profesional” basta?",
      options: ["Sí", "No: veta ironía, meme y emoji. El adjetivo no se ejecuta", "Solo en Grok 4"],
      answer: 1,
      explain: "Los vetos se cumplen. Profesional no se mide.",
    },
  },
  close: {
    tip: "el humor es palanca. En cliente, dinero o personas, se apaga.",
    items: ["Veto primero", "Filo entre pares", "No negocies el tono a la mitad"],
  },
});

const archivos = track({
  id: "archivos",
  title: "Archivos y contexto",
  blurb: "Grok no abre tu repo. Pegas el recorte, el log o el PDF que sí importa.",
  scene: "code",
  brand: "Grok",
  hook: [
    "En grok.com y en X puedes pegar texto, a veces archivos, a veces una captura. Nada de eso es tu monorepo. Si el contexto son 12 archivos, resume: “esta función llama a esta; el error sale aquí”.",
    "Claude Projects guarda el PDF. ChatGPT tiene GPTs. Grok vive más en el hilo. Cada mensaje tiene que llevar lo que el anterior no cubrió, o lo pegas otra vez.",
  ],
  body: {
    title: "El cajón es el recorte",
    text: "Pega de más y se diluye. Pega de menos y adivina. Regla: el archivo que truena + 1 dependencia + el error. Si hay un README de 4 líneas que define el comando, pégalo. El resto, no.",
  },
  bullets: [
    "El archivo del síntoma",
    "Una dependencia, no diez",
    "Log o stack de esta corrida",
    "No el historial de 40 mensajes “por si acaso”",
  ],
  quiz: {
    question: "¿Cuánto contexto le das a Grok?",
    options: [
      "Todo el repo, por si acaso",
      "El recorte que truena, una dependencia y el log de esta corrida",
      "Solo el nombre del lenguaje",
    ],
    answer: 1,
    explain: "Bastante para reproducir. Poco para diluir.",
  },
  practice: {
    title: "Arma el cajón",
    lead: "Tres pegotes. El monorepo se queda fuera.",
    template: "Pego {blank}, {blank} y {blank}. Nada más en este hilo.",
    answers: ["las 20 líneas de parseUser", "el tipo User", "el log de hoy"],
    slots: ["recorte", "dependencia", "síntoma"],
    simReply: {
      intro: "Con eso alcanza. El README de 80 páginas no iba a salvar el `parseInt`.",
    },
    review: {
      question: "El hilo ya tiene 30 mensajes. ¿Pegas el archivo otra vez?",
      options: [
        "No, “ya lo vio”",
        "Sí, si el recorte importa otra vez: Grok no es un Project de Claude",
        "Solo los viernes",
      ],
      answer: 1,
      explain: "El hilo se ensucia. El recorte fresco gana.",
    },
  },
  close: {
    tip: "el cajón es el recorte. Grok no vive en tu repo.",
    items: ["Síntoma + 1 dependencia", "Log de esta corrida", "Hilos cortos"],
  },
});

const actualidad = track({
  id: "actualidad",
  title: "Actualidad y X",
  blurb: "Grok ve el timeline. ChatGPT, no. Tú igual abres el enlace.",
  scene: "code",
  brand: "Grok",
  hook: [
    "Si la pregunta es “qué rompió la API de X esta mañana” o “qué está diciendo el hilo de este CVE”, Grok es la mesa. xAI lo enchufa a X. ChatGPT y Claude se quedan en su corte de conocimiento o en una búsqueda genérica.",
    "Actualidad no es verdad. Un hilo viral miente con estilo. Pide: qué se afirma, de cuándo, y 2 cuentas o enlaces. Luego abres. Perplexity hace el mismo oficio con fuentes; Grok lo hace con el timeline.",
  ],
  body: {
    title: "Pista, no titular",
    text: "“Resume X sin citar” es un rumor empacado. “Qué se dijo hoy sobre Y, con hora y cuenta” se puede checar. Si Grok no ancla, es un borrador.",
  },
  bullets: [
    "Pregunta con “hoy / esta semana / en X”",
    "Pide cuentas, hora o enlace",
    "Contrasta: dos pistas, no una",
    "Código viejo y docs estables: otro chat puede bastar",
  ],
  quiz: {
    question: "¿Cuándo tiene sentido Grok frente a ChatGPT?",
    options: [
      "Para un contrato de 80 páginas",
      "Cuando el dato vive en X ahora mismo",
      "Para Brand Voice de Jasper",
    ],
    answer: 1,
    explain: "El timeline es su cajón. El PDF largo, el de Claude.",
  },
  practice: {
    title: "Acota la actualidad",
    lead: "Fecha, tema, ancla.",
    template: "Qué se dijo {blank} en X sobre {blank}. Dame {blank} y no lo des por cierto.",
    answers: ["hoy", "el corte de la API", "2 cuentas o enlaces"],
    slots: ["cuándo", "qué", "ancla"],
    simReply: {
      intro: "Dos hilos. El de las 09:14 afirma timeout; el otro habla de keys. Abre los dos. No tuitees el resumen.",
    },
    review: {
      question: "Grok resume un hilo sin enlace. ¿Qué es?",
      options: ["Un hecho", "Una pista: pides ancla o abres X tú", "Una fuente legal"],
      answer: 1,
      explain: "Sin ancla, es rumor con UI bonita.",
    },
  },
  close: {
    tip: "Grok acerca el timeline. Tú abres el hilo.",
    items: ["Hoy / esta semana", "Cuentas o enlaces", "Dos pistas, no un titular"],
  },
});

const otras = track({
  id: "otras",
  title: "Cuándo te vas a Claude o ChatGPT",
  blurb: "Grok no es el cajón de todo. Oficio, no logo.",
  scene: "code",
  brand: "Grok",
  hook: [
    "Coursiv cierra cada ruta con el reparto. Grok: error, script corto, qué está pasando en X. Claude: PDF largo, tono que no puede ironizar, citas. ChatGPT: mails, GPTs, el día a día, imagen en el mismo chat. DeepSeek: números con pasos. Jasper: voz de marca.",
    "Forzar a Grok a redactar la política de RH es como pedirle a Midjourney el contrato. Sale algo. No es el oficio.",
  ],
  body: {
    title: "Una tarea, una mesa",
    text: "Si el entregable es un diff, Grok o Cursor. Si es un mapa de 40 páginas, Claude. Si es un mail de 80 palabras con un GPT tuyo, ChatGPT. El logo no paga el error de mesa.",
  },
  bullets: [
    "Grok: stack, cambio mínimo, timeline de X",
    "Claude: documento largo, tono contenido, citas",
    "ChatGPT: borrador diario, GPTs, multimodal",
    "Jasper / Canva / Midjourney: marca e imagen; no los mezcles aquí",
  ],
  quiz: {
    question: "Un PDF de políticas de 40 páginas. ¿A quién?",
    options: [
      "Grok, porque es más “basado”",
      "Claude: largo, citas y tono sin ironía",
      "DALL·E, para ilustrarlo",
    ],
    answer: 1,
    explain: "Oficio. Grok no es el lector de políticas.",
  },
  practice: {
    title: "Reparte las mesas",
    lead: "Tres tareas. Tres IAs.",
    template: "El stack se va a {blank}. El PDF legal, a {blank}. El mail de 80 palabras, a {blank}.",
    answers: ["Grok", "Claude", "ChatGPT"],
    slots: ["código", "largo", "diario"],
    simReply: {
      intro: "Reparto listo. Grok no firma la política. Claude no debuggea tu `parseInt` a las 2 a.m. mejor que un stack pegado aquí.",
    },
    review: {
      question: "¿Grok reemplaza a ChatGPT?",
      options: [
        "Sí, xAI es más nuevo",
        "No: brilla en error, script y X; el resto se complementa",
        "Solo los fines de semana",
      ],
      answer: 1,
      explain: "Se complementan. El oficio manda.",
    },
  },
  close: {
    tip: "Grok es error, script y X. El PDF y el mail diario tienen otra mesa.",
    items: ["Una tarea, una IA", "El stack se pega aquí", "Tú sigues firmando el deploy"],
  },
});

export const grokUnits = [
  {
    id: "u1",
    title: "Errores y cambios mínimos",
    lessons: [error, minimo, causa, debug],
  },
  {
    id: "u2",
    title: "Oficio y límites",
    lessons: [humor, archivos, actualidad, otras],
  },
];
