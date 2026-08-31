const img = (file) => ({ kind: "image", src: `/lessons/deepseek/${file}?v=6` });

const comoSteps = [
  {
    type: "content",
    title: "El número que no se puede defender",
    blocks: [
      {
        kind: "p",
        text: "Piensa en la última vez que necesitaste un número para decidir: un margen, un descuento, un plazo. El primer total se veía bien. Lo pegaste. Luego alguien preguntó “¿de dónde salió el signo?” y no tenías el camino.",
      },
      {
        kind: "p",
        text: "Si te suena familiar, DeepSeek es la mesa para ese oficio. Su especialidad no es el tono de una carta. Es mostrar el paso a paso cuando hay reglas o cifras.",
      },
      img("como.png"),
    ],
  },
  {
    type: "quiz",
    title: "El verdadero reto",
    image: "/lessons/deepseek/q1.png?v=6",
    question: "¿Cuál es el mayor problema cuando un modelo te da un total suelto?",
    options: [
      "Que el chat se ve poco profesional",
      "Que no puedes auditar el camino y un error de signo se cuela",
      "Que DeepSeek no habla español",
    ],
    answer: 1,
    explain:
      "Así es. Un número sin pasos no se revisa. El error no está en el logo: está en copiar el primer total.",
  },
  {
    type: "content",
    title: "Conoce DeepSeek",
    blocks: [
      {
        kind: "p",
        text: "DeepSeek es un modelo de razonamiento. Destaca cuando pides que piense en voz alta: pasos numerados, unidades a la vista y una revisión al final.",
      },
      {
        kind: "p",
        text: "En la interfaz, DeepThink (R1) es el interruptor de ese modo. Search busca. Tú eliges. En esta ruta aprendes a usarlo para cálculos, reglas y flujos que se pueden repetir.",
      },
      img("03.png"),
    ],
  },
  {
    type: "content",
    title: "El camino no es adorno",
    blocks: [
      img("como-b.png"),
      { kind: "h", text: "Tres piezas que cambian el resultado" },
      {
        kind: "ul",
        items: [
          "Pasos numerados, no un total suelto",
          "Unidades a la vista (pesos, %, días)",
          "Una revisión al final: signo, escala, huecos",
          "Si falta un dato, “por confirmar”, no un número inventado",
        ],
      },
      {
        kind: "callout",
        text: "💡 Primer descubrimiento. DeepSeek se luce cuando el resultado tiene que mostrar el camino. Si solo miras el primer borrador, un error de signo se cuela.",
      },
    ],
  },
  {
    type: "fill",
    title: "Pídele el camino, no el total",
    lead: "Un combo pasa de 89 a 96 MXN. El costo es 41. Quieres ver el margen y cazar errores.",
    template: "Resuelve esto en {blank} numerados, muestra {blank} y haz una {blank} al final.",
    slots: ["formato", "qué mostrar", "control"],
    answers: ["pasos", "unidades en pesos", "revisión"],
    bank: ["pasos", "unidades en pesos", "revisión"],
    hint: "Formato → unidades → control.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    workspaceBrand: "DeepSeek",
    simReply: {
      intro: "Cinco pasos. En el 3 el signo del descuento estaba al revés: la revisión lo marcó.",
      sections: [
        { title: "Paso 3", text: "El descuento se restaba dos veces. Total mal: 12 400. Total revisado: 11 200 MXN." },
        { title: "Revisión", text: "Unidades en pesos. IVA no estaba en tu tabla: por confirmar." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    doneBanner: "Pídele el camino, no el total",
    doneLead: "Un combo pasa de 89 a 96 MXN. El costo es 41. Quieres ver el margen y cazar errores.",
    question: "¿Qué hizo útil este pedido?",
    options: [
      "Que era corto",
      "Que pedía pasos, unidades y una revisión, no solo el total",
      "Que usaba palabras en inglés",
    ],
    answer: 1,
    explain: "El camino se puede checar. El número suelto, no.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      {
        kind: "callout",
        text: "💡 Segundo descubrimiento. La fórmula: reglas + caso + formato (pasos) + revisión. DeepSeek acelera. Tú firmas el número.",
      },
      {
        kind: "ul",
        items: [
          "Pide pasos numerados",
          "Unidades a la vista",
          "Revisión al final",
          "No copies el primer total",
        ],
      },
    ],
  },
];

const usosSteps = [
  {
    type: "content",
    title: "Una herramienta, un oficio",
    blocks: [
      {
        kind: "p",
        text: "Si el trabajo es “cuánto queda si aplico esta tabla”, DeepSeek. Si el trabajo es “una carta que no suene agresiva”, Claude. Si es un mail del día, ChatGPT. El oficio importa más que el logo.",
      },
      {
        kind: "p",
        text: "Usarlo para todo es como usar Excel para diseñar un poster. En Coursiv, DeepSeek está en trabajo estratégico, aprendizaje y tareas de varios pasos: 10 lecciones, 5 horas.",
      },
      img("usos.png"),
    ],
  },
  {
    type: "quiz",
    title: "Elige la mesa",
    image: "/lessons/deepseek/q2.png?v=6",
    question: "¿Qué le das primero a DeepSeek?",
    options: [
      "“Arregla mi vida”",
      "Las reglas y las unidades, luego el caso",
      "Un moodboard de marca",
    ],
    answer: 1,
    explain: "El caso sin reglas improvisó la escala. Las reglas van primero.",
  },
  {
    type: "content",
    title: "Para qué sí (y para qué no)",
    blocks: [
      img("usos-b.png"),
      {
        kind: "h",
        text: "Sí",
      },
      {
        kind: "ul",
        items: [
          "Cálculos con unidades",
          "Checklist de reglas",
          "Un script corto que se puede leer",
          "Romper una lógica y mostrar el hueco",
        ],
      },
      { kind: "h", text: "No es su fuerte" },
      {
        kind: "ul",
        items: [
          "Copy de marca con voz humana",
          "Imagen o video",
          "Un tono de novela",
        ],
      },
      {
        kind: "callout",
        text: "💡 Puedes forzarlo a escribir la carta. Pagas en matiz. El mail de disculpa se va a otra mesa.",
      },
    ],
  },
  {
    type: "fill",
    title: "Nombra el oficio",
    lead: "Una tarea, una herramienta.",
    template: "Esta tarea es de {blank}. Por eso uso DeepSeek y pido {blank} con {blank}.",
    slots: ["oficio", "formato", "unidad"],
    answers: ["reglas y números", "pasos", "unidades en pesos"],
    bank: ["reglas y números", "pasos", "unidades en pesos"],
    hint: "Oficio → formato → unidad.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "Oficio correcto. El mail de disculpa se va a Claude. Aquí se queda el margen." },
  },
  {
    type: "quiz",
    title: "Por qué no mezclar",
    question: "¿Por qué no pedirle aquí el tono de la carta?",
    options: [
      "Por capricho",
      "Porque su fuerte es el camino numérico, no el matiz humano",
      "Porque está prohibido",
    ],
    answer: 1,
    explain: "Oficios. Puedes forzarlo; pagas en tono.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Reglas y números aquí. El tono, en otra mesa. Así cada IA hace el trabajo para el que está hecha.",
      },
      {
        kind: "ul",
        items: ["Un oficio por chat", "Unidades visibles", "Revisión al final"],
      },
    ],
  },
];

