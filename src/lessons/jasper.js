import { track } from "./kit.js";

const conoce = track({
  id: "conoce",
  title: "Jasper no es un chat genérico",
  blurb: "Es una plataforma de marketing: voz, plantillas y volumen. No un oráculo.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "ChatGPT sirve para casi todo. Jasper cobra más (Pro desde ~69 USD al mes; ChatGPT Plus ~20) porque se especializa: copy de marca, el mismo tono en todo el equipo, y formatos que ya tienes que producir cada semana (ads, mails, fichas, posts).",
    "Coursiv lo deja en 6 horas: plantillas, Brand Voice y el flujo de marketing. Si tu trabajo no es contenido, Jasper se siente caro y estrecho. Si el trabajo es “que todo suene a la misma marca”, ahí sí paga. En esta ruta armas voz, plantillas y un flujo que se puede repetir el lunes.",
  ],
  body: {
    title: "Qué estás comprando (y qué no)",
    text: "No compras un modelo más listo. Compras guardarraíles: Brand Voice, Knowledge, plantillas y un Canvas pensado para campañas. El prompt flojo sigue saliendo flojo; Jasper solo recorta el relleno de brochure si le enseñas la casa. El trial Pro dura 7 días (pide tarjeta). Grid, Agents y Studio viven en Business.",
  },
  bullets: [
    "Jasper IQ: voz, audiencia, knowledge, Style Guide y Visual Guidelines",
    "Canvas y Chat: el documento y la conversación, con la voz ya puesta",
    "100+ plantillas y agents: ads, mails, blogs, fichas",
    "Grid, pipelines y suite de imagen: volumen y creatividades (el Grid es de equipos)",
  ],
  quiz: {
    question: "¿Cuándo tiene sentido Jasper frente a un chat genérico?",
    options: [
      "Para debuggear un script",
      "Cuando un equipo tiene que sonar a la misma marca, semana a semana",
      "Para buscar una noticia de hoy",
      "Para generar un video de 4K",
    ],
    answer: 1,
    explain: "Consistencia de marca y formatos repetidos. No versatilidad total.",
  },
  practice: {
    title: "Elige la herramienta",
    lead: "Oficio, no logo de moda.",
    template: "Si el trabajo es {blank} y el equipo debe {blank}, uso Jasper. Si es {blank}, me voy a un chat genérico.",
    answers: ["copy de campaña", "sonar a la misma marca", "código o un PDF legal"],
    slots: ["oficio", "guardarraíl", "otro oficio"],
    simReply: {
      intro: "Reparto listo. Jasper para la campaña. El contrato, a Claude. El script, a Grok.",
      sections: [
        { title: "Jasper", text: "Ads, mails, blog y posts con la misma voz." },
        { title: "No Jasper", text: "Investigación con fuentes vivas, código, documentos que duelen." },
      ],
    },
    review: {
      question: "¿Jasper reemplaza a ChatGPT del todo?",
      options: ["Sí, es más caro y por eso hace todo", "No: brilla en marketing; fuera de ahí se queda corto", "Solo los fines de semana"],
      answer: 1,
      explain: "Coursiv lo dice claro: se complementan. Jasper no es el cajón de todo.",
    },
  },
  close: {
    tip: "Jasper es guardarraíl de marca, no un chat para todo.",
    items: [
      "Úsalo cuando el formato se repite",
      "La voz se configura una vez",
      "Tú sigues editando cifras y claims",
    ],
  },
});

const voz = track({
  id: "voz",
  title: "Brand Voice: enséñale cómo hablas",
  blurb: "Ejemplos reales, no el adjetivo “disruptivo”.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Brand Voice es el corazón de Jasper. Sin él, cada output suena a brochure de 2019. Con él, el equipo deja de renegociar el tono en cada brief.",
    "No le pidas “sé cercano”. Pega 3 a 8 textos que sí te gusten: un mail, una ficha, un post. Mínimo mil caracteres. URLs de tu sitio también sirven. “Sé disruptivo” no es un patrón.",
  ],
  body: {
    title: "Cómo se entrena (y cómo se rompe)",
    text: "Jasper analiza muestras y arma un perfil: frases cortas o largas, tú o usted, palabrotas sí o no. Si las muestras son de otra marca, copiará esa marca. Basura entra, brochure sale.",
  },
  bullets: [
    "Nombre claro (la marca, no “voz 1”)",
    "3–8 ejemplos que suenen a ustedes",
    "Lista de sí: tú, frases cortas, cero jerga",
    "Lista de no: sinergia, revolucionar, urgencia falsa",
  ],
  quiz: {
    question: "¿Qué enseña mejor tu voz a Jasper?",
    options: [
      "El adjetivo “cool”",
      "Tres textos reales y una lista de no",
      "Un slogan de 2012",
      "Solo el nombre de la marca",
    ],
    answer: 1,
    explain: "Ejemplos + vetos. Los adjetivos no.",
  },
  practice: {
    title: "Arma la guía de voz",
    lead: "Tres piezas. Se reutilizan todo el mes.",
    template: "Pega {blank} textos. Sí: {blank}. No: {blank}.",
    answers: ["3", "tú y frases cortas", "sinergia y revolucionar"],
    slots: ["cuántos", "sí", "no"],
    simReply: {
      intro: "Perfil listo. El siguiente anuncio reutiliza esta voz. No la reescribas cada post.",
      sections: [
        { title: "Sí", text: "tú, oraciones de menos de 18 palabras, un CTA." },
        { title: "No", text: "sinergia, “únete a la revolución”, emojis de fuego en el asunto." },
      ],
    },
    review: {
      question: "¿La voz se pone en privado o se comparte?",
      options: [
        "Da igual",
        "Si el equipo tiene que sonar igual, la voz va al workspace, no solo a tu usuario",
        "Siempre privada, por seguridad de las musas",
      ],
      answer: 1,
      explain: "Privada no se vuelve default del equipo. La consistencia pide que la vean todos.",
    },
  },
  close: {
    tip: "enséñale con ejemplos de tu voz, no con adjetivos sueltos.",
    items: ["Muestras de verdad", "Sí / no explícitos", "La voz se elige en cada generación hasta que sea default"],
  },
});

