import { track } from "./kit.js";

const navegar = track({
  id: "navegar",
  title: "Moverte en Midjourney",
  blurb: "Describe sujeto, estilo y luz. Adiós al “ultra 8k”.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Midjourney no adivina tu marca. Nombra qué hay en cuadro, si es foto o ilustración, de dónde viene la luz y qué no quieres (texto borroso, manos de más).",
    "El prompt es una receta de cámara, no un wish de Pinterest.",
  ],
  body: {
    title: "La barra y los parámetros",
    text: "El texto va primero. Después --ar, --stylize, --no. Si no sabes qué hace un parámetro, no lo copies de un hilo de 2023.",
  },
  bullets: ["Prompt: sujeto + medio + luz", "--ar para el ratio", "--no para vetos", "Un cambio por reroll"],
  quiz: {
    question: "¿Qué suele mejorar más una imagen generada?",
    options: [
      "Repetir “8k ultra” diez veces",
      "Detallar sujeto, luz y encuadre",
      "Poner solo el nombre de la marca",
      "Una sola palabra suelta",
    ],
    answer: 1,
    explain: "Luz, lente y composición ganan a los adjetivos vacíos.",
  },
  practice: {
    title: "Arma el prompt visual",
    lead: "Una escena que se puede imaginar.",
    template: "Foto de un {blank} sobre mesa de pino, luz de {blank}, fondo {blank}, sin letras.",
    answers: ["termo", "ventana", "suave"],
    slots: ["sujeto", "luz", "fondo"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Cuatro tomas. Elige la de luz de ventana. Veta el texto otra vez si aparece." },
    review: {
      question: "¿Qué vetas siempre?",
      options: ["El sujeto", "Letras y manos de más", "La luz"],
      answer: 1,
      explain: "Si no lo vetas, suele aparecer.",
    },
  },
  close: {
    tip: "sujeto + estilo + luz. Lo que no pongas, lo inventa.",
    items: ["Una palanca por reroll", "--no para sucio", "El 8k no aporta"],
  },
});

const primera = track({
  id: "primera",
  title: "Tu primera pieza",
  blurb: "Un sujeto. Una luz. Un ratio. Luego eliges entre cuatro.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "La primera tanda son cuatro variaciones. No son “el arte final”. Son candidatos. Eliges una y recién ahí afinas.",
    "Si te enamoras de las cuatro, no elegiste. Elige.",
  ],
  body: {
    title: "Del grid al recorte",
    text: "U para upscale, V para variar. No pidas treinta estilos del mismo termo.",
  },
  bullets: ["Grid de 4", "Elige 1", "Varía luz o encuadre", "Upscale al final"],
  quiz: {
    question: "¿Qué haces con el grid?",
    options: ["Las publicas las 4", "Eliges una y varías una palanca", "Pides 40 más"],
    answer: 1,
    explain: "Candidatos. Una se produce.",
  },
  practice: {
    title: "Elige y varía",
    lead: "Misma receta, otra luz.",
    template: "Misma escena, cambia solo la {blank}. Mantén {blank} y {blank}.",
    answers: ["luz", "sujeto", "fondo suave"],
    slots: ["palanca", "qué se queda", "qué se queda"],
    resultImage: "/lessons/results/oficina.png",
    simReply: { intro: "Variación B: luz más suave. El termo no se movió." },
    review: {
      question: "¿Por qué una palanca?",
      options: ["Por ahorrar GPU", "Para saber qué funcionó", "Por moda"],
      answer: 1,
      explain: "Si mueves tres, no aprendes.",
    },
  },
  close: {
    tip: "cuatro candidatos, una pieza.",
    items: ["Elige", "Varía una cosa", "Upscale al final"],
  },
});

