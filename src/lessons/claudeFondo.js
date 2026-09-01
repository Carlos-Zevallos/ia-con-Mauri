import { quick, units } from "./pack.js";

const C = "Claude";
const S = "docs";
const t = (spec) => quick({ brand: C, scene: S, pack: "claude-fondo", ...spec });

const vs = t({
  id: "vs",
  title: "A fondo no es el Claude de todos los días",
  blurb: "Documentos largos, trabajo estratégico y automatizar el flujo. 13 lecciones, 5 horas.",
  hooks: [
    "Coursiv separa Claude (10 lecciones) de Claude: A fondo (13 lecciones, 5 horas), con tres etiquetas: documentos largos, trabajo estratégico y automatización empresarial. Aquí no es el mail corto. Es el PDF, el contrato, Projects, Cowork y el flujo que se repite.",
    "Si el texto cabe en una pantalla, el otro curso alcanza. Si hay 40 páginas, anexos y una decisión, estás en A fondo.",
  ],
  idea: "El oficio es: mapa del documento, citas, riesgos, un entregable que el equipo reutiliza. No un chat eterno de “explícame”.",
  bullets: [
    "Documento largo = mapa, no ladrillo",
    "Cita o hipótesis",
    "Un artefacto (tabla, checklist, draft)",
    "El mismo molde la próxima semana",
  ],
  q: "¿Cuándo eliges A fondo y no el Claude corto?",
  opts: ["Para un meme", "Cuando hay documento largo y una decisión", "Para el sticker del grupo", "Siempre, da igual"],
  ans: 1,
  why: "El curso existe porque el oficio es otro.",
  fillTitle: "Elige el oficio",
  fillLead: "Largo vs corto.",
  template: "Tengo {blank} páginas y debo {blank}. Uso A fondo, no un {blank}.",
  answers: ["40", "decidir si firmamos", "chat suelto"],
  slots: ["largo", "decisión", "atajo"],
  sim: {
    intro: "Mapa primero. Decisión al final. El chat suelto no firma contratos.",
    sections: [
      {
        title: "Qué hago aquí",
        items: [
          "Mapa del PDF: tesis, secciones y huecos",
          "Una decisión al final: firmar o no",
          "Un entregable que el equipo reutiliza",
        ],
      },
      {
        title: "Qué no hago",
        text: "No sustituyo el chat corto, Excel ni Code. Si cabe en un mail, el otro curso.",
      },
      {
        title: "Para llevar",
        items: ["13 lecciones, 5 horas", "Mapa, no ladrillo", "Otros Coursiv: Excel y Code"],
      },
    ],
  },
  rq: "¿A fondo reemplaza Excel o Code?",
  ropts: ["Sí, es el Claude total", "No: Excel y Code son otros oficios en Coursiv", "Solo si pagas Pro"],
  rans: 1,
  rwhy: "Coursiv los lista aparte. Tú también.",
  tip: "documento + decisión. Si cabe en un mail, el otro curso.",
  items: ["13 lecciones, 5 horas", "Mapa, no ladrillo", "Otros Coursiv: Excel y Code"],
});

