export const promptCategories = [
  "Correos",
  "Reuniones",
  "Marketing",
  "Redes",
  "Investigación",
  "Imagen",
  "Video",
  "Código",
  "Ventas",
  "Producto",
  "Educación",
  "Productividad",
];

export const promptLibrary = [
  {
    id: "mail-atraso",
    title: "Mail de atraso honesto",
    category: "Correos",
    tool: "chatgpt",
    blurb: "Avisa un retraso sin sonar a robot ni a excusa.",
    prompt:
      "Actúa como atención al cliente de una tienda pequeña. Reescribe este mail porque el pedido se atrasó 3 días. Tono cercano, máximo 90 palabras, una fecha nueva clara y un CTA. No uses emojis.\n\nBorrador:\n{{pega aquí}}",
  },
  {
    id: "mail-seguimiento",
    title: "Seguimiento sin presión",
    category: "Correos",
    tool: "claude",
    blurb: "Un toque suave después de una junta o propuesta.",
    prompt:
      "Eres un account manager. Escribe un seguimiento a los 4 días de enviar una propuesta. Recuerda el punto que más le importó al cliente, ofrece un siguiente paso de 15 minutos y no insistas más de una vez. Español, 80–110 palabras.",
  },
  {
    id: "mail-interno",
    title: "Aviso interno corto",
    category: "Correos",
    tool: "chatgpt",
    blurb: "Para el equipo: qué cambió y qué tienen que hacer.",
    prompt:
      "Convierte estas notas en un mail interno. Estructura: qué pasó, qué cambia hoy, quién es dueño, fecha. Tono directo, viñetas, sin adornos.\n\nNotas:\n{{pega aquí}}",
  },
  {
    id: "mail-rechazo",
    title: "Rechazo amable",
    category: "Correos",
    tool: "claude",
    blurb: "Dile que no sin cerrar la puerta.",
    prompt:
      "Redacta un no educado a un proveedor. Agradece, explica que ahora no encaja por presupuesto/tiempo, deja abierta una revisión en 90 días. Máximo 70 palabras.",
  },
  {
    id: "recap-junta",
    title: "Recap de junta",
    category: "Reuniones",
    tool: "chatgpt",
    blurb: "Decisiones, dueños y fechas. Nada de novelita.",
    prompt:
      "Pasa estas notas a un recap. Entrega una tabla con: decisión, dueño, fecha, riesgo. Al final, 3 pendientes. Si algo no está claro, márcalo como “por confirmar”.\n\nNotas:\n{{pega aquí}}",
  },
  {
    id: "agenda-junta",
    title: "Agenda de 30 minutos",
    category: "Reuniones",
    tool: "claude",
    blurb: "Para no improvisar en la llamada.",
    prompt:
      "Arma una agenda de 30 minutos para {{tema}}. Incluye objetivo, 4 bloques con minutos, pregunta de cierre y qué no vamos a discutir hoy.",
  },
  {
    id: "one-on-one",
    title: "Guion 1:1",
    category: "Reuniones",
    tool: "chatgpt",
    blurb: "Preguntas para un 1:1 que no se vaya en status.",
    prompt:
      "Diseña un 1:1 de 25 minutos para un {{rol}}. 5 preguntas abiertas, un bloque de bloqueos y un cierre con 1 compromiso. Evita preguntas de sí/no.",
  },
  {
    id: "brief-campana",
    title: "Brief de campaña",
    category: "Marketing",
    tool: "jasper",
    blurb: "Una página: a quién, promesa, canales, KPI.",
    prompt:
      "Crea un brief de 1 página para {{producto}}. Incluye audiencia, promesa, 3 mensajes, 3 canales, oferta, KPI y qué no vamos a hacer. Tono claro, sin jerga de agencia.",
  },
  {
    id: "landing-hero",
    title: "Hero de landing",
    category: "Marketing",
    tool: "chatgpt",
    blurb: "Titular, subtítulo y CTA que se entienden en 3 segundos.",
    prompt:
      "Escribe 5 héroes para una landing de {{producto}}. Cada uno: titular (máx 8 palabras), subtítulo (máx 18) y CTA. Evita “revolucionario” e “innovador”.",
  },
  {
    id: "voz-marca",
    title: "Guía de voz",
    category: "Marketing",
    tool: "jasper",
    blurb: "Sí / no, palabras y largo típico.",
    prompt:
      "Con estos 3 textos, arma una guía de voz: adjetivos que sí, que no, largo típico, ejemplos de una frase bien y una mal.\n\nTextos:\n{{pega aquí}}",
  },
  {
    id: "ad-copy",
    title: "Copy de anuncio corto",
    category: "Marketing",
    tool: "chatgpt",
    blurb: "Versiones para un anuncio de 100 caracteres.",
    prompt:
      "Dame 8 copys de anuncio para {{oferta}}. Máximo 90 caracteres. Un beneficio concreto. Sin emojis. Marca cuál es más directo y cuál es más cálido.",
  },
  {
    id: "post-carrusel",
    title: "Carrusel de 6 slides",
    category: "Redes",
    tool: "chatgpt",
    blurb: "Hook, 4 puntos, CTA. Listo para diseñar.",
    prompt:
      "Arma un carrusel de 6 slides sobre {{tema}}. Slide 1 hook, 2–5 un punto cada una, 6 CTA. Máximo 18 palabras por slide.",
  },
  {
    id: "hilo-x",
    title: "Hilo corto",
    category: "Redes",
    tool: "grok",
    blurb: "Un hilo de 7 tuits que se puede leer en el celular.",
    prompt:
      "Escribe un hilo de 7 tuits sobre {{tema}}. Tuit 1 con gancho, 2–6 con un tip cada uno, 7 con pregunta. Español neutro, sin hashtags de más.",
  },
  {
    id: "caption-ig",
    title: "Caption de Instagram",
    category: "Redes",
    tool: "chatgpt",
    blurb: "Primera línea fuerte + cuerpo + pregunta.",
    prompt:
      "Escribe 4 captions para una foto de {{escena}}. Primera línea que se lea en el preview, cuerpo de 40–60 palabras, una pregunta al final. 5 hashtags modestos.",
  },
  {
    id: "script-reel",
    title: "Guion de reel 20s",
    category: "Redes",
    tool: "kling",
    blurb: "Gancho, demo, cierre. Para grabar hoy.",
    prompt:
      "Guion de un reel de 20 segundos sobre {{tema}}. 0–3s gancho hablado, 3–15s demostración, 15–20s CTA. Incluye texto en pantalla.",
  },
  {
    id: "research-fuentes",
    title: "Búsqueda con fecha y lugar",
    category: "Investigación",
    tool: "perplexity",
    blurb: "Para no quedarte con el resumen.",
    prompt:
      "Investiga {{pregunta}} con recorte a {{país}} y datos de {{año}}. Dame 5 hallazgos, cada uno con fuente. Señala qué está confirmado y qué es estimado.",
  },
  {
    id: "competencia",
    title: "Mapa de competencia",
    category: "Investigación",
    tool: "perplexity",
    blurb: "Quién juega, en qué se diferencian, huecos.",
    prompt:
      "Compara 5 alternativas a {{producto}} en {{mercado}}. Tabla: precio percibido, promesa, para quién, debilidad. Cierra con 3 huecos que podríamos ocupar.",
  },
  {
    id: "resumen-pdf",
    title: "Resumen de documento largo",
    category: "Investigación",
    tool: "claude",
    blurb: "Para PDFs y políticas que nadie quiere leer enteras.",
    prompt:
      "Resume este documento para un {{rol}}. Entrega: 5 bullets, 3 riesgos, 3 acciones. Cita el fragmento en el que te apoyas para cada riesgo.\n\nTexto:\n{{pega aquí}}",
  },
  {
    id: "fact-check",
    title: "Chequeo de un claim",
    category: "Investigación",
    tool: "perplexity",
    blurb: "¿Esto es cierto, a medias o ruido?",
    prompt:
      "Evalúa este claim: “{{claim}}”. Di si es cierto, a medias o no sostenido. Da 2 fuentes y una frase que sí se puede publicar.",
  },
  {
    id: "foto-producto",
    title: "Foto hero de producto",
    category: "Imagen",
    tool: "dalle",
    blurb: "Sujeto, luz, lente. Sin “8k ultra”.",
    prompt:
      "Foto de producto de {{objeto}} sobre {{superficie}}, luz de ventana a la izquierda, 50 mm, fondo suave, sin texto, sin manos extra, estilo editorial.",
  },
  {
    id: "estilo-feed",
    title: "Misma paleta, otro objeto",
    category: "Imagen",
    tool: "sd",
    blurb: "Para que el feed se sienta de la misma casa.",
    prompt:
      "Usa esta receta fija: paleta {{colores}}, ilustración plana, sombras suaves, fondo {{fondo}}. Cambia solo el sujeto a {{objeto}}. Sin tipografía.",
  },
  {
    id: "boceto-post",
    title: "Boceto rápido de post",
    category: "Imagen",
    tool: "nano",
    blurb: "Idea visual para un post, no pieza final.",
    prompt:
      "Boceto rápido, no fotorrealismo: un post cuadrado para {{tema}}, personaje simple, un objeto, fondo de un color, espacio arriba para un titular.",
  },
  {
    id: "escena-mj",
    title: "Escena Midjourney",
    category: "Imagen",
    tool: "midjourney",
    blurb: "Sujeto + medio + luz + lo que no quieres.",
    prompt:
      "{{sujeto}}, {{foto o ilustración}}, luz {{tipo}}, encuadre {{plano}}, atmósfera {{mood}}, sin texto, sin watermark --ar 4:5",
  },
  {
    id: "layout-canva",
    title: "Pieza lista para publicar",
    category: "Imagen",
    tool: "canva",
    blurb: "Mensaje primero, layout después.",
    prompt:
      "Propón un layout de Canva para este mensaje: “{{mensaje}}”. Formato {{ig/story/linkedin}}. Tipografía, jerarquía, color de acento y dónde va el CTA.",
  },
  {
    id: "plano-kling",
    title: "Plano de video",
    category: "Video",
    tool: "kling",
    blurb: "Movimiento, duración, acción. Nada de “algo viral”.",
    prompt:
      "Describe un clip de {{segundos}}s: movimiento de cámara {{dolly/pan/fijo}}, acción del sujeto, iluminación, corte final. Tema: {{tema}}.",
  },
  {
    id: "storyboard",
    title: "Storyboard de 4 planos",
    category: "Video",
    tool: "kling",
    blurb: "Para un anuncio corto o un tutorial.",
    prompt:
      "Storyboard de 4 planos para {{objetivo}}. Cada plano: duración, cámara, acción, audio. Total 20–30 segundos.",
  },
  {
    id: "debug-rapido",
    title: "Debug de un error",
    category: "Código",
    tool: "grok",
    blurb: "Qué falló, por qué, cómo se arregla.",
    prompt:
      "Explica este error en español simple. Dime la causa probable, el fix mínimo y cómo evitarlo. No reescribas todo el archivo.\n\nError:\n{{pega aquí}}\n\nCódigo:\n{{pega aquí}}",
  },
  {
    id: "script-corto",
    title: "Script pequeño",
    category: "Código",
    tool: "deepseek",
    blurb: "Una función, no un framework.",
    prompt:
      "Escribe un script en {{lenguaje}} que haga {{tarea}}. Incluye comentarios mínimos, un ejemplo de uso y qué rompe si falta un dato.",
  },
  {
    id: "regex-sql",
    title: "Consulta o regex",
    category: "Código",
    tool: "deepseek",
    blurb: "Pasos numerados y una revisión al final.",
    prompt:
      "Resuelve esto en pasos numerados y haz una revisión final: {{problema}}. Entrega la consulta/regex y un caso de prueba.",
  },
  {
    id: "code-review",
    title: "Review directo",
    category: "Código",
    tool: "grok",
    blurb: "3 fallas y el párrafo/función más floja reescrita.",
    prompt:
      "Sé directo. Marca 3 fallas de este código y reescribe la función más floja. No elogies.\n\n{{pega aquí}}",
  },
  {
    id: "pitch-30s",
    title: "Pitch de 30 segundos",
    category: "Ventas",
    tool: "chatgpt",
    blurb: "Problema, promesa, prueba, pregunta.",
    prompt:
      "Arma un pitch hablado de 30 segundos para {{oferta}} dirigido a {{quién}}. Estructura: problema, cómo lo resolvemos, una prueba, una pregunta. Sin jerga.",
  },
  {
    id: "objecion",
    title: "Respuesta a objeción",
    category: "Ventas",
    tool: "claude",
    blurb: "“Está caro”, “lo pensaré”, “ya tenemos algo”.",
    prompt:
      "El cliente dijo: “{{objeción}}”. Dame 3 respuestas: empática, con dato, con pregunta. Cortas. Sin presionar a cerrar hoy.",
  },
  {
    id: "propuesta-1pag",
    title: "Propuesta de 1 página",
    category: "Ventas",
    tool: "claude",
    blurb: "Alcance, fuera de alcance, precio, siguiente paso.",
    prompt:
      "Redacta una propuesta de una página para {{proyecto}}. Incluye objetivo, alcance, fuera de alcance, timing, inversión y siguiente paso. Tono sobrio.",
  },
  {
    id: "spec-app",
    title: "Spec de pantallas",
    category: "Producto",
    tool: "lovable",
    blurb: "Usuario, pantallas y la acción principal de cada una.",
    prompt:
      "Define el usuario, las pantallas y la acción principal de cada una para {{idea}}. Luego describe el primer mock que pediría en Lovable.",
  },
  {
    id: "user-story",
    title: "User stories",
    category: "Producto",
    tool: "chatgpt",
    blurb: "Como… quiero… para… + criterio de done.",
    prompt:
      "Escribe 6 user stories para {{feature}}. Formato: Como [rol] quiero [acción] para [beneficio]. Criterio de done en 3 bullets.",
  },
  {
    id: "faq-producto",
    title: "FAQ de producto",
    category: "Producto",
    tool: "claude",
    blurb: "Las 8 preguntas que sí hacen los usuarios.",
    prompt:
      "Genera un FAQ de 8 preguntas para {{producto}}. Incluye precio, para quién no es, tiempo de setup y qué pasa si no funciona. Respuestas de 2–3 frases.",
  },
  {
    id: "explica-simple",
    title: "Explícalo simple",
    category: "Educación",
    tool: "gemini",
    blurb: "Como si tuviera 14 años, sin ser condescendiente.",
    prompt:
      "Explica {{concepto}} en 6 frases simples, una analogía cotidiana y un mini ejercicio de 2 minutos. Evita jerga o defínela al vuelo.",
  },
  {
    id: "quiz-clase",
    title: "Quiz de 5 preguntas",
    category: "Educación",
    tool: "chatgpt",
    blurb: "Para checar si se entendió, no para trampear.",
    prompt:
      "Crea 5 preguntas de opción múltiple sobre {{tema}}. 4 opciones, una correcta, explicación corta de por qué. Nivel {{principiante/intermedio}}.",
  },
  {
    id: "plan-semana-estudio",
    title: "Plan de 5 tardes",
    category: "Educación",
    tool: "chatgpt",
    blurb: "Un rato corto cada día. Sin maratón.",
    prompt:
      "Arma un plan de 5 tardes de 15 minutos para aprender {{tema}}. Cada día: objetivo, práctica y cómo saber que salió bien.",
  },
  {
    id: "analiza-captura",
    title: "Analiza una captura",
    category: "Productividad",
    tool: "gemini",
    blurb: "Promesa, público y 3 mejoras. Con lo que se ve.",
    prompt:
      "Analiza esta captura de un anuncio/pantalla: cuál es la promesa, a quién le habla y dame 3 mejoras. No inventes lo que no se ve.",
  },
  {
    id: "prioridad-dia",
    title: "Tres prioridades de hoy",
    category: "Productividad",
    tool: "chatgpt",
    blurb: "Recorta la lista. Qué sí, qué no.",
    prompt:
      "De esta lista, elige 3 prioridades para hoy y dime qué posponer. Criterio: impacto en {{objetivo}} esta semana.\n\nLista:\n{{pega aquí}}",
  },
  {
    id: "sop-proceso",
    title: "SOP de un proceso",
    category: "Productividad",
    tool: "claude",
    blurb: "Pasos que otra persona puede seguir mañana.",
    prompt:
      "Convierte esto en un SOP: objetivo, cuándo se usa, pasos numerados, errores comunes, dueño. Lenguaje de checklist.\n\nProceso:\n{{pega aquí}}",
  },
  {
    id: "reuniones-menos",
    title: "Menos juntas, más async",
    category: "Productividad",
    tool: "chatgpt",
    blurb: "Qué se puede bajar a un doc o un hilo.",
    prompt:
      "Revisa esta agenda semanal y marca qué juntas se pueden volver async, cuáles sí merecen 25 minutos y cómo sería el recap.\n\nAgenda:\n{{pega aquí}}",
  },
  {
    id: "traduce-tono",
    title: "Cambia el tono",
    category: "Correos",
    tool: "chatgpt",
    blurb: "Misma info, otro registro.",
    prompt:
      "Reescribe este texto en tono {{cercano/ejecutivo/firme}} sin cambiar los hechos. Máximo la misma longitud.\n\nTexto:\n{{pega aquí}}",
  },
  {
    id: "ideas-contenido",
    title: "20 ideas de contenido",
    category: "Redes",
    tool: "chatgpt",
    blurb: "Un mes de temas, no de captions largos.",
    prompt:
      "Dame 20 ideas de contenido para {{marca}} que habla a {{audiencia}}. Formato: título, formato (reel/carrusel/hilo), gancho de una línea. Nada de “5 tips para el éxito”.",
  },
];