const luz = track({
  id: "luz",
  title: "Habla como fotógrafo",
  blurb: "50 mm, ventana, contraluz. Gana a “ultra realista”.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "La luz cuenta la hora y el ánimo. “Bonito” no es una hora. Ventana a la izquierda, hora dorada, contraluz: eso se puede construir.",
    "Si el feed debe verse de una casa, congela la receta de luz.",
  ],
  body: {
    title: "Palabras que sí iluminan",
    text: "Dirección, dureza, color de la luz. El resto es adorno.",
  },
  bullets: ["De dónde viene", "Dura o suave", "Hora (dorado, nublado, neon)", "Qué no: flash de celular sucio"],
  quiz: {
    question: "¿Qué describe mejor la luz?",
    options: ["Ultra realista", "Ventana a la izquierda, suave, hora dorada", "8k cinematic"],
    answer: 1,
    explain: "Se puede encender. El 8k no.",
  },
  practice: {
    title: "Completa la toma",
    lead: "Lente, luz, fondo.",
    template: "Lente {blank}, luz de {blank}, fondo {blank}.",
    answers: ["50mm", "ventana", "suave"],
    slots: ["lente", "luz", "fondo"],
    resultImage: "/lessons/results/cielo.png",
    simReply: { intro: "La ventana ganó. El “cinematic” sobraba." },
    review: {
      question: "¿Qué congelas en una serie?",
      options: ["El hashtag", "Paleta y luz, y cambias el sujeto", "Un filtro distinto cada día"],
      answer: 1,
      explain: "La receta se queda. El producto cambia.",
    },
  },
  close: {
    tip: "50 mm gana a “ultra realista”.",
    items: ["Dirección de luz", "Misma receta en el feed", "Una palanca si falla"],
  },
});

const tamano = track({
  id: "tamano",
  title: "El tamaño es el canal",
  blurb: "Stories no es feed. Di el ratio antes de generar.",
  scene: "phone",
  brand: "Midjourney",
  hook: [
    "Si no pides --ar, Midjourney improvisa un recuadro. Luego recortas a ciegas y le cortas la cabeza al termo.",
    "1:1 feed, 4:5 retrato, 9:16 stories, 16:9 portada. Elige antes.",
  ],
  body: {
    title: "Ratio primero",
    text: "El sujeto se encuadra distinto en 9:16 que en 1:1. No es el mismo prompt con un sticker de tamaño.",
  },
  bullets: ["--ar 1:1", "--ar 4:5", "--ar 9:16", "Revisa el recorte real"],
  quiz: {
    question: "¿Cuándo pides el ratio?",
    options: ["Después de enamorar te de la toma", "Antes de generar", "Nunca"],
    answer: 1,
    explain: "Si no, recortas a ciegas.",
  },
  practice: {
    title: "Elige el canal",
    lead: "Un ratio, un recorte.",
    template: "Misma escena en {blank} para {blank}. Sujeto {blank} para que no se corte.",
    answers: ["9:16", "stories", "más arriba en el cuadro"],
    slots: ["ratio", "canal", "encuadre"],
    simReply: { intro: "9:16. El termo subió. En 1:1 se veía corto de piernas… no tenía." },
    review: {
      question: "¿Por qué no reusar 1:1 en stories?",
      options: ["Por snob", "Porque el recorte se come el sujeto", "Por el color"],
      answer: 1,
      explain: "El canal recorta. Tú anticipas.",
    },
  },
  close: {
    tip: "di 9:16 o 1:1 antes de generar.",
    items: ["Canal = ratio", "Sujeto a salvo del recorte", "No un único archivo para todo"],
  },
});

