import { track } from "./kit.js";

const paleta = track({
  id: "paleta",
  title: "Una paleta, muchas piezas",
  blurb: "Congela colores y estilo. Cambia solo el objeto.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Coursiv pone Stable Diffusion en 4 h y 10 lecciones: no es “otra Midjourney”. Es una receta que se puede copiar. Si cada post es de otra marca, no hay feed. Congela paleta y estilo en un pedido base. Cambia solo el objeto.",
    "Carbón, naranja mate, ilustración plana. Escríbelo. El termo entra y sale. Si mueves paleta, lente y sujeto a la vez, no sabes qué funcionó.",
  ],
  body: {
    title: "La receta se queda",
    text: "Tres colores con nombre, un medio (foto de producto o ilustración plana), un veto de estilo ajeno (nada de cyberpunk, nada de texto). Guárdalo en notas. El siguiente SKU se monta encima. En Automatic1111, ComfyUI o Fooocus da igual: la receta vive fuera del chat.",
  },
  bullets: [
    "Paleta nombrada (carbón, naranja mate, crema)",
    "Medio fijo: foto 50 mm o ilustración plana",
    "Un veto de estilo (cyberpunk, neon, 3D clay)",
    "Cambia solo el sujeto",
  ],
  quiz: {
    question: "Para un feed coherente, ¿qué congelas?",
    options: [
      "Solo el hashtag",
      "Paleta y estilo, y cambias el objeto",
      "Un filtro distinto cada día",
      "El nombre del archivo",
    ],
    answer: 1,
    explain: "La receta se queda. El producto cambia.",
  },
  practice: {
    title: "Completa la receta",
    lead: "Una variable.",
    template: "Fija la {blank} y el {blank}. Cambia solo el {blank}.",
    answers: ["paleta", "estilo", "objeto"],
    slots: ["1", "2", "variable"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: { intro: "Mañana el vaso. La paleta carbón se queda." },
    review: {
      question: "¿Tres palancas a la vez?",
      options: ["Sí, más rápido", "No: no aprendes qué funcionó", "Da igual"],
      answer: 1,
      explain: "Una variable. Si no, es magia.",
    },
  },
  close: {
    tip: "congela paleta y estilo. Cambia solo el sujeto.",
    items: ["Receta en notas", "Una palanca", "El feed se copia"],
  },
});

const vs = track({
  id: "vs",
  title: "Stable Diffusion no es Midjourney",
  blurb: "MJ es un estudio cerrado. SD es receta, checkpoint y control.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Midjourney brilla cuando quieres una postal y te rinde el grid de 4. Stable Diffusion (A1111, ComfyUI, Civitai) brilla cuando la marca se repite: mismo checkpoint, mismo LoRA, mismo seed, img2img. Coursiv los separa: no pagas SD para “un arte más lindo”. Pagas control.",
    "Si tu oficio es una imagen suelta de campaña, MJ suele llegar antes. Si tu oficio es 40 SKUs con la misma casa, SD (o FLUX en el mismo oficio) deja la receta en disco.",
  ],
  body: {
    title: "Elige el cajón",
    text: "MJ: prompt + --ar + reroll. SD: prompt positivo, negativo, checkpoint, a veces LoRA. Más palancas. Más forma de romperlas. En esta ruta las usas de a una.",
  },
  bullets: [
    "Midjourney: velocidad y “se ve caro”",
    "SD: paleta, modelo y edición local (inpaint, img2img)",
    "Civitai: checkpoints y LoRAs; tú eliges el piso",
    "No mezcles recetas de MJ (--stylize) en A1111",
  ],
  quiz: {
    question: "¿Cuándo tiene sentido SD frente a Midjourney?",
    options: [
      "Para un moodboard de una sola postal",
      "Cuando la marca se repite: misma receta, muchos SKUs, edición local",
      "Siempre, porque es “open source y por eso mejor”",
      "Para generar un video de 4K",
    ],
    answer: 1,
    explain: "Control y serie. No una postal suelta.",
  },
  practice: {
    title: "Elige la herramienta",
    lead: "Oficio, no logo de moda.",
    template: "Si el trabajo es {blank}, uso Midjourney. Si debo {blank} en 40 SKUs, uso SD. El {blank} no se pide en ninguna de las dos.",
    answers: ["una postal de campaña", "congelar paleta y modelo", "video 4K"],
    slots: ["una toma", "serie", "otro oficio"],
    simReply: {
      intro: "Reparto listo. MJ para el key visual. SD para el catálogo. El reel, a Kling.",
    },
    review: {
      question: "¿SD reemplaza a Midjourney del todo?",
      options: ["Sí, es más “pro”", "No: MJ para la postal; SD para la receta que se copia", "Solo los fines de semana"],
      answer: 1,
      explain: "Coursiv los complementa. El cajón manda.",
    },
  },
  close: {
    tip: "SD es receta y control. Midjourney es la postal. No son el mismo oficio.",
    items: ["Serie → SD", "Postal → MJ", "Una palanca por herramienta"],
  },
});

