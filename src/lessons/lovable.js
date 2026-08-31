import { track } from "./kit.js";

const pantallas = track({
  id: "pantallas",
  title: "De la idea a las pantallas",
  blurb: "Usuario, pantallas y la acción de cada una. Luego el mock.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Coursiv pone Lovable en ~4 h de catálogo (el blog lo vende en 3): no es “una app con IA”. Es idea → lista de pantallas → primer mock que se puede tocar. Si empiezas por el chat de Lovable sin lista, te arma un dashboard genérico con Settings, Analytics y un botón que no vende.",
    "Home, detalle, pago. Quién entra y qué toca. Una pantalla, una acción. Si una hace tres cosas, el mock se desarma.",
  ],
  body: {
    title: "Si no tiene acción, es decorado",
    text: "Escribe el usuario en una línea. Lista 3 pantallas. En cada una: el toque que importa y lo que esa pantalla no hace. Recién ahí pides el mock. Lovable construye lo que nombraste. Lo vago se vuelve plantilla de SaaS.",
  },
  bullets: [
    "Usuario en una frase (dueña de tienda, no “todo el mundo”)",
    "3 pantallas con nombre de oficio: Home, Detalle, Pago",
    "Acción principal de cada una (ver, elegir, pagar)",
    "Qué no hace cada pantalla (settings no vive en el checkout)",
  ],
  quiz: {
    question: "¿Qué pides antes del primer mock en Lovable?",
    options: [
      "Un dashboard con gráficas",
      "Usuario, 3 pantallas y la acción de cada una",
      "“Hazme una app wow”",
      "El logo en 4K",
    ],
    answer: 1,
    explain: "Lista primero. El mock después. Premium no es un pixel.",
  },
  practice: {
    title: "Completa el brief",
    lead: "Tres piezas. Se pegan en Lovable.",
    template: "Usuario: {blank}. Pantallas: {blank}. En pago la acción es {blank}.",
    answers: ["dueña de tienda de termos", "Home, Detalle, Pago", "tocar pagar"],
    slots: ["quién", "dónde", "qué toca"],
    simReply: {
      intro: "Home / Detalle / Pago. En pago: tocar pagar. Nada de settings ahí.",
      sections: [
        { title: "Home", text: "Ver el catálogo del termo mate 500 ml." },
        { title: "Pago", text: "Un CTA. Precio visible. Sin Analytics." },
      ],
    },
    review: {
      question: "¿“Hazlo más premium” se construye?",
      options: ["Sí, Lovable entiende el mood", "No: “botón de pagar más grande y precio arriba” sí", "A veces, si el prompt es largo"],
      answer: 1,
      explain: "Concreto. Premium no es un pixel.",
    },
  },
  close: {
    tip: "usuario, pantallas y la acción principal de cada una.",
    items: ["Lista primero", "Luego el mock", "Una acción por pantalla"],
  },
});