const knowledge = track({
  id: "knowledge",
  title: "Knowledge y audiencias",
  blurb: "La voz es el cómo. Knowledge es el qué. Audiencia es el para quién.",
  scene: "docs",
  brand: "Jasper",
  hook: [
    "Jasper IQ no es solo el tono. Knowledge acepta texto, PDF, URL, imagen, video y datos. En Business puede conectar SharePoint. Audiences guarda a quién le hablas (dueña de pyme, no “todo el mundo”).",
    "Si la voz está bien y el knowledge está vacío, Jasper inventa un beneficio que tu termo no tiene. Eso no es estilo: es un claim falso. Pro limita assets (pocas voces, pocos knowledge, 3 audiencias): elige los que sí se usan.",
  ],
  body: {
    title: "Tres cajones de Jasper IQ",
    text: "Voz = cómo suena. Knowledge = hechos que puede citar. Audiencia = para quién recorta el mensaje. Si mezclas los tres en un prompt cada vez, estás pagando Jasper para trabajar como ChatGPT.",
  },
  bullets: [
    "Knowledge: texto, PDF, URL, imagen o video de producto (sin inventar precios)",
    "Audiencia: una ficha (quién es, qué le duele, qué no le hables)",
    "Connectors (Business): SharePoint y similares. El dato vive fuera del chat",
    "Si un dato cambia, actualiza el asset. Jasper no se entera solo",
  ],
  quiz: {
    question: "¿Qué evita que Jasper fabrique un beneficio?",
    options: [
      "Pedirle que sea “honesto”",
      "Un knowledge con hechos y un veto de no inventar",
      "Un modelo más caro",
      "Escribir en inglés",
    ],
    answer: 1,
    explain: "Hechos guardados. El adjetivo honesto no es una ficha.",
  },
  practice: {
    title: "Carga el cajón de hechos",
    lead: "Qué puede decir. Qué no.",
    template: "Producto: {blank}. Hecho: {blank}. Nunca {blank}.",
    answers: ["termo mate 500 ml", "no suda en la combi, tapa a rosca", "inventes precios ni descuentos"],
    slots: ["qué es", "qué es verdad", "veto"],
    simReply: {
      intro: "Knowledge listo. El anuncio puede hablar de la tapa. El 2x1 no estaba: por confirmar.",
      sections: [{ title: "Audiencia", text: "Dueña de tienda que va en combi. No le hables como a un VC." }],
    },
    review: {
      question: "Un precio no está en knowledge. ¿Qué hace Jasper bien entrenado?",
      options: ["Lo inventa “cerca”", "Lo deja fuera o pide confirmación", "Pone $99 porque “convierte”"],
      answer: 1,
      explain: "El hueco honesto. El número lindo mentiroso no.",
    },
  },
  close: {
    tip: "voz = cómo. knowledge = qué. audiencia = para quién.",
    items: ["Actualiza el asset cuando cambie el precio", "Una audiencia por campaña", "Sin knowledge, hay brochure"],
  },
});