const mapa = t({
  id: "mapa",
  title: "Pide un mapa, no un ladrillo",
  blurb: "Tesis, secciones, riesgos y lo que el texto no dice.",
  hooks: [
    "Un resumen de 40 páginas en 40 párrafos no se usa. Un mapa sí: tesis, 5 secciones, 3 riesgos, 1 hueco.",
    "Coursiv insiste: documentos largos se navegan. No se recitan.",
  ],
  idea: "Pide encabezados reales del PDF. En cada uno: idea, cita corta, duda abierta. Tope de palabras. Si inventa un encabezado, lo marcas.",
  bullets: [
    "Tesis en una frase",
    "Secciones = las del documento, no las de Claude",
    "Riesgos y huecos aparte",
    "Tope de palabras desde el pedido",
  ],
  q: "¿Qué pides primero de un PDF largo?",
  opts: ["Que lo recuerde entero", "Tesis, secciones del texto y huecos", "Un poema", "Que lo firme"],
  ans: 1,
  why: "El mapa se puede contrastar con el índice.",
  fillTitle: "Arma el mapa",
  fillLead: "Cuatro piezas.",
  template: "Dame la {blank}, cinco {blank} del propio texto y una {blank} que no responde.",
  answers: ["tesis", "secciones", "pregunta"],
  slots: ["tesis", "índice", "hueco"],
  sim: {
    intro: "Tesis en 1 línea. 5 encabezados reales. Hueco: no dice plazos de pago.",
    sections: [
      {
        title: "Mapa",
        items: [
          "Tesis: el contrato empuja a firmar sin fijar plazos de pago",
          "Cinco encabezados copiados del PDF, no inventados",
          "Hueco a la vista: no dice plazos de pago",
        ],
      },
      {
        title: "Tope",
        text: "Cabecera + una línea por sección. Si un encabezado no está en el índice, se tacha.",
      },
      {
        title: "Para llevar",
        items: ["Encabezados del PDF", "Tope de palabras", "Hueco a la vista"],
      },
    ],
  },
  rq: "Si el encabezado no está en el PDF, ¿qué es?",
  ropts: ["Un insight", "Invención: se tacha", "Un plus de Claude"],
  rans: 1,
  rwhy: "El mapa copia el documento. No lo mejora con capítulos fantasma.",
  tip: "tesis + índice real + huecos. El ladrillo no se lee.",
  items: ["Encabezados del PDF", "Tope de palabras", "Hueco a la vista"],
});

const cita = t({
  id: "cita",
  title: "Cita el fragmento o es hipótesis",
  blurb: "Si no puede señalar el párrafo, no lo presentes como hecho.",
  hooks: [
    "Claude es fuerte con documentos. Igual inventa. La regla de Coursiv: pide el ancla. Si no sale, es hipótesis.",
    "“Según el contrato” sin cláusula es un rumor con formato ejecutivo.",
  ],
  idea: "Pide encabezado o número de cláusula. Si no puede, que lo diga. Tú vuelves al PDF. No publicas el rumor.",
  bullets: [
    "Ancla: cláusula, página o encabezado",
    "Hipótesis se etiqueta",
    "No “el espíritu del documento” como prueba",
    "Tú abres el PDF",
  ],
  q: "Claude no cita el párrafo. ¿Qué haces?",
  opts: ["Lo publicas", "Lo tratas como hipótesis y vuelves al doc", "Le pides que invente la cita", "Cambias de modelo y ya"],
  ans: 1,
  why: "Sin ancla no hay fuente. Hay un borrador.",
  fillTitle: "Pide el ancla",
  fillLead: "Cláusula o nada.",
  template: "Resume y cita {blank}. Si no puedes, dilo: es {blank}. No {blank}.",
  answers: ["la cláusula o el encabezado", "hipótesis", "inventes la cita"],
  slots: ["ancla", "etiqueta", "veda"],
  sim: {
    intro: "Cláusula 4.2 ancla el plazo. El “siempre a 30 días” no estaba: hipótesis.",
    sections: [
      {
        title: "Anclado",
        text: "Cláusula 4.2: el plazo de entrega es de 15 días. Eso sí está en el PDF.",
      },
      {
        title: "Hipótesis",
        items: [
          "“Siempre a 30 días” no aparece: no se publica como hecho",
          "Si no puedo citar encabezado o número, lo etiqueto",
          "Tú abres el PDF; yo no firmo la cita",
        ],
      },
      {
        title: "Para llevar",
        items: ["Ancla o hipótesis", "Nada de citas inventadas", "El PDF manda"],
      },
    ],
  },
  rq: "¿Quién abre el PDF?",
  ropts: ["Claude, en silencio", "Tú, siempre", "El abogado del modelo"],
  rans: 1,
  rwhy: "La herramienta recorta. El clic es tuyo.",
  tip: "sin párrafo, no es fuente.",
  items: ["Ancla o hipótesis", "Nada de citas inventadas", "El PDF manda"],
});