const pedido = track({
  id: "pedido",
  title: "El prompt de la app",
  blurb: "Un brief de producto, no “una tienda linda”.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Lovable (lovable.dev) genera React a partir del chat. El prompt de la app es el brief: quién, qué pantallas, qué dato se ve, qué no existe todavía. “Una tienda moderna con IA” te saca un Shopify de stock photos.",
    "Coursiv insiste: el primer mensaje es un spec corto. Nombre del producto, las 3 pantallas, el CTA, el tono (tú, frases cortas). El color se dice en hex, no “que se sienta premium”.",
  ],
  body: {
    title: "Un spec que se puede construir",
    text: "Pega: usuario, flujo Home → Detalle → Pago, el SKU real (termo mate 500 ml, 349 MXN), un CTA (“Pedir”), y vetos (sin login, sin blog, sin dashboard). Lovable rellena lo que no vetas.",
  },
  bullets: [
    "Nombre de la app y del producto (SKU, no “items”)",
    "Flujo de 3 pantallas y el CTA",
    "Tono y paleta en concreto (tú, #E11D48, no “fresh”)",
    "Vetos: login, admin, blog, “más adelante”",
  ],
  quiz: {
    question: "¿Qué hace útil el primer prompt en Lovable?",
    options: [
      "Pedir “una app con IA”",
      "Usuario, 3 pantallas, un SKU y lo que no existe",
      "Pegar un manifiesto de marca de 4 páginas",
      "Elegir el modelo más caro",
    ],
    answer: 1,
    explain: "Spec corto. Lo vago se vuelve plantilla.",
  },
  practice: {
    title: "Arma el prompt de la app",
    lead: "Se pega en el chat de Lovable.",
    template: "App para {blank}: Home, Detalle y Pago del {blank}. CTA {blank}. Sin login ni dashboard.",
    answers: ["dueñas de tienda", "termo mate 500 ml", "Pedir"],
    slots: ["quién", "SKU", "botón"],
    simReply: {
      intro: "Primer mock en camino. Tres pantallas. El blog no salió: lo vetaste.",
    },
    review: {
      question: "¿El color se pide cómo?",
      options: ["“Que se sienta premium”", "Un hex y el tono (tú, frases cortas)", "Un degradado “AI”"],
      answer: 1,
      explain: "Hex se pinta. Premium no.",
    },
  },
  close: {
    tip: "el primer mensaje es un spec. No un wish de Product Hunt.",
    items: ["SKU a la vista", "Tres pantallas", "Veta lo que no vas a construir"],
  },
});

const flujo = track({
  id: "flujo",
  title: "Home, detalle, pago",
  blurb: "Tres pantallas. Ese es el producto. El resto espera.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Coursiv recorta el MVP a tres toques: ver el catálogo, ver el termo, pagar. Si en el primer mock ya hay onboarding, cupones, wishlists y un panel de admin, no tienes una tienda: tienes un cementerio de features.",
    "Home muestra 1–6 productos. Detalle: foto, precio, un botón. Pago: resumen y CTA. Cada una enlaza a la siguiente. Nada de “explorar el universo”.",
  ],
  body: {
    title: "El camino que sí se toca",
    text: "Di a Lovable los links: Home → Detalle al tap del card. Detalle → Pago al tap de Pedir. Pago no vuelve a Settings. Si el flujo no está escrito, el mock inventa menús.",
  },
  bullets: [
    "Home: catálogo, no un hero de 8 bloques",
    "Detalle: precio arriba, un CTA, sin pestañas de “reviews fake”",
    "Pago: resumen + pagar. Sin crear cuenta si no hace falta",
    "Links dichos: de cuál a cuál, con qué toque",
  ],
  quiz: {
    question: "¿Qué entra en el primer flujo?",
    options: [
      "Onboarding, admin, blog y wishlist",
      "Home, Detalle y Pago, enlazados",
      "Diez microinteracciones de Lottie",
    ],
    answer: 1,
    explain: "Tres pantallas. El resto es deuda.",
  },
  practice: {
    title: "Escribe los enlaces",
    lead: "De cuál a cuál.",
    template: "Del Home al {blank} al tap del card. Del Detalle a {blank} con {blank}. Sin admin.",
    answers: ["Detalle", "Pago", "Pedir"],
    slots: ["siguiente", "cierre", "CTA"],
    simReply: {
      intro: "Tres pantallas, dos toques. El admin se queda fuera del MVP.",
    },
    review: {
      question: "¿El pago pide cuenta sí o sí?",
      options: ["Sí, para “escalar”", "No: si no la necesitas hoy, veta el login", "Solo con Google"],
      answer: 1,
      explain: "Cada campo extra es una pantalla que se rompe.",
    },
  },
  close: {
    tip: "Home, Detalle, Pago. El admin no vende termos.",
    items: ["Tres pantallas", "Links dichos", "Sin menú de más"],
  },
});