const prompt = track({
  id: "prompt",
  title: "Positivo y negativo",
  blurb: "El sí describe la escena. El no veta el sucio. Son dos cajones.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "En SD el prompt positivo no es un poema: sujeto, medio, luz, paleta. El negativo (negative prompt) es la lista de no: text, watermark, extra fingers, blurry, deformed hands. Si lo mezclas todo en un solo renglón, el modelo no sabe qué priorizar.",
    "Coursiv enseña dos cajas. La positiva se copia entre SKUs. La negativa también: el sucio es predecible.",
  ],
  body: {
    title: "Dos listas, no un wish",
    text: "Positivo: termo mate 500 ml, foto de producto, luz de ventana, paleta carbón y naranja, fondo suave. Negativo: text, letters, watermark, extra fingers, extra limbs, lowres. No hace falta “8k ultra cinematic masterpiece”.",
  },
  bullets: [
    "Positivo: sujeto + medio + luz + paleta",
    "Negativo: texto, marcas, manos, blur",
    "La receta positiva se reusa; el negativo casi no cambia",
    "Adjetivos vacíos (epic, 8k) no sustituyen al sujeto",
  ],
  quiz: {
    question: "¿Dónde va “sin letras” en SD?",
    options: [
      "En el positivo, repetido diez veces",
      "En el negative prompt, junto a watermark y extra fingers",
      "En el nombre del archivo",
    ],
    answer: 1,
    explain: "El no tiene cajón propio. El sí describe la toma.",
  },
  practice: {
    title: "Arma los dos cajones",
    lead: "Escena / sucio.",
    template: "Positivo: {blank}, luz de ventana, paleta carbón. Negativo: {blank}, {blank}, extra fingers.",
    answers: ["termo mate 500 ml", "text", "watermark"],
    slots: ["sujeto", "veto 1", "veto 2"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: {
      intro: "Dos cajas. El 8k sobraba. El texto se fue al negativo.",
    },
    review: {
      question: "¿Reescribes todo el positivo si sale una letra?",
      options: ["Sí, de cero", "No: refuerzas el negativo y dejas la receta", "Cambias a Midjourney al instante"],
      answer: 1,
      explain: "El sucio se veta. La escena se queda.",
    },
  },
  close: {
    tip: "positivo = escena. negativo = sucio. No los mezcles en un poema.",
    items: ["Sujeto primero", "Lista de no fija", "Sin 8k"],
  },
});