const contrato = t({
  id: "contrato",
  title: "Contratos y políticas en claro",
  blurb: "Qué obliga, qué no dice, un riesgo. Sin teatro.",
  hooks: [
    "Trabajo estratégico: el comité necesita obligaciones, silencios y un riesgo. No un “resumen amable”.",
    "Claude se luce si le pides esas tres columnas. Se pierde si le pides “explícame el legal”.",
  ],
  idea: "Tabla: obligación / no dicho / riesgo. Sin reescribir la cláusula. Sin consejo legal disfrazado: eres un lector, no el bufete.",
  bullets: [
    "Tres columnas, no un ensayo",
    "Copia el silencio: lo que NO está",
    "Un riesgo por tema, no diez miedos",
    "Tú no firmas “porque Claude dijo”",
  ],
  q: "¿Qué entregable sirve en una junta de contrato?",
  opts: ["Un ladrillo de 8 páginas", "Obligaciones, silencios y un riesgo, con ancla", "Un chiste del anexo", "Un sí/no místico"],
  ans: 1,
  why: "Se puede señalar. El ladrillo no se discute.",
  fillTitle: "Tres columnas",
  fillLead: "Sin teatro.",
  template: "Lista {blank}, lo que {blank} y un {blank}. Cita la cláusula.",
  answers: ["obligaciones", "NO dice", "riesgo"],
  slots: ["debe", "silencio", "alerta"],
  sim: {
    intro: "Obliga entrega en 15 días (4.2). No dice penalidad. Riesgo: atraso sin diente.",
    sections: [
      {
        title: "Obliga",
        text: "Entrega en 15 días. Ancla: cláusula 4.2. No reescribo la cláusula.",
      },
      {
        title: "No dice",
        text: "No hay penalidad por atraso. El silencio se copia, no se rellena.",
      },
      {
        title: "Riesgo",
        items: [
          "Atraso sin diente: el comité ve el hueco",
          "Un riesgo por tema, no diez miedos",
          "Tú no firmas “porque Claude dijo”",
        ],
      },
    ],
  },
  rq: "¿Claude sustituye al abogado?",
  ropts: ["Sí, si el PDF es largo", "No: recorta para que el humano decida", "Solo en Pro"],
  rans: 1,
  rwhy: "A fondo acelera la lectura. No asume la firma.",
  tip: "obliga / no dice / riesgo. Ancla. Listo para junta.",
  items: ["Tabla, no novela", "El silencio cuenta", "Tú decides"],
});

const tono = t({
  id: "tono",
  title: "Tono de equipo, no de brochure",
  blurb: "Cercanía sin chiste. Un aviso que se puede mandar.",
  hooks: [
    "Políticas y cartas internas: Claude escribe demasiado fino o demasiado frío. Pide el destinatario y lo que no debe sonar.",
    "Coursiv: cercanía sin ironía ni urgencia falsa.",
  ],
  idea: "Quién lo lee, qué debe hacer, qué tono está prohibido. Tope de palabras. Un siguiente paso.",
  bullets: [
    "Destinatario nombrado",
    "Sin ironía, sin pánico",
    "Un siguiente paso",
    "Tope de palabras",
  ],
  q: "¿Qué pide mejor una carta difícil?",
  opts: ["Hazla viral", "Cercana, sin chiste, 90 palabras, un siguiente paso", "Más emojis", "Que suene a abogado"],
  ans: 1,
  why: "Límites de tono y de largo. El adjetivo “mejor” no.",
  fillTitle: "Fija el tono",
  fillLead: "Tres vetos y un paso.",
  template: "Sin {blank}, sin {blank} falsa, con un {blank} claro.",
  answers: ["ironía", "urgencia", "siguiente paso"],
  slots: ["veto1", "veto2", "acción"],
  sim: {
    intro: "90 palabras. Cercana. El paso: reunirnos el jueves con el anexo.",
    sections: [
      {
        title: "Tono",
        items: [
          "Cercana, sin ironía y sin urgencia falsa",
          "Destinatario nombrado: el equipo interno",
          "Tope: 90 palabras",
        ],
      },
      {
        title: "Siguiente paso",
        text: "Reunirnos el jueves con el anexo. Un aviso que se puede mandar.",
      },
      {
        title: "Para llevar",
        items: ["Quién lo lee", "Qué no sonar", "Qué hacer después"],
      },
    ],
  },
  rq: "¿Por qué vetar la ironía?",
  ropts: ["Por moda", "Porque en un aviso interno se lee como desprecio", "Por tokens"],
  rans: 1,
  rwhy: "El documento largo ya pesa. El chiste no ayuda.",
  tip: "destinatario, vetos de tono, un paso.",
  items: ["Quién lo lee", "Qué no sonar", "Qué hacer después"],
});