const estilo = track({
  id: "estilo",
  title: "Style Guide y visual",
  blurb: "Mayúsculas, CTAs, lo prohibido. La voz no alcanza si el formato se va.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Style Guide fija reglas de formato: títulos en minúscula, un CTA, sin signos de exclamación de a tres. Visual Guidelines (en planes de equipo) habla de paleta y de lo que no va en una imagen.",
    "Si no lo escribes, cada persona del equipo “interpreta” la marca. Jasper necesita la regla en el cajón, no en un Slack de 2023.",
  ],
  body: {
    title: "Reglas que se pueden cumplir",
    text: "“Que se vea premium” no se ejecuta. “Máximo 12 palabras en el titular, un CTA, cero emojis en ads de búsqueda” sí.",
  },
  bullets: [
    "Titular: largo y mayúsculas",
    "CTA: uno, verbo de acción",
    "Vetos: urgencia falsa, claims médicos, “gratis” si no lo es",
    "Visual: paleta, sin texto inventado en la imagen",
  ],
  quiz: {
    question: "¿Qué entra en un Style Guide útil?",
    options: ["La palabra “premium”", "Largos, CTAs y vetos que se pueden chequear", "El horóscopo de la marca"],
    answer: 1,
    explain: "Se cumple o no se cumple. Premium no se mide.",
  },
  practice: {
    title: "Escribe tres reglas duras",
    lead: "Formato, no mood.",
    template: "Titular máximo {blank} palabras. CTA: {blank}. Nunca {blank}.",
    answers: ["12", "un verbo + el beneficio", "urgencia falsa ni “revolución”"],
    slots: ["largo", "CTA", "veto"],
    simReply: {
      intro: "Guía corta. El ad de búsqueda ya no grita. El de stories se escribe con otra regla de largo.",
    },
    review: {
      question: "¿Una sola guía para stories y Google Ads?",
      options: ["Sí, la marca es una", "No: el canal cambia el largo; la voz se queda", "Solo si hay emoji"],
      answer: 1,
      explain: "Voz compartida. Formato por canal.",
    },
  },
  close: {
    tip: "la guía se obedece. El mood se discute en otra reunión.",
    items: ["Reglas cortas", "Un CTA", "Visual aparte del copy"],
  },
});

const canvas = track({
  id: "canvas",
  title: "Canvas y Chat",
  blurb: "El documento se edita por bloques. No pidas el artículo entero de un jalón.",
  scene: "docs",
  brand: "Jasper",
  hook: [
    "Canvas es el lienzo largo: outline primero, luego expandes sección por sección con la voz ya puesta. Chat es para un giro rápido (“acorta el párrafo 2”).",
    "Si generas las 1 200 palabras de una sentada, el tono se va al medio y tú dejas de ser editor. Igual que en Gemini: un bloque, una pasada.",
  ],
  body: {
    title: "El orden que sí escala",
    text: "Project settings (voz + audiencia + knowledge) → outline → expandir un H2 → reescribir → SEO al final, no al inicio.",
  },
  bullets: [
    "Settings del project: se heredan en todos los assets",
    "Outline tuyo, no el de Jasper a ciegas",
    "Toolbar: reescribir, acortar, cambiar tono de un tramo",
    "No pidas “haz el blog completo y el SEO y los ads” en un solo chat",
  ],
  quiz: {
    question: "¿Cómo se trabaja un artículo en Canvas?",
    options: [
      "Un prompt de 8 palabras y a publicar",
      "Outline, luego expandir por sección con la voz del project",
      "Pegar el brief en ChatGPT y volver",
    ],
    answer: 1,
    explain: "Control de estructura. Jasper escribe oraciones. Tú el mapa.",
  },
  practice: {
    title: "Arma el outline",
    lead: "Tres H2. Luego se expanden.",
    template: "Artículo para {blank}. H2: {blank}. Expandir después, no todo de un jalón. Voz: {blank}.",
    answers: ["dueñas de tienda", "combi / tapa / pedido", "Brand Voice de la pyme"],
    slots: ["audiencia", "mapa", "voz"],
    simReply: {
      intro: "Outline de 3 H2. El H2 2 se expande ahora. El 3 espera. Así no se contamina el tono.",
      sections: [{ title: "Siguiente", text: "Selecciona el H2 2 → expandir. Revisa claims contra knowledge." }],
    },
    review: {
      question: "¿El SEO se pide en el primer prompt?",
      options: ["Sí, para “posicionar”", "No: primero el mensaje; el SEO puntúa un texto que ya existe", "Solo con Surfer abierto"],
      answer: 1,
      explain: "Si el SEO manda primero, el texto se llena de keywords y se muere la voz.",
    },
  },
  close: {
    tip: "un bloque, una pasada. El artículo entero de un jalón se te va de las manos.",
    items: ["Settings del project", "Outline tuyo", "Toolbar en el párrafo, no en el universo"],
  },
});