const eticaSteps = [
  {
    type: "content",
    title: "La máquina no firma",
    blocks: [
      {
        kind: "p",
        text: "Ética aquí no es un póster. Es: no inventes cifras, no copies código que no entiendes, no presentes un cálculo como hecho si no revisaste unidades.",
      },
      {
        kind: "p",
        text: "DeepSeek acelera. Tú eres el dueño del número que sale a un cliente. Un error de signo en un cobro sí duele.",
      },
      img("etica.png"),
    ],
  },
  {
    type: "quiz",
    title: "Quién firma",
    image: "/lessons/deepseek/q3.png?v=6",
    question: "¿Quién firma el número que sale del chat?",
    options: ["DeepSeek", "Tú, después de la revisión", "El intern, siempre"],
    answer: 1,
    explain: "La máquina no tiene RFC. Tú sí.",
  },
  {
    type: "content",
    title: "Tres vetos al inicio",
    blocks: [
      img("etica-b.png"),
      {
        kind: "ul",
        items: [
          "No inventar datos que no pegaste",
          "No pegar secretos ni cuentas reales",
          "No ejecutar código que no leíste",
        ],
      },
      {
        kind: "callout",
        text: "💡 Si el veto va al final, el número ya salió. Ponlo antes del caso.",
      },
    ],
  },
  {
    type: "fill",
    title: "El veto va primero",
    lead: "Antes del caso.",
    template: "No {blank}. Si falta un dato, {blank}. Muestra {blank}.",
    slots: ["veto", "hueco", "formato"],
    answers: ["inventes cifras", "pon por confirmar", "pasos y unidades"],
    bank: ["inventes cifras", "pon por confirmar", "pasos y unidades"],
    hint: "Veto → hueco → formato.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "El IVA no estaba en tu tabla: quedó por confirmar. No rellenó el hueco. Bien." },
  },
  {
    type: "quiz",
    title: "Dónde va el veto",
    question: "¿Dónde va la regla de no inventar?",
    options: ["Al final, como nota", "Al inicio, antes del caso", "En un sticker"],
    answer: 1,
    explain: "Si va al final, el número ya salió.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "No copies un número suelto. La firma es tuya. Sin secretos en el chat. Lees el código antes de pegarlo.",
      },
    ],
  },
];