const tablas = t({
  id: "tablas",
  title: "Saca la tabla que ya está en el texto",
  blurb: "Fechas, montos y dueños. No un párrafo de cifras sueltas.",
  hooks: [
    "Automatizar empieza por extraer. Si las fechas viven en prosa, nadie las filtra.",
    "Pide columnas fijas. Si un dato no está, “por confirmar”. No un 0 creativo.",
  ],
  idea: "Columnas: ítem, fecha, monto, dueño, ancla. Filas = lo que el documento nombra. Huecos etiquetados.",
  bullets: [
    "Columnas dichas de antemano",
    "Por confirmar ≠ inventar",
    "Una fila por obligación o hito",
    "Se puede pegar en Excel después",
  ],
  q: "Un monto no está en el PDF. ¿Qué pones?",
  opts: ["El promedio del sector", "Por confirmar", "Cero", "Lo que “se usa en estos casos”"],
  ans: 1,
  why: "La tabla es fiel. El hueco se ve.",
  fillTitle: "Fija columnas",
  fillLead: "Antes de extraer.",
  template: "Columnas: {blank}, {blank}, {blank}. Si falta, por confirmar.",
  answers: ["fecha", "monto", "dueño"],
  slots: ["c1", "c2", "c3"],
  sim: {
    intro: "12 filas. 3 montos por confirmar. Ningún promedio fantasma.",
    sections: [
      {
        title: "Columnas",
        items: ["fecha", "monto", "dueño", "ancla en el PDF"],
      },
      {
        title: "Huecos",
        text: "3 montos no están en el texto: por confirmar. No promedio del sector, no cero creativo.",
      },
      {
        title: "Para llevar",
        items: ["Estructura primero", "Fiel al PDF", "Luego Excel si toca"],
      },
    ],
  },
  rq: "¿Para qué extraer a tabla?",
  ropts: ["Para que se vea moderno", "Para filtrar, cruzar y repetir el lunes", "Para llenar tokens"],
  rans: 1,
  rwhy: "Eso es automatizar el flujo, no el adorno.",
  tip: "columnas fijas. Hueco = por confirmar.",
  items: ["Estructura primero", "Fiel al PDF", "Luego Excel si toca"],
});

const compara = t({
  id: "compara",
  title: "Compara dos textos sin elegir al dramático",
  blurb: "Dónde coinciden, dónde se contradicen, qué checar.",
  hooks: [
    "Dos versiones de una política. Claude tiende a quedarse con la más intensa. Pide un cruce, no un ganador.",
    "El hallazgo suele ser la contradicción, no el párrafo más largo.",
  ],
  idea: "A vs B: coincidencias, contradicciones, silencios de cada uno, una pregunta para legal o el dueño. Sin “qué suena más profesional”.",
  bullets: [
    "Misma plantilla para A y B",
    "Contradicción ≠ error automático: a veces son alcances distintos",
    "Silencios de cada lado",
    "Una pregunta, no un veredicto",
  ],
  q: "¿Qué pides al comparar dos PDFs?",
  opts: ["Cuál está más cool", "Coincidencias, contradicciones y qué checar", "Un ganador con score", "Que borre el más corto"],
  ans: 1,
  why: "El cruce es el entregable. El score es teatro.",
  fillTitle: "Cruza A y B",
  fillLead: "Tres cortes.",
  template: "Dónde {blank}, dónde se {blank} y qué {blank} yo.",
  answers: ["coinciden", "contradicen", "checaría"],
  slots: ["igual", "choque", "siguiente"],
  sim: {
    intro: "Coinciden en el plazo. Se contradicen en la penalidad. Checar anexo 2.",
    sections: [
      {
        title: "Coinciden",
        text: "Ambos textos fijan el mismo plazo de entrega.",
      },
      {
        title: "Se contradicen",
        text: "La penalidad no es la misma. No elijo al más dramático.",
      },
      {
        title: "Qué checarías tú",
        items: [
          "Anexo 2: cuál versión manda",
          "Silencios de cada lado",
          "Una pregunta a legal, no un veredicto",
        ],
      },
    ],
  },
  rq: "La versión B es más dramática. ¿Gana?",
  ropts: ["Sí", "No: el drama no es un criterio", "Sí si es más larga"],
  rans: 1,
  rwhy: "A fondo es estratégico, no de thriller.",
  tip: "cruce, no concurso de elocuencia.",
  items: ["Misma plantilla", "Contradicción a la vista", "Una pregunta al dueño"],
});

