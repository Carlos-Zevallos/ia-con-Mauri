import { coursivFlow } from "./kit.js";

const img = (file) => ({ kind: "image", src: `/lessons/claude-excel/${file}?v=3` });
const B = "Claude";
const q = (n) => `/lessons/claude-excel/q${n}.png?v=3`;

const conoce = coursivFlow({
  id: "conoce",
  title: "Qué es Claude para Excel",
  blurb: "Add-in nativo en el libro abierto. No es subir el .xlsx al chat",
  brand: B,
  hero: img("conoce.png"),
  ui: img("conoce-b.png"),
  problemImg: q(1),
  open: [
    "Claude para Excel es el complemento oficial de Anthropic: un panel al costado del libro abierto. Preguntas por celdas, rastreas fórmulas, cambias un supuesto y ves el impacto sin copiar y pegar entre el navegador y la hoja.",
    "No es lo mismo que subir un .xlsx al chat de Claude, ni que armar una integración con la API, ni que Copilot de Microsoft. El add-in lee pestañas, celdas y fórmulas del archivo que tienes abierto. Puede editar con seguimiento de cambios. Sigue sin ver macros, VBA ni tablas de datos.",
  ],
  quiz1: {
    question: "¿En qué se diferencia Claude para Excel de subir el archivo al chat?",
    options: [
      "En nada: los dos editan el libro en vivo",
      "El add-in vive en el libro abierto y puede editar celdas; el chat solo analiza el archivo subido",
      "El chat es más seguro porque no toca fórmulas",
      "Solo el chat funciona en Windows",
    ],
    answer: 1,
    explain: "El add-in está dentro de Excel. El chat ve una copia subida y no mantiene referencias vivas.",
  },
  meetTitle: "Cuatro formas que se mezclan en internet",
  meetText:
    "Coursiv las separa porque el consejo viejo las trata como si fueran la misma herramienta. Elige según si necesitas el libro en vivo o un análisis de una sola vez.",
  meetList: [
    "Add-in nativo: sidebar, lee y edita el libro abierto, con seguimiento de cambios",
    "Chat con archivo subido: resume y explica, no edita fórmulas vivas",
    "API / integración: solo si tu equipo la construye y la mantiene",
    "Copilot en Excel: nativo de Microsoft 365; otro licencia y otro gobernanza",
  ],
  pair: {
    title: "Revisión de capacidades",
    card: {
      lead: "Decide si este pedido usa el add-in y no el chat suelto.",
      prompt:
        "En el libro abierto: mapea pestañas, entradas y dependencias. No sobrescribas nada sin confirmación.",
    },
    question: "¿Este pedido es para Claude para Excel?",
    options: ["Sí: habla del libro abierto y no pide pegar la tabla", "No: habría que subir el .xlsx al chat"],
    answer: 0,
    explain: "El add-in ya ve el libro. Pegar un recorte es el oficio del chat, no de esta ruta.",
  },
  discovery:
    "Claude para Excel acelera el análisis, pero cada fórmula, referencia y número sigue necesitando revisión humana en el libro.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Abres el presupuesto del trimestre. En el panel pides un mapa del libro. Claude lista pestañas, celdas de entrada y qué alimenta el dashboard. Tú confirmas. Todavía no tocó un número.",
  exampleList: [
    "El libro que está abierto, no una copia en el chat",
    "Una tarea acotada: mapear, no “arréglalo”",
    "Prohibido sobrescribir hasta que tú lo digas",
  ],
  exampleImg: img("conoce-b.png"),
  multi: {
    title: "Qué define al add-in",
    question: "Para consolidar, ¿qué es cierto de Claude para Excel?",
    options: [
      "Lee el libro abierto: pestañas, celdas y fórmulas",
      "Puede editar con seguimiento de cambios si se lo pides",
      "No trabaja macros, VBA ni tablas de datos",
    ],
    answers: [0, 1, 2],
    explain: "Las tres. El add-in no sustituye Excel ni tu revisión.",
  },
  practice: {
    title: "Elige el oficio correcto",
    lead: "Completa el pedido y mira cómo responde Claude en el workspace.",
    template: "Usa el add-in nativo. Lee {blank}. No es lo mismo que {blank}. Puede {blank} con seguimiento de cambios.",
    answers: ["el libro abierto", "subir el archivo al chat", "editar celdas"],
    slots: ["dónde trabaja", "lo que no es", "qué puede hacer"],
    simReply: {
      animate: true,
      intro: "Correcto. Trabajo sobre el libro que tienes abierto, no sobre una copia en el chat.",
      sections: [
        {
          title: "Qué veo",
          text: "Pestañas, celdas y fórmulas de este archivo.",
        },
        {
          title: "Qué no veo",
          text: "Macros, VBA, tablas de datos ni hojas que no estén en este libro.",
        },
        {
          title: "Antes de editar",
          items: [
            "No sobrescribo datos sin tu confirmación",
            "Dejo visibles las celdas que tocaría",
            "Tú revisas referencias y totales contra una copia",
          ],
        },
      ],
    },
  },
  review: {
    question: "Después de ver la respuesta, ¿qué sigue siendo tu trabajo?",
    options: [
      "Nada: el add-in firma los números",
      "Revisar fórmulas, referencias y totales en el libro",
      "Volver a subir el .xlsx al chat",
    ],
    answer: 1,
    explain: "Claude acelera. La firma del número es tuya.",
  },
  discovery2:
    "La fórmula de esta ruta: libro abierto + tarea acotada + tú confirmas antes de que toque celdas. En las próximas lecciones vas a instalación, el flujo de un cambio y el mapa del libro.",
  closeItems: [
    "Add-in ≠ chat con archivo subido",
    "Lee el libro abierto",
    "Tú revisas cada cambio",
  ],
});

