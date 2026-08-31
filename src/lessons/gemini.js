const img = (file) => ({ kind: "image", src: `/lessons/gemini/${file}?v=5` });
const imgMusic = (file) => ({ kind: "image", src: `/lessons/gemini/music/${file}` });

const conoceSteps = [
  {
    type: "content",
    title: "Entender Gemini",
    blocks: [
      {
        kind: "p",
        text: "Piensa en la última vez que intentaste darle sentido a información dispersa: correos de tres personas diferentes, tus notas, un reporte en PDF y algunos materiales de lectura que apenas revisaste. Y el mayor reto es revisar todo esto lo antes posible.",
      },
      {
        kind: "p",
        text: "Si esto te suena familiar, Gemini es la solución. Su especialidad es resolver exactamente este tipo de retos, y en esta guía aprenderás cómo hacerlo.",
      },
      img("conoce.png"),
    ],
  },
  {
    type: "quiz",
    title: "El verdadero reto",
    image: "/lessons/gemini/02.png?v=5",
    question: "¿Cuál es el mayor problema cuando la información está dispersa?",
    options: [
      "Entender el contenido de cada elemento por separado",
      "Recordar dónde guardaste cada archivo",
      "Encontrar el tiempo para leer y conectar toda la información",
    ],
    answer: 2,
    explain:
      "Así es. Entender cada pieza por separado no es problema; el reto es encontrar el tiempo para leer todo y descubrir cómo se conecta.",
  },
  {
    type: "content",
    title: "Conoce Gemini",
    blocks: [
      {
        kind: "p",
        text: "Gemini es el asistente de IA de Google que destaca en el trabajo de síntesis.",
      },
      {
        kind: "p",
        text: "Es decir, no solo procesa múltiples fuentes de información al mismo tiempo y razona entre ellas para responder preguntas complejas, sino que es probablemente la mejor opción para este tipo de tareas.",
      },
      img("03.png"),
    ],
  },
  {
    type: "content",
    title: "Conoce Gemini",
    blocks: [
      img("03.png"),
      { kind: "h", text: "Gemini trabaja con cuatro tipos principales de información:" },
      {
        kind: "ul",
        items: [
          "Capturas de pantalla y fotos",
          "Varios formatos de documentos (PDF, Docs, etc.)",
          "Tablas y archivos CSV",
          "Texto sin formato",
        ],
      },
      {
        kind: "p",
        text: "Elegir el formato adecuado aumenta la claridad y reduce las suposiciones.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Revisión de capacidades de Gemini",
    pair: true,
    card: {
      title: "Revisión de capacidades de Gemini",
      lead: "Tomando en cuenta lo anterior, decide si Gemini podría trabajar con este prompt.",
      prompt:
        "Ayúdame a convertir estos correos, notas de reunión y esta hoja de cálculo en una actualización clara del proyecto",
    },
    question: "¿Gemini podría trabajar con este prompt?",
    options: ["Sí, Gemini puede hacerlo", "No, esto es demasiado complejo"],
    answer: 0,
    success: "¡Increíble!",
    explain:
      "Buen punto. Esta solicitud requiere síntesis: conectar correos, notas y datos de hojas de cálculo en un solo resultado coherente. Ahí es donde brillan las fortalezas operativas de Gemini: no solo lee múltiples fuentes, sino que razona entre ellas de manera efectiva.",
  },
  {
    type: "content",
    title: "Primer descubrimiento",
    blocks: [
      {
        kind: "callout",
        text: "💡 Primer descubrimiento. Gemini destaca en la síntesis entre formatos. En lugar de procesar cada fuente por separado, Gemini las trata como un problema conectado, lo que significa que puede detectar contradicciones, identificar vacíos de información y responder preguntas que requieren razonamiento a partir de todo lo que compartiste.",
      },
    ],
  },
  {
    type: "content",
    title: "Cómo funciona Gemini",
    blocks: [
      {
        kind: "p",
        text: "Veamos esto en la práctica. Imagina que te preparas para una reunión importante y tienes la información dispersa:",
      },
      {
        kind: "ul",
        items: [
          "Algunos documentos con detalles clave",
          "Hilos de correo con diferentes personas",
          "Algunas notas que tomaste antes",
          "Capturas de pantalla o imágenes relacionadas con el tema",
        ],
      },
      {
        kind: "p",
        text: "Normalmente, abrirías cada archivo por separado, leerías todo e intentarías recordar cómo se conecta. Eso consume tiempo y energía mental.",
      },
      img("05.png"),
    ],
  },
  {
    type: "multiquiz",
    title: "Cómo funciona Gemini",
    blocks: [
      {
        kind: "p",
        text: "Sin embargo, con Gemini, puedes subir todo a la vez y hacer una sola pregunta: “Con base en todo esto, ¿cuáles son los puntos principales que debo saber?”",
      },
      {
        kind: "p",
        text: "Después de eso, Gemini leerá todos tus materiales y te dará una respuesta sintetizada.",
      },
    ],
    question: "Entonces, para consolidar lo que aprendiste, ¿qué manejaría bien Gemini en el contexto de esta tarea?",
    hint: "Selecciona todas las respuestas posibles",
    options: [
      "Identificar patrones entre correos, notas y datos",
      "Crear resultados estructurados a partir de información desordenada",
      "Comparar información entre múltiples documentos",
    ],
    answers: [0, 1, 2],
    explain:
      "Gemini destaca cuando tu tarea involucra múltiples fuentes, síntesis y estructura: el tipo de trabajo que consume energía mental y tiempo.",
  },
  {
    type: "fill",
    title: "Pídele a Gemini que te ayude a prepararte",
    lead: "Imagina que subiste algunos documentos y notas. Pídele a Gemini que te ayude a prepararte para tu reunión.",
    template: "He subido {blank} para una próxima reunión. {blank} y dime {blank}.",
    slots: ["lista de materiales", "Comando", "solicitud específica"],
    answers: [
      "documentos y notas",
      "Revisa todo",
      "los puntos principales que necesito para la reunión",
    ],
    bank: [
      "documentos y notas",
      "Revisa todo",
      "los puntos principales que necesito para la reunión",
    ],
    hint: "Toca las fichas. Van en este orden: materiales · comando · solicitud.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    simReply: {
      intro: "Con base en los materiales que compartiste, aquí están los puntos clave que debes saber para tu reunión:",
      sections: [
        {
          title: "Tema principal",
          text: "La discusión sobre el cronograma y el presupuesto del proyecto",
        },
        {
          title: "Detalles importantes",
          items: [
            "El presupuesto está fijado en $50,000, pero los correos sugieren una posible flexibilidad hasta $55,000",
            "El cronograma muestra 3 meses, pero tus notas mencionan preocupaciones sobre el segundo mes",
            "El cliente espera actualizaciones semanales a partir de la próxima semana",
          ],
        },
        {
          title: "Problemas potenciales",
          items: [
            "El presupuesto y el cronograma podrían requerir ajustes según la capacidad del equipo",
            "Un miembro del equipo expresó preocupaciones en los correos sobre la carga de trabajo",
          ],
        },
        {
          title: "Qué preparar",
          items: [
            "Aclarar si el cronograma de 3 meses es flexible",
            "Confirmar el rango de presupuesto antes de la reunión",
            "Tener un plan de respaldo listo si el cronograma necesita extenderse",
          ],
        },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el prompt",
    doneBanner: "Pídele a Gemini que te ayude a prepararte",
    doneLead: "Imagina que subiste algunos documentos y notas. Pídele a Gemini que te ayude a prepararte para tu reunión.",
    question: "Después de ver la respuesta de Gemini, ¿qué crees que hizo que el prompt fuera efectivo?",
    options: [
      "Es muy corto, por lo que Gemini lo procesa más rápido",
      "Indica claramente qué materiales se compartieron y qué información específica se necesita",
      "Usa un lenguaje profesional que suena más formal",
    ],
    answer: 1,
    explain:
      "Correcto. La solicitud fue clara sobre lo que subiste (documentos y notas) y lo que necesitabas (puntos principales para la reunión). Esta claridad ayuda a Gemini a darte resultados útiles.",
  },
  {
    type: "content",
    title: "Segundo descubrimiento",
    blocks: [
      {
        kind: "callout",
        text: "💡 Segundo descubrimiento. La fórmula para solicitudes efectivas en Gemini: lo que compartes + lo que necesitas que haga + cómo quieres la respuesta. Esta estructura sencilla ayuda a Gemini a entender tu tarea y darte resultados útiles.",
      },
      {
        kind: "p",
        text: "En general, obtener buenos resultados de Gemini se reduce a ser claro en tus solicitudes. Entre más específico seas, mejor podrá ayudarte Gemini.",
      },
      {
        kind: "p",
        text: "En las próximas lecciones, aprenderás más técnicas para trabajar con Gemini de manera efectiva, pero este enfoque es tu punto de partida.",
      },
    ],
  },
  {
    type: "content",
    title: "Modelos de Gemini",
    blocks: [
      {
        kind: "p",
        text: "Gemini funciona con modelos que se actualizan constantemente. Puedes elegir uno en el menú desplegable junto a la barra del prompt. Cada uno destaca en un tipo de trabajo diferente:",
      },
      {
        kind: "ul",
        items: [
          "3.6 Flash — el modelo predeterminado, rápido y capaz para las tareas del día a día.",
          "3.6 Thinking — razona paso a paso para resolver problemas complejos.",
          "3.1 Pro — optimizado para tareas avanzadas de matemáticas y código.",
        ],
      },
      {
        kind: "p",
        text: "Un número de versión más alto no garantiza una mejor respuesta. Flash cubre la mayor parte del trabajo, y vale la pena cambiar a Pro solo para tareas que realmente exigen mucha programación o matemáticas.",
      },
      {
        kind: "p",
        text: "Nota: los modelos y su disponibilidad pueden cambiar con el tiempo.",
      },
      img("06.png"),
      {
        kind: "p",
        text: "Así que puedes adaptar el modo a la complejidad de tu tarea. Esta flexibilidad significa que Gemini se adapta a lo que estás haciendo, y no al revés.",
      },
    ],
  },
  {
    type: "content",
    title: "Herramientas de Gemini",
    blocks: [
      {
        kind: "p",
        text: "Además de los modos, Gemini también ofrece herramientas especializadas para diferentes tipos de trabajo:",
      },
      {
        kind: "ul",
        items: [
          "Create Image y Create Video — generan contenido visual a partir de prompts.",
          "Create Music — produce música original.",
          "Deep Research — investigación de varios pasos con resúmenes estructurados.",
          "Canvas — redacta y perfecciona documentos más largos.",
          "Guided Learning — explicaciones interactivas paso a paso.",
        ],
      },
      img("07.png"),
    ],
  },
  {
    type: "content",
    title: "Herramientas de Gemini",
    blocks: [
      img("07.png"),
      {
        kind: "p",
        text: "En este curso, explorarás tres potentes capacidades de Gemini: creación de imágenes, generación de música e investigación profunda. Juntas, te ayudan a liberar tu creatividad y abordar preguntas complejas con mayor profundidad y confianza.",
      },
      {
        kind: "p",
        text: "Todas estas funciones están disponibles en la versión gratuita de Gemini, mientras que la generación de video es exclusiva para usuarios Pro.",
      },
      {
        kind: "p",
        text: "Por otro lado, si también te interesa crear videos con Gemini, puedes consultar nuestra guía sobre Omni cuando termines esta.",
      },
    ],
  },
  {
    type: "content",
    title: "Dónde tiene límites Gemini",
    blocks: [
      {
        kind: "p",
        text: "Por último, incluso los modelos de IA más recientes tienen puntos ciegos, así que conviene conocerlos. Por ejemplo, Gemini:",
      },
      {
        kind: "ul",
        items: [
          "Podría no conocer todos los eventos recientes",
          "A veces puede hacer suposiciones cuando no está seguro",
          "Toma más tiempo para tareas complejas",
          "No debe reemplazar el criterio humano al tomar decisiones",
        ],
      },
      {
        kind: "p",
        text: "Por lo tanto, es importante tener siempre esto en cuenta al usar Gemini y otras herramientas de IA.",
      },
      img("08.png"),
    ],
  },
  {
    type: "content",
    title: "Pon a prueba lo que aprendiste",
    blocks: [
      {
        kind: "p",
        text: "Ahora, con los conceptos básicos cubiertos, vamos a poner a prueba tu comprensión sobre cómo trabajar con Gemini.",
      },
    ],
  },
  {
    type: "quiz",
    title: "La forma más efectiva de pedirlo",
    question:
      "Quieres que Gemini te ayude a entender un tema complejo leyendo varios artículos. ¿Cuál es la forma más efectiva de pedirlo?",
    options: [
      "Subir los artículos y decir: “Lee esto”",
      "Preguntar “¿Qué opinas de esto?” sin una pregunta específica",
      "Solo decir “Háblame de este tema” sin subir nada",
      "Subir los artículos y decir: “Explica las ideas principales de estos artículos en términos sencillos”",
    ],
    answer: 3,
    explain:
      "Correcto. Esta solicitud es clara y específica: le dices a Gemini qué subiste (artículos) y exactamente qué necesitas (ideas principales en términos sencillos). Las solicitudes claras obtienen mejores resultados.",
  },
  {
    type: "quiz",
    title: "El modo adecuado",
    question:
      "Es viernes por la tarde y tienes que procesar rápidamente 200 respuestas de comentarios de clientes. ¿Qué modo tiene más sentido?",
    options: ["Thinking mode", "Pro mode", "Flash mode"],
    answer: 2,
    explain:
      "Bien hecho. Flash mode maneja el volumen rápidamente. Guarda Thinking mode y Pro mode para tareas que realmente necesiten un razonamiento más profundo.",
  },
  {
    type: "quiz",
    title: "Cuándo revisar el trabajo",
    question: "¿Cuándo deberías revisar el trabajo de Gemini antes de usarlo?",
    options: [
      "Solo al trabajar con números o cálculos, porque Gemini suele fallar en este tipo de tareas",
      "Nunca, porque Gemini está diseñado para ser preciso",
      "Cuando la información se usará para decisiones importantes o se compartirá con otros",
      "Cuando Gemini parece inseguro en su respuesta",
    ],
    answer: 2,
    explain:
      "Así es. Siempre verifica la información importante antes de usarla. Gemini es útil para crear borradores y organizar información, pero conviene revisar los resultados, especialmente para cualquier cosa relevante.",
  },
  {
    type: "content",
    title: "Todo listo para empezar",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Ahora entiendes qué hace diferente a Gemini: su fortaleza en la síntesis entre formatos, sus modos y herramientas para diferentes tareas, y dónde destaca frente a dónde conviene tener cuidado.",
      },
      {
        kind: "p",
        text: "También conoces los conceptos básicos sobre cómo comunicarte de manera efectiva con la herramienta: entradas claras, tareas específicas y resultados definidos.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Gemini destaca al trabajar con información dispersa",
          "Los prompts deben ser claros y específicos",
          "Elige el modo adecuado para tu tarea",
          "Las herramientas como la creación de imágenes, video o música amplían lo que Gemini puede hacer",
          "Siempre revisa la información importante antes de usarla",
        ],
      },
      img("01.png"),
    ],
  },
];