const lora = track({
  id: "lora",
  title: "Checkpoint y LoRA, a vista de pájaro",
  blurb: "El checkpoint es la casa. El LoRA es un acento. No son lo mismo.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Checkpoint (SD 1.5, SDXL, Pony, FLUX.1) es el modelo base: cómo dibuja piel, producto, ilustración. LoRA es un parche chico encima: “este termo”, “este estilo plano”. Coursiv lo deja alto: no entrenas nada hoy. Eliges un piso en Civitai y no apilas cinco LoRAs “por si acaso”.",
    "Si cambias checkpoint, la paleta se va. Si apilas LoRAs de estilo + personaje + producto, el termo sale de otro planeta. Un LoRA. Peso bajo. Luego ves.",
  ],
  body: {
    title: "Una casa, un acento",
    text: "Elige un checkpoint que ya se parezca a tu medio (producto real o ilustración). Un LoRA de estilo o de producto, no los dos el primer día. Trigger word si el LoRA la pide. El resto de la receta (paleta, negativo) se queda.",
  },
  bullets: [
    "Checkpoint = el dibujante",
    "LoRA = un acento (estilo o un SKU)",
    "Uno, no cinco",
    "Si cambias de checkpoint, revalidas la paleta",
  ],
  quiz: {
    question: "¿Qué es un LoRA en esta ruta?",
    options: [
      "Un modelo nuevo que reemplaza a SDXL",
      "Un parche chico de estilo o de producto encima del checkpoint",
      "Un filtro de Instagram",
      "El negative prompt",
    ],
    answer: 1,
    explain: "Acento. La casa es el checkpoint.",
  },
  practice: {
    title: "Elige el piso",
    lead: "Casa, luego acento.",
    template: "Checkpoint: {blank}. Un LoRA de {blank}. No apilo {blank} LoRAs el primer día.",
    answers: ["SDXL de producto", "estilo plano", "cinco"],
    slots: ["casa", "acento", "cuántos"],
    simReply: {
      intro: "SDXL + un LoRA de ilustración plana. El de “cinematic portrait” se quedó en Civitai.",
    },
    review: {
      question: "Cambiaste de checkpoint y el naranja se fue. ¿Qué haces?",
      options: ["Apilas tres LoRAs más", "Revalidas paleta y negativo en el piso nuevo", "Subes el CFG a 30"],
      answer: 1,
      explain: "Casa nueva, receta se prueba otra vez.",
    },
  },
  close: {
    tip: "el checkpoint es la casa. El LoRA es un acento. Uno basta.",
    items: ["Un piso", "Un LoRA", "La paleta se revalida si cambias de casa"],
  },
});

const consistencia = track({
  id: "consistencia",
  title: "Consistencia: seed y receta",
  blurb: "Misma receta, mismo seed si quieres al gemelo. Si no, solo cambia el sujeto.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "El feed se siente de una casa cuando no improvisas el prompt cada lunes. Coursiv: pedido base en un block de notas. Seed fijo si buscas casi el mismo encuadre. Seed nuevo si quieres otra pose con la misma paleta.",
    "Si cada generación reescribe luz, lente y estilo, no hay serie: hay coincidencias.",
  ],
  body: {
    title: "Qué se congela de verdad",
    text: "Congela: checkpoint, LoRA, paleta, negativo, tamaño (1:1, 4:5). Variable: el sujeto o, si el sujeto se queda, el seed. Anota el seed que sí sirvió. A1111 y ComfyUI lo muestran. Sin nota, no hay gemelo mañana.",
  },
  bullets: [
    "Pedido base copiado, no reescrito de memoria",
    "Seed anotado cuando la toma sirve",
    "Mismo tamaño de canvas entre SKUs",
    "Una variable: sujeto o seed, no las dos con el estilo",
  ],
  quiz: {
    question: "¿Qué anotas cuando una toma sí es de la marca?",
    options: ["El hashtag", "Prompt, checkpoint, LoRA, seed y tamaño", "Solo el JPG"],
    answer: 1,
    explain: "Sin receta, no hay gemelo.",
  },
  practice: {
    title: "Guarda el gemelo",
    lead: "Para el vaso de mañana.",
    template: "Misma {blank}, mismo {blank}. Cambia solo el {blank}. Seed anotado.",
    answers: ["paleta", "checkpoint", "sujeto"],
    slots: ["color", "casa", "variable"],
    simReply: {
      intro: "Seed 42891. Mañana el vaso. El termo no se reescribe.",
    },
    review: {
      question: "¿El seed se deja en random siempre?",
      options: ["Sí, para “creatividad”", "No: random para explorar; fijo cuando ya hay gemelo", "Da igual"],
      answer: 1,
      explain: "Explorar y repetir son dos modos. Elige.",
    },
  },
  close: {
    tip: "la receta se copia. El seed se anota. El feed no se memoriza.",
    items: ["Notas", "Una variable", "Mismo canvas"],
  },
});