const preguntasSteps = [
  {
    type: "content",
    title: "De nube a número",
    blocks: [
      {
        kind: "p",
        text: "“¿Está bien mi negocio?” no se resuelve. “Si el combo pasa de 89 a 96 MXN y el costo es 41, ¿qué margen queda y qué pasa si el costo sube 8%?” sí.",
      },
      {
        kind: "p",
        text: "La pregunta trae la decisión. Si no hay decisión, es charla. DeepSeek calcula lo que cabe en unidades, rango y una elección.",
      },
      img("preguntas.png"),
    ],
  },
  {
    type: "quiz",
    title: "¿Se puede resolver?",
    image: "/lessons/deepseek/q4.png?v=6",
    question: "¿Qué hace resoluble una pregunta?",
    options: ["Que sea profunda", "Unidades, datos y una decisión", "Que sea larga"],
    answer: 1,
    explain: "Se puede calcular. Lo profundo no.",
  },
  {
    type: "content",
    title: "Una decisión por prompt",
    blocks: [
      img("preguntas-b.png"),
      {
        kind: "ul",
        items: ["Qué decidir", "Qué datos hay", "Qué falta", "En qué unidades"],
      },
      {
        kind: "callout",
        text: "💡 Si no hay decisión, reescribe la pregunta antes de abrir el chat.",
      },
    ],
  },
  {
    type: "fill",
    title: "Reescribe la pregunta",
    lead: "De nube a número.",
    template: "Decisión: {blank}. Datos: {blank}. Unidades: {blank}.",
    slots: ["decisión", "datos", "unidades"],
    answers: ["¿subo el combo a 96?", "precio 89, costo 41", "pesos MXN"],
    bank: ["¿subo el combo a 96?", "precio 89, costo 41", "pesos MXN"],
    hint: "Decisión → datos → unidades.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "Margen actual vs. 96. Falta el IVA: por confirmar. Ya hay un cálculo, no un suspiro." },
  },
  {
    type: "quiz",
    title: "Qué se fue de la nube",
    question: "¿Qué desapareció al reescribir?",
    options: ["El alma del negocio", "La vaguedad: ahora hay decisión y unidades", "El saludo"],
    answer: 1,
    explain: "Ahora hay un cálculo. Antes había un suspiro.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Una decisión, unas unidades. “Ayúdame” no se calcula.",
      },
    ],
  },
];