const plantillas = track({
  id: "plantillas",
  title: "Plantillas y agents",
  blurb: "Elige el formato. No un “escribe algo de marketing”.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Jasper trae 100+ plantillas y agents: anuncio de Meta, asunto de mail, ficha de producto, AIDA, PAS. Sirven cuando el formato es el mismo todas las semanas.",
    "La plantilla no piensa el brief. Si no le das producto, audiencia y oferta, rellena con “solución integral”. El agent de Business (Optimization, Research) es otro piso: no es el primer día.",
  ],
  body: {
    title: "Una plantilla, un cajón",
    text: "Ads de búsqueda no es caption de Instagram. Elige la plantilla del canal. Pega knowledge. Elige Brand Voice. Recién ahí generas.",
  },
  bullets: [
    "Canal / formato primero",
    "Producto y oferta (del knowledge)",
    "Voz ya entrenada",
    "3 variaciones, eliges una — no 30",
  ],
  quiz: {
    question: "¿Qué hace útil una plantilla?",
    options: [
      "Que tenga un nombre en inglés",
      "Que el formato coincida con el canal y le des hechos",
      "Que genere 40 versiones solas",
    ],
    answer: 1,
    explain: "Cajón + hechos. El nombre AIDA no salva un brief vacío.",
  },
  practice: {
    title: "Llena la plantilla de ad",
    lead: "Meta, no un manifiesto.",
    template: "Plantilla: {blank}. Producto: {blank}. Oferta: {blank}. Voz de la pyme, cero “revolución”.",
    answers: ["anuncio de Instagram", "termo mate 500 ml", "envio a CDMX en 48 h"],
    slots: ["formato", "qué", "oferta"],
    simReply: {
      intro: "Tres cortes. El 2 se puede publicar. El 1 aún dice “descubre la magia”.",
      sections: [{ title: "Ganador", text: "El termo que no suda en la combi. Pedido hoy, en tu tienda en 48 h. Link en bio." }],
    },
    review: {
      question: "¿Pides 30 variaciones de una sentada?",
      options: ["Sí, cantidad es calidad", "No: tres, eliges una, editas claims", "Solo en Grid"],
      answer: 1,
      explain: "Tres se editan. Treinta se ignoran.",
    },
  },
  close: {
    tip: "plantilla = formato. Tú pones el hecho y la oferta.",
    items: ["Elige el cajón", "Knowledge + voz", "Tres, no treinta"],
  },
});

const blog = track({
  id: "blog",
  title: "Blog y SEO sin matar la voz",
  blurb: "Surfer y Semrush puntúan. No escriben. El mensaje va primero.",
  scene: "docs",
  brand: "Jasper",
  hook: [
    "Jasper se enchufa a Surfer o Semrush para un score. Eso no es “el artículo ya rankea”. Es una lista de términos. Si dejas que el score mande, el texto se llena de repeticiones y se muere Brand Voice.",
    "Orden Coursiv: brief → outline → draft con voz → recién entonces el agent de SEO o el score. Tú decides qué keyword entra sin forzar.",
  ],
  body: {
    title: "SEO al servicio del texto",
    text: "Un H2 claro, un claim que knowledge respalda, un CTA. Las keywords se acomodan. No al revés.",
  },
  bullets: [
    "Keyword principal en título si cabe sin gritar",
    "H2 que un humano leería",
    "Score como checklist, no como jefe",
    "Citas y precios: del knowledge, no del modelo",
  ],
  quiz: {
    question: "¿Cuándo miras el score de SEO?",
    options: [
      "Antes de saber de qué trata el artículo",
      "Cuando ya hay un draft con voz y hechos",
      "Nunca, el SEO está muerto",
    ],
    answer: 1,
    explain: "Primero el texto que se puede publicar. Luego el puntaje.",
  },
  practice: {
    title: "Brief del artículo",
    lead: "Mensaje, no sopa de keywords.",
    template: "Título para {blank}. Promesa: {blank}. Keyword: {blank}, sin forzarla en cada renglón.",
    answers: ["dueñas de tienda", "el termo no suda en la combi", "termo para café"],
    slots: ["audiencia", "promesa", "keyword"],
    simReply: {
      intro: "Draft de 700 palabras. La keyword aparece en título y H2 2. No en cada frase. El score puede esperar.",
    },
    review: {
      question: "El score pide meter la keyword 18 veces. ¿Qué haces?",
      options: ["Obedeces", "La pones donde se lee natural y dejas el resto", "Borras Brand Voice"],
      answer: 1,
      explain: "El humano publica. El score sugiere.",
    },
  },
  close: {
    tip: "el SEO puntúa un texto vivo. No lo escribe.",
    items: ["Voz primero", "Hechos del knowledge", "Score al final"],
  },
});