const instalar = coursivFlow({
  id: "instalar",
  title: "Instalación y planes",
  blurb: "AppSource o el admin de Microsoft 365. Plan Pro, Max, Team o Enterprise",
  brand: B,
  hero: img("instalar.png"),
  ui: img("instalar-b.png"),
  problemImg: q(2),
  open: [
    "Claude para Excel está en planes Pro, Max, Team y Enterprise. Una organización también puede conectarlo por un gateway (Bedrock, Vertex o Azure) sin que cada persona tenga cuenta en Claude.ai.",
    "Funciona en Excel para la web, Windows, Mac e iPad con Microsoft 365 reciente. No corre en Excel 2016/2019 perpetuo, ni en Android, ni en builds viejos de 365.",
  ],
  quiz1: {
    question: "¿Dónde instala el add-in una persona, sin admin?",
    options: [
      "En un .exe de Anthropic",
      "En el listado de Microsoft Marketplace / AppSource, luego lo activa en Excel e inicia sesión",
      "Solo desde el chat de Claude",
      "En la Store de Android",
    ],
    answer: 1,
    explain: "AppSource → Get it now → Inicio > Complementos (o Tools > Add-ins en Mac) → cuenta Claude.",
  },
  meetTitle: "Persona vs organización",
  meetText:
    "Si IT bloqueó la Office Store, el admin puede subir el manifiesto XML y asignar usuarios. Si el add-in no aparece, revisa plan, build de Excel, bloqueo de Store y que iniciaste sesión en la organización correcta.",
  meetList: [
    "Individual: AppSource → Excel → Inicio > Complementos → login Claude",
    "Org: Centro de admin 365 → Aplicaciones integradas → “Claude by Anthropic for Excel”",
    "Formatos: .xlsx y .xlsm. Sin tablas de datos, macros ni VBA",
    "Si falta: plan, versión de Excel, Store bloqueada o cuenta equivocada",
  ],
  pair: {
    card: {
      lead: "¿Este plan de instalación está completo?",
      prompt: "AppSource → Get it now → abro Excel → Inicio > Complementos → inicio sesión con Claude Pro.",
    },
    question: "¿El pedido de instalación está listo?",
    options: ["Sí: origen, activación y plan", "No: falta el .exe"],
    answer: 0,
    explain: "No hay instalador aparte. El add-in vive en Excel.",
  },
  discovery:
    "Sin plan elegible o con un Excel perpetuo, el panel no aparece. El problema casi nunca es “el prompt”.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Ana instala desde AppSource, abre el presupuesto y activa Claude en Inicio > Complementos. Inicia sesión con Pro. El primer pedido es “¿qué hay en este libro?”, no “limpia todo”.",
  exampleList: [
    "Marketplace oficial, no un ZIP suelto",
    "Activar el add-in en esa sesión de Excel",
    "Login con el plan que incluye Claude para Excel",
  ],
  exampleImg: img("instalar-b.png"),
  multi: {
    question: "Para consolidar, ¿qué necesitas para usar el add-in?",
    options: [
      "Un plan Pro, Max, Team o Enterprise",
      "Excel en web, Windows, Mac o iPad con build reciente",
      "Activar el complemento e iniciar sesión",
    ],
    answers: [0, 1, 2],
    explain: "Las tres. Excel 2016 perpetuo se queda fuera.",
  },
  practice: {
    title: "Arma la instalación",
    lead: "Completa los tres pasos y mira la respuesta en el workspace.",
    template: "Instálalo desde {blank}, actívalo en {blank} e inicia sesión con plan {blank}.",
    answers: ["AppSource", "Inicio > Complementos", "Pro"],
    slots: ["origen", "dónde se enciende", "plan"],
    simReply: {
      intro: "Listo. El panel debería abrirse al costado del libro.",
      sections: [
        {
          title: "Si no aparece",
          items: [
            "Confirma que el plan incluye Claude para Excel",
            "Excel 365 reciente — no 2016/2019 perpetuo",
            "IT no bloqueó la Store sin subir el manifiesto",
            "Estás en la organización Claude correcta",
          ],
        },
        {
          title: "Primer pedido seguro",
          text: "“¿Qué datos hay en este libro?” Si responde con pestañas reales, la instalación cerró.",
        },
      ],
    },
  },
  review: {
    question: "El add-in no aparece. ¿Qué revisas primero?",
    options: [
      "El prompt de Twitter",
      "Plan, build de Excel, Store y cuenta",
      "Si el archivo pesa 2 MB",
    ],
    answer: 1,
    explain: "Coursiv: si falta el panel, el oficio no empezó.",
  },
  discovery2:
    "Instalación cerrada: AppSource o el admin, Excel soportado, plan correcto. Ahora sí el flujo de un cambio.",
  closeItems: [
    "AppSource o manifiesto del admin",
    "Plan Pro / Max / Team / Enterprise",
    "Excel 365 reciente",
  ],
});