const escribeSteps = [
  {
    type: "content",
    title: "Escribe y edita con confianza",
    blocks: [
      {
        kind: "p",
        text: "La mayoría de las personas abre Gemini para escribir: un mail, un informe, un mensaje difícil o la segunda versión de un texto que ya existe. Ahí es donde la herramienta deja de ser “un chat” y se vuelve un editor que trabaja a tu lado.",
      },
      {
        kind: "p",
        text: "En esta lección vas a aprender a pedirle a Gemini que escriba desde cero, que reescriba lo que ya tienes y que ajuste tono, longitud y estructura sin que el resultado suene genérico.",
      },
      img("escribe.png"),
    ],
  },
  {
    type: "content",
    title: "No le pidas “un texto”. Pídele un encargo",
    blocks: [
      {
        kind: "p",
        text: "Un prompt vago (“escríbeme un mail profesional”) produce un mail que podría ser de cualquiera. Gemini rinde cuando le das tres piezas:",
      },
      {
        kind: "ul",
        items: [
          "Para quién es (destinatario y relación)",
          "Para qué es (la acción que debe provocar)",
          "Con qué límites (extensión, tono, lo que no debe decir)",
        ],
      },
      {
        kind: "example",
        title: "Pedido claro",
        text: "Reescribe este mail para una clienta que espera un retraso de 4 días. Tono directo, sin disculpas excesivas, 90 palabras, cierra con una fecha nueva y un número de contacto.",
      },
      {
        kind: "p",
        text: "Si ya tienes un borrador, pégalo. Gemini edita mejor sobre texto real que inventando el contexto.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Qué cambia el resultado",
    question: "Tienes un mail genérico. ¿Qué instrucción suele mejorarlo más?",
    options: [
      "Pedir “hazlo más profesional y viral”",
      "Pegar el borrador, decir quién lo recibe y limitar las palabras",
      "Cambiar de modelo cada vez que no te gusta una frase",
      "Añadir “por favor” y emojis para que suene cercano",
    ],
    answer: 1,
    explain:
      "Correcto. Destinatario, texto real y un límite concreto recortan el relleno. Los adjetivos (“mejor”, “viral”) casi nunca bastan.",
  },
  {
    type: "content",
    title: "Canvas: cuando el texto es largo",
    blocks: [
      {
        kind: "p",
        text: "Para piezas largas —una propuesta, un artículo, una política interna— usa Canvas. En lugar de un chat que se va alargando, Canvas te da un documento que puedes ir puliendo por secciones.",
      },
      {
        kind: "ul",
        items: [
          "Pide primero un esquema con títulos, no el texto completo",
          "Luego trabaja sección por sección: “reescribe solo el apartado de riesgos”",
          "Al final, pide una pasada de consistencia de tono y de datos",
        ],
      },
      img("07.png"),
      {
        kind: "p",
        text: "Canvas no sustituye tu criterio. Tú decides qué se queda. Gemini acelera el borrador y las vueltas.",
      },
    ],
  },
  {
    type: "content",
    title: "Tono: dilo con ejemplos, no con etiquetas",
    blocks: [
      {
        kind: "p",
        text: "“Hazlo amable” es ambiguo. Gemini interpreta mejor el tono si le das una referencia o una regla negativa.",
      },
      {
        kind: "ul",
        items: [
          "Cercano, como un mensaje interno, no como un anuncio",
          "Directo, sin ironía y sin urgencia falsa",
          "Formal, pero sin gerundios ni “por medio de la presente”",
        ],
      },
      {
        kind: "callout",
        text: "💡 Descubrimiento. Una frase de ejemplo (“suena como esto, no como aquello”) guía más que diez adjetivos de estilo.",
      },
    ],
  },
  {
    type: "fill",
    title: "Arma el pedido de reescritura",
    lead: "Completa el prompt para que Gemini edite un mail real, no invente uno nuevo.",
    template: "Reescribe este borrador para {blank}. Tono {blank}, máximo {blank}, y cierra con {blank}.",
    slots: ["destinatario", "tono", "límite", "cierre"],
    answers: ["una clienta que espera un retraso", "directo y calmado", "90 palabras", "una fecha nueva"],
    bank: ["una clienta que espera un retraso", "directo y calmado", "90 palabras", "una fecha nueva"],
    hint: "Primero a quién, luego cómo, luego cuánto, luego con qué cierras.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "content",
    title: "Iterar: di qué falló",
    blocks: [
      {
        kind: "p",
        text: "La primera versión casi nunca es la que envías. El truco no es pedir “mejóralo”, sino nombrar el defecto:",
      },
      {
        kind: "ul",
        items: [
          "Muy largo → “corta a 70 palabras y quita los adverbios”",
          "Muy frío → “mantén los datos, suaviza la primera línea”",
          "Sin acción → “deja un siguiente paso y un plazo”",
        ],
      },
      {
        kind: "p",
        text: "Cambia una palanca por ronda. Si pides tono, longitud y estructura a la vez, no sabrás qué funcionó.",
      },
    ],
  },
  {
    type: "quiz",
    title: "La segunda vuelta",
    question: "El borrador de Gemini está bien de datos, pero suena a folleto. ¿Qué pides?",
    options: [
      "“Hazlo mejor”",
      "“Quítale las frases de marketing y déjalo como un mensaje interno de 6 líneas”",
      "“Añade más adjetivos positivos”",
      "“Tradúcelo a otro idioma y de vuelta”",
    ],
    answer: 1,
    explain:
      "Así es. Nombras el problema (tono de folleto) y el resultado que quieres (mensaje interno, 6 líneas). Gemini puede editar con eso.",
  },
  {
    type: "content",
    title: "Antes de enviar",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Gemini es rápido. Tú firmas. Antes de pegar el texto en un mail o un documento, revisa nombres, cifras, promesas y el tono. Si no lo dirías en voz alta, no lo mandes.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Un encargo tiene destinatario, objetivo y límites",
          "Pega el borrador real cuando exista",
          "Canvas ayuda en textos largos, sección por sección",
          "Itera nombrando el defecto, no pidiendo “mejor”",
          "Tú eres quien envía: revisa datos y tono",
        ],
      },
    ],
  },
];