const social = track({
  id: "canal",
  title: "Redes: largo y canal",
  blurb: "Instagram no es un landing. LinkedIn no es un reel.",
  scene: "phone",
  brand: "Jasper",
  hook: [
    "Di caracteres, canal y si hay emoji o no. Jasper copia el patrón de la voz, pero el cajón lo pones tú. Si no le diste canal, escribe un manifiesto.",
    "Misma promesa, tres cortes: feed, stories, LinkedIn. No tres ideas distintas.",
  ],
  body: {
    title: "Un copy, un cajón",
    text: "Feed, mail y landing son tres largos. No un ladrillo recortado a tijera. La voz se queda. El formato cambia.",
  },
  bullets: ["Canal", "Máximo de caracteres", "Emoji sí/no", "Un CTA"],
  quiz: {
    question: "¿Qué pides primero para un post?",
    options: ["Diez stickers", "Canal y largo", "Un degradado"],
    answer: 1,
    explain: "El cajón. Luego las palabras con Brand Voice.",
  },
  practice: {
    title: "Completa el canal",
    lead: "Un cajón.",
    template: "Escribe para {blank}, máximo {blank} caracteres, {blank} emojis, voz de la pyme.",
    answers: ["Instagram", "120", "cero"],
    slots: ["canal", "largo", "emoji"],
    simReply: {
      intro: "120. Cero emojis. El landing se escribe en otra plantilla. La voz es la misma.",
    },
    review: {
      question: "¿Por qué cero emojis aquí?",
      options: ["Tristeza", "Es un límite del Style Guide que el modelo respeta", "Moda de 2014"],
      answer: 1,
      explain: "Un veto. “Sé cool” no es un veto.",
    },
  },
  close: {
    tip: "Instagram no es un landing. La voz sí es la misma.",
    items: ["Un canal", "Un largo", "Un CTA"],
  },
});

const mails = track({
  id: "mails",
  title: "Secuencias de mail",
  blurb: "Un objetivo por correo. La voz se sostiene en los tres.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Coursiv enseña lifecycle: una secuencia de 3 mails con la misma marca, no un único “newsletter genérico”. Mail 1 abre, mail 2 prueba, mail 3 cierra. Si los tres piden lo mismo, el lector se baja.",
    "Asunto ≠ cuerpo. El asunto cabe en 6–8 palabras. El cuerpo, un CTA. Brand Voice en los dos.",
  ],
  body: {
    title: "Tres mails, tres jobs",
    text: "No “hazme una secuencia linda”. Di qué debe pasar después de cada uno: abrir, click, respuesta. Knowledge pone el producto. Tú pones la fecha real de la oferta.",
  },
  bullets: [
    "Mail 1: problema + una prueba",
    "Mail 2: objeción (precio, envío, confianza)",
    "Mail 3: CTA claro y fecha",
    "Misma voz, distinto job",
  ],
  quiz: {
    question: "¿Qué hace fallar una secuencia?",
    options: [
      "Tres mails con el mismo CTA gritado",
      "Un job distinto por mail y la misma Brand Voice",
      "Asuntos cortos",
    ],
    answer: 0,
    explain: "Si los tres gritan “compra ya”, no es secuencia: es spam con voz bonita.",
  },
  practice: {
    title: "Arma la secuencia de 3",
    lead: "Un job por mail.",
    template: "Mail 1: {blank}. Mail 2: {blank}. Mail 3: {blank}. Voz de la pyme, sin urgencia falsa.",
    answers: ["el termo en la combi", "objeción del envío a 48 h", "CTA + fecha del aparte"],
    slots: ["abre", "objeción", "cierre"],
    simReply: {
      intro: "Tres asuntos. El 2 no grita. El 3 tiene fecha: “hasta el viernes”. Sin “último día” inventado.",
      sections: [{ title: "Asunto 1", text: "El termo que no suda en la combi" }],
    },
    review: {
      question: "La oferta termina el viernes. ¿De dónde sale la fecha?",
      options: ["Jasper la adivina", "Tú la pegas; knowledge no inventa calendarios", "Del horóscopo"],
      answer: 1,
      explain: "Fechas las pones tú. Siempre.",
    },
  },
  close: {
    tip: "un mail, un job. La voz se queda. La fecha la pones tú.",
    items: ["Tres jobs", "Asunto corto", "Sin urgencia inventada"],
  },
});

const campana = track({
  id: "campana",
  title: "De un artículo a la campaña",
  blurb: "Un long-form se parte: newsletter, LinkedIn, ads. No se reescribe el universo.",
  scene: "meeting",
  brand: "Jasper",
  hook: [
    "Coursiv insiste en el workflow: un pilar, muchas piezas. El blog ya tiene hechos y voz. Jasper parte: 1 newsletter, 3 posts, 2 ángulos de ad. Si pides “otra campaña desde cero”, pagas dos veces el research.",
    "Repurposing no es copiar y pegar el H2 en Instagram. Es recortar al cajón del canal.",
  ],
  body: {
    title: "El pilar manda",
    text: "Hechos del artículo → recortes. Nada de inventar un beneficio nuevo en el ad que el blog no dijo.",
  },
  bullets: [
    "Pilar: el artículo o el brief maestro",
    "Newsletter: un hallazgo + CTA",
    "LinkedIn: una tesis, sin emojis de feria",
    "Ads: un ángulo, un claim del knowledge",
  ],
  quiz: {
    question: "¿Qué no puede hacer el ad al recortar el blog?",
    options: [
      "Usar un ejemplo más corto",
      "Inventar un 2x1 que el artículo no tenía",
      "Cambiar el largo",
    ],
    answer: 1,
    explain: "Repurpose recorta. No fabrica ofertas.",
  },
  practice: {
    title: "Parte el pilar",
    lead: "Tres recortes. Mismos hechos.",
    template: "Del artículo saca: {blank}, {blank} y {blank}. Sin beneficios nuevos.",
    answers: ["newsletter de 120 palabras", "post LinkedIn de 80", "ad de 90 caracteres"],
    slots: ["mail", "social", "ad"],
    simReply: {
      intro: "Tres piezas. El 2x1 no estaba en el pilar: no salió. Bien.",
      sections: [{ title: "Ad", text: "El termo que no suda en la combi. Pedido hoy." }],
    },
    review: {
      question: "¿Por qué partir y no generar tres briefs distintos?",
      options: ["Por flojera", "Para no contradecir hechos ni voz", "Por el precio de tokens"],
      answer: 1,
      explain: "Un pilar. Varios cajones. Una marca.",
    },
  },
  close: {
    tip: "un pilar, muchos recortes. El ad no inventa lo que el blog no dijo.",
    items: ["Hechos fijos", "Cajón por canal", "Misma voz"],
  },
});