const img2img = track({
  id: "img2img",
  title: "img2img: parte de una foto, no de un wish",
  blurb: "Una toma tuya. Denoise bajo. La paleta se queda.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "img2img no es “hazme esta foto pero wow”. Es: parte de un JPG que ya encuadra el termo. Denoising strength bajo (0.25–0.45) si quieres que se reconozca. Alto, y SD inventa otro producto.",
    "Coursiv lo usa para pasar un celular-foto a la receta de marca: misma paleta, mismo medio, el SKU no muta. Si no tienes foto, vuelve a txt2img.",
  ],
  body: {
    title: "La foto manda el encuadre",
    text: "Sube la toma. Prompt = receta de paleta + “keep the same product”. Negativo igual. Denoise chico. Un intento. Si el termo se deforma, baja el denoise, no subas el CFG a lo loco.",
  },
  bullets: [
    "JPG de partida (encuadre ya útil)",
    "Denoise bajo para reconocer el SKU",
    "Misma paleta y negativo que el resto del feed",
    "Si no hay foto, no es img2img",
  ],
  quiz: {
    question: "El termo se deformó en img2img. ¿Qué mueves primero?",
    options: [
      "Subes el denoise a 0.9",
      "Bajas el denoise y dejas la receta",
      "Cambias de checkpoint y de LoRA a la vez",
    ],
    answer: 1,
    explain: "Denoise alto = otro producto. La foto quería quedarse.",
  },
  practice: {
    title: "Arma el img2img",
    lead: "Foto tuya. Receta de marca.",
    template: "Parto de {blank}, denoise {blank}, paleta {blank}. El SKU no muta.",
    answers: ["la foto del termo", "bajo", "carbón y naranja"],
    slots: ["origen", "fuerza", "casa"],
    resultImage: "/lessons/results/oficina.png",
    simReply: {
      intro: "Encuadre igual. El naranja se quedó. Denoise 0.35, no 0.8.",
    },
    review: {
      question: "¿img2img sustituye a sacar la foto?",
      options: ["Sí, por eso es IA", "No: parte de un encuadre que ya sirve; no inventa el producto", "Solo en ComfyUI"],
      answer: 1,
      explain: "La foto es el plano. SD pinta encima.",
    },
  },
  close: {
    tip: "img2img pinta encima de un encuadre que ya sirve. Denoise bajo.",
    items: ["Foto primero", "Denoise chico", "La paleta no se negocia"],
  },
});

const inpaint = track({
  id: "inpaint",
  title: "Inpaint: un parche, no un rewrite",
  blurb: "Tapa lo que estorba. El resto de la toma se queda.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Inpaint es el editor: un logo fantasma, un dedo de más, un cable. Enmascaras esa zona y regeneras solo ahí. Si inpainteas media foto, es txt2img disfrazado y pierdes el gemelo.",
    "Coursiv: rescata. No rediseñes la campaña en el pincel. Máscara chica. Prompt de lo que va en el hueco (“fondo suave, sin logo”), no un ensayo nuevo.",
  ],
  body: {
    title: "El resto ya servía",
    text: "Igual que el Editor de Midjourney: un camión, no el corredor. Mask blur suave para que no se vea el recorte. Si el parche se nota, achica la máscara o baja el denoise. No cambies paleta “aprovechando”.",
  },
  bullets: [
    "Máscara del sucio, no del sujeto bueno",
    "Prompt del hueco, corto",
    "Misma paleta y checkpoint",
    "Si el parche es la mitad del frame, vuelve a generar",
  ],
  quiz: {
    question: "¿Cuándo usas inpaint?",
    options: [
      "Para inventar el brief",
      "Para quitar o reemplazar un detalle de una toma que ya sirve",
      "Siempre, en vez de txt2img",
    ],
    answer: 1,
    explain: "Rescata. No esconde un prompt flojo.",
  },
  practice: {
    title: "Un sucio, un parche",
    lead: "El logo fantasma. El termo ya está bien.",
    template: "Mantén {blank}. Enmascara {blank}. No cambies {blank}.",
    answers: ["el termo y la luz", "el logo del fondo", "la paleta ni el encuadre"],
    slots: ["qué se queda", "qué se va", "qué no tocas"],
    resultImage: "/lessons/results/calle.png",
    simReply: {
      intro: "Fondo limpio. El termo no se regeneró entero: ganaste.",
    },
    review: {
      question: "¿Por qué no inpaint de toda la foto?",
      options: ["Por pereza", "Porque el resto ya servía y perderías el gemelo", "Por el VRAM"],
      answer: 1,
      explain: "El pincel es un parche. El prompt es la escena.",
    },
  },
  close: {
    tip: "inpaint rescata un detalle. No rediseña la campaña.",
    items: ["Máscara chica", "Prompt del hueco", "Paleta intacta"],
  },
});