const detalleSteps = [
  {
    type: "content",
    title: "“Un poco más” no es un dato",
    blocks: [
      {
        kind: "p",
        text: "8%, 12 días, 41 pesos. La especificidad no es prosa: son unidades. Si no las pones, DeepSeek mezcla escalas.",
      },
      {
        kind: "p",
        text: "Pega la tabla de reglas antes del caso. Periodo, moneda, si el IVA va incluido, si el descuento es sobre lista o sobre neto.",
      },
      img("detalle.png"),
    ],
  },
  {
    type: "quiz",
    title: "Dónde van las reglas",
    image: "/lessons/deepseek/q1.png?v=6",
    question: "¿Dónde van las reglas del cálculo?",
    options: ["Al final, como nota", "Al inicio, antes del caso", "En un emoji"],
    answer: 1,
    explain: "El caso se resuelve con las reglas a la vista.",
  },
  {
    type: "content",
    title: "Detalles que cambian el signo",
    blocks: [
      img("detalle-b.png"),
      {
        kind: "ul",
        items: ["Moneda", "Periodo", "IVA sí/no", "Qué columna es la fuente"],
      },
    ],
  },
  {
    type: "fill",
    title: "Completa las unidades",
    lead: "Sin unidades, hay mezcla.",
    template: "Calcula en {blank}, muestra {blank} y revisa el {blank}.",
    slots: ["moneda", "formato", "chequeo"],
    answers: ["pesos", "pasos", "signo"],
    bank: ["pesos", "pasos", "signo"],
    hint: "Moneda → formato → chequeo.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "Pasos en MXN. El signo del descuento estaba al revés en el paso 2." },
  },
  {
    type: "quiz",
    title: "Qué cazó la revisión",
    question: "¿Qué cazó la revisión?",
    options: ["Nada", "Un signo", "Un emoji"],
    answer: 1,
    explain: "Por eso existe el paso extra.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "p", text: "Di las unidades. Si no, mezcla escalas. Reglas primero. Tabla pegada. Revisión de signo." },
    ],
  },
];

const avanzadoSteps = [
  {
    type: "content",
    title: "Avanzado no es más barroco",
    blocks: [
      {
        kind: "p",
        text: "Un prompt avanzado es más duro: límites, formato, qué hacer si falta un dato, qué no calcular. Cinco bloques, siempre igual.",
      },
      {
        kind: "p",
        text: "Contexto / reglas / caso / formato / qué hacer si falla. Pega la tabla de reglas. Luego el caso. Luego “si no puedes, di por qué”.",
      },
      img("avanzado.png"),
    ],
  },
  {
    type: "quiz",
    title: "Qué es avanzado",
    question: "¿Qué es un prompt avanzado aquí?",
    options: ["Más adjetivos", "Reglas duras y un plan B", "Escribirlo en inglés"],
    answer: 1,
    explain: "Dureza. No vocabulario de conferencia.",
  },
  {
    type: "content",
    title: "Plantilla de cinco bloques",
    blocks: [
      img("avanzado-b.png"),
      {
        kind: "ul",
        items: ["Reglas", "Caso", "Formato de salida", "Plan B si falta dato", "Revisión de signo y unidades"],
      },
    ],
  },
  {
    type: "fill",
    title: "Las reglas van primero",
    lead: "Cinco bloques. Empieza por tres.",
    template: "Reglas: {blank}. Caso: {blank}. Si falta un dato: {blank}.",
    slots: ["reglas", "caso", "plan B"],
    answers: ["no inventar, IVA aparte", "combo 89 vs 96", "por confirmar y no calcules"],
    bank: ["no inventar, IVA aparte", "combo 89 vs 96", "por confirmar y no calcules"],
    hint: "Reglas → caso → plan B.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "No calculó el IVA. Lo pidió el plan B. Eso es avanzado." },
  },
  {
    type: "quiz",
    title: "Para qué el plan B",
    question: "¿Por qué el plan B?",
    options: ["Queda lindo", "Para que no rellene un hueco con un número lindo", "Por SEO"],
    answer: 1,
    explain: "El modelo odia los huecos. Tú se los nombra.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [{ kind: "p", text: "Pega la tabla de reglas antes del caso. Cinco bloques. Plan B. Formato fijo." }],
  },
];