const grid = track({
  id: "grid",
  title: "Grid y volumen",
  blurb: "Una fila, un producto. Columnas fijas. No un chat de 40 mensajes.",
  scene: "meeting",
  brand: "Jasper",
  hook: [
    "Grid (Business) es una hoja: cada fila un SKU, cada columna un campo (título, ficha, ad). Sirve cuando tienes 40 termos de colores, no cuando tienes una idea suelta.",
    "Content Pipelines automatizan el ciclo. En esta ruta importa la idea: sistemático ≠ “generar y publicar”. Cada fila se revisa. El volume sin editor es un accidente de marca.",
  ],
  body: {
    title: "Columnas que se pueden auditar",
    text: "No pidas “llena todo lindo”. Define columnas: nombre, beneficio del knowledge, ficha 400 caracteres, ad 90, idioma. La voz se aplica a todas las filas.",
  },
  bullets: [
    "Una fila = un producto o un ángulo",
    "Columnas con límite de caracteres",
    "Brand Voice + knowledge en el project",
    "Revisión por muestreo antes de exportar las 40",
  ],
  quiz: {
    question: "¿Grid para qué?",
    options: [
      "Un poema",
      "Docenas de fichas o ads con la misma estructura",
      "Un PDF legal de 80 páginas",
    ],
    answer: 1,
    explain: "Volumen con molde. No un ensayo.",
  },
  practice: {
    title: "Define las columnas",
    lead: "Molde, luego las 40 filas.",
    template: "Columna 1: {blank}. Columna 2: {blank}. Columna 3: {blank}. Voz de la pyme en todas.",
    answers: ["nombre del SKU", "beneficio del knowledge", "ad de 90 caracteres"],
    slots: ["id", "hecho", "pieza"],
    simReply: {
      intro: "Tres columnas. 8 filas de prueba. Si el tono se aguanta, recién las 40.",
    },
    review: {
      question: "¿Exportas las 40 sin leer?",
      options: ["Sí, para eso pagas Business", "No: muestreo de 3 filas, claims contra knowledge", "Solo los martes"],
      answer: 1,
      explain: "El volumen acelera el borrador. No la firma.",
    },
  },
  close: {
    tip: "el molde se audita. Luego el volumen.",
    items: ["Columnas fijas", "Prueba chica", "Knowledge en cada fila"],
  },
});

const revision = track({
  id: "revision",
  title: "Editar, publicar, no idolatrar",
  blurb: "Jasper no firma. Claims, precios y tono los valida una persona.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Coursiv cierra el flujo de marketing con revisión: factual, de marca y legal. Un texto “on brand” puede seguir mintiendo un envío. Tú eres el editor.",
    "Extensión de Chrome (Gmail, Docs, LinkedIn) aplica la voz fuera de Jasper. Sigue siendo un borrador. El botón de enviar es tuyo.",
  ],
  body: {
    title: "Checklist de salida",
    text: "Si no pasa las cuatro, no se publica. Da igual el score de SEO y da igual que “suene a la marca”.",
  },
  bullets: [
    "Hechos = knowledge (precios, plazos, “gratis”)",
    "Voz = sí / no de Brand Voice",
    "Canal = largo y CTA del Style Guide",
    "Legal = claims médicos, garantías, testimonios",
  ],
  quiz: {
    question: "El copy suena perfecto y el precio no está en knowledge. ¿Se publica?",
    options: ["Sí, convierte", "No: se confirma el precio o se quita", "Sí, si el SEO está en 90"],
    answer: 1,
    explain: "La voz no perdona un claim falso.",
  },
  practice: {
    title: "Checklist antes de pegar",
    lead: "Cuatro casillas.",
    template: "Revisé {blank}, {blank} y {blank}. Si una falla, no se publica.",
    answers: ["el precio en knowledge", "el veto de urgencia", "el largo del canal"],
    slots: ["hecho", "voz", "formato"],
    simReply: {
      intro: "El plazo de 48 h sí estaba. “El mejor termo de México” no: se cayó. Listo para pegar.",
    },
    review: {
      question: "¿Para qué sirve la extensión en Gmail?",
      options: [
        "Para enviar sin leer",
        "Para aplicar Brand Voice en el borrador; tú sigues dándole a enviar",
        "Para reemplazar a legal",
      ],
      answer: 1,
      explain: "Misma voz, misma firma humana.",
    },
  },
  close: {
    tip: "cuando la voz ya suena a la tuya, reutiliza el mismo brief. Tú sigues firmando.",
    items: [
      "Knowledge al día",
      "Tres variaciones, una se edita",
      "Jasper acelera. No publica",
    ],
  },
});