const pose = track({
  id: "pose",
  title: "Pose con control, sin magia",
  blurb: "Un mapa de pose (ControlNet / similar). El cuerpo no se improvisa.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Coursiv lo deja en “control-ish”: OpenPose, Canny o un doodle de palitos. No es un curso de nodos de ComfyUI. Es: si el termo debe verse a la misma altura de mesa en 8 posts, no le ruegues al prompt “misma pose porfa”. Le das un mapa.",
    "Una guía. Un peso moderado. Si el ControlNet manda demasiado, el producto se pone rígido o se deforma. Si no manda, vuelves al azar de siempre.",
  ],
  body: {
    title: "La pose se referencia, no se desea",
    text: "Foto o palitos → preprocessor (OpenPose para cuerpo, Canny para bordes del producto). Receta de paleta igual. La guía fija encuadre. El prompt sigue diciendo el SKU. No apiles Depth + Pose + Color a la vez el primer día.",
  },
  bullets: [
    "Una guía: pose o bordes, no cinco",
    "Peso medio; si deforma, baja",
    "Paleta y negativo se quedan",
    "Producto a la misma altura entre posts",
  ],
  quiz: {
    question: "¿Para qué sirve un ControlNet de pose aquí?",
    options: [
      "Para que “se vea más IA”",
      "Para repetir encuadre y cuerpo sin rezar “igualito”",
      "Para reemplazar al checkpoint",
    ],
    answer: 1,
    explain: "Referencia. “Igualito” no se dibuja.",
  },
  practice: {
    title: "Fija la pose",
    lead: "Una guía. El termo se queda.",
    template: "Guía {blank} a altura de mesa. Receta {blank}. Un solo ControlNet, no {blank}.",
    answers: ["OpenPose", "carbón y naranja", "tres a la vez"],
    slots: ["mapa", "paleta", "veto"],
    simReply: {
      intro: "Misma altura. El termo no bailó. Depth se quedó apagado.",
    },
    review: {
      question: "¿Apilas Pose + Canny + Depth el día 1?",
      options: ["Sí, más control es mejor", "No: una guía; si no, no sabes cuál rompió el SKU", "Solo en FLUX"],
      answer: 1,
      explain: "Una referencia. El stack se aprende después.",
    },
  },
  close: {
    tip: "la pose se referencia. “Igualito” no es un preprocessor.",
    items: ["Un mapa", "Peso medio", "La paleta no se toca"],
  },
});