const tecnicoSteps = [
  {
    type: "content",
    title: "Resuelve tareas técnicas fácilmente",
    blocks: [
      {
        kind: "p",
        text: "Gemini no solo escribe. También organiza datos, explica código, cruza una hoja de cálculo con un PDF y arma un plan de investigación. Esta lección cubre el trabajo técnico del día a día: el que consume tiempo porque está repartido en archivos.",
      },
      {
        kind: "p",
        text: "La regla es la misma que en la lección anterior: sube el material, di qué necesitas y en qué formato lo quieres.",
      },
      img("tecnico.png"),
    ],
  },
  {
    type: "content",
    title: "Sube el archivo, no lo resumas de memoria",
    blocks: [
      {
        kind: "p",
        text: "Si el dato está en un CSV, un PDF o una captura, súbelo. Pedirle a Gemini que “imagine” la tabla es la forma más rápida de obtener números inventados.",
      },
      {
        kind: "ul",
        items: [
          "Hojas de cálculo y CSV para patrones, totales y excepciones",
          "PDFs y Docs para extraer cláusulas, plazos o hallazgos",
          "Capturas cuando el dato vive en una interfaz y no en un archivo",
        ],
      },
      {
        kind: "example",
        title: "Pedido sobre datos",
        text: "Con esta hoja, dame: 3 hallazgos, las 5 filas atípicas y una tabla de siguiente acción. Si un dato no está, escribe “no aparece”.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Dónde está la fuente",
    question: "Necesitas un resumen de 40 respuestas de una encuesta. ¿Qué es más fiable?",
    options: [
      "Describir de memoria lo que recuerdas de las respuestas",
      "Subir el archivo y pedir hallazgos, excepciones y una tabla",
      "Pedirle a Gemini que invente respuestas típicas del sector",
      "Pegar solo los títulos de las preguntas",
    ],
    answer: 1,
    explain: "La fuente va primero. Gemini sintetiza lo que puede leer, no lo que tú recuerdas a medias.",
  },
  {
    type: "content",
    title: "Thinking mode: cuando hay varios pasos",
    blocks: [
      {
        kind: "p",
        text: "Flash es suficiente para clasificar, resumir o extraer. Cuando el problema tiene reglas, excepciones y un orden (un cálculo, un bug, un cruce de tres documentos), cambia a Thinking.",
      },
      {
        kind: "p",
        text: "Pide que muestre el razonamiento: “enumera las reglas que aplicaste, luego el resultado, luego lo que no está en los archivos”. Así puedes auditar el camino, no solo el número final.",
      },
      img("06.png"),
    ],
  },
  {
    type: "content",
    title: "Deep Research: preguntas que no caben en un prompt",
    blocks: [
      {
        kind: "p",
        text: "Deep Research sirve cuando la pregunta necesita varias fuentes y un recuento, no una opinión rápida. Por ejemplo: comparar enfoques, armar un panorama de un tema o reunir argumentos a favor y en contra.",
      },
      {
        kind: "ul",
        items: [
          "Define el alcance: periodo, región, tipo de fuente",
          "Pide un esquema antes del informe largo",
          "Exige enlaces o citas y marca lo que es hipótesis",
        ],
      },
      {
        kind: "p",
        text: "No uses Deep Research para un mail o un resumen de un PDF que ya tienes. Es una herramienta de investigación, no de redacción corta.",
      },
      img("07.png"),
    ],
  },
  {
    type: "fill",
    title: "Un pedido técnico claro",
    lead: "Completa el prompt para cruzar un CSV con un PDF de reglas.",
    template: "Con este {blank} y este {blank}, lista las {blank} y marca lo que {blank}.",
    slots: ["archivo de datos", "documento de reglas", "inconsistencias", "no aparece"],
    answers: ["CSV", "PDF de reglas", "inconsistencias", "no aparece en ninguno"],
    bank: ["CSV", "PDF de reglas", "inconsistencias", "no aparece en ninguno"],
    hint: "Fuente de datos, fuente de reglas, qué buscar, qué hacer si falta.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "content",
    title: "Código y fórmulas, con el contexto pegado",
    blocks: [
      {
        kind: "p",
        text: "Si pides código, pega el fragmento, el error y lo que ya intentaste. “Arregla mi app” no da un parche; da un ensayo.",
      },
      {
        kind: "ul",
        items: [
          "Qué lenguaje y entorno",
          "El error completo, no un resumen",
          "Si quieres explicación, diff o ambos",
        ],
      },
      {
        kind: "callout",
        text: "No subas secretos, claves ni datos personales de clientes. Recorta el archivo si hace falta.",
      },
    ],
  },
  {
    type: "quiz",
    title: "El modo para el volumen",
    question: "Tienes que etiquetar 300 filas de comentarios como positivo / neutro / negativo esta tarde. ¿Qué modo encaja?",
    options: ["Thinking mode", "Pro mode", "Flash mode"],
    answer: 2,
    explain:
      "Flash cubre clasificación de alto volumen. Thinking y Pro son para cuando hay que razonar un caso, no para 300 etiquetas iguales.",
  },
  {
    type: "quiz",
    title: "Cuándo no basta un resumen",
    question: "¿En cuál de estos casos tiene más sentido Deep Research?",
    options: [
      "Reescribir un mail de 8 líneas",
      "Comparar 6 enfoques publicados sobre un problema y entregar un informe con fuentes",
      "Corregir una fórmula de Excel que ya tienes en pantalla",
      "Traducir un PDF que ya subiste",
    ],
    answer: 1,
    explain: "Deep Research brilla cuando hay que salir a buscar y estructurar, no cuando el archivo ya está en el chat.",
  },
  {
    type: "content",
    title: "Revisa el número, no solo la frase",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "En trabajo técnico el riesgo no es el estilo: es un total mal copiado o una regla que Gemini “completó”. Si el resultado se usa para una decisión, vuelve al archivo original.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Sube la fuente; no dictes de memoria",
          "Flash para volumen, Thinking para varios pasos",
          "Deep Research para investigación, no para un mail",
          "En código: error, entorno y fragmento",
          "Nunca pegues secretos; siempre audita cifras",
        ],
      },
    ],
  },
];

