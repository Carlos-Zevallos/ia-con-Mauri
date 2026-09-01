const img = (file) => ({ kind: "image", src: `/lessons/deepseek/${file}?v=8` });

const comoSteps = [
  {
    type: "content",
    title: "Comprender el fenómeno DeepSeek",
    blocks: [
      {
        kind: "p",
        text: "Imagina una IA tan poderosa que no solo recupera información, sino que usa un razonamiento paso a paso para entenderla, analizarla y sintetizarla como un experto. Te damos la bienvenida a DeepSeek, el sistema de IA de última generación que transformó la forma en que interactuamos con los datos.",
      },
      {
        kind: "p",
        text: "Vamos a descubrir qué hace especial a DeepSeek y cómo puede potenciar tu trabajo con los datos.",
      },
      img("como.png"),
    ],
  },
  {
    type: "content",
    title: "¿Qué es DeepSeek?",
    hideTitle: true,
    blocks: [
      img("como.png"),
      { kind: "h", text: "¿Qué es DeepSeek?" },
      {
        kind: "p",
        text: "DeepSeek es un asistente de IA avanzado de [[código abierto]] con un motor de búsqueda integrado que le permite escribir reportes completos sobre cualquier tema.",
      },
    ],
  },
  {
    type: "content",
    hideTitle: true,
    title: "¿Qué es DeepSeek?",
    blocks: [
      {
        kind: "p",
        text: "La plataforma funciona para varios tipos de tareas, desde la generación de texto simple hasta la resolución de problemas complejos, lo que la hace versátil para diferentes necesidades: publicaciones de blog, investigación de mercado, análisis de datos y muchas más.",
      },
      { kind: "ds-uses" },
    ],
  },
  {
    type: "content",
    hideTitle: true,
    title: "Costo de entrenamiento",
    blocks: [
      {
        kind: "p",
        text: "Desde su lanzamiento, el secreto detrás de la popularidad de DeepSeek ha sido el enfoque innovador de sus desarrolladores. El detalle es que DeepSeek logra capacidades impresionantes utilizando muchos menos recursos que otros modelos de IA.",
      },
      {
        kind: "p",
        text: "Según la información disponible, entrenar el modelo inicial de DeepSeek costó solo alrededor de **5 millones de dólares**, mientras que para otros asistentes, las cifras alcanzan las **decenas de millones**.",
      },
      { kind: "ds-cost" },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Gratis y rápido",
    blocks: [
      {
        kind: "p",
        text: "De aquí surge una de las principales ventajas de DeepSeek: para uso personal, **está disponible para todos de forma gratuita.**",
      },
      {
        kind: "p",
        text: "Esto significa que, a diferencia de otras herramientas, no requiere suscripción para acceder a todas sus funciones.",
      },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Gratis y rápido",
    blocks: [
      {
        kind: "p",
        text: "Además, DeepSeek es rapidísimo. Cuando se lanzó por primera vez, funcionaba tres veces más rápido que otras herramientas de IA líderes.",
      },
      {
        kind: "p",
        text: "Como resultado, esto creó una tendencia hacia modelos rápidos como Gemini Flash o el modo instantáneo de ChatGPT.",
      },
      {
        kind: "p",
        text: "Así que la accesibilidad y las potentes capacidades de DeepSeek lo hacen ideal para cualquier persona, tanto para fines personales como de negocios.",
      },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Elegir el modo adecuado",
    blocks: [
      { kind: "h", text: "Elegir el modo adecuado" },
      {
        kind: "p",
        text: "Al abrir DeepSeek, verás tres modos en la parte superior del chat: Instant, Expert y Vision.",
      },
      {
        kind: "p",
        text: "Cada uno está diseñado para un tipo de tarea diferente, y elegir el correcto antes de escribir define cómo responderá DeepSeek.",
      },
      { kind: "ds-modes" },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Instant y Expert",
    blocks: [
      {
        kind: "p",
        text: "**Instant** es la opción predeterminada: rápida, ligera y diseñada para preguntas cotidianas, borradores rápidos, resúmenes o traducciones.",
      },
      {
        kind: "p",
        text: "Úsalo cuando busques una respuesta útil en segundos en lugar del análisis más profundo posible.",
      },
      {
        kind: "p",
        text: "El modo **Expert** maneja problemas más difíciles: análisis profundo, investigación de varios pasos o documentos largos que requieren atención al detalle.",
      },
      {
        kind: "p",
        text: "Puede ser más lento que Instant, pero las respuestas son notablemente mejores cuando la tarea realmente lo exige.",
      },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Vision",
    blocks: [
      {
        kind: "p",
        text: "**Vision** es el tercer modo, diseñado para trabajar con imágenes en lugar de solo texto. Cambia a este modo, adjunta una foto o captura de pantalla y pregúntale a DeepSeek lo que quieras saber sobre la imagen.",
      },
      {
        kind: "p",
        text: "Puede describir lo que ve, leer el texto de una imagen o responder preguntas específicas sobre el contenido visual.",
      },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Capacidades principales",
    blocks: [
      {
        kind: "p",
        text: "¡Bien hecho! Ya conoces los modos principales de DeepSeek. Ahora vamos a enfocarnos en sus capacidades.",
      },
      {
        kind: "p",
        text: "DeepSeek destaca por varias características clave que lo hacen sobresalir en el mundo de la IA.",
      },
      {
        kind: "p",
        text: "**DeepThink** es una de esas características, y permite a los usuarios observar el razonamiento paso a paso de la IA mientras procesa una consulta.",
      },
      {
        kind: "p",
        text: "Esto ayuda a identificar posibles errores en el enfoque de la IA, lo que resulta muy útil para afinar tareas complejas y asegurar resultados más precisos.",
      },
      { kind: "ds-think" },
    ],
  },
  {
    type: "content",
    hideTitle: true,
    title: "DeepThink",
    blocks: [
      {
        kind: "p",
        text: "En la captura de pantalla a continuación, puedes ver un ejemplo del proceso de pensamiento de DeepSeek.",
      },
      {
        kind: "p",
        text: "Para fines de demostración, todas las capturas de pantalla están en inglés.",
      },
      { kind: "ds-math" },
      {
        kind: "p",
        text: "Como puedes ver, DeepSeek aborda incluso las consultas más simples, como “12*5-x=78”, con un proceso de razonamiento detallado paso a paso para dar la mejor respuesta posible. Bastante impresionante, ¿verdad?",
      },
      {
        kind: "p",
        text: "Por cierto, ¡esta función también fue adoptada más tarde por otros modelos!",
      },
    ],
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "DeepSeek como motor de búsqueda",
    blocks: [
      {
        kind: "p",
        text: "Además, a diferencia de los motores de búsqueda tradicionales, la función Search de DeepSeek puede entender el significado detrás de tus preguntas.",
      },
      {
        kind: "p",
        text: "Interpreta consultas ambiguas y encuentra información relevante basada en conceptos en lugar de solo palabras clave.",
      },
      {
        kind: "p",
        text: "Por ejemplo, preguntar “¿Por qué la gente prefiere comprar en línea?” hace que DeepSeek analice contenido relacionado con hábitos de compra en línea, comportamiento del consumidor y tendencias del comercio digital. Luego te entregará un reporte detallado sobre la pregunta, ayudándote a descubrir cosas que no esperabas.",
      },
    ],
  },
  {
    type: "fill",
    title: "Pruébalo tú mismo",
    lead: "Completa la consulta de búsqueda y mira la respuesta que dará DeepSeek.",
    template: "¿Cuáles son las diferencias clave entre las tecnologías {blank}?",
    slots: ["tema de la pregunta"],
    answers: ["4G y 5G"],
    bank: ["4G y 5G"],
    hint: "Toca la ficha para completar la consulta.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    workspaceBrand: "DeepSeek",
    simReply: {
      animate: true,
      intro: "Las principales diferencias entre las tecnologías 4G y 5G:",
      sections: [
        {
          title: "Velocidad",
          text: "5G alcanza velocidades mucho mayores que 4G, lo que permite descargas y streaming con menos espera.",
        },
        {
          title: "Capacidad de respuesta",
          text: "La latencia de 5G es menor, así que las apps reaccionan casi en tiempo real.",
        },
        {
          title: "Conexiones",
          text: "5G soporta más dispositivos conectados a la vez en la misma red.",
        },
      ],
    },
  },
  {
    type: "content",
    hideTitle: true,
    title: "Tarea completada",
    doneBanner: "Pruébalo tú mismo",
    doneLead: "Completa la consulta de búsqueda y mira la respuesta que dará DeepSeek.",
    blocks: [
      {
        kind: "p",
        text: "Ya viste ambos modos en acción: DeepThink para un pensamiento transparente paso a paso, y Search para una investigación exhaustiva de temas.",
      },
      {
        kind: "p",
        text: "Entender cuándo usar cada modo es fundamental; vamos a poner a prueba ese conocimiento.",
      },
    ],
  },
  {
    type: "quiz",
    stack: true,
    hideTitle: true,
    keepOrder: true,
    title: "Pon a prueba ese conocimiento",
    question: "¿Qué factor principal contribuyó al desarrollo eficiente de DeepSeek?",
    options: [
      "Preprocesamiento exhaustivo de datos",
      "Infraestructura de hardware avanzada",
      "Metodología de entrenamiento optimizada",
      "Modelo de desarrollo colaborativo",
    ],
    answer: 2,
    explain:
      "Aunque todos los factores importan en el desarrollo de IA, el gran avance de DeepSeek provino de su enfoque de entrenamiento optimizado que redujo la necesidad de recursos.",
  },
  {
    type: "quiz",
    stack: true,
    hideTitle: true,
    keepOrder: true,
    title: "Modo de razonamiento",
    question: "¿Cuándo conviene elegir el modo de razonamiento de DeepSeek en lugar del modo Search?",
    options: [
      "Cuando necesitas un reporte de investigación completo sobre un tema o respuestas basadas en datos rápidos",
      "Cuando necesitas ver la lógica paso a paso y verificar cómo se llegó a las conclusiones",
    ],
    answer: 1,
    explain:
      "Los reportes de investigación y los datos rápidos son más adecuados para el modo Search. Usa el modo de razonamiento cuando el proceso lógico importa tanto como el resultado final.",
  },
  {
    type: "content",
    stack: true,
    hideTitle: true,
    title: "Puntos clave",
    blocks: [
      {
        kind: "keypoints",
        items: [
          "DeepSeek es una herramienta de IA gratuita y potente para búsqueda y análisis.",
          "Elige Instant, Expert o Vision antes de escribir: el modo define cómo responde.",
          "DeepThink muestra el razonamiento paso a paso; Search entrega reportes de investigación.",
        ],
      },
    ],
  },
  {
    type: "content",
    title: "Bien hecho",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Ahora entiendes cuándo usar DeepSeek y cómo sus dos modos atienden diferentes necesidades: razonamiento para lógica visible y búsqueda para reportes de investigación.",
      },
      { kind: "p", text: "¡Vamos a aprender más!" },
      img("como-b.png"),
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
    title: "DeepSeek",
    lessons: [
      lesson("como", "Cómo funciona DeepSeek", "Descubre por qué DeepSeek se convirtió en una IA tan popular", comoSteps),
      lesson("usos", "Descubrir aplicaciones en el mundo real", "Números, reglas, código corto. No un tono de novela.", usosSteps),
      lesson("etica", "Consideraciones éticas del uso de IA", "Un modelo no firma. Un error de signo en un cobro sí duele.", eticaSteps),
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