const riesgos = t({
  id: "riesgos",
  title: "Riesgos y lo que el texto asume",
  blurb: "Qué sostiene, qué da por hecho, qué pasa si falla.",
  hooks: [
    "Un PDF de 40 páginas asume mercado, plazos y buena fe. Si no pides las asunciones, Claude te vende el resumen feliz.",
    "Trabajo estratégico: el riesgo nombrado se puede mitigar. El implícito te explota en la junta.",
  ],
  idea: "Tres listas: hechos anclados, asunciones, qué pasa si la asunción falla. Sin terrorismo. Un riesgo accionable.",
  bullets: [
    "Hecho con ancla",
    "Asunción etiquetada",
    "Consecuencia en una línea",
    "Sin inventar catástrofes que el texto no permite",
  ],
  q: "¿Qué es una asunción en el documento?",
  opts: ["Un hecho citado", "Algo que el texto da por sentado y no prueba", "Un typo", "Un anexo"],
  ans: 1,
  why: "Si no se prueba, no se presenta como hecho.",
  fillTitle: "Separa hecho y supuesto",
  fillLead: "Tres cajones.",
  template: "Hecho: {blank}. Asunción: {blank}. Si falla: {blank}.",
  answers: ["plazo 15 días (cláusula 4)", "el proveedor tiene stock", "el go-live se mueve"],
  slots: ["ancla", "supuesto", "efecto"],
  sim: {
    intro: "Hecho anclado. Stock no está en el PDF. Efecto: go-live en riesgo.",
    sections: [
      {
        title: "Hecho",
        text: "Plazo 15 días. Ancla: cláusula 4.",
      },
      {
        title: "Asunción",
        text: "Que el proveedor tiene stock. El PDF no lo prueba: va etiquetado.",
      },
      {
        title: "Si falla",
        items: [
          "El go-live se mueve",
          "Un riesgo accionable, no diez catástrofes",
          "El resumen feliz se queda fuera",
        ],
      },
    ],
  },
  rq: "¿Pides diez riesgos para parecer serio?",
  ropts: ["Sí", "No: uno o tres accionables", "Sí, el comité ama el pánico"],
  rans: 1,
  rwhy: "Estratégico es priorizar. No asustar.",
  tip: "hecho / supuesto / efecto. Ancla en el primero.",
  items: ["No vender el resumen feliz", "Asunciones a la vista", "Pocos riesgos, útiles"],
});