const imagenSteps = [
  {
    type: "content",
    title: "Crear y transformar imágenes",
    blocks: [
      {
        kind: "p",
        text: "Gemini puede generar imágenes desde un prompt y transformar una foto que ya tienes. Create Image cubre el primer caso. El segundo —editar, recortar un objeto, cambiar un fondo— usa la misma lógica: describe el resultado, no el proceso mágico.",
      },
      {
        kind: "p",
        text: "En esta lección vas a armar prompts visuales que se pueden repetir: sujeto, entorno, luz, encuadre y lo que no quieres ver.",
      },
      img("imagenes.png"),
    ],
  },
  {
    type: "content",
    title: "Las cinco piezas de un prompt visual",
    blocks: [
      {
        kind: "p",
        text: "Un prompt de imagen útil suele llevar, en este orden:",
      },
      {
        kind: "ul",
        items: [
          "Sujeto: quién o qué, con 2 o 3 detalles concretos",
          "Acción o pose: qué está pasando",
          "Entorno: lugar y hora, no “un fondo bonito”",
          "Luz y cámara: hora dorada, frontal, 35 mm, plano medio",
          "Estilo y exclusiones: foto realista, sin texto, sin logos",
        ],
      },
      {
        kind: "example",
        title: "Prompt que se puede repetir",
        text: "Retrato de una corredora de 30 años, pelo recto peinado, camiseta gris, zancada en una calle de ciudad al atardecer, luz cálida a nivel de calle, foto realista, sin texto ni marcas.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Qué le falta a este prompt",
    question: "Alguien pide: “Haz una imagen profesional y creativa de un producto”. ¿Qué es lo más urgente de añadir?",
    options: [
      "Más adjetivos: “épica, premium, viral”",
      "El producto concreto, el encuadre, la luz y lo que no debe aparecer",
      "Pedir 40 variaciones de una vez",
      "Cambiar a Thinking mode",
    ],
    answer: 1,
    explain:
      "Sin sujeto, luz y exclusiones, Gemini improvisa un catálogo genérico. Los adjetivos de marketing no sustituyen una descripción.",
  },
  {
    type: "content",
    title: "Transformar una imagen que ya tienes",
    blocks: [
      {
        kind: "p",
        text: "Si subes una foto, di qué se queda y qué cambia. “Hazla más wow” no se ejecuta. “Misma persona, mismo encuadre, cielo de hora dorada, sin el camión del fondo” sí.",
      },
      {
        kind: "ul",
        items: [
          "Conserva: sujeto, pose, paleta de la ropa",
          "Cambia: fondo, cielo, un objeto que estorba",
          "Excluye: texto, logos, personas extra, distorsión de cara",
        ],
      },
      {
        kind: "p",
        text: "Pide una o tres variaciones, no treinta. Eliges una y la iteras.",
      },
    ],
  },
  {
    type: "fill",
    title: "Describe la imagen",
    lead: "Completa el prompt para generar una imagen a partir de texto.",
    template:
      "Crea una imagen de {blank} en {blank} que muestre a {blank} {blank} con {blank}. Adapta el tono general a un proyecto profesional.",
    slots: ["lugar", "estilo", "sujeto", "descripción", "iluminación"],
    answers: [
      "un espacio de trabajo de oficina",
      "un estilo limpio y moderno",
      "empleados",
      "concentrados en sus portátiles",
      "iluminación suave y natural",
    ],
    bank: [
      "un estilo limpio y moderno",
      "un espacio de trabajo de oficina",
      "concentrados en sus portátiles",
      "empleados",
      "iluminación suave y natural",
    ],
    hint: "Toca las fichas en el orden del prompt: lugar, estilo, sujeto, descripción e iluminación.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    resultImage: "/lessons/results/oficina.png",
  },
  {
    type: "fill",
    title: "Completa el prompt de imagen",
    lead: "Arma un pedido que Gemini pueda ejecutar sin adivinar el producto.",
    template: "Foto de {blank} sobre {blank}, luz {blank}, estilo {blank}, --sin {blank}.",
    slots: ["sujeto", "superficie", "iluminación", "estilo", "exclusiones"],
    answers: [
      "unos audífonos negros",
      "madera clara",
      "suave de estudio",
      "foto de revista",
      "texto, logos ni manos",
    ],
    bank: [
      "unos audífonos negros",
      "madera clara",
      "suave de estudio",
      "foto de revista",
      "texto, logos ni manos",
    ],
    hint: "Sujeto → superficie → luz → estilo → lo que no quieres.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    resultImage: "/lessons/results/audifonos.png",
  },
  {
    type: "content",
    title: "Lo que Gemini no resuelve bien en imagen",
    blocks: [
      {
        kind: "p",
        text: "Conviene conocer los límites antes de pelearte con el prompt:",
      },
      {
        kind: "ul",
        items: [
          "Texto dentro de la imagen: suele salir mal escrito. Pon el copy después, en Canva o en el diseño",
          "Caras de personas reales que no subiste: no las pidas",
          "Logos de marcas: no los uses en campañas",
          "Manos, tipografías pequeñas y recuentos exactos de objetos",
        ],
      },
      {
        kind: "callout",
        text: "💡 Si el diseño lleva palabras, genera la escena limpia y añade el texto tú. Es más rápido que insistir.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Dónde va el copy",
    question: "Necesitas un post con una frase grande sobre la foto. ¿Qué haces?",
    options: [
      "Pedirle a Gemini que escriba la frase dentro de la imagen",
      "Generar la escena sin texto y componer el copy después",
      "Pedir 20 imágenes hasta que las letras salgan bien",
      "Usar Thinking mode para las letras",
    ],
    answer: 1,
    explain: "El copy se diseña aparte. Gemini se encarga de la escena; tú, de las palabras que se leen.",
  },
  {
    type: "content",
    title: "Tres, no treinta",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Un buen flujo: un prompt preciso, 2 o 3 resultados, eliges uno, cambias una sola variable (luz, encuadre o fondo) y te detienes cuando la imagen ya sirve para el canal.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Describe sujeto, entorno, luz, encuadre y exclusiones",
          "Al editar, di qué se conserva y qué cambia",
          "No pidas texto ni logos dentro de la foto",
          "Itera de a una palanca",
        ],
      },
    ],
  },
];

const LYRIA = {
  folk:
    "Create a 30-second nostalgic folk ballad sung in Spanish. Acoustic guitar and piano only. Slow intimate tempo around 70 BPM. Warm close-mic vocals. Generate a complete Spanish lyric about memory, home and a quiet goodbye. Vocals must sing the lyrics clearly.",
  remix:
    "Create a 30-second melancholic folk ballad sung in Spanish. Acoustic guitar and piano. Faster constant tempo around 118 BPM with male vocals. Generate a complete Spanish lyric. Keep the folk instrumentation but make the groove more driving.",
  snow:
    "Create a 30-second playful energetic hip hop track sung in Spanish, inspired by children playing in the snow. Bouncy drums, fun cadence, winter playground vibe. Generate a complete Spanish lyric about snowball fights and laughter. Vocals must sing the lyrics clearly.",
  lyricsNew:
    "Create a 30-second playful energetic hip hop track sung in Spanish, inspired by children playing in the snow. Keep the same hip hop beat, tone and genre. Rewrite only the lyrics: new Spanish lines about footprints on ice, white wind and sunrise. Vocals must sing the new lyrics clearly.",
  french:
    "Create a 30-second playful energetic hip hop track sung in French, inspired by children playing in the snow. Keep the same hip hop beat, tone and genre. French lyrics only, about playing in the snow. Vocals must sing in French clearly.",
};
const SNOW_IMG = "/lessons/gemini/music/nieve-ninos.jpg";

const musicaSteps = [
  {
    type: "content",
    title: "Conoce a Lyria",
    blocks: [
      {
        kind: "p",
        text: "Detrás de la creación musical de Gemini está Lyria, el motor que convierte tus palabras en sonido. No lo verás como una herramienta independiente. Trabaja de forma silenciosa dentro de Gemini, encargándose de todo: composición, instrumentación, voces y producción.",
      },
      {
        kind: "p",
        text: "Lo único que haces es describir lo que quieres, y Lyria se encarga del resto.",
      },
      img("musica.png"),
    ],
  },
  {
    type: "content",
    title: "Habla como hablas",
    blocks: [
      {
        kind: "p",
        text: "Además, no hace falta usar términos musicales para obtener buenos resultados. Puedes usar frases como:",
      },
      {
        kind: "ul",
        items: [
          "“Una canción tranquila de mañana con guitarra acústica”",
          "“Una pista enérgica para hacer ejercicio con batería pesada”",
          "“Música de fondo pacífica para un video de viajes”",
        ],
      },
      {
        kind: "p",
        text: "Lyria construirá la interpretación musical basándose únicamente en tus palabras.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Qué hace diferente a Lyria",
    question: "¿Qué crees que hace diferente a Lyria de las herramientas de creación musical independientes?",
    options: [
      "Analiza tu biblioteca de música existente para coincidir con tu estilo personal",
      "Permite exportar pistas en cualquier formato, incluyendo stems para mezcla",
      "Funciona de manera conversacional, puedes afinar las pistas a través del chat sin empezar de cero",
      "Genera múltiples versiones simultáneamente, para que puedas elegir la mejor",
    ],
    answer: 2,
    explain:
      "La verdadera ventaja de Lyria es su flujo conversacional: describes lo que quieres con palabras sencillas y lo afinas a través del chat, sin empezar de cero.",
  },
  {
    type: "content",
    title: "Cómo acceder a la herramienta de música",
    blocks: [
      {
        kind: "p",
        text: "Por lo tanto, con un buen prompt, puedes crear:",
      },
      {
        kind: "ul",
        items: [
          "Música de fondo para videos",
          "Temas de intro para podcasts",
          "Pistas de productos",
          "Pistas multilingües para campañas regionales",
          "Listas de reproducción motivacionales para eventos de equipo",
        ],
      },
      { kind: "p", text: "Veamos cómo se hace." },
      { kind: "h", text: "Cómo acceder a la herramienta de música" },
      {
        kind: "p",
        text: "En la aplicación de Gemini, abre el menú **Tools** y haz clic en el botón **Create Music** (el que tiene el icono de nota musical). Eso abre la interfaz de creación musical.",
      },
      { kind: "music-tools" },
    ],
  },
  {
    type: "content",
    title: "Entender la interfaz",
    blocks: [
      {
        kind: "p",
        text: "Al abrir Create Music ves estilos predefinidos —90s rap, baladas folk, lo-fi y más— que sirven como punto de partida. No construyes desde cero: eliges una base y la personalizas.",
      },
      {
        kind: "p",
        text: "Abajo está el campo del prompt. Ahí añades tema, vibra o incluso un poco de letra.",
      },
      { kind: "music-grid" },
    ],
  },
  {
    type: "content",
    title: "Las pistas de remix",
    blocks: [
      {
        kind: "p",
        text: "Las pistas de remix son la forma más rápida de empezar. En lugar de construir desde cero, haces lo siguiente:",
      },
      {
        kind: "ul",
        items: [
          "Elegir un estilo.",
          "Agregar tu propia descripción (tema, vibra o incluso algo de letra).",
          "Generar una nueva versión inspirada en esa base.",
        ],
      },
      {
        kind: "p",
        text: "La pista seleccionada define la vibra general y la instrumentación. Luego, tu prompt afina el tono, el tempo, la letra o la atmósfera.",
      },
      { kind: "music-grid" },
    ],
  },
  {
    type: "fill",
    title: "Tu primera pista",
    lead: "Completa el prompt usando la pista de balada folk como base.",
    template: "Crea una {blank} {blank} usando {blank}.",
    slots: ["tipo de pista", "estado de ánimo", "instrumentos"],
    answers: ["balada folk", "nostálgica", "guitarra acústica y piano"],
    bank: ["guitarra acústica y piano", "nostálgica", "balada folk"],
    hint: "Tipo de pista, estado de ánimo e instrumentos, en ese orden.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    lyriaPrompt: LYRIA.folk,
    resultPoster: "/lessons/results/folk-plato.jpg",
    resultVideo: "/lessons/results/folk-plato.mp4",
    simReply: {
      animate: true,
      intro:
        "He compuesto una balada folk nostálgica usando guitarra acústica y piano: una melodía íntima, tempo pausado y un arreglo cálido que deja espacio a la nostalgia.",
    },
  },
  {
    type: "content",
    doneBanner: "Tu primera pista",
    doneLead: "Completa el prompt usando la pista de balada folk como base.",
    blocks: [
      {
        kind: "p",
        text: "Y aquí está: una pista completa construida a partir de un estilo base, un tono y un par de instrumentos. Nota cómo el sentimiento nostálgico se transmite en la melodía y el tono de la guitarra.",
      },
      {
        kind: "p",
        text: "Eso es **Lyria** leyendo entre líneas tu prompt y la base del remix.",
      },
      {
        kind: "video",
        src: "/lessons/results/folk-plato.mp4",
        poster: "/lessons/results/folk-plato.jpg",
        lyriaPrompt: LYRIA.folk,
      },
    ],
  },
  {
    type: "fill",
    title: "Remix con nuevas capas",
    lead: "Mantén la misma pista base pero cambia el tempo y las voces.",
    template: "Crea una {blank} {blank} usando {blank}. Cambia el tempo a {blank} con voces {blank}.",
    slots: ["tipo de pista", "estado de ánimo", "instrumentos", "ritmo", "tono"],
    answers: ["balada folk", "melancólica", "guitarra y piano", "rápido y constante", "masculinas"],
    bank: ["balada folk", "masculinas", "guitarra y piano", "rápido y constante", "melancólica"],
    hint: "Misma base (tipo, ánimo, instrumentos) y luego tempo y voces.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    lyriaPrompt: LYRIA.remix,
    resultPoster: "/lessons/results/remix-luz.jpg",
    resultVideo: "/lessons/results/remix-luz.mp4",
    simReply: {
      animate: true,
      intro:
        "He creado una balada folk melancólica con guitarra y piano, actualizada a un tempo rápido y constante con voces masculinas.",
    },
  },
  {
    type: "content",
    doneBanner: "Remix con nuevas capas",
    doneLead: "Mantén la misma pista base pero cambia el tempo y las voces.",
    blocks: [
      {
        kind: "p",
        text: "¿Notas la diferencia? Son los mismos instrumentos de antes, pero con un tempo más rápido y voces masculinas, todo el tono cambia.",
      },
      {
        kind: "video",
        src: "/lessons/results/remix-luz.mp4",
        poster: "/lessons/results/remix-luz.jpg",
        lyriaPrompt: LYRIA.remix,
      },
    ],
  },
  {
    type: "content",
    title: "De imagen a audio",
    blocks: [
      { kind: "p", text: "Puedes usar Image-to-Audio para:" },
      {
        kind: "ul",
        items: [
          "Bandas sonoras para vlogs de viajes (subir paisaje → obtener música acorde)",
          "Videos de productos (subir fotos → generar pistas de marca)",
          "Temas para presentaciones (subir diapositivas → crear atmósfera de audio)",
          "Tableros de visión digitales (subir inspiración → obtener música motivacional)",
        ],
      },
      {
        kind: "p",
        text: "¿Recuerdas la imagen de los niños jugando en la nieve? Vamos a convertirla en una pista.",
      },
      imgMusic("nieve-ninos.jpg"),
    ],
  },
  {
    type: "fill",
    title: "De imagen a audio",
    lead: "Usa una imagen para generar una pista.",
    template: "{blank} una pista de hip hop a partir de esta imagen: *niños jugando en la nieve*",
    slots: ["Comando"],
    answers: ["Crea"],
    bank: ["Crea"],
    hint: "El comando va primero: Crea.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    lyriaPrompt: LYRIA.snow,
    lyriaImage: SNOW_IMG,
    resultPoster: "/lessons/gemini/music/nieve-bola.jpg",
    resultVideo: "/lessons/results/nieve-hiphop.mp4",
    simReply: {
      animate: true,
      intro:
        "¡Aquí tienes tu pista de hip hop inspirada en la imagen de los niños jugando en la nieve! Capturé el tono juguetón y lleno de energía con ritmos alegres y una cadencia animada que combina con la escena.",
    },
  },
  {
    type: "content",
    doneBanner: "De imagen a audio",
    doneLead: "Usa una imagen para generar una pista.",
    blocks: [
      {
        kind: "p",
        text: "Ahí lo tienes: una pista completa generada a partir de una sola imagen. Gemini captó el tono juguetón y lleno de energía de los niños en la nieve y lo tradujo directamente a sonido.",
      },
      {
        kind: "video",
        src: "/lessons/results/nieve-hiphop.mp4",
        poster: "/lessons/gemini/music/nieve-bola.jpg",
        lyrics: "Nieve, nieve, vamos a jugar / risa en el bosque, a saltar",
        lyriaPrompt: LYRIA.snow,
        lyriaImage: SNOW_IMG,
      },
    ],
  },
  {
    type: "content",
    title: "Editar la letra",
    blocks: [
      {
        kind: "p",
        text: "Si la música quedó bien pero la letra no encaja, no regeneres toda la pista. Pídele a Gemini que reescriba solo la letra y conserve el resto.",
      },
      {
        kind: "p",
        text: "Ya tienes la canción de la nieve. Escúchala y luego arma el prompt para cambiar solo la letra.",
      },
      {
        kind: "video",
        src: "/lessons/results/nieve-hiphop.mp4",
        poster: "/lessons/gemini/music/nieve-bola.jpg",
        lyrics: "Nieve, nieve, vamos a jugar / risa en el bosque, a saltar",
        lyriaPrompt: LYRIA.snow,
        lyriaImage: SNOW_IMG,
      },
    ],
  },
  {
    type: "fill",
    title: "Editar la letra",
    lead: "La pista ya existe. Completa el prompt para reescribir solo la letra.",
    template: "{blank} la letra, pero mantén el {blank}, el {blank} y el {blank} iguales.",
    slots: ["comando", "ritmo", "tono", "género"],
    answers: ["Cambia", "ritmo", "tono", "género"],
    bank: ["Cambia", "ritmo", "tono", "género"],
    hint: "No pidas otra canción: solo letra nueva, mismo beat.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    currentTrack: "/lessons/results/nieve-hiphop.mp4",
    currentPoster: "/lessons/gemini/music/nieve-bola.jpg",
    currentCaption: "Pista actual",
    currentLyrics: "Nieve, nieve, vamos a jugar / risa en el bosque, a saltar",
    currentLyriaPrompt: LYRIA.snow,
    currentLyriaImage: SNOW_IMG,
    lyriaPrompt: LYRIA.lyricsNew,
    lyriaImage: SNOW_IMG,
    resultVideo: "/lessons/results/letra-nueva.mp4",
    resultPoster: "/lessons/gemini/music/letra-visual.jpg",
    simReply: {
      animate: true,
      intro:
        "Listo: reescribí la letra y dejé intactos el beat, el tono y el género. La cama hip hop sigue igual; cambian las frases encima.",
    },
  },
  {
    type: "content",
    doneBanner: "Editar la letra",
    doneLead: "Cambia la letra, pero mantén el ritmo, el tono y el género iguales.",
    blocks: [
      {
        kind: "p",
        text: "Misma pista, otra historia. El hip hop de la nieve no se regeneró: solo cambió lo que se canta.",
      },
      {
        kind: "video",
        src: "/lessons/results/letra-nueva.mp4",
        poster: "/lessons/gemini/music/letra-visual.jpg",
        lyrics: "Huellas en el hielo, el día despertó / canta el viento blanco, el sol ya salió",
        lyriaPrompt: LYRIA.lyricsNew,
        lyriaImage: SNOW_IMG,
      },
    ],
  },
  {
    type: "content",
    title: "Cambiar el idioma",
    blocks: [
      {
        kind: "p",
        text: "Gemini se ajustará cada vez sin perder lo que ya funciona. Es como colaborar con un productor que entiende tu visión al instante.",
      },
      {
        kind: "p",
        text: "Ahora pasa la misma canción a otro idioma, sin tocar ritmo ni género.",
      },
    ],
  },
  {
    type: "fill",
    title: "Cambiar el idioma",
    lead: "La canción con la letra nueva sigue en el workspace. Pide el cambio de idioma.",
    template: "Cambia esta canción a {blank}, pero mantén el ritmo, el tono y el género iguales.",
    slots: ["idioma"],
    answers: ["francés"],
    bank: ["francés", "japonés", "ópera"],
    hint: "El ejemplo de la lección usa francés.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
    currentTrack: "/lessons/results/letra-nueva.mp4",
    currentPoster: "/lessons/gemini/music/letra-visual.jpg",
    currentCaption: "Pista actual (letra nueva)",
    currentLyrics: "Huellas en el hielo, el día despertó / canta el viento blanco, el sol ya salió",
    currentLyriaPrompt: LYRIA.lyricsNew,
    currentLyriaImage: SNOW_IMG,
    lyriaPrompt: LYRIA.french,
    lyriaImage: SNOW_IMG,
    resultVideo: "/lessons/results/letra-frances.mp4",
    resultPoster: "/lessons/gemini/music/idioma-obelisco.jpg",
    simReply: {
      animate: true,
      intro:
        "Pasé la letra a francés y conservé el ritmo, el tono y el género. Es la misma canción, ahora en otro idioma.",
    },
  },
  {
    type: "content",
    doneBanner: "Cambiar el idioma",
    doneLead: "Cambia esta canción a francés, pero mantén el ritmo, el tono y el género iguales.",
    blocks: [
      {
        kind: "p",
        text: "El beat no se movió. Lo que cambió es el idioma de la voz, como pediste en el prompt.",
      },
      {
        kind: "video",
        src: "/lessons/results/letra-frances.mp4",
        poster: "/lessons/gemini/music/idioma-obelisco.jpg",
        lyrics: "Neige, neige, on va s'amuser / rire dans les bois, sauter",
        lyriaPrompt: LYRIA.french,
        lyriaImage: SNOW_IMG,
      },
    ],
  },
  {
    type: "content",
    title: "Un apunte sobre seguridad",
    blocks: [
      {
        kind: "callout",
        text: "💡 Un apunte sobre seguridad. Antes de compartir una pista: Gemini aplica una marca de agua SynthID, una firma digital invisible que no altera el sonido y permite verificar que salió de Google AI. Pide estilos (“vibra West Coast de los 90”), no copies a un artista concreto.",
      },
      {
        kind: "p",
        text: "Ten esto en cuenta y todo estará listo.",
      },
      imgMusic("idioma-obelisco.jpg"),
    ],
  },
  {
    type: "content",
    title: "Próximos pasos",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Ahora que conoces las herramientas creativas de Gemini (imágenes y música), tienes todo listo para la Unidad 2, donde vas a explorar flujos de trabajo de varios pasos y automatizaciones.",
      },
      {
        kind: "p",
        text: "¡Nos vemos ahí!",
      },
      { kind: "image", scene: "celebrate", caption: "Próximos pasos" },
    ],
  },
];

const promptsSteps = [
  {
    type: "content",
    title: "Guía mejor con prompts",
    blocks: [
      {
        kind: "p",
        text: "Un prompt suelto sirve una vez. Un prompt bien guiado se reutiliza: mismo rol, mismos límites, distinto insumo. En esta lección vas a dejar de improvisar cada chat y a escribir pedidos que se pueden guardar, repetir y mejorar.",
      },
      {
        kind: "p",
        text: "Gemini rinde cuando el pedido tiene dueño (quién eres), destino (para quién es), tarea (qué hacer) y forma (cómo debe verse el resultado).",
      },
      img("prompts.png"),
    ],
  },
  {
    type: "content",
    title: "La plantilla de un prompt que se aguanta",
    blocks: [
      {
        kind: "p",
        text: "Usa este orden. Si falta una pieza, Gemini rellena con supuestos:",
      },
      {
        kind: "ul",
        items: [
          "Rol: “Eres editor de un boletín interno, no copywriter de ads”",
          "Contexto: qué archivo subiste o qué pasó antes",
          "Tarea: una acción, no tres a la vez",
          "Formato: tabla, viñetas, 8 líneas, con/sin título",
          "Límites: qué no debe inventar, tono, longitud",
        ],
      },
      {
        kind: "example",
        title: "Prompt reutilizable",
        text: "Eres analista de operaciones. Con este CSV, dame 5 hallazgos y 3 riesgos. Tabla: hallazgo, evidencia (cita la fila), siguiente paso. Si un dato no está, escribe “no aparece”. Sin recomendaciones genéricas.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Qué hace reutilizable un prompt",
    question: "¿Cuál de estos pedidos podrías guardar y volver a usar la semana que viene solo cambiando el archivo?",
    options: [
      "“Haz algo bueno con esto”",
      "“Eres editor interno. Con este reporte, 5 hallazgos en tabla: hecho, evidencia, riesgo. Sin inventar cifras.”",
      "“Sé creativo y sorprendeme”",
      "“Mejóralo un poco”",
    ],
    answer: 1,
    explain:
      "Rol, formato y un límite de honestidad se mantienen. El archivo cambia. Los adjetivos sueltos no se pueden reutilizar.",
  },
  {
    type: "content",
    title: "Gems y prompts guardados",
    blocks: [
      {
        kind: "p",
        text: "Si repetimos el mismo encargo —un recap de reunión, un mail a clientes, un chequeo de tono— conviene fijarlo. En Gemini puedes guardar instrucciones (Gems o prompts fijos) para no reescribir el rol cada vez.",
      },
      {
        kind: "ul",
        items: [
          "Un Gem = un trabajo: “recap de standup”, no “asistente para todo”",
          "Pega reglas negativas: qué no debe hacer",
          "Prueba el Gem con 2 insumos distintos antes de usarlo en serio",
        ],
      },
      {
        kind: "callout",
        text: "💡 Un Gem vago (“sé útil”) es peor que no tenerlo: esconde los supuestos. Mejor un Gem estrecho y claro.",
      },
    ],
  },
  {
    type: "fill",
    title: "Arma un prompt que se pueda guardar",
    lead: "Completa las cuatro piezas de un pedido reutilizable.",
    template: "Eres {blank}. Con este {blank}, entrega {blank}. Si falta un dato, {blank}.",
    slots: ["rol", "insumo", "formato", "regla de honestidad"],
    answers: ["editor interno", "reporte semanal", "5 hallazgos en tabla", "escribe no aparece"],
    bank: ["editor interno", "reporte semanal", "5 hallazgos en tabla", "escribe no aparece"],
    hint: "Quién eres → qué subes → cómo lo quieres → qué hacer si no está.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "quiz",
    title: "Una palanca por ronda",
    question: "El resultado está bien de datos, pero el tono es de anuncio. ¿Qué cambias en el prompt guardado?",
    options: [
      "Añades “hazlo viral y premium” al final",
      "Cambias solo la regla de tono: “mensaje interno, sin slogans”",
      "Borras el rol y dejas la tarea suelta",
      "Pides 20 versiones y eliges al azar",
    ],
    answer: 1,
    explain: "Iterar es cambiar una palanca. Si tocas rol, tono y formato a la vez, no sabrás qué arregló el texto.",
  },
  {
    type: "content",
    title: "Guarda, prueba, ajusta",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Un prompt confiable se comporta igual con insumos distintos. Si con un CSV funciona y con el siguiente inventa, la regla de “no aparece” todavía no está clara.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Rol + insumo + formato + límites",
          "Un Gem por trabajo, no un asistente infinito",
          "Cambia una palanca por ronda",
          "Prueba el prompt con más de un archivo",
        ],
      },
    ],
  },
];