const flujo = coursivFlow({
  id: "flujo",
  title: "Un cambio acotado",
  blurb: "Copia, celda concreta, explica antes de editar, revisa lo marcado",
  brand: B,
  hero: img("flujo.png"),
  ui: img("flujo-b.png"),
  problemImg: q(3),
  open: [
    "Coursiv enseña un flujo repetible, no “arréglame el presupuesto”. Primero una copia. El deshacer de Excel no sustituye un archivo de respaldo.",
    "Después: la tarea exacta y las celdas de origen. En lugar de “limpia esto”, “cambia el supuesto de marketing Q3 en C14 de la hoja Supuestos”. Di qué fórmulas no se tocan. Pide que explique el cambio antes de aplicarlo.",
  ],
  quiz1: {
    question: "¿Cuál pedido es seguro para el add-in?",
    options: [
      "Arregla mi presupuesto",
      "Cambia el supuesto de marketing Q3 en C14 de Supuestos. Explica antes de editar",
      "Hazlo más estratégico",
      "Limpia todo el libro",
    ],
    answer: 1,
    explain: "Hay celda, hoja y un “explica antes”. El resto es un cheque en blanco.",
  },
  meetTitle: "Los cuatro hábitos + el flujo de Coursiv",
  meetText:
    "Coursiv enseña un prompt de cuatro hábitos que se repite en cada oficio: recorte (qué celdas), pregunta (qué quieres saber), formato (tabla, no ensayo) y verificación (cómo sabrás si está mal). Encima va el flujo: copia → tarea y celdas → qué se preserva → explicar antes → aplicar → revisar celdas marcadas → recalcular contra la copia → guardar versión.",
  meetList: [
    "Recorte: hoja y celdas, no “el presupuesto”",
    "Pregunta: una, medible (varianza, driver, error)",
    "Formato: tabla o celdas, no un párrafo",
    "Verificación: contrastar contra la copia y las referencias reales",
  ],
  pair: {
    card: {
      lead: "¿Este cambio está acotado?",
      prompt: "En una copia: cambia C14 de Supuestos (marketing Q3). No toques las fórmulas de Dashboard. Explica el plan y espera confirmación.",
    },
    question: "¿El pedido está listo para el workspace?",
    options: ["Sí: copia, celda, veto y confirmación", "No: debería decir “arréglalo”"],
    answer: 0,
    explain: "Así se evita un overwrite silencioso.",
  },
  discovery:
    "Claude resalta celdas tocadas. Revisa cada una. Un total que “se ve bien” puede esconder una referencia rota.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Presupuesto trimestral de juguete. El supuesto de marketing Q3 está en C14. Pides el plan. Claude dice qué celdas bajarían. Tú confirmas. Recalculas contra la copia.",
  exampleList: [
    "Una celda de supuesto",
    "Un veto: no tocar Dashboard",
    "Comparar totales con el backup",
  ],
  exampleImg: img("flujo-b.png"),
  multi: {
    question: "Para consolidar, ¿qué recorta el riesgo?",
    options: [
      "Trabajar sobre una copia",
      "Nombrar hoja y celda",
      "Pedir explicación antes de aplicar",
    ],
    answers: [0, 1, 2],
    explain: "Las tres. “Limpia el libro” no es un oficio.",
  },
  practice: {
    title: "Acota el cambio",
    lead: "Completa el pedido y mira el plan que devolvería Claude.",
    template: "Antes de editar: {blank}. Cambia solo {blank} en {blank}. Explica el plan y espera confirmación.",
    answers: ["haz una copia", "el supuesto de marketing Q3", "C14 de Supuestos"],
    slots: ["respaldo", "qué cambia", "dónde"],
    simReply: {
      intro: "Plan, sin tocar celdas todavía.",
      sections: [
        {
          title: "Cambio propuesto",
          text: "Supuestos!C14 (marketing Q3) pasa del valor actual al que indiques.",
        },
        {
          title: "Impacto que vería",
          items: [
            "Budget!E20 (gasto Q3) se recalcula",
            "Dashboard!B6 (total marketing) se mueve",
            "No toco fórmulas de Dashboard ni nombres definidos",
          ],
        },
        {
          title: "Lista de validación",
          items: [
            "Compara B6 con la copia",
            "Busca #REF! y referencias circulares",
            "Confirma el supuesto (moneda, periodo) antes de guardar",
          ],
        },
      ],
    },
  },
  review: {
    question: "Claude marcó 8 celdas. ¿Qué revisas?",
    options: ["Solo el gran total", "Cada celda marcada y el total contra la copia", "Nada, si el panel se ve seguro"],
    answer: 1,
    explain: "El total puede cuadrar con una referencia silenciosa mal puesta.",
  },
  discovery2:
    "Copia + celda + explica antes + revisa lo marcado. Ese es el hábito. Ahora el mapa del libro.",
  closeItems: [
    "Siempre una copia",
    "Una celda, no “el presupuesto”",
    "Revisas lo marcado",
  ],
});