const punto = track({
  id: "punto",
  title: "Punto de vista",
  blurb: "Ojo de hormiga, 50 mm, cenital. El encuadre es una opinión.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "“Foto de producto” no dice si miras desde arriba o a la altura de la mesa. El punto de vista cambia el oficio: catálogo, revista, ticket de receta.",
    "Elige uno. No pidas “todos los ángulos” en un solo prompt.",
  ],
  body: {
    title: "Un ojo por tanda",
    text: "Cenital para mesa servida. 50 mm a la altura del termo para hero. Contrapicada si quieres drama barato: úsala a propósito.",
  },
  bullets: ["Altura de cámara", "Lente", "Qué se ve detrás", "Qué se recorta"],
  quiz: {
    question: "¿Cuántos puntos de vista por prompt?",
    options: ["Todos", "Uno", "Los que quepan"],
    answer: 1,
    explain: "Uno. Luego varías.",
  },
  practice: {
    title: "Fija el ojo",
    lead: "Una altura.",
    template: "Cámara a {blank}, lente {blank}, se ve {blank} atrás.",
    answers: ["altura de mesa", "50mm", "pared de ladrillo suave"],
    slots: ["altura", "lente", "fondo"],
    resultImage: "/lessons/results/oficina.png",
    simReply: { intro: "Hero a altura de mesa. El cenital lo dejas para la receta." },
    review: {
      question: "¿Qué pasa si pides cenital y hero juntos?",
      options: ["Salen las dos perfectas", "El modelo promedia y no queda ninguna", "Se ve pro"],
      answer: 1,
      explain: "Un ojo. El promedio es un error.",
    },
  },
  close: {
    tip: "un punto de vista por tanda.",
    items: ["Altura", "Lente", "Luego varías"],
  },
});

const direccion = track({
  id: "direccion",
  title: "Una dirección visual",
  blurb: "Paleta, estilo y un no. Así el feed se siente de la misma casa.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Si cada post es otra película, no hay marca. Congela paleta y estilo. Cambia solo el sujeto.",
    "Escribe la receta en un block de notas. El feed se copia, no se memoriza.",
  ],
  body: {
    title: "La receta base",
    text: "Tres adjetivos de estilo, tres de paleta, un veto. El producto entra y sale.",
  },
  bullets: ["Paleta", "Medio (foto / ilustración)", "Textura", "Veto de estilo ajeno"],
  quiz: {
    question: "Para un feed coherente, ¿qué congelas?",
    options: ["Solo el hashtag", "Paleta y estilo, y cambias el objeto", "Un filtro distinto cada día"],
    answer: 1,
    explain: "La receta se queda. El producto cambia.",
  },
  practice: {
    title: "Guarda la receta",
    lead: "Misma casa, otro objeto.",
    template: "Estilo {blank}, paleta {blank}, cambia solo el {blank}.",
    answers: ["foto de revista 50mm", "carbón y naranja mate", "producto"],
    slots: ["estilo", "paleta", "variable"],
    simReply: { intro: "Receta guardada. Mañana el vaso, no el termo. La casa se reconoce." },
    review: {
      question: "¿Qué no cambias cada día?",
      options: ["El sujeto", "La paleta y el medio", "Nada, cambias todo"],
      answer: 1,
      explain: "Si cambias la casa, no hay serie.",
    },
  },
  close: {
    tip: "congela paleta y estilo. Cambia solo el sujeto.",
    items: ["Receta en notas", "Un veto de estilo", "El producto entra y sale"],
  },
});

const afinar = track({
  id: "afinar",
  title: "Afinar y vetar",
  blurb: "Lista de no. Siempre. Texto, marcas de agua, manos extra.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Si no lo vetas, suele aparecer. --no text, watermark, extra fingers. Y si aún sale, varía con el mismo veto, no reescribas todo el prompt.",
    "Fine-tune es una palanca, no un exorcismo.",
  ],
  body: {
    title: "Veta lo que ensucia",
    text: "El sucio es predecible: letras, logos fantasma, anatomía rara. Lista corta. Siempre.",
  },
  bullets: ["--no text", "--no watermark", "--no extra hands", "Una palanca extra (luz o crop)"],
  quiz: {
    question: "¿Qué suele arruinar más una toma generada?",
    options: ["Nombrar el sujeto", "Dejar que aparezcan letras y manos de más", "Decir de dónde viene la luz"],
    answer: 1,
    explain: "Si no lo vetas, el modelo lo improvisa.",
  },
  practice: {
    title: "La lista de no",
    lead: "Corta y repetible.",
    template: "--no {blank}, {blank}, {blank}.",
    answers: ["text", "watermark", "extra fingers"],
    slots: ["veto 1", "veto 2", "veto 3"],
    simReply: { intro: "El texto se fue. Si vuelve, no tires la receta: refuerza el --no." },
    review: {
      question: "¿Reescribes todo el prompt si sale una letra?",
      options: ["Sí, de cero", "No: refuerzas el veto y varías una palanca", "Cambias de marca de IA"],
      answer: 1,
      explain: "El sucio se veta. La receta se queda.",
    },
  },
  close: {
    tip: "lista de no. Siempre.",
    items: ["Texto", "Marcas", "Manos", "Luego una palanca"],
  },
});