const datosSteps = [
  {
    type: "content",
    title: "Trabajar con grandes cantidades de datos",
    blocks: [
      {
        kind: "p",
        text: "Gemini aguanta mucho contexto: PDFs largos, varias hojas, hilos de correo. El riesgo no es “que no quepa”, es pedirle todo a la vez y obtener un resumen blando que no se puede auditar.",
      },
      {
        kind: "p",
        text: "En esta lección vas a partir el trabajo: qué extraer, en qué orden y cómo comprobar que el número sigue en el archivo.",
      },
      img("datos.png"),
    ],
  },
  {
    type: "content",
    title: "No pidas “resume todo”. Pide una capa",
    blocks: [
      {
        kind: "p",
        text: "Con 40 páginas o 8,000 filas, un “resume esto” pierde excepciones. Mejor capas:",
      },
      {
        kind: "ul",
        items: [
          "Mapa: secciones, periodos, qué hay en cada hoja",
          "Extracción: plazos, montos, dueños, excepciones",
          "Cruce: contradicciones entre archivos",
          "Acción: qué falta preguntar",
        ],
      },
      {
        kind: "example",
        title: "Primera pasada",
        text: "No resumas. Lista: nombre de cada hoja, número de filas, columnas, 3 valores raros. Luego espero para la siguiente pregunta.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Por dónde empezar",
    question: "Subes un PDF de 60 páginas y un CSV de ventas. ¿Cuál es el primer pedido más seguro?",
    options: [
      "“Dame la estrategia completa de la empresa”",
      "“Mapea qué hay en cada fuente: secciones del PDF y columnas del CSV. Sin recomendaciones todavía.”",
      "“Inventa las cifras que falten para el pitch”",
      "“Haz un informe de 20 páginas ya”",
    ],
    answer: 1,
    explain: "Primero el inventario. La estrategia viene después, con evidencia. Si pides el informe de una, Gemini rellena huecos.",
  },
  {
    type: "content",
    title: "Ancla cada cifra",
    blocks: [
      {
        kind: "p",
        text: "Cuando el volumen es grande, pide la evidencia al lado del hallazgo: “fila 12”, “página 4, segundo párrafo”. Si no puede citar, el dato es hipótesis, no hecho.",
      },
      {
        kind: "ul",
        items: [
          "Montos con unidad y periodo",
          "Nombres como están en el archivo, no “el cliente”",
          "Un apartado “no está en las fuentes”",
        ],
      },
      img("06.png"),
    ],
  },
  {
    type: "fill",
    title: "Pedido para un lote grande",
    lead: "Completa un prompt que no se coma las excepciones.",
    template: "Con estos archivos, primero un {blank}. Luego {blank} con {blank}. Lo que no esté, {blank}.",
    slots: ["mapa", "extracción", "evidencia", "honestidad"],
    answers: ["mapa de contenidos", "5 hallazgos", "cita de página o fila", "márcalo como no aparece"],
    bank: ["mapa de contenidos", "5 hallazgos", "cita de página o fila", "márcalo como no aparece"],
    hint: "Inventario → hallazgos → de dónde salen → qué falta.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "quiz",
    title: "Flash o Thinking",
    question: "Tienes que listar columnas y contar filas de 3 CSV esta tarde. ¿Qué modo encaja mejor?",
    options: ["Thinking mode para filosofar cada columna", "Flash mode para el inventario rápido", "Pro mode solo porque el archivo pesa"],
    answer: 1,
    explain: "El inventario es volumen. Thinking entra cuando hay que cruzar reglas contradictorias, no para contar columnas.",
  },
  {
    type: "content",
    title: "Parte, no ahogues el chat",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Si el hilo se vuelve un ladrillo, abre uno nuevo con el mapa ya validado. Llevar 15 idas y vueltas más el CSV original suele degradar la precisión. El flujo confiable es: mapa → extracción → cruce → decisión humana.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Una capa por prompt, no el informe entero",
          "Cita de página o fila junto al número",
          "Apartado explícito de lo que no está",
          "Flash para inventario, Thinking para cruces con reglas",
        ],
      },
    ],
  },
];