const mapa = coursivFlow({
  id: "mapa",
  title: "Mapa del libro",
  blurb: "Pestañas, entradas, salidas y dependencias. Las hojas ocultas existen",
  brand: B,
  hero: img("mapa.png"),
  ui: img("mapa-b.png"),
  problemImg: q(4),
  open: [
    "Antes de pedir un escenario, pide el mapa: pestañas, entradas clave, salidas y cómo se conectan. Coursiv insiste en esto porque un supuesto en la hoja 4 puede alimentar el dashboard sin que lo veas.",
    "El add-in solo ve el libro abierto. Hojas ocultas, vínculos externos y archivos ligados pueden quedarse fuera. Pídele que los busque y que no invente pestañas.",
  ],
  quiz1: {
    question: "¿Para qué sirve el mapa antes de editar?",
    options: [
      "Para decorar el panel",
      "Para saber qué entradas mueven qué salidas y no romper un cruce",
      "Para borrar pestañas ocultas",
      "Para exportar a PowerPoint",
    ],
    answer: 1,
    explain: "Sin mapa, un cambio “pequeño” rompe un cruce que no pegaste con los ojos.",
  },
  meetTitle: "Qué pide el mapa",
  meetText:
    "Coursiv usa un prompt fijo: mapea pestañas, entradas y conexiones. No sobrescribas. Declara supuestos. Termina con una lista de validación.",
  meetList: [
    "Nombre de cada hoja y para qué sirve",
    "Celdas de entrada (supuestos, tipos de cambio, fechas)",
    "Salidas (totales, KPIs, dashboard)",
    "Dependencias y avisos: ocultas, vínculos, #REF!",
  ],
  pair: {
    card: {
      lead: "¿Este pedido arma un mapa o pide edición?",
      prompt: "Mapea pestañas, entradas clave y dependencias. No sobrescribas, edites ni borres sin confirmación. Declara supuestos. Cierra con lista de validación.",
    },
    question: "¿El pedido es un mapa?",
    options: ["Sí: solo lectura + validación", "No: debería empezar a rellenar celdas"],
    answer: 0,
    explain: "Primero el mapa. La edición viene después, acotada.",
  },
  discovery:
    "Si Claude no menciona una hoja que tú sabes que existe, está oculta o no la vio. No asumas que el mapa está completo.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Libro de presupuesto: Supuestos, Actuals, Budget, Dashboard. El mapa dice que Dashboard!B6 = Budget!E20 y que hay una hoja Hidden_FX que no estaba en la cinta.",
  exampleList: [
    "Cuatro hojas visibles",
    "Una oculta con tipo de cambio",
    "Un cruce que no se tocaba a ojo",
  ],
  exampleImg: img("mapa-b.png"),
  multi: {
    question: "Para consolidar, ¿qué va en el mapa?",
    options: ["Entradas con celda", "Dependencias entre hojas", "Aviso de ocultas o vínculos"],
    answers: [0, 1, 2],
    explain: "Sin ancla de celda, el mapa es un cuento.",
  },
  practice: {
    title: "Pide el mapa",
    lead: "Completa el prompt de Coursiv y mira el mapa que devolvería Claude.",
    template: "Mapea pestañas, {blank} y {blank}. No {blank} sin mi confirmación. Declara supuestos y cierra con lista de validación.",
    answers: ["entradas clave", "dependencias", "sobrescribas datos"],
    slots: ["entradas", "cruces", "veda"],
    simReply: {
      intro: "Mapa del libro (sin editar celdas).",
      sections: [
        {
          title: "Pestañas",
          items: [
            "Supuestos — entradas C4:C18",
            "Actuals — cifras Q1–Q2",
            "Budget — metas por trimestre",
            "Dashboard — salidas; B6 alimenta el slide",
          ],
        },
        {
          title: "Dependencias",
          text: "Dashboard!B6 toma Budget!E20. E20 toma Supuestos!C14 (marketing Q3).",
        },
        {
          title: "Huecos",
          items: [
            "Hidden_FX no estaba en la cinta: tipo de cambio. Confírmala antes de un escenario",
            "No vi macros ni Power Query",
            "Supuesto: el periodo es 2026 y la moneda es MXN — dímelo si no",
          ],
        },
        {
          title: "Validación",
          items: ["Abre Hidden_FX", "Comprueba B6 vs E20 a mano", "No apliqué cambios"],
        },
      ],
    },
  },
  review: {
    question: "El mapa no lista una hoja que tú usas. ¿Qué es?",
    options: ["Un detalle menor", "Un hueco: oculta, vínculo o contexto incompleto", "Seña de que el add-in falló para siempre"],
    answer: 1,
    explain: "Coursiv: el mapa se verifica contra el libro, no al revés.",
  },
  discovery2:
    "Mapa primero. Edición después. Cada claim del modelo debe poder señalar una celda.",
  closeItems: [
    "Pestañas + entradas + cruces",
    "Busca ocultas y vínculos",
    "Cierra con validación",
  ],
});