const modos = track({
  id: "modos",
  title: "Combinar modos con cabeza",
  blurb: "Un modo extra no es más arte. Es otra receta. No las apiles todas.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Referencias de estilo, omni, editor, vary region: cada una hace un trabajo. Si las prendes todas, no sabes qué salvó la toma.",
    "Primero el prompt limpio. Después un modo. Como el Editor: borrar un camión, no rehacer la campaña.",
  ],
  body: {
    title: "Una herramienta, un problema",
    text: "Editor para un objeto que estorba. Vary region para un cielo plano. Prompt para la escena. No al revés.",
  },
  bullets: ["Prompt = escena", "Editor = sucio local", "Vary = una zona", "No tres modos a la vez"],
  quiz: {
    question: "¿Cuándo usas el Editor?",
    options: ["Para inventar el brief", "Para quitar o reemplazar un detalle de una toma que ya sirve", "Siempre"],
    answer: 1,
    explain: "Rescata. No esconde un prompt flojo.",
  },
  practice: {
    title: "Un modo, un sucio",
    lead: "El camión estorba. El corredor ya está bien.",
    template: "Mantén {blank}. Quita {blank} con el editor. No cambies {blank}.",
    answers: ["el corredor", "el camión del fondo", "la luz ni el encuadre"],
    slots: ["qué se queda", "qué se va", "qué no tocas"],
    resultImage: "/lessons/results/calle.png",
    simReply: { intro: "Fondo limpio. El corredor no se regeneró entero: ganaste." },
    review: {
      question: "¿Por qué no regenerar toda la foto?",
      options: ["Por pereza", "Porque el resto ya servía", "Por el precio"],
      answer: 1,
      explain: "El editor es un parche. El prompt es la escena.",
    },
  },
  close: {
    tip: "cambia una palanca por vez: fondo, cielo o sujeto.",
    items: ["Prompt limpio primero", "Un modo extra", "El editor rescata, no diseña"],
  },
});

const estilo = track({
  id: "estilo",
  title: "--stylize y el look de la casa",
  blurb: "Un número de estilo. No diez adjetivos de Pinterest.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Coursiv enseña --stylize como palanca: bajo, la foto obedece el prompt; alto, Midjourney “embellece” y se va del brief.",
    "Para marca, empieza bajo. Cuando el termo se reconoce, sube un poco. “Cinematic ultra” no es un valor.",
  ],
  body: {
    title: "Una palanca, no un moodboard",
    text: "Prueba 50, 100, 250 en el mismo prompt. Elige el que todavía parece tu producto. El resto es arte de otro.",
  },
  bullets: ["Mismo prompt, tres stylize", "Marca: más bajo", "Arte libre: más alto", "Un cambio por tira"],
  quiz: {
    question: "¿Qué hace un --stylize alto?",
    options: ["Obedece cada palabra", "Embellece y puede ignorar el brief", "Quita las manos de más"],
    answer: 1,
    explain: "Bonito ≠ fiel. La marca pide fiel.",
  },
  practice: {
    title: "Tres valores",
    lead: "Misma escena.",
    template: "Mismo prompt del termo. Prueba stylize {blank}, {blank} y {blank}. Quédate con el que se reconoce.",
    answers: ["50", "100", "250"],
    slots: ["bajo", "medio", "alto"],
    simReply: { intro: "El 50 se parece al producto. El 250 parece anuncio de perfume. Gana el 50." },
    review: {
      question: "¿Mezclas stylize con diez --no a la vez?",
      options: ["Sí, para “control total”", "No: una palanca por tira", "Solo el viernes"],
      answer: 1,
      explain: "Si cambias todo, no sabes qué funcionó.",
    },
  },
  close: {
    tip: "stylize bajo para marca. Alto para jugar.",
    items: ["Tres valores", "Elige el fiel", "Una palanca"],
  },
});