const flujosSteps = [
  {
    type: "content",
    title: "Crea flujos de trabajo de varios pasos",
    blocks: [
      {
        kind: "p",
        text: "Un flujo confiable no es un prompt milagroso. Es una secuencia: preparar → extraer → redactar → revisar. Cada paso tiene un resultado que alimenta al siguiente. Si saltas al texto final, mezclas errores de dato con errores de tono.",
      },
      img("flujos.png"),
    ],
  },
  {
    type: "content",
    title: "Diseña el flujo antes del chat",
    blocks: [
      {
        kind: "p",
        text: "En una hoja, anota 3 o 4 estaciones. Ejemplo para un recap de proyecto:",
      },
      {
        kind: "ul",
        items: [
          "1. Subir notas + correos → lista de decisiones y pendientes",
          "2. Cruzar con el CSV de plazos → marcar lo vencido",
          "3. Redactar el recap en el formato del equipo",
          "4. Tú revisas nombres, fechas y promesas",
        ],
      },
      {
        kind: "p",
        text: "Gemini hace 1 a 3. El 4 no se delega si el recap sale del equipo.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Dónde parte el flujo",
    question: "¿Por qué conviene separar “extraer hechos” de “escribir el mail”?",
    options: [
      "Porque Gemini no sabe escribir mails",
      "Para poder auditar los hechos antes de que el tono los esconda",
      "Porque hay que usar un modelo distinto en cada palabra",
      "No conviene: siempre es mejor un solo prompt largo",
    ],
    answer: 1,
    explain: "Si el mail nace mezclado, no sabes si el error es un dato o una frase bonita. El flujo parte para que puedas frenar.",
  },
  {
    type: "content",
    title: "Pasa el resultado, no el chat entero",
    blocks: [
      {
        kind: "p",
        text: "Al cambiar de paso, pega el entregable limpio (la tabla, la lista), no las 12 versiones anteriores. El siguiente prompt debe ver el insumo estable.",
      },
      {
        kind: "example",
        title: "Handoff",
        text: "Usa SOLO esta tabla de pendientes. Redacta un recap de 12 líneas para el canal interno. No agregues ítems que no estén en la tabla.",
      },
      {
        kind: "p",
        text: "Canvas ayuda en el paso de redacción larga. Deep Research, si hace falta, va antes, como insumo, no en medio del mail.",
      },
    ],
  },
  {
    type: "fill",
    title: "Ordena un flujo de recap",
    lead: "Completa las estaciones en el orden que se puede auditar.",
    template: "Primero {blank}. Luego {blank}. Después {blank}. Al final {blank}.",
    slots: ["paso 1", "paso 2", "paso 3", "paso 4"],
    answers: ["extraer decisiones", "cruzar plazos", "redactar el recap", "revisar nombres y fechas"],
    bank: ["extraer decisiones", "cruzar plazos", "redactar el recap", "revisar nombres y fechas"],
    hint: "Hechos → cruce → texto → ojo humano.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "quiz",
    title: "El paso que no se salta",
    question: "El recap se va a un cliente. ¿Qué estación no puede omitirse?",
    options: [
      "Pedirle a Gemini que “suene más seguro”",
      "Revisar cifras, nombres y compromisos antes de enviar",
      "Cambiar a Create Music para ambientar el mail",
      "Borrar el contexto para que sea más creativo",
    ],
    answer: 1,
    explain: "El flujo confiable termina en una persona. Gemini acelera; tú firmas.",
  },
  {
    type: "content",
    title: "Documenta el flujo en dos líneas",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Si el equipo va a repetirlo, deja escrito: insumos, prompts (o Gem), entregable de cada estación y quién revisa. Un flujo que solo vive en tu cabeza no es un flujo: es un truco.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Parte hechos, cruce, redacción y revisión",
          "Pasa el entregable limpio al siguiente paso",
          "Canvas y Deep Research tienen estación propia",
          "Alguien revisa lo que sale del equipo",
        ],
      },
    ],
  },
];