const flujo = t({
  id: "flujo",
  title: "Un flujo de documentos que se repite",
  blurb: "Mismo molde: mapa, tabla, riesgos. Otro PDF. Cowork puede programarlo.",
  hooks: [
    "Coursiv etiqueta A fondo con automatización empresarial. Aquí no es Zapier: es el pedido de los lunes, mismo oficio, otro archivo. En Cowork puedes dejar una tarea programada dentro del proyecto: misma carpeta, mismas instrucciones, otro PDF de la semana.",
    "Si cada contrato se improvisa el prompt, no hay sistema. El molde vive en el Project. El variable es el documento.",
  ],
  idea: "Guarda el molde (mapa + tabla + riesgos + tono) en las instrucciones del proyecto. El PDF de la semana se adjunta o se deja en la carpeta. Una persona revisa umbrales si el negocio cambió. Cowork no cambia solo el contenido del Project: tú añades lo que quieras conservar.",
  bullets: [
    "Molde en Project (chat) o en el proyecto de Cowork",
    "El PDF de la semana entra; el resto no",
    "Misma salida: mapa, tabla, riesgos",
    "Revisión humana al umbral",
  ],
  q: "¿Qué se reutiliza entre contratos?",
  opts: ["El chat de marzo", "El molde de salida", "Nada", "El nombre del proveedor"],
  ans: 1,
  why: "El oficio es fijo. El anexo cambia.",
  fillTitle: "Arma el molde",
  fillLead: "Fijo vs archivo de la semana.",
  template: "Fijo: {blank} + {blank}. Variable: {blank} de esta semana.",
  answers: ["mapa", "tabla de hitos", "el PDF"],
  slots: ["corte1", "corte2", "archivo"],
  sim: {
    intro: "Molde listo. Esta semana solo entra el contrato B.",
    sections: [
      { title: "Fijo", text: "Mapa + tabla de hitos + riesgos. Tono de equipo." },
      { title: "Variable", text: "El PDF del contrato B, en la carpeta del proyecto." },
      { title: "Cowork", text: "Si lo programas para los lunes, arranca con las mismas instrucciones. Tú revisas umbrales." },
    ],
  },
  rq: "Si el negocio ahora pide penalidades, ¿qué actualizas?",
  ropts: ["Nada", "El molde, a propósito", "El modelo de IA"],
  rans: 1,
  rwhy: "Automatizar no es fosilizar una regla vieja.",
  tip: "molde fijo, PDF de la semana. Cowork puede repetirlo; tú actualizas el umbral.",
  items: ["Misma salida", "Otro archivo", "Umbral se revisa"],
});

const artifacts = t({
  id: "artifacts",
  title: "Artifacts que se pueden reabrir",
  blurb: "Tabla, checklist, draft. No un globo de chat.",
  hooks: [
    "Un artifact es un entregable con nombre. El chat se pierde. El artifact se reabre la semana siguiente.",
    "Pide el formato: checklist de 12 ítems, tabla de 6 columnas, draft de 180 palabras. No “haz algo útil”.",
  ],
  idea: "Nombra el artefacto. Di para quién. Di qué no es (no un ensayo, no un sitio). Claude arma. Tú copias a donde viva el trabajo.",
  bullets: [
    "Nombre del entregable",
    "Formato y tope",
    "Dueño del documento",
    "Se copia fuera del chat",
  ],
  q: "¿Qué es un artifact útil?",
  opts: ["Otro párrafo en el hilo", "Un entregable con formato que se reabre", "Un sticker", "Un resumen eterno"],
  ans: 1,
  why: "Se puede mandar al equipo. El hilo no.",
  fillTitle: "Nombra el entregable",
  fillLead: "Formato primero.",
  template: "Arma un {blank} de {blank} ítems para {blank}. No un ensayo.",
  answers: ["checklist", "12", "operaciones"],
  slots: ["tipo", "n", "quién"],
  sim: {
    intro: "Checklist de 12. Operaciones. Se copia a Notion.",
    sections: [
      {
        title: "Entregable",
        items: [
          "Checklist de 12 ítems, no un ensayo",
          "Dueño: operaciones",
          "Se reabre la semana siguiente",
        ],
      },
      {
        title: "Fuera del chat",
        text: "Se copia a Notion. El globo del hilo no es el artefacto.",
      },
      {
        title: "Límite",
        text: "El PDF original sigue mandando. El artifact es el recorte de trabajo.",
      },
    ],
  },
  rq: "¿El artifact sustituye el PDF original?",
  ropts: ["Sí", "No: es el recorte de trabajo, el PDF sigue mandando", "Sí si es largo"],
  rans: 1,
  rwhy: "El artifact acelera. No es la fuente.",
  tip: "formato + dueño. Luego se copia fuera.",
  items: ["Tiene nombre", "Se reabre", "El PDF no se tira"],
});