const personaje = track({
  id: "personaje",
  title: "El mismo sujeto otra vez",
  blurb: "Anclas: cara, ropa, objeto. No “el mismo wey”.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Coursiv insiste en consistencia: si el personaje cambia de cara cada post, el feed no es una marca.",
    "Nombra 3 anclas (camisa naranja, pelo corto, termo en la mano) y reusa omref o la misma receta. “Igualito” no se dibuja.",
  ],
  body: {
    title: "Receta de personaje",
    text: "Guarda el prompt que ya sirvió. Cambia el fondo, no las anclas. Si cambias las tres, es otra persona.",
  },
  bullets: ["Tres anclas fijas", "Un cambio de escena", "Misma luz si es serie", "No pidas “el mismo actor famoso”"],
  quiz: {
    question: "¿Qué mantiene al personaje?",
    options: ["La palabra “consistente”", "Tres anclas que no tocas", "Un filtro de Instagram"],
    answer: 1,
    explain: "Anclas. El adjetivo no.",
  },
  practice: {
    title: "Ancla al personaje",
    lead: "Tres cosas que no cambian.",
    template: "Sujeto: {blank}, {blank}, {blank}. Cambia solo la calle de fondo.",
    answers: ["camisa naranja", "pelo corto negro", "termo mate en la mano"],
    slots: ["ancla 1", "ancla 2", "ancla 3"],
    simReply: { intro: "Misma persona, otra calle. La gorra extra no estaba: fuera." },
    review: {
      question: "¿Cambias cara y ropa a la vez?",
      options: ["Sí, para variar", "No: una palanca; las anclas se quedan", "Da igual"],
      answer: 1,
      explain: "Serie. No un casting nuevo cada post.",
    },
  },
  close: {
    tip: "tres anclas. El fondo puede viajar.",
    items: ["Receta guardada", "Un cambio", "Se reconoce en el feed"],
  },
});

const refs = track({
  id: "refs",
  title: "Referencias, no un collage",
  blurb: "Una foto de estilo o de producto. No diez moodboards.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Coursiv enseña image prompt / style ref: una imagen que ya te gusta, más un texto corto. Diez refs pelean.",
    "Si la ref es de otra marca, copiarás esa marca. Elige una que sí puedas publicar.",
  ],
  body: {
    title: "Una ref, un trabajo",
    text: "Style ref para paleta y grano. Image prompt para pose o producto. No las dos a máximo a la vez si no sabes cuál mandó.",
  },
  bullets: ["Una ref de estilo o de pose", "Texto que nombra el sujeto", "Peso bajo al inicio", "Derechos: tu foto o stock que sí puedes usar"],
  quiz: {
    question: "¿Cuántas referencias al primer intento?",
    options: ["Doce, para “riqueza”", "Una, y un texto claro", "Cero siempre"],
    answer: 1,
    explain: "Una palanca. Luego mezclas.",
  },
  practice: {
    title: "Elige la ref",
    lead: "Un trabajo.",
    template: "Uso una ref de {blank}. El texto dice {blank}. No subo {blank}.",
    answers: ["paleta de la marca", "el termo en mesa", "un collage de 10 fotos ajenas"],
    slots: ["para qué", "sujeto", "veto"],
    simReply: { intro: "Una ref de paleta. El termo se nombra en el texto. El collage se quedó fuera." },
    review: {
      question: "¿Por qué no un screenshot de un anuncio famoso?",
      options: ["Se ve pro", "Puedes copiar una marca que no es tuya", "Midjourney lo pide"],
      answer: 1,
      explain: "Oficio y derechos. Tu producto, tu foto.",
    },
  },
  close: {
    tip: "una referencia, un trabajo. El collage pelea.",
    items: ["Tu foto o stock limpio", "Texto corto", "Peso bajo"],
  },
});