const datos = track({
  id: "datos",
  title: "Datos de mentira que se leen de verdad",
  blurb: "SKU, precio, foto. No Lorem ipsum ni “Product 1”.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "El mock no se entiende con “Item name” y $99. Pega 3 productos reales: termo mate 500 ml, vaso 350 ml, tapa extra. Precio en MXN. Una frase de beneficio. Lovable rellena cards con eso.",
    "Si no das mock data, inventa un catálogo de stock photos. Tú no puedes iterar un precio que no es el tuyo.",
  ],
  body: {
    title: "Una lista corta, no una base",
    text: "Todavía no es Supabase. Es un array en el prompt: nombre, precio, una línea. Tres filas alcanzan para ver Home y Detalle. El CRUD real espera a que el flujo se toque.",
  },
  bullets: [
    "3 SKUs con nombre que reconocerías en la tienda",
    "Precios en la moneda real (MXN, no $99 de tutorial)",
    "Un beneficio por producto, no un párrafo",
    "Sin “lorem” ni “John Doe” en el checkout",
  ],
  quiz: {
    question: "¿Para qué sirve el mock data en el primer día?",
    options: [
      "Para conectar Stripe ya",
      "Para que Home y Detalle muestren productos que sí son tuyos",
      "Para entrenar un modelo",
    ],
    answer: 1,
    explain: "Se toca lo real. Lorem no se itera.",
  },
  practice: {
    title: "Pega tres SKUs",
    lead: "Nombres y precios de verdad.",
    template: "Catálogo: {blank} a {blank} MXN, vaso 350 ml y tapa extra. Cero {blank}.",
    answers: ["termo mate 500 ml", "349", "Lorem ipsum"],
    slots: ["SKU", "precio", "veto"],
    simReply: {
      intro: "Tres cards. El 349 se lee. Product 1 no apareció.",
    },
    review: {
      question: "¿Conectas Supabase en el primer mock?",
      options: ["Sí, para “hacerlo pro”", "No: un array de 3 SKUs alcanza para tocar el flujo", "Solo si hay auth"],
      answer: 1,
      explain: "Base después. Primero se entiende la tienda.",
    },
  },
  close: {
    tip: "el mock habla con tus precios. Lorem no se vende.",
    items: ["Tres SKUs", "MXN de verdad", "Supabase espera"],
  },
});

const iterar = track({
  id: "iterar",
  title: "Itera con cambios que se construyen",
  blurb: "“Hazlo más premium” no es un ticket. El botón sí.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Coursiv enseña a hablarle a Lovable como a un dev junior: una pantalla, un cambio, medible. “El botón de pagar más grande y el precio arriba” se pinta. “Que se sienta de marca” no.",
    "No pidas cinco pantallas a la vez. Selecciona Pago. Di el pixel. Revisa. Luego Detalle. Si reescribes toda la app cada ronda, no aprendes qué funcionó.",
  ],
  body: {
    title: "Un ticket, una pasada",
    text: "Nombra la pantalla. Nombra el elemento. Nombra el cambio (más grande, más arriba, quita X). Un “también el header y el footer y un dark mode” es un rewrite.",
  },
  bullets: [
    "Pantalla: Pago (no “la app”)",
    "Elemento: botón Pedir, precio, foto",
    "Cambio concreto: 16 px más, precio pegado arriba",
    "Una ronda. Luego la siguiente",
  ],
  quiz: {
    question: "¿Qué pide mejor un cambio en Lovable?",
    options: [
      "Hazlo wow",
      "El botón de pagar más grande y el precio arriba",
      "Más IA",
      "Otro color random",
    ],
    answer: 1,
    explain: "Cambio concreto. Adjetivo vacío no.",
  },
  practice: {
    title: "Redacta el ticket",
    lead: "Una pantalla. Un pixel.",
    template: "En {blank}: el botón {blank} más grande y el {blank} arriba. No toques Home.",
    answers: ["Pago", "Pedir", "precio"],
    slots: ["pantalla", "CTA", "dato"],
    simReply: {
      intro: "Pago actualizado. Home intacto. El “premium” no se pidió: no salió.",
    },
    review: {
      question: "¿Por qué una pantalla por ronda?",
      options: ["Por tacaño", "Para saber qué cambió y no romper el resto", "Por el precio de tokens"],
      answer: 1,
      explain: "Si mueves tres, no sabes cuál salvó el mock.",
    },
  },
  close: {
    tip: "un cambio que se puede pintar. El mood se discute en otra reunión.",
    items: ["Nombra la pantalla", "Nombra el pixel", "Una ronda"],
  },
});