const proyectos = t({
  id: "proyectos",
  title: "Projects y Cowork: el caso se queda",
  blurb: "Instrucciones, archivos y memoria del caso. El chat suelto se pierde.",
  hooks: [
    "Coursiv arma A fondo sobre documentos largos y trabajo que se repite. En Claude eso vive en un Project: archivos, instrucciones y el tono del equipo. Cowork es el mismo oficio en el escritorio: carpetas locales, reglas fijas y memoria del proyecto.",
    "No es lo mismo un Project de claude.ai (knowledge en la nube) que un proyecto de Cowork (carpeta en tu máquina). Se pueden enlazar. No se fusionan. Si cada vez pegas el PDF de cero, Claude improvisa el tono.",
  ],
  idea: "Un proyecto por tipo de documento (contratos, políticas, reportes). Instrucciones arriba: qué nunca hacer, para quién es, qué formato sale. Knowledge = los PDFs de esta semana, no los 200 de la historia. En Cowork, montas la carpeta del caso y la memoria no se lleva a otro proyecto.",
  bullets: [
    "Project de chat ≠ proyecto de Cowork: se enlazan, no se mezclan",
    "Instrucciones arriba: tono, formato, vedas",
    "Archivos del caso, no de la empresa entera",
    "La memoria de Cowork queda dentro de ese proyecto",
  ],
  q: "¿Dónde van las reglas del tono?",
  opts: ["Al final, como PS", "En las instrucciones del proyecto, arriba", "En un emoji", "Solo en Cowork móvil"],
  ans: 1,
  why: "Si van al final, ya escribió con otro tono.",
  fillTitle: "Arma el proyecto",
  fillLead: "Reglas + archivos del caso.",
  template: "Proyecto {blank}. Nunca {blank}. Archivos: {blank}.",
  answers: ["contratos 2026", "inventar cláusulas", "el PDF de esta semana"],
  slots: ["nombre", "veda", "knowledge"],
  sim: {
    intro: "Proyecto listo. La veda está arriba. El PDF es el de esta semana.",
    sections: [
      { title: "Instrucciones", text: "Nunca inventar cláusulas. Tono de equipo, no brochure. Tabla de hitos + riesgos." },
      { title: "Knowledge", text: "Solo el contrato de esta semana y el molde. No los 200 PDFs viejos." },
      { title: "Cowork", text: "Si trabajas en escritorio, la carpeta del caso se monta aquí. La memoria no se lleva a otro proyecto." },
    ],
  },
  rq: "¿Pegas los 200 contratos de la historia?",
  ropts: ["Sí, por contexto", "No: el caso de esta semana + el molde", "Sí, Claude se pone feliz"],
  rans: 1,
  rwhy: "El ruido esconde el caso.",
  tip: "proyecto = reglas + archivo del caso. Cowork monta la carpeta; el chat Project guarda el knowledge.",
  items: ["Instrucciones arriba", "PDF de esta semana", "Chat Project y Cowork se enlazan, no se fusionan"],
});