const imagen = track({
  id: "imagen",
  title: "Suite de imagen",
  blurb: "Generar, recortar fondo, armar la foto de producto. El copy manda.",
  scene: "camera",
  brand: "Jasper",
  hook: [
    "Coursiv enseña Jasper también como herramienta de contenido, no solo de texto. La Image Suite genera, edita, quita fondo y compone fotos de producto. Visual Guidelines (en IQ) dice paleta y lo que no va en una toma.",
    "La imagen no escribe el slogan. Si dejas que el generador ponga letras, vas a retocar. El copy sale de Brand Voice; la foto ilustra el claim que ya está en knowledge.",
  ],
  body: {
    title: "Foto al servicio del texto",
    text: "Un termo en mesa, luz de ventana, sin texto en la imagen. El CTA vive en el ad, no pintado sobre el render. Si la paleta no está en Visual Guidelines, cada persona del equipo inventa un naranja distinto.",
  },
  bullets: [
    "Brief: sujeto + fondo + qué no (letras, logos ajenos)",
    "Quitar fondo para ficha, no para un collage sucio",
    "Composición de producto: el SKU se reconoce",
    "El slogan se escribe en Canva o en el ad, no dentro del PNG",
  ],
  quiz: {
    question: "¿Dónde va el slogan?",
    options: [
      "Pintado en la imagen para “que se lea”",
      "En el copy del canal; la foto ilustra el producto",
      "En un watermark de Jasper",
    ],
    answer: 1,
    explain: "La suite ilustra. El texto lo firma Brand Voice.",
  },
  practice: {
    title: "Brief de la toma",
    lead: "Sujeto, luz, veto de letras.",
    template: "Foto de {blank}, luz {blank}, {blank} en la imagen. Paleta de Visual Guidelines.",
    answers: ["el termo mate 500 ml", "de ventana", "sin letras ni logos"],
    slots: ["sujeto", "luz", "veto"],
    simReply: {
      intro: "Toma lista. Fondo recortable. El “envío 48 h” se escribe en el ad, no en el PNG.",
    },
    review: {
      question: "¿La Image Suite reemplaza a Midjourney o Canva?",
      options: [
        "Sí, para todo el arte de la marca",
        "No: sirve para producto y recortes rápidos; el arte de campaña a veces se va a otra herramienta",
        "Solo los sábados",
      ],
      answer: 1,
      explain: "Oficio. Jasper ilustra el SKU. Un key visual de campaña puede vivir en otro cajón.",
    },
  },
  close: {
    tip: "la foto ilustra el claim. No lo escribe.",
    items: ["Visual Guidelines primero", "Sin letras en el PNG", "El CTA vive en el copy"],
  },
});

const extension = track({
  id: "extension",
  title: "Extensión e integraciones",
  blurb: "La voz sale de Jasper: Gmail, Docs, LinkedIn, Word. El enviar sigue siendo tuyo.",
  scene: "desk",
  brand: "Jasper",
  hook: [
    "Coursiv cierra el flujo en el lugar donde ya trabajas. La extensión de Chrome y Edge lleva Brand Voice a Gmail, Google Docs, WordPress, HubSpot, LinkedIn y Facebook. Add-ins de Docs, Sheets y Word meten Jasper en el archivo, no al revés.",
    "Zapier, Make o Pabbly conectan el resto. Webflow y BigQuery aparecen en equipos. Nada de eso publica solo. Es un borrador con la voz ya puesta.",
  ],
  body: {
    title: "Misma voz, otro cajón",
    text: "No reescribes Brand Voice en cada pestaña. Abres Gmail → Jasper reescribe el hilo con la voz del workspace → tú lees precios y das enviar. En Docs, expandes un H2 como en Canvas. En LinkedIn, recortas al cajón de 3.000 caracteres.",
  },
  bullets: [
    "Gmail / Outlook: respuesta con voz, tú envías",
    "Docs, Sheets, Word: el archivo ya abierto",
    "CMS y ads: WordPress, HubSpot, LinkedIn, Facebook",
    "Automatizar (Zapier/Make) no es “publicar sin leer”",
  ],
  quiz: {
    question: "¿Qué hace la extensión en Gmail?",
    options: [
      "Enviar el mail al instante",
      "Aplicar Brand Voice al borrador; el enviar es tuyo",
      "Reemplazar a legal y a soporte",
    ],
    answer: 1,
    explain: "Misma voz. Misma firma humana.",
  },
  practice: {
    title: "Elige el cajón",
    lead: "Dónde pegas, no un manifiesto nuevo.",
    template: "En {blank} reescribo el hilo. En {blank} expando un H2. En {blank} recorto a 80 palabras. Misma Brand Voice.",
    answers: ["Gmail", "Google Docs", "LinkedIn"],
    slots: ["mail", "doc", "social"],
    simReply: {
      intro: "Tres cajones, una voz. El precio del termo se confirma en knowledge antes de enviar el mail.",
    },
    review: {
      question: "¿Conectas Zapier para publicar 40 posts a las 3 a.m.?",
      options: [
        "Sí, para “escalar”",
        "No: automatizas el borrador o el pase a revisión, no la publicación a ciegas",
        "Solo si el SEO está en 90",
      ],
      answer: 1,
      explain: "El cable acelera el traslado. No la firma.",
    },
  },
  close: {
    tip: "la voz viaja. El botón de publicar se queda en tu mano.",
    items: ["Una extensión, muchos cajones", "Knowledge sigue mandando los hechos", "Automatizar ≠ publicar"],
  },
});