const formulas = coursivFlow({
  id: "formulas",
  title: "Fórmulas y errores",
  blurb: "Explica contra la celda real. #REF! se diagnostica, no se adivina",
  brand: B,
  hero: img("formulas.png"),
  ui: img("formulas-b.png"),
  problemImg: q(1),
  open: [
    "Claude puede explicar una fórmula, proponer una nueva y rastrear un #REF! o una circular. Coursiv pide que la explicación coincida con la lógica real de la celda, no con un “suena bien”.",
    "Si vas a pegar una fórmula, pide la función, los rangos y qué hacer con vacíos. Luego tú la pruebas en una celda de ensayo. El add-in no sustituye F2.",
  ],
  quiz1: {
    question: "H9 muestra #REF!. ¿Qué pides?",
    options: [
      "Que reescriba todo el libro",
      "La causa, una solución y que no toque otras fórmulas hasta que apruebes",
      "Que ignore el error",
      "Que lo convierta en texto",
    ],
    answer: 1,
    explain: "Diagnóstico acotado. Un “arréglalo” mueve referencias que no estaban rotas.",
  },
  meetTitle: "Tres oficios distintos",
  meetText:
    "Explicar, diagnosticar y escribir son pedidos aparte. Si mezclas “explícame y de paso mejórala”, Claude mete un cambio donde tú querías una clase.",
  meetList: [
    "Explicar: qué hace cada parte, sin recomendar (o la mejora va aparte)",
    "Diagnosticar: celda, error, causa, solución, no tocar el resto",
    "Escribir: función, rangos, vacíos, un ejemplo de 3 filas",
    "Circular: pídele que la busque después de cualquier fórmula nueva",
  ],
  pair: {
    card: {
      lead: "¿Este pedido diagnostica sin reescribir el libro?",
      prompt: "H9 da #REF!. Encuentra la causa y una solución. No cambies ninguna otra fórmula. No edites sin aprobación.",
    },
    question: "¿El pedido está acotado?",
    options: ["Sí: una celda, un error, un veto", "No: debería reconstruir el modelo"],
    answer: 0,
    explain: "Así se evita un arreglo colateral.",
  },
  discovery:
    "Una explicación convincente puede estar mal. Abre la celda y contrasta referencias. Coursiv llama a esto “overreliance”.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "H9 era un SUMIFS que apuntaba a una columna borrada. Claude lo dice. Tú restauras el rango o cambias a la columna nueva. Pruebas en H10 de ensayo.",
  exampleList: [
    "El error y la celda",
    "La causa (columna que ya no existe)",
    "Una celda de prueba, no overwrite del bloque",
  ],
  exampleImg: img("formulas-b.png"),
  multi: {
    question: "Para consolidar, ¿qué verifica una fórmula?",
    options: [
      "Que la explicación coincida con las referencias reales",
      "Que los vacíos no se traten como cero si no lo son",
      "Que no haya circular después del cambio",
    ],
    answers: [0, 1, 2],
    explain: "Las tres. El “suena bien” no entra al comité.",
  },
  practice: {
    title: "Diagnostica H9",
    lead: "Completa el pedido y mira el diagnóstico en el workspace.",
    template: "La celda {blank} muestra {blank}. Encuentra la causa y {blank} sin cambiar el resto. No edites sin aprobación.",
    answers: ["H9", "#REF!", "propón la solución"],
    slots: ["celda", "error", "oficio"],
    simReply: {
      intro: "Diagnóstico de H9. No toqué el libro.",
      sections: [
        {
          title: "Causa",
          text: "SUMIFS en H9 apunta a Actuals!F:F. Esa columna se eliminó: la referencia quedó #REF!.",
        },
        {
          title: "Solución propuesta",
          text: "=SUMIFS(Actuals!E:E,Actuals!A:A,Dashboard!A9) — E es Ingreso; A es canal. Vacíos se ignoran, no cuentan como 0.",
        },
        {
          title: "Validación",
          items: [
            "Prueba la fórmula en H10, no en H9",
            "Compara el total con 3 filas a mano",
            "Busca circulares en Fórmulas > Comprobación de errores",
            "Confirma si quieres que la aplique",
          ],
        },
      ],
    },
  },
  review: {
    question: "¿Dónde pruebas la fórmula nueva?",
    options: ["Directo sobre el bloque de producción", "En una celda de ensayo, luego la mueves", "En el chat"],
    answer: 1,
    explain: "La referencia rota se ve en Excel, no en el panel.",
  },
  discovery2:
    "Una celda, un oficio, una prueba. Ahora escenarios y limpieza, que es donde el add-in más se luce — y más se equivoca si no documentas supuestos.",
  closeItems: [
    "Explicar ≠ reescribir",
    "Causa + solución + veto",
    "Prueba en celda de ensayo",
  ],
});