const alucina = t({
  id: "alucina",
  title: "Sigue inventando. Tú cazas.",
  blurb: "Fechas, nombres y anexos que no estaban.",
  hooks: [
    "A fondo no vuelve infalible a Claude. Vuelve visible el truco: ancla o se cae.",
    "Los inventos favoritos: anexos, fechas redondas, “como es habitual en la industria”.",
  ],
  idea: "Pide que marque lo no encontrado. Veta “es habitual”. Toda fecha sale con ancla o con “no está”.",
  bullets: [
    "No está ≠ se inventa",
    "Veda de “en la industria”",
    "Fechas con ancla",
    "Una pasada humana",
  ],
  q: "Aparece un anexo 7 que no abriste. ¿Qué es?",
  opts: ["Un favor de Claude", "Invención: se tacha o se busca el archivo", "Un extra Pro"],
  ans: 1,
  why: "Si no lo pegaste, no existe.",
  fillTitle: "Caza el invento",
  fillLead: "Tres filtros.",
  template: "Si no está en el PDF, es {blank}. Veta {blank}. Las fechas van con {blank}.",
  answers: ["hipótesis", "“es habitual”", "ancla"],
  slots: ["etiqueta", "frase", "prueba"],
  sim: {
    intro: "Anexo 7 tachado. Cero “habitual”. Fechas solo las de la cláusula 4.",
    sections: [
      {
        title: "Tachado",
        items: [
          "Anexo 7 no estaba en el PDF: invención",
          "“Es habitual en la industria”: veda",
          "Fechas solo las ancladas en la cláusula 4",
        ],
      },
      {
        title: "Filtro",
        text: "Si no está, es hipótesis. Tú haces la pasada final.",
      },
      {
        title: "Para llevar",
        items: ["Hipótesis visible", "Nada de “la industria”", "Pasada humana"],
      },
    ],
  },
  rq: "¿Quién hace la pasada final?",
  ropts: ["El modelo", "Tú", "El Artifact solo"],
  rans: 1,
  rwhy: "A fondo acelera. No firma.",
  tip: "lo no pegado no existe. Cazas fechas y anexos.",
  items: ["Hipótesis visible", "Nada de “la industria”", "Pasada humana"],
});

const otras = t({
  id: "otras",
  title: "Excel, Code y ChatGPT: otros oficios",
  blurb: "A fondo lee. Excel calcula. Code arma. ChatGPT borra el día a día.",
  hooks: [
    "Coursiv lista Claude, Claude para Excel, Claude Code y ChatGPT aparte. Mezclarlos en un solo chat te cobra en algo.",
    "Cierre: elige el cajón. La firma sigue siendo tuya.",
  ],
  idea: "Documento largo → A fondo. Hoja y fórmulas → Excel. Ticket de pantalla o script → Code. Mail y brainstorm → ChatGPT.",
  bullets: [
    "Un oficio por herramienta",
    "Puedes hacerlo todo en Claude: pagas en precisión o en tiempo",
    "El molde de A fondo no es una app",
    "Tú reparte",
  ],
  q: "Una tabla de 8 mil filas para un margen, ¿dónde?",
  opts: ["A fondo, porque “Claude puede”", "Claude para Excel, con recorte y unidades", "Code, siempre", "ChatGPT, por costumbre"],
  ans: 1,
  why: "Coursiv lo separó por algo: el oficio de la hoja es otro.",
  fillTitle: "Reparte el caso",
  fillLead: "Tres cajones.",
  template: "El contrato va a {blank}. La hoja de márgenes a {blank}. El mail del cliente a {blank}.",
  answers: ["Claude: A fondo", "Claude para Excel", "ChatGPT"],
  slots: ["docs", "hoja", "día a día"],
  sim: {
    intro: "Oficios partidos. Nadie le pide a A fondo que arme el pivot.",
    sections: [
      {
        title: "Reparto",
        items: [
          "El contrato → Claude: A fondo",
          "La hoja de márgenes → Claude para Excel",
          "El mail del cliente → ChatGPT",
        ],
      },
      {
        title: "Qué no mezclo",
        text: "A fondo lee el PDF. No arma el pivot ni escribe el sticker del grupo.",
      },
      {
        title: "Para llevar",
        items: ["13 / 5 h de documentos", "Excel y Code aparte", "Tú firmas"],
      },
    ],
  },
  rq: "¿A fondo sustituye a los otros cursos de Coursiv?",
  ropts: ["Sí, es el más largo", "No: 13 lecciones de documentos, no de Excel ni de código", "Sí si terminas el diploma"],
  rans: 1,
  rwhy: "Los números del catálogo son distintos porque el oficio es distinto.",
  tip: "reparte. A fondo es el PDF. El resto, su cajón.",
  items: ["13 / 5 h de documentos", "Excel y Code aparte", "Tú firmas"],
});

export const claudeFondoUnits = units([
  ["u1", "El documento largo", [vs, mapa, cita, contrato, tono]],
  ["u2", "Extraer y decidir", [tablas, compara, riesgos, flujo]],
  ["u3", "Sistema y límites", [artifacts, proyectos, alucina, otras]],
]);