const forms = track({
  id: "forms",
  title: "Formularios que sí recogen",
  blurb: "Nombre, mail, pedido. No un CRM de 18 campos.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "En Pago o en un “pide info”, Lovable te arma un form elegante con Company, Role, Budget y Newsletter. Tú no los pediste. Cada campo extra es un abandono.",
    "Di los campos: nombre, WhatsApp, dirección. Di cuáles son obligatorios. Di qué pasa al enviar (mensaje de “pedido recibido”, no un spinner eterno). El resto, veta.",
  ],
  body: {
    title: "Campos que un humano llena en el celular",
    text: "Tres campos caben en el pulgar. Validación simple: mail con @, WhatsApp de 10 dígitos. Lovable + Supabase pueden guardar después. Hoy el form tiene que verse completable.",
  },
  bullets: [
    "Lista de campos, no “un formulario completo”",
    "Obligatorio / opcional, dicho",
    "Qué se ve al enviar (ok, error)",
    "Sin captcha ni 18 dropdowns de país",
  ],
  quiz: {
    question: "¿Qué hace usable un form en Lovable?",
    options: [
      "Todos los campos que un CRM soñaría",
      "Tres campos dichos y un estado de enviado",
      "Un Datepicker con timezone",
    ],
    answer: 1,
    explain: "Se llena. El CRM espera.",
  },
  practice: {
    title: "Define el form de pedido",
    lead: "Tres campos. Un ok.",
    template: "Campos: {blank}, {blank}, dirección. Al enviar: {blank}. Sin newsletter.",
    answers: ["nombre", "WhatsApp", "pedido recibido"],
    slots: ["quién", "contacto", "ok"],
    simReply: {
      intro: "Tres inputs. El newsletter no está. El pulgar llega al CTA.",
    },
    review: {
      question: "¿Pides Company y Budget “por si acaso”?",
      options: ["Sí, data is gold", "No: si no lo usas hoy, no está", "Solo en desktop"],
      answer: 1,
      explain: "El campo fantasma mata el pedido.",
    },
  },
  close: {
    tip: "tres campos que se llenan. El CRM no es el MVP.",
    items: ["Lista corta", "Estado de enviado", "Veta el newsletter"],
  },
});

const publicar = track({
  id: "publicar",
  title: "Publicar el mock, no el universo",
  blurb: "Un link que se abre en el celular. Tú sigues siendo el editor.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Lovable publica un preview (lovable.app) y puedes custom domain cuando el flujo ya se toca. Coursiv cierra la ruta con “enséñaselo a alguien”: si la dueña de la tienda no entiende Home en 5 segundos, no es un launch, es un Figma con URL.",
    "Publish no es “ya es producto”. Es un link para probar Pago en el teléfono. GitHub se exporta cuando quieras código. Vercel/Supabase son el piso siguiente, no el primer botón.",
  ],
  body: {
    title: "El link es una prueba",
    text: "Publica. Ábrelo en 390 px. Toca Home → Detalle → Pago. Si el CTA se corta o el precio desaparece, vuelves al chat con un ticket concreto. No mandes el link a 40 personas el día 1.",
  },
  bullets: [
    "Publish del preview, no un rebrand de dominio todavía",
    "Prueba en el celular, no solo en el canvas de Lovable",
    "Un tester (tú o la dueña), no un launch en Instagram",
    "GitHub / custom domain cuando el flujo ya se aguanta",
  ],
  quiz: {
    question: "¿Qué es publicar en esta ruta?",
    options: [
      "El producto ya está en producción con Stripe",
      "Un link para tocar el flujo en el celular y cazar recortes",
      "Subir el repo a Product Hunt",
    ],
    answer: 1,
    explain: "Prueba. El launch es otra reunión.",
  },
  practice: {
    title: "Checklist antes del link",
    lead: "Se toca. Luego se comparte.",
    template: "Publico el {blank}, lo abro en {blank} y toco {blank}. Si el CTA se corta, no lo mando.",
    answers: ["preview", "el celular", "Home → Detalle → Pago"],
    slots: ["qué", "dónde", "flujo"],
    simReply: {
      intro: "Link listo. En el teléfono el precio subió. El dominio espera.",
    },
    review: {
      question: "¿Exportas a GitHub el día del primer mock?",
      options: ["Sí, para “ser dev”", "No: cuando el flujo ya se toca y quieres código de verdad", "Solo los viernes"],
      answer: 1,
      explain: "El repo no arregla un CTA cortado.",
    },
  },
  close: {
    tip: "el link es para tocar. No para fingir que ya vendes.",
    items: ["Celular primero", "Un tester", "Dominio después"],
  },
});