const escenarios = coursivFlow({
  id: "escenarios",
  title: "Limpieza, escenarios y finanzas",
  blurb: "Plan de limpieza, base / up / down, y varianza que se puede señalar",
  brand: B,
  hero: img("escenarios.png"),
  ui: img("escenarios-b.png"),
  problemImg: q(2),
  open: [
    "Coursiv junta tres oficios de hoja: limpiar (duplicados, formatos, vacíos), armar escenarios y narrar una varianza. En los tres, Claude puede ayudar. En los tres, tú verificas clasificaciones y números.",
    "Anthropic diseñó el add-in con analistas financieros en mente: actualizar supuestos, comparar versiones, redactar la varianza. No es asesoría contable ni fiscal. Un número “plausible” no se presenta hasta que alguien calificado lo chequea.",
  ],
  quiz1: {
    question: "¿Dónde van los tres escenarios?",
    options: [
      "Encima de las cifras reales",
      "En una pestaña nueva, sin alterar el original, con supuestos visibles",
      "Solo en el párrafo del panel",
      "En un gráfico ASCII",
    ],
    answer: 1,
    explain: "Si el 12% de inflación vive en la prosa, no se puede tocar.",
  },
  meetTitle: "Tres pedidos de Coursiv",
  meetText:
    "Limpieza: plan primero, overwrite después. Escenarios: base, upside, downside en pestaña nueva. Varianza: compara Actuals vs Budget y señala las tres brechas más grandes con posibles drivers.",
  meetList: [
    "No sobrescribir sin confirmación",
    "Preservar referencias de origen",
    "Listar supuestos (FX, precio, periodo)",
    "Cerrar con lista de validación",
  ],
  pair: {
    card: {
      lead: "¿Este pedido protege el original?",
      prompt: "Crea base, upside y downside del forecast de ingreso en una pestaña nueva. No alteres el original. Declara supuestos. Lista de validación al final.",
    },
    question: "¿El pedido está listo?",
    options: ["Sí: pestaña nueva y supuestos a la vista", "No: debería pisar Budget"],
    answer: 0,
    explain: "El original se queda. Los tres cortes se pueden tocar.",
  },
  discovery:
    "Finanzas, FP&A, contabilidad y operaciones son los primeros oficios. Contabilidad y regulación se confirman aparte. Esto no es consejo fiscal.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Forecast de ingreso. Base = volumen actual. Downside = volumen −15%. Precio de lista fijo. Claude arma la pestaña Escenarios. Tú cambias el −15% en una celda y el dashboard se mueve.",
  exampleList: [
    "Mismo molde en los tres cortes",
    "Un supuesto por fila",
    "El original intacto",
  ],
  exampleImg: img("escenarios-b.png"),
  multi: {
    question: "Para consolidar, ¿qué hace útil un escenario?",
    options: [
      "Supuestos en celdas, no en adjetivos",
      "Pestaña nueva, original intacto",
      "Validar cálculos e interpretación",
    ],
    answers: [0, 1, 2],
    explain: "Si no se puede tocar el supuesto, no es un modelo.",
  },
  practice: {
    title: "Arma los tres cortes",
    lead: "Completa el pedido de Coursiv y mira la pestaña que propondría Claude.",
    template: "Crea casos {blank}, {blank} y {blank} del forecast en una pestaña nueva, sin alterar el original. Declara supuestos y cierra con validación.",
    answers: ["base", "upside", "downside"],
    slots: ["centro", "mejor", "peor"],
    simReply: {
      intro: "Propuesta de pestaña Escenarios. El original no se toca hasta que confirmes.",
      sections: [
        {
          title: "Estructura",
          items: [
            "Fila 1: encabezados Base | Upside | Downside",
            "Volumen: actual | +8% | −15%",
            "Precio de lista: fijo en los tres (Supuestos!C8)",
            "Ingreso = volumen × precio",
          ],
        },
        {
          title: "Supuestos declarados",
          text: "Periodo 2026, MXN, sin IVA. Tipo de cambio no está en este libro: queda por confirmar.",
        },
        {
          title: "Validación",
          items: [
            "Compara Base con Budget!E20",
            "Cambia el −15% a mano y mira el total",
            "No apliqué la pestaña: dime si la creo",
          ],
        },
      ],
    },
  },
  review: {
    question: "¿Dónde viven los supuestos de un escenario útil?",
    options: ["En un adjetivo del panel", "En celdas que tú puedes editar", "En la memoria del chat"],
    answer: 1,
    explain: "El panel se olvida. La celda no.",
  },
  discovery2:
    "Limpieza con plan, escenarios en pestaña nueva, varianza con ancla. Última lección: lo que el add-in no ve y la lista de QA antes de guardar.",
  closeItems: [
    "Plan de limpieza, luego overwrite",
    "Tres cortes, original intacto",
    "No es consejo fiscal",
  ],
});