const upscale = track({
  id: "upscale",
  title: "Upscale y recorte",
  blurb: "Elige la toma. Luego el tamaño. No upscaleas las cuatro.",
  scene: "camera",
  brand: "Midjourney",
  hook: [
    "Coursiv: primero eliges (U1–U4). Después agrandas. Upscalear las cuatro gasta y no decide.",
    "El recorte al ratio del canal (1:1, 4:5, 9:16) se piensa antes. Un upscale de un 16:9 no salva un feed 4:5.",
  ],
  body: {
    title: "Una ganadora",
    text: "Mira las cuatro. Quédate con luz y pose. Upscale esa. Si el encuadre falla, reroll con --ar, no estires en Canva hasta romper.",
  },
  bullets: ["Elige una", "Upscale después", "--ar del canal", "No estires un 16:9 a stories"],
  quiz: {
    question: "¿Cuándo upscaleas?",
    options: ["Las cuatro, por si acaso", "Cuando ya elegiste la toma", "Antes del prompt"],
    answer: 1,
    explain: "Decides. Luego agrandas.",
  },
  practice: {
    title: "Elige y agranda",
    lead: "Una toma.",
    template: "Me quedo con la de {blank}. Upscale. Ratio {blank} para {blank}.",
    answers: ["luz de ventana", "4:5", "el feed"],
    slots: ["cuál", "ar", "canal"],
    simReply: { intro: "U2 agrandada. 4:5. Stories se genera aparte, no se recorta a tijera." },
    review: {
      question: "¿Un 16:9 se convierte en stories con un crop agresivo?",
      options: ["Sí, siempre", "No: pides 9:16. El crop mata el sujeto", "Solo si hay 8k"],
      answer: 1,
      explain: "El cajón se pide. No se improvisa al final.",
    },
  },
  close: {
    tip: "elige, agranda, respeta el cajón del canal.",
    items: ["Una ganadora", "Upscale", "--ar antes"],
  },
});

const publicar = track({
  id: "publicar",
  title: "Del PNG al canal",
  blurb: "Copy en Canva. Marca de agua tuya. Midjourney no publica.",
  scene: "phone",
  brand: "Midjourney",
  hook: [
    "Coursiv cierra la ruta visual: la imagen es insumo. El slogan, el CTA y el recorte viven en Canva o en el anuncio.",
    "Si dejas el texto que Midjourney inventó, vas a retocar. Si publicas sin mirar manos y letras, el feed se ve de feria.",
  ],
  body: {
    title: "Checklist de salida",
    text: "Sujeto se reconoce. Sin letras fantasma. Ratio del canal. Copy aparte. Tú das publicar.",
  },
  bullets: ["Manos y texto", "Ratio", "Slogan fuera del PNG", "Una pieza, un canal"],
  quiz: {
    question: "¿Dónde va el slogan?",
    options: ["Pintado por Midjourney", "En Canva o en el ad, sobre una toma limpia", "En un watermark ajeno"],
    answer: 1,
    explain: "La toma ilustra. El copy lo escribes tú.",
  },
  practice: {
    title: "Antes de subir",
    lead: "Tres casillas.",
    template: "Revisé {blank}, recorte {blank} y el slogan va en {blank}.",
    answers: ["manos y letras", "4:5", "Canva"],
    slots: ["sucio", "ratio", "copy"],
    simReply: { intro: "PNG limpio. 4:5. El “envío 48 h” se escribe en Canva. Listo para el feed." },
    review: {
      question: "¿Midjourney programa el post?",
      options: ["Sí", "No: tú recortas, escribes y publicas", "Solo con Discord Nitro"],
      answer: 1,
      explain: "Insumo. El canal es otro oficio.",
    },
  },
  close: {
    tip: "la toma se elige. El copy se escribe. Tú publicas.",
    items: ["Checklist de sucios", "Cajón del canal", "Canva para el texto"],
  },
});

export const midjourneyUnits = [
  {
    id: "u1",
    title: "AI Art con Midjourney",
    lessons: [navegar, primera, luz, tamano],
  },
  {
    id: "u2",
    title: "Dirección y acabado",
    lessons: [punto, direccion, afinar, modos],
  },
  {
    id: "u3",
    title: "Serie y publicación",
    lessons: [estilo, personaje, refs, upscale, publicar],
  },
];