const planes = track({
  id: "planes",
  title: "Planes, idiomas y el resto de IAs",
  blurb: "Pro para una silla. Business para el equipo. Jasper no reemplaza a ChatGPT.",
  scene: "meeting",
  brand: "Jasper",
  hook: [
    "Coursiv pregunta al final si pagas de más. Pro: una silla, 2 Brand Voices, 5 knowledge, 3 audiencias, suite de imagen básica. Business: varias sillas, voces ilimitadas, Grid, Agents, Studio, API, connectors. Trial Pro: 7 días con tarjeta.",
    "Jasper habla 80+ idiomas: elige el idioma en el project, no “traduce esto lindo” al final. Y no: Jasper no sustituye a ChatGPT. Investigación, código y PDFs legales se van a otro chat. Hasta hay MCP para usar ChatGPT con la inteligencia de marca de Jasper.",
  ],
  body: {
    title: "Paga el piso que sí usas",
    text: "Si eres una persona y dos campañas al mes, Pro o incluso un Custom GPT en ChatGPT. Si cinco personas tienen que sonar igual y hay 40 SKUs, Business. Skills de prompting sí se llevan a otras IAs; skills de “cuál plantilla de Jasper” no.",
  },
  bullets: [
    "Pro: voz + plantillas + Canvas. Sin Grid",
    "Business: equipo, volumen, agents, pipelines",
    "Idioma del project, no un translate de último minuto",
    "ChatGPT / Claude para lo que no es marketing; Jasper para la casa de la marca",
  ],
  quiz: {
    question: "¿Jasper reemplaza a ChatGPT del todo?",
    options: [
      "Sí, cuesta más y por eso hace de todo",
      "No: brilla en marketing; fuera se queda corto. Se complementan",
      "Solo si hablas 80 idiomas",
    ],
    answer: 1,
    explain: "Coursiv lo dice claro: no se reemplazan. Jasper es el cajón de marca.",
  },
  practice: {
    title: "Elige el piso",
    lead: "Silla, equipo o otra IA.",
    template: "Si soy {blank}, me quedo en Pro. Si el equipo debe {blank}, subo a Business. El contrato largo se va a {blank}.",
    answers: ["una persona con dos campañas", "sonar a la misma marca en 40 SKUs", "Claude o ChatGPT"],
    slots: ["quién", "por qué Business", "otro oficio"],
    simReply: {
      intro: "Reparto listo. Pro para el copy de la semana. Business cuando existan las 40 filas. El PDF legal, fuera.",
    },
    review: {
      question: "¿Las skills de Jasper se llevan igual a Gemini?",
      options: [
        "Sí, todas: AIDA y Grid",
        "A medias: rol + hechos + límites sí; el nombre de la plantilla de Jasper no",
        "Nunca, cada IA es un planeta",
      ],
      answer: 1,
      explain: "Coursiv recomienda ChatGPT para aprender a pedir. Jasper enseña a guardar la casa.",
    },
  },
  close: {
    tip: "paga el piso que usas. Jasper es marca. El resto de oficios, otras IAs.",
    items: ["Pro vs Business, sin romance", "Idioma en el project", "Se complementan, no se cancelan"],
  },
});

export const jasperUnits = [
  {
    id: "u1",
    title: "Jasper IQ: la casa de la marca",
    lessons: [conoce, voz, knowledge, estilo, canvas],
  },
  {
    id: "u2",
    title: "De la plantilla a la campaña",
    lessons: [plantillas, blog, social, mails, campana, grid],
  },
  {
    id: "u3",
    title: "Imagen, extensión y el equipo",
    lessons: [imagen, extension, revision, planes],
  },
];