const limites = track({
  id: "limites",
  title: "Hasta dónde llega el no-code",
  blurb: "Lovable arma el front. Auth, pagos y lógica rara se salen del chat.",
  scene: "product",
  brand: "Lovable",
  hook: [
    "Coursiv no vende magia: Lovable brilla en UI y un CRUD con Supabase. Se queda corto cuando quieres auth compleja, Stripe bien puesto, inventario real o un workflow que no cabe en un form. Ahí sales a código (el export de GitHub) o a un humano.",
    "Si el brief es “Amazon con IA”, vas a pelear con el chat dos semanas. Si es “tres pantallas para pedir el termo”, en una tarde hay mock. El límite no es un insulto: es el recorte.",
  ],
  body: {
    title: "Qué sí, qué se va a otra mesa",
    text: "Sí: landing, catálogo chico, form, preview. Con cuidado: login mágico, Stripe test. No en esta ruta: marketplace, app nativa, lógica de cupones enredada, “que aprenda sola”. Skills de prompting se llevan a v0 o Bolt; el nombre “Lovable” no.",
  },
  bullets: [
    "Sí: mock tocable, 3 pantallas, mock data, publish",
    "A medias: Supabase, auth simple, Stripe en test",
    "No: Amazon, app store, cupones de laboratorio",
    "Si se rompe 3 veces el mismo pago, es código o un especialista",
  ],
  quiz: {
    question: "¿Lovable reemplaza a un equipo de producto?",
    options: [
      "Sí, por eso es no-code",
      "No: acelera el mock y un CRUD chico; auth, pagos y lógica rara se salen",
      "Solo si pagas el plan max",
    ],
    answer: 1,
    explain: "Oficio. El chat no firma un cobro real.",
  },
  practice: {
    title: "Elige el piso",
    lead: "Mock, backend o otra mesa.",
    template: "Si el trabajo es {blank}, me quedo en Lovable. Si es {blank}, conecto Supabase. El {blank} se va a código o a un humano.",
    answers: ["tres pantallas del termo", "guardar pedidos de verdad", "cobro con Stripe en vivo"],
    slots: ["mock", "datos", "límite"],
    simReply: {
      intro: "Reparto listo. El mock se publica. El cobro real no se improvisa en el chat.",
    },
    review: {
      question: "El checkout falla tres veces con “haz que cobre”. ¿Qué haces?",
      options: ["Lo pides más fuerte", "Paras: es límite de no-code, no un adjetivo que falte", "Cambias el color del botón"],
      answer: 1,
      explain: "Tres fallos del mismo cobro no se arreglan con “por favor”.",
    },
  },
  close: {
    tip: "Lovable acelera el mock. No firma un cobro ni un marketplace.",
    items: ["Tres pantallas sí", "Stripe vivo con cuidado", "Si se rompe tres veces, otra mesa"],
  },
});

export const lovableUnits = [
  {
    id: "u1",
    title: "De la idea al mock",
    lessons: [pantallas, pedido, flujo, datos],
  },
  {
    id: "u2",
    title: "Iterar y publicar",
    lessons: [iterar, forms, publicar, limites],
  },
];