const trampasSteps = [
  {
    type: "content",
    title: "El total “lindo” es sospechoso",
    blocks: [
      {
        kind: "p",
        text: "Las trampas se parecen: confiar en el primer total, no pedir revisión, pegar el script en producción, olvidar el IVA.",
      },
      {
        kind: "p",
        text: "La salida no es “otro modelo”. Es el mismo pedido, más duro: ¿hay pasos? ¿hay unidades? ¿hay revisión? ¿hay plan B?",
      },
      img("trampas.png"),
    ],
  },
  {
    type: "quiz",
    title: "El primer total",
    question: "El primer total salió “lindo”. ¿Qué haces?",
    options: ["Lo mandas al cliente", "Pides revisión de signo y unidades", "Le pones un sello"],
    answer: 1,
    explain: "Lo lindo es sospechoso. Lo revisado se puede usar.",
  },
  {
    type: "content",
    title: "Checklist de salida",
    blocks: [
      img("trampas-b.png"),
      {
        kind: "ul",
        items: [
          "Releer el paso 3",
          "Checar unidades",
          "No ejecutar código sin leer",
          "Repetir el pedido, no el chat entero",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Sal de la trampa",
    lead: "El número ya salió. Aún no es tuyo.",
    template: "Revisa {blank} y {blank}. Si hay error, {blank} el paso y el total.",
    slots: ["chequeo 1", "chequeo 2", "qué hacer"],
    answers: ["el signo", "las unidades", "marca"],
    bank: ["el signo", "las unidades", "marca"],
    hint: "Signo → unidades → marca.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "El paso 3 tenía el descuento al revés. Total nuevo: 11 200. El lindo era mentira." },
  },
  {
    type: "quiz",
    title: "¿Cambias de IA?",
    question: "¿Cambias de IA o endureces el pedido?",
    options: ["Siempre de IA", "Endureces: pasos, unidades, revisión", "Cierras la laptop"],
    answer: 1,
    explain: "La trampa era el prompt flojo, no el logo.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [{ kind: "p", text: "Si el resultado no trae pasos, pide de nuevo el camino. El número lindo se revisa. Tú firmas." }],
  },
];

const mercadoSteps = [
  {
    type: "content",
    title: "“El mercado global” no se audita",
    blocks: [
      {
        kind: "p",
        text: "Coursiv pone a DeepSeek en research de producto: tamaño, precio y rival, con el camino a la vista. País, año y fuente. No un ensayo “a nivel global”.",
      },
      {
        kind: "p",
        text: "Pide tabla: segmento, dato, año, de dónde salió. Si no hay fuente, fila en gris. Tú pegas el recorte (México, 2026, termos). DeepSeek ordena. Tú abres el enlace o marcas “por confirmar”.",
      },
      img("mercado.png"),
    ],
  },
  {
    type: "quiz",
    title: "Un recorte útil",
    question: "¿Qué hace útil un recorte de mercado?",
    options: ["Que sea “exhaustivo”", "País, año y una fuente por fila", "Un adjetivo “disruptivo”"],
    answer: 1,
    explain: "Se checa. El ensayo global no.",
  },
  {
    type: "content",
    title: "Una tabla que se puede checar",
    blocks: [
      img("mercado-b.png"),
      {
        kind: "ul",
        items: ["Geografía y año", "Unidad (MXN, %, piezas)", "Fuente o “por confirmar”", "No promedios de otro país"],
      },
    ],
  },
  {
    type: "fill",
    title: "Arma la tabla",
    lead: "Tres recortes, no un ensayo.",
    template: "Mercado de termos en {blank}, año {blank}. Tabla: precio, rival, {blank}.",
    slots: ["país", "año", "columna"],
    answers: ["México", "2026", "fuente o por confirmar"],
    bank: ["México", "2026", "fuente o por confirmar"],
    hint: "País → año → columna.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "Cuatro filas. La 3 sin fuente quedó gris. El promedio de EE. UU. no entró." },
  },
  {
    type: "quiz",
    title: "Fila sin fuente",
    question: "Una fila sin fuente, ¿entra al brief?",
    options: ["Sí, para rellenar", "No: por confirmar o se cae", "Sí si el número es redondo"],
    answer: 1,
    explain: "Research sin pista es adivinanza.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [{ kind: "p", text: "País, año y fuente. El “a nivel global” se queda fuera. Tú abres o marcas el hueco." }],
  },
];

const competidoresSteps = [
  {
    type: "content",
    title: "Tres rivales, mismos campos",
    blocks: [
      {
        kind: "p",
        text: "Si pides “quién gana”, te escribe un editorial. Pega lo que sí viste (web, anaquel, anuncio). Pide diferencias. Veta beneficios que no estaban en el pegado.",
      },
      {
        kind: "p",
        text: "Columnas fijas: precio, envío, claim. DeepSeek no visita el anaquel. Tú pegas el dato o queda vacío.",
      },
      img("competidores.png"),
    ],
  },
  {
    type: "quiz",
    title: "Ganador o tabla",
    question: "¿Qué pides: un ganador o una tabla?",
    options: ["Un ganador épico", "Tabla con los mismos campos y huecos honestos", "Un slogan"],
    answer: 1,
    explain: "Tú eliges. El modelo ordena.",
  },
  {
    type: "content",
    title: "Sin fanfic de logística",
    blocks: [
      img("competidores-b.png"),
      {
        kind: "ul",
        items: ["Tres rivales máximo", "Mismos campos", "Claim citado", "Sin “el mejor del mercado”"],
      },
    ],
  },
  {
    type: "fill",
    title: "Tres rivales",
    lead: "Campos fijos.",
    template: "Compara {blank} vs {blank} vs nosotros. Campos: {blank}. No inventes envío.",
    slots: ["rival 1", "rival 2", "campos"],
    answers: ["Termo A", "Termo B", "precio / claim / envío"],
    bank: ["Termo A", "Termo B", "precio / claim / envío"],
    hint: "Rival → rival → campos.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "El envío de B no estaba en tu pegado: vacío. El claim de A sí: tapa a rosca." },
  },
  {
    type: "quiz",
    title: "¿Rellenas el envío?",
    question: "¿Rellenas el envío “típico”?",
    options: ["Sí, 48 h siempre", "No: vacío o por confirmar", "Pones el de Amazon"],
    answer: 1,
    explain: "Fanfic de logística no es research.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [{ kind: "p", text: "Mismos campos. El hueco se ve. El editorial no ayuda. Tú decides el movimiento." }],
  },
];

const automatizarSteps = [
  {
    type: "content",
    title: "Un molde que se puede repetir el lunes",
    blocks: [
      {
        kind: "p",
        text: "Coursiv cierra DeepSeek con un workflow: qué entra, qué sale, qué se revisa a mano. “Haz un agente que venda” no se implementa el lunes.",
      },
      {
        kind: "p",
        text: "Un flujo de 5 pasos con un humano en el 4 vale más que un diagrama de 40 cajas. Entrada (tabla pegada) → DeepSeek arma pasos → tú revisas números → se pega en el brief.",
      },
      img("automatizar.png"),
    ],
  },
  {
    type: "quiz",
    title: "Qué se automatiza primero",
    question: "¿Qué se automatiza primero?",
    options: ["Toda la empresa", "Un molde chico que ya hiciste a mano dos veces", "El cobro sin leer"],
    answer: 1,
    explain: "Lo repetible. Lo nuevo se piensa.",
  },
  {
    type: "content",
    title: "El humano del paso 3 firma",
    blocks: [
      img("automatizar-b.png"),
      {
        kind: "ul",
        items: ["Entrada concreta", "5 pasos o menos", "Un humano firma", "Se guarda el pedido, no el chat"],
      },
      {
        kind: "callout",
        text: "💡 Automatiza el borrador, no la firma. El paso 3 no publica solo.",
      },
    ],
  },
  {
    type: "fill",
    title: "Describe el flujo",
    lead: "Entra, sale, se revisa.",
    template: "Entra {blank}. DeepSeek entrega {blank}. Yo reviso {blank} antes de pegarlo.",
    slots: ["input", "output", "humano"],
    answers: ["la tabla de precios", "pasos y un total", "signo y unidades"],
    bank: ["la tabla de precios", "pasos y un total", "signo y unidades"],
    hint: "Entra → sale → humano.",
    workspaceBrand: "DeepSeek",
    simReply: { intro: "Flujo de 4 pasos. El 3 es tu revisión. El 4 pega el brief. Nadie cobra solo." },
  },
  {
    type: "quiz",
    title: "¿El flujo publica?",
    question: "¿El flujo publica el mail?",
    options: ["Sí, para escalar", "No: el humano del paso 3 firma", "Solo los viernes"],
    answer: 1,
    explain: "Automatizar el borrador. No la firma.",
  },
  {
    type: "content",
    title: "Cierre del bloque",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Ya tienes camino a la vista, oficios claros, vetos, preguntas que se calculan, unidades, prompts duros, trampas, mercado con fuente, rivales sin fanfic y un flujo con humano. Eso es DeepSeek en la práctica.",
      },
      { kind: "h", text: "Para llevar" },
      {
        kind: "ul",
        items: [
          "Pasos numerados y revisión",
          "Un oficio por chat",
          "Tú firmas el número",
          "Un molde chico, un humano en el medio",
        ],
      },
    ],
  },
];

function lesson(id, title, blurb, steps, extra = {}) {
  return { id, title, blurb, type: "content", hasAudio: true, steps, ...extra };
}

export const deepseekUnits = [
  {
    id: "u1",
    title: "DeepSeek en la práctica",
    lessons: [
      lesson("como", "Cómo piensa DeepSeek", "Cuando hay reglas o números, pide el paso a paso.", comoSteps),
      lesson("usos", "Para qué sí (y para qué no)", "Números, reglas, código corto. No un tono de novela.", usosSteps),
      lesson("etica", "Lo que no debes copiar a ciegas", "Un modelo no firma. Un error de signo en un cobro sí duele.", eticaSteps),
    ],
  },
  {
    id: "u2",
    title: "Preguntar bien y no caer",
    lessons: [
      lesson("preguntas", "Preguntas que se pueden resolver", "Una pregunta correcta cabe en unidades, rango y decisión.", preguntasSteps),
      lesson("detalle", "Especificidad que sí suma", "Porcentaje, pesos, días. Si no las pones, DeepSeek mezcla escalas.", detalleSteps),
      lesson("avanzado", "Prompts con restricciones duras", "Si las reglas van al final, el modelo ya improvisó.", avanzadoSteps),
      lesson("trampas", "Errores típicos (y cómo salir)", "Número suelto, unidades mezcladas, reglas al final, copiar código ciego.", trampasSteps),
    ],
  },
  {
    id: "u3",
    title: "Mercado y automatizar",
    lessons: [
      lesson("mercado", "Investigar un mercado con reglas", "País, año y fuente. No “el mercado global”.", mercadoSteps),
      lesson("competidores", "Comparar rivales sin fanfic", "Precio, canal, promesa. Lo que no está, no se inventa.", competidoresSteps),
      lesson("automatizar", "Un flujo que se puede repetir", "Pasos, entrada y salida. No “automatiza mi empresa”.", automatizarSteps, { trophy: true }),
    ],
  },
];