const limites = coursivFlow({
  id: "limites",
  title: "Límites, privacidad y QA",
  blurb: "Sin macros. Sin archivo de cliente el día uno. Checklist antes de guardar",
  brand: B,
  hero: img("limites.png"),
  ui: img("limites-b.png"),
  problemImg: q(3),
  open: [
    "Claude para Excel no trabaja macros, VBA ni tablas de datos. Puede cambiar referencias en silencio, dejar una circular o desfasar un gráfico. Una explicación segura no es una prueba.",
    "Coursiv: el día uno se evalúa en una copia de un libro no sensible, con una tarea acotada. No en el modelo vivo del cliente. Archivos de terceros no confiables traen riesgo de prompt injection.",
  ],
  quiz1: {
    question: "¿Dónde pruebas el add-in el primer día?",
    options: [
      "En el modelo vivo con datos de cliente",
      "En una copia de un libro no sensible, con un solo cambio acotado",
      "En un .xls de 2003",
      "En Android",
    ],
    answer: 1,
    explain: "Así se aprende el hábito sin romper un cierre.",
  },
  meetTitle: "Riesgos que Coursiv lista",
  meetText:
    "Referencias mal puestas, contexto incompleto (ocultas, vínculos), supuestos viejos, cambios destructivos, circulares, gráficos desfasados, datos sensibles y fiarse de una prosa convincente.",
  meetList: [
    "Revisar fórmulas y referencias tocadas",
    "Checar supuestos (FX, precios, fechas)",
    "Buscar vínculos rotos, errores y circulares",
    "Comparar salidas clave con la copia o un cálculo independiente",
    "Ver gráficos y formato después del cambio",
    "Confirmar que no se expuso dato confidencial",
    "Guardar versión o backup antes del cierre",
  ],
  pair: {
    card: {
      lead: "¿Este cierre de QA está completo?",
      prompt: "Antes de guardar: revisa referencias tocadas, supuestos, errores/circulares, totales vs la copia, gráficos y que no salió dato sensible.",
    },
    question: "¿El checklist sirve para guardar?",
    options: ["Sí: cubre libro, supuestos y privacidad", "No: basta con que el panel se vea bien"],
    answer: 0,
    explain: "Coursiv no promete libros sin error. Promete el hábito de revisar.",
  },
  discovery:
    "Enterprise aporta controles extra, pero Anthropic recomienda no usarlo con datos muy sensibles o regulados sin gobernanza, ni con hojas de fuentes no confiables.",
  exampleTitle: "Cómo funciona en la práctica",
  exampleText:
    "Terminaste el supuesto de C14. Antes de guardar: abres la copia, comparas Dashboard!B6, buscas circulares, miras el gráfico de marketing y confirmas que no pegaste un RFC de cliente en el panel.",
  exampleList: [
    "Totales vs backup",
    "Gráfico = número",
    "Nada confidencial en el hilo",
  ],
  exampleImg: img("limites-b.png"),
  multi: {
    question: "Para consolidar, ¿qué va en el QA pre-guardado?",
    options: [
      "Fórmulas y referencias modificadas",
      "Errores, circulares y totales contra la copia",
      "Gráficos y dato confidencial",
    ],
    answers: [0, 1, 2],
    explain: "Las tres. El “se ve bien” no cierra el libro.",
  },
  practice: {
    title: "Cierra con QA",
    lead: "Completa el checklist y mira la pasada que haría Claude.",
    template: "Antes de guardar: revisa {blank}, {blank} y {blank}. Compara totales con la copia. No expongas dato sensible.",
    answers: ["referencias", "supuestos", "vínculos rotos"],
    slots: ["fórmulas", "entradas", "errores"],
    simReply: {
      intro: "Pasada de QA. No guardé el archivo.",
      sections: [
        {
          title: "Lo que marqué",
          items: [
            "Celdas tocadas: Supuestos!C14, Budget!E20, Dashboard!B6",
            "Supuestos: C14 en MXN, 2026 — Hidden_FX sigue por confirmar",
            "Sin #REF! visible. Sin circular en el árbol de B6",
          ],
        },
        {
          title: "Lo que tú cierras",
          items: [
            "B6 vs la copia: ¿misma lógica, otro número?",
            "Gráfico de marketing: ¿sigue apuntando a E20?",
            "Nada de cliente o RFC en este hilo",
            "Guarda versión “Q3-revisado” antes de mandarlo",
          ],
        },
        {
          title: "Límite",
          text: "No revisé macros ni Power Query: no los veo. Si el cierre depende de eso, el oficio vuelve a Excel.",
        },
      ],
    },
  },
  review: {
    question: "¿Quién firma el número que sale en la junta?",
    options: ["Claude", "Tú, con el libro y la copia a la vista", "El add-in, si el plan es Enterprise"],
    answer: 1,
    explain: "La ruta enseña hábitos. No sustituye Excel, finanzas ni tu criterio.",
  },
  discovery2:
    "Ya tienes add-in vs chat, instalación, cambio acotado, mapa, fórmulas, escenarios y QA. Eso es Claude para Excel al ritmo de Coursiv: una idea por clic, una tarea en el workspace, tú firmas la hoja.",
  closeItems: [
    "Copia no sensible el día uno",
    "QA antes de guardar",
    "Tú firmas el número",
  ],
});

export const claudeExcelUnits = [
  { id: "u1", title: "El add-in en el libro", lessons: [conoce, instalar, flujo] },
  { id: "u2", title: "Análisis, escenarios y QA", lessons: [mapa, formulas, escenarios, limites] },
];