const lote = track({
  id: "lote",
  title: "Batch: el catálogo, no la lotería",
  blurb: "Una receta. Varios sujetos. Revisión por muestreo.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Batch / X/Y plot sirve cuando ya tienes la receta: 8 SKUs, mismo checkpoint, mismo negativo, cambia la línea del sujeto. No sirve para “ver qué sale” con 40 prompts distintos. Eso es ruido con factura de GPU.",
    "Coursiv: prueba 4. Si la paleta se aguanta, recién las 40. Cada fila se mira. El volume sin editor es un accidente de marca — igual que el Grid de Jasper.",
  ],
  body: {
    title: "Molde, luego el volumen",
    text: "Lista de sujetos (termo, vaso, tapa). Prompt base idéntico. Batch size chico. Seed distinto por fila si quieres variación de pose, o el mismo si quieres gemelos. Muestreo de 3 antes de exportar el zip al feed.",
  },
  bullets: [
    "Receta ya validada en una toma",
    "Lista de sujetos, no 40 estilos",
    "Batch chico de prueba",
    "Muestreo: manos, texto, paleta",
  ],
  quiz: {
    question: "¿Batch para qué?",
    options: [
      "Un poema visual distinto cada fila",
      "Docenas de SKUs con la misma receta",
      "Sustituir la revisión humana",
    ],
    answer: 1,
    explain: "Volumen con molde. No una lotería.",
  },
  practice: {
    title: "Define el lote",
    lead: "Molde, luego las 8.",
    template: "Misma receta. Filas: {blank}, {blank}, tapa. Pruebo {blank} antes de las 40.",
    answers: ["termo 500 ml", "vaso 350 ml", "4"],
    slots: ["SKU 1", "SKU 2", "prueba"],
    simReply: {
      intro: "4 filas. El naranja se aguanta. Recién el zip grande.",
    },
    review: {
      question: "¿Exportas las 40 sin mirar?",
      options: ["Sí, para eso es batch", "No: muestreo de 3, manos y texto", "Solo si el CFG está en 7"],
      answer: 1,
      explain: "El lote acelera el borrador. No la firma.",
    },
  },
  close: {
    tip: "el molde se audita. Luego el volumen.",
    items: ["Receta fija", "Prueba chica", "Tú eliges las que salen al feed"],
  },
});

const revision = track({
  id: "revision",
  title: "Revisa manos y texto antes del feed",
  blurb: "SD sigue inventando dedos y letras. Tú no publicas el accidente.",
  scene: "camera",
  brand: "Stable Diffusion",
  hook: [
    "Coursiv cierra la ruta de imagen con una revisión tonta y efectiva: manos, letras, logo fantasma, SKU reconocible. El negative prompt ayuda. No basta. Zoom al 100 %. Si hay un sexto dedo, inpaint o tiras esa toma.",
    "El slogan se escribe en Canva o en el ad, no dentro del PNG. Si SD “escribió” el 349 MXN, está mal escrito. Lo tapas.",
  ],
  body: {
    title: "Checklist de salida",
    text: "Si no pasa las cuatro, no va al feed. Da igual que la paleta esté perfecta.",
  },
  bullets: [
    "Manos y anatomía: cuenta los dedos",
    "Cero letras (o las pintaste tú después, en Canva)",
    "El SKU se reconoce, no un termo primo",
    "Paleta = la receta, no un magenta nuevo",
  ],
  quiz: {
    question: "La toma está linda y hay un letrero inventado. ¿Se publica?",
    options: ["Sí, convierte", "No: inpaint o se tira; el copy va en Canva", "Sí, si el seed es lindo"],
    answer: 1,
    explain: "La paleta no perdona un texto fantasma.",
  },
  practice: {
    title: "Checklist antes de exportar",
    lead: "Cuatro casillas.",
    template: "Revisé {blank}, {blank} y que el {blank} se reconozca. Si una falla, no sale al feed.",
    answers: ["las manos", "que no hay letras", "termo"],
    slots: ["anatomía", "texto", "SKU"],
    resultImage: "/lessons/results/audifonos.png",
    simReply: {
      intro: "Dedos en cinco. El “SALE” se inpaintó. Listo para Canva, no para el feed crudo.",
    },
    review: {
      question: "¿El negative prompt sustituye la revisión?",
      options: ["Sí, por eso existe", "No: veta en el cajón y tú haces zoom igual", "Solo en SDXL"],
      answer: 1,
      explain: "El cajón reduce. El ojo firma.",
    },
  },
  close: {
    tip: "manos y letras se cazan al 100 %. SD no publica. Tú sí.",
    items: ["Zoom", "Inpaint del sucio", "Copy en Canva, no en el PNG"],
  },
});

export const sdUnits = [
  {
    id: "u1",
    title: "La receta",
    lessons: [paleta, vs, prompt, lora, consistencia],
  },
  {
    id: "u2",
    title: "Consistencia y edición",
    lessons: [img2img, inpaint, pose, lote, revision],
  },
];