export const promptShelves = [
  { id: "basicas", title: "Aplicaciones básicas", match: ["Correos", "Reuniones", "Imagen", "Video"] },
  { id: "productividad", title: "Productividad", match: ["Productividad"] },
  { id: "ventas", title: "Ventas", match: ["Ventas"] },
  { id: "ecommerce", title: "Comercio electrónico", match: ["Marketing"] },
  { id: "inversiones", title: "Inversiones", match: ["Investigación"] },
  { id: "nocode", title: "Prompts de desarrollo web y sin código", match: ["Código"] },
  { id: "soporte", title: "Atención al cliente", match: ["Correos"] },
  { id: "cro", title: "Optimización de la tasa de conversión", match: ["Redes", "Marketing"] },
  { id: "producto", title: "Prompts de gestión de productos", match: ["Producto"] },
  { id: "rrhh", title: "Recursos humanos", match: ["Educación"] },
];

export const productivityPack = {
  id: "pack-productividad",
  title: "20 prompts de productividad para lograr más",
  subtitle: "Organízate y mantén tu ritmo durante todo el día",
  price: "S/ 72.99",
  amount: 72.99,
  benefits: [
    "20 prompts de productividad de alto impacto",
    "Ideas para planificar, priorizar y ejecutar tu día",
    "Entregados al instante en tu correo electrónico",
  ],
  items: [
    {
      id: "pack-prioridad-hoy",
      title: "Tres prioridades de hoy",
      tool: "chatgpt",
      blurb: "Recorta la lista. Qué sí, qué no.",
      prompt:
        "De esta lista, elige 3 prioridades para hoy y dime qué posponer. Criterio: impacto en {{objetivo}} esta semana.\n\nLista:\n{{pega aquí}}",
    },
    {
      id: "pack-plan-dia",
      title: "Plan del día en bloques",
      tool: "chatgpt",
      blurb: "Mañana, foco y cierre. Sin relleno.",
      prompt:
        "Arma mi día en bloques de 45–90 minutos. Incluye 1 bloque de foco profundo, 2 cortes cortos y un cierre de 15 minutos. No pongas más de 6 bloques.\n\nTareas:\n{{pega aquí}}",
    },
    {
      id: "pack-matriz",
      title: "Urgente vs importante",
      tool: "claude",
      blurb: "Clasifica y decide qué toca ahora.",
      prompt:
        "Clasifica estas tareas en urgente/importante. Para cada una: qué hacer hoy, qué agendar y qué delegar o borrar. Máximo 1 párrafo por ítem.\n\nTareas:\n{{pega aquí}}",
    },
    {
      id: "pack-energia",
      title: "Acomoda según energía",
      tool: "chatgpt",
      blurb: "Lo pesado cuando rinde. Lo liviano después.",
      prompt:
        "Reordena esta lista según energía: mañana alta, tarde media, final del día baja. Explica en una línea por qué cada bloque va ahí.\n\nLista:\n{{pega aquí}}",
    },
    {
      id: "pack-no-hacer",
      title: "Lista de no hacer",
      tool: "claude",
      blurb: "Qué soltar hoy para que el resto quepa.",
      prompt:
        "Con este objetivo de la semana, arma una lista de NO hacer hoy. Incluye distracciones típicas y tareas que parecen trabajo pero no mueven el objetivo.\n\nObjetivo:\n{{pega aquí}}",
    },
    {
      id: "pack-reunion-o-no",
      title: "¿Esta junta vale?",
      tool: "chatgpt",
      blurb: "Qué se baja a un doc o un hilo.",
      prompt:
        "Revisa esta agenda y marca qué juntas se pueden volver async, cuáles sí merecen 25 minutos y cómo sería el recap.\n\nAgenda:\n{{pega aquí}}",
    },
    {
      id: "pack-sop",
      title: "SOP de un proceso",
      tool: "claude",
      blurb: "Pasos que otra persona puede seguir mañana.",
      prompt:
        "Convierte esto en un SOP: objetivo, cuándo se usa, pasos numerados, errores comunes, dueño. Lenguaje de checklist.\n\nProceso:\n{{pega aquí}}",
    },
    {
      id: "pack-inbox",
      title: "Vacía el inbox en 20 minutos",
      tool: "chatgpt",
      blurb: "Responder, agendar o archivar. Sin dejar colas.",
      prompt:
        "Clasifica estos mails en: responder ahora (máx 5), agendar, delegar, archivar. Dame el primer borrador de las 3 respuestas más urgentes, máximo 80 palabras cada una.\n\nMails:\n{{pega aquí}}",
    },
    {
      id: "pack-enfoque",
      title: "Sprint de 50 minutos",
      tool: "chatgpt",
      blurb: "Un objetivo, cero pestañas de más.",
      prompt:
        "Diseña un sprint de 50 minutos para {{tarea}}. Incluye: definición de terminado, 3 distracciones a bloquear y una pregunta de cierre para saber si avanzó.",
    },
    {
      id: "pack-revision-semana",
      title: "Cierre de semana corto",
      tool: "claude",
      blurb: "Qué salió, qué sigue, qué soltar.",
      prompt:
        "Arma un cierre de semana en 4 bloques: logros, pendientes reales, lo que se cancela y 3 apuestas de la semana que entra. Tono directo, viñetas.\n\nNotas:\n{{pega aquí}}",
    },
    {
      id: "pack-habito",
      title: "Hábito de 2 minutos",
      tool: "chatgpt",
      blurb: "Tan chico que no hay excusa.",
      prompt:
        "Convierte {{objetivo}} en un hábito de 2 minutos: disparador, acción mínima, premio chico y cómo subirlo a 10 minutos en 14 días. Sin motivational talk.",
    },
    {
      id: "pack-decision",
      title: "Decide en una página",
      tool: "claude",
      blurb: "Opciones, costo y una recomendación.",
      prompt:
        "Ayúdame a decidir. Formato: contexto en 4 líneas, 2–3 opciones, costo de cada una, riesgo, recomendación y primer paso de 15 minutos.\n\nDecisión:\n{{pega aquí}}",
    },
    {
      id: "pack-delegar",
      title: "Brief para delegar",
      tool: "chatgpt",
      blurb: "Para que no vuelva con mil preguntas.",
      prompt:
        "Redacta un brief para delegar esta tarea: resultado esperado, límites, ejemplos de bien/mal, fecha y canal para dudas. Máximo 180 palabras.\n\nTarea:\n{{pega aquí}}",
    },
    {
      id: "pack-bloqueo",
      title: "Destrabar un atasco",
      tool: "claude",
      blurb: "Cuando estás atorado y no es falta de ganas.",
      prompt:
        "Estoy atorado en {{tarea}}. Dame: el cuello de botella más probable, 3 caminos de 20 minutos y cuál elegiría si solo tengo una hora hoy.",
    },
    {
      id: "pack-manana",
      title: "Arranque de mañana",
      tool: "chatgpt",
      blurb: "Los primeros 30 minutos, ya resueltos.",
      prompt:
        "Diseña un arranque de 30 minutos para alguien que trabaja en {{rol}}. Orden: cuerpo, inbox (solo triage), 1 tarea pesada. Nada de rutinas de 12 pasos.",
    },
    {
      id: "pack-limites",
      title: "Límites de calendario",
      tool: "claude",
      blurb: "Horas de foco y horas de gente.",
      prompt:
        "Propón reglas de calendario para esta semana: bloques de foco, ventanas de juntas, y un texto corto para rechazar invitaciones que no caben.\n\nAgenda actual:\n{{pega aquí}}",
    },
    {
      id: "pack-progreso",
      title: "Qué sí avanzó",
      tool: "chatgpt",
      blurb: "Cuando el día se siente vacío pero no lo fue.",
      prompt:
        "Con estas notas del día, arma una lista de avances reales (aunque chicos), una deuda que sí importa y un cierre de 1 frase para mañana.\n\nNotas:\n{{pega aquí}}",
    },
    {
      id: "pack-deep-work",
      title: "Sesión de trabajo profundo",
      tool: "chatgpt",
      blurb: "90 minutos, un entregable, sin chat.",
      prompt:
        "Arma una sesión de 90 minutos para {{entregable}}. Incluye calentamiento de 5 min, bloque principal, criterio de “ya está” y qué hacer si me trabo a los 20 minutos.",
    },
    {
      id: "pack-prioridad-semana",
      title: "Una apuesta de la semana",
      tool: "claude",
      blurb: "Si solo una cosa puede quedar bien, cuál es.",
      prompt:
        "De estos objetivos, elige UNA apuesta de la semana. Explica por qué, qué va segundo y qué se ignora con cariño.\n\nObjetivos:\n{{pega aquí}}",
    },
    {
      id: "pack-cierre-dia",
      title: "Apaga la computadora bien",
      tool: "chatgpt",
      blurb: "Mañana no empiece en el caos de hoy.",
      prompt:
        "Cierra mi día: 3 bullets de lo hecho, 1 tarea lista para mañana (con el primer paso escrito) y una frase para dejar el trabajo. Nada de culpa.\n\nPendientes:\n{{pega aquí}}",
    },
  ],
};

export function promptsByTool(toolId) {
  return promptLibrary.filter((p) => p.tool === toolId);
}

export function promptById(id) {
  return promptLibrary.find((p) => p.id === id) || productivityPack.items.find((p) => p.id === id);
}

export function promptsForShelf(shelfId) {
  const shelf = promptShelves.find((s) => s.id === shelfId);
  if (!shelf) return [];
  return promptLibrary.filter((p) => shelf.match.includes(p.category));
}