const creativoSteps = [
  {
    type: "content",
    title: "Resuelve retos creativos",
    blocks: [
      {
        kind: "p",
        text: "Creativo no significa “haz algo loco”. Significa explorar opciones con límites: un brief, un canal, un tono, un “esto no”. Gemini es bueno generando volumen; tú eres bueno eligiendo. Esta lección enseña a pedir divergencia y luego convergencia, no un eslogan a la primera.",
      },
      img("creativo.png"),
    ],
  },
  {
    type: "content",
    title: "Primero cantidad con reglas, luego recorte",
    blocks: [
      {
        kind: "p",
        text: "Un buen reto creativo tiene dos vueltas:",
      },
      {
        kind: "ul",
        items: [
          "Divergir: 8 ángulos distintos, misma restricción de canal y promesa",
          "Converger: eliges 2, pides variaciones de esos, no 30 estilos nuevos",
        ],
      },
      {
        kind: "example",
        title: "Pedido de divergencia",
        text: "8 conceptos para un reel de 15 s de una app de hábitos. Promesa: “empieza en 2 minutos”. Sin clichés de “versión mejor de ti”. Cada concepto: gancho, imagen, texto en pantalla.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Qué pide un brief creativo",
    question: "¿Cuál pedido produce opciones que se pueden comparar?",
    options: [
      "“Inspírame, tú puedes”",
      "“10 nombres de producto, máximo 3 palabras, pronunciables en español, sin copiar marcas”",
      "“Que sea icónico y disruptivo”",
      "“Hazlo como Apple, Nike y una startup a la vez”",
    ],
    answer: 1,
    explain: "Cantidad, longitud, idioma y una exclusión. Se pueden juzgar. “Icónico” no se ejecuta.",
  },
  {
    type: "content",
    title: "Usa la restricción como motor",
    blocks: [
      {
        kind: "p",
        text: "Sin límite, Gemini recorre lugares comunes. Con límite (solo metáforas de cocina, solo 6 palabras, sin la palabra “innovación”), aparece material usable. Si el primer lote es plano, aprieta la restricción, no pidas “más creatividad”.",
      },
      {
        kind: "callout",
        text: "💡 Cambia una variable: el canal, el enemigo del usuario, o la forma (lista vs escena). No las tres a la vez.",
      },
    ],
  },
  {
    type: "fill",
    title: "Arma un reto creativo acotado",
    lead: "Completa un pedido de divergencia que se pueda evaluar.",
    template: "Dame {blank} para {blank}. Promesa: {blank}. Sin {blank}.",
    slots: ["cantidad", "formato", "mensaje", "exclusión"],
    answers: ["8 conceptos", "un reel de 15 segundos", "empieza en 2 minutos", "clichés de motivational"],
    bank: ["8 conceptos", "un reel de 15 segundos", "empieza en 2 minutos", "clichés de motivational"],
    hint: "Cuántos → dónde viven → qué dicen → qué queda fuera.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "quiz",
    title: "Después del lote",
    question: "Gemini te dio 8 conceptos. Dos te gustan. ¿Qué sigue?",
    options: [
      "Pedir 80 más “por si acaso”",
      "Pedir 3 variaciones de cada uno de esos dos, misma promesa",
      "Mezclar los 8 en un solo concepto gigante",
      "Tirar el brief y empezar en otro modelo",
    ],
    answer: 1,
    explain: "Converger. El volumen ya cumplió. Ahora profundizas en lo que sí sirve.",
  },
  {
    type: "content",
    title: "Tú curas, Gemini propone",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "El flujo creativo confiable termina en una elección tuya, no en “la opción 4 porque está en negrita”. Anota por qué ganó un concepto (claridad, encaje al canal, tono). Esa nota alimenta el siguiente brief.",
      },
      { kind: "h", text: "Puntos clave" },
      {
        kind: "ul",
        items: [
          "Divergir con reglas, luego converger",
          "La restricción empuja; el adjetivo “creativo” no",
          "Una variable por ronda",
          "Tú eliges y dejas constancia del criterio",
        ],
      },
    ],
  },
];

const autoSteps = [
  {
    type: "content",
    title: "Automatiza tareas de negocio",
    blocks: [
      {
        kind: "p",
        text: "Automatizar no es “que Gemini haga la empresa”. Es quitarte lo repetible: el recap de cada lunes, el primer borrador de un mail de onboarding, la clasificación de comentarios, el checklist de un cierre. Lo que cambia cada vez y tiene riesgo (precio, legal, un cliente enojado) se queda con revisión humana.",
      },
      img("automatiza.png"),
    ],
  },
  {
    type: "content",
    title: "Qué sí se automatiza",
    blocks: [
      {
        kind: "ul",
        items: [
          "Tareas con insumo estable y formato fijo",
          "Primer borrador, no el envío",
          "Etiquetado, extracción, traducciones internas",
          "Recordatorios y listas a partir de una plantilla",
        ],
      },
      {
        kind: "p",
        text: "Un Gem + una carpeta de insumos + un formato de salida es suficiente para muchas pymes. No hace falta un robot de diez integraciones el primer día.",
      },
    ],
  },
  {
    type: "quiz",
    title: "Candidato a automatizar",
    question: "¿Cuál de estas tareas es la mejor para un flujo repetible con Gemini?",
    options: [
      "Decidir el precio de un contrato nuevo sin revisar",
      "Cada viernes: a partir de las notas del canal, un recap en tabla fija que tú apruebas",
      "Firmar un acuerdo legal con el texto crudo de la IA",
      "Inventar métricas que no están en el CSV para el inversionista",
    ],
    answer: 1,
    explain: "Insumo recurrente, formato fijo, humano al final. Precio, firma y cifras inventadas no se delegan.",
  },
  {
    type: "content",
    title: "El mínimo viable de un flujo de negocio",
    blocks: [
      {
        kind: "p",
        text: "Para que el lunes salga solo (casi):",
      },
      {
        kind: "ul",
        items: [
          "Disparador: día, evento o “cuando pego las notas”",
          "Insumo: dónde está (chat, CSV, PDF)",
          "Prompt o Gem versionado",
          "Salida: plantilla (tabla, mail, doc)",
          "Dueño: quién mira 2 minutos antes de publicar",
        ],
      },
      {
        kind: "example",
        title: "Flujo de lunes",
        text: "Viernes 16:00 pego el export del canal. Gem “Recap interno” → tabla decisión / dueño / fecha. Yo reviso nombres. Publico en el doc del equipo.",
      },
    ],
  },
  {
    type: "fill",
    title: "Define un flujo que se pueda repetir",
    lead: "Completa las piezas de una automatación chica y segura.",
    template: "Cada {blank} tomo {blank}, corro el Gem y entrego {blank}. Antes de publicar, {blank}.",
    slots: ["cadencia", "insumo", "salida", "control"],
    answers: ["lunes", "las notas de la semana", "una tabla de pendientes", "reviso nombres y fechas"],
    bank: ["lunes", "las notas de la semana", "una tabla de pendientes", "reviso nombres y fechas"],
    hint: "Cuándo → qué entra → qué sale → quién mira.",
    success: "¡Increíble!",
    successSub: "Estás en el buen camino con tu enfoque.",
  },
  {
    type: "quiz",
    title: "El freno de emergencia",
    question: "El Gem empezó a inventar plazos que no están en las notas. ¿Qué haces?",
    options: [
      "Dejas el flujo igual porque “casi siempre acierta”",
      "Paras el envío automático, añades “si no está, escribe no aparece” y vuelves a exigir revisión humana",
      "Pides que invente con más confianza",
      "Cambias de modelo y publicas más rápido",
    ],
    answer: 1,
    explain: "Un flujo confiable se detiene cuando falla la honestidad. Se endurece la regla y se recupera el ojo humano.",
  },
  {
    type: "content",
    title: "Cierre del bloque",
    last: true,
    blocks: [
      {
        kind: "p",
        text: "Ya tienes prompts que se guardan, datos grandes por capas, flujos de varios pasos, retos creativos con límites y automataciones chicas con dueño. Eso es un trabajo confiable con Gemini: rápido donde se puede, lento donde importa.",
      },
      { kind: "h", text: "Para llevar" },
      {
        kind: "ul",
        items: [
          "Automatiza el borrador, no la firma",
          "Cadencia + insumo + Gem + plantilla + revisor",
          "Si inventa, paras y endureces la regla",
          "Documenta el flujo para que no viva solo en un chat",
        ],
      },
      img("01.png"),
    ],
  },
];

export const geminiUnits = [
  {
    id: "u1",
    title: "Gemini",
    lessons: [
      {
        id: "conoce",
        title: "Conoce a Gemini",
        blurb: "Qué es Gemini y cómo piensa",
        type: "content",
        hasAudio: true,
        steps: conoceSteps,
      },
      {
        id: "escribe",
        title: "Escribe y edita con confianza",
        blurb: "Mails, borradores y Canvas con un encargo claro",
        type: "content",
        hasAudio: true,
        steps: escribeSteps,
      },
      {
        id: "tecnico",
        title: "Resuelve tareas técnicas fácilmente",
        blurb: "Datos, código, Thinking y Deep Research",
        type: "content",
        hasAudio: true,
        steps: tecnicoSteps,
      },
      {
        id: "imagenes",
        title: "Crear y transformar imágenes",
        blurb: "Prompts visuales, ediciones y lo que no pedir",
        type: "content",
        hasAudio: true,
        steps: imagenSteps,
      },
      {
        id: "musica",
        title: "Crea música y paisajes sonoros",
        blurb: "Lyria, Create Music y de imagen a audio",
        type: "content",
        hasAudio: true,
        steps: musicaSteps,
      },
    ],
  },
  {
    id: "u2",
    title: "Crea flujos de trabajo confiables",
    lessons: [
      {
        id: "prompts",
        title: "Guía mejor con prompts",
        blurb: "Rol, formato y prompts que se pueden guardar",
        type: "content",
        hasAudio: true,
        steps: promptsSteps,
      },
      {
        id: "datos",
        title: "Trabajar con grandes cantidades de datos",
        blurb: "Mapa, extracción y evidencia en PDFs y CSV",
        type: "content",
        hasAudio: true,
        steps: datosSteps,
      },
      {
        id: "flujos",
        title: "Crea flujos de trabajo de varios pasos",
        blurb: "Partir hechos, cruce, redacción y revisión",
        type: "content",
        hasAudio: true,
        steps: flujosSteps,
      },
      {
        id: "creativo",
        title: "Resuelve retos creativos",
        blurb: "Divergir con reglas y luego elegir",
        type: "content",
        hasAudio: true,
        steps: creativoSteps,
      },
      {
        id: "automatiza",
        title: "Automatiza tareas de negocio",
        blurb: "Lo repetible, con plantilla y un humano al final",
        type: "content",
        hasAudio: true,
        trophy: true,
        steps: autoSteps,
      },
    ],
  },
];
