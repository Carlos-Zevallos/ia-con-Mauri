const img = (file) => ({
  kind: "image",
  src: `/lessons/canva/${file}?v=4`,
});

const mensajeSteps = [
  {
    type: "content",
    title: "El texto manda",
    blocks: [
      {
        kind: "p",
        text: "En Canva AI escribes primero y diseñas después. Nadie entiende un post si la frase no se lee en un segundo, por más degradado que le pongas.",
      },
      {
        kind: "p",
        text: "Titular, apoyo, botón. Los stickers van al final. Si empiezas por el marco, estás decorando un silencio.",
      },
      img("01.png"),
    ],
  },
  {
    type: "quiz",
    title: "El verdadero reto",
    image: "/lessons/canva/02.png?v=4",
    question: "¿Cuál es el mayor problema cuando diseñas sin mensaje?",
    options: [
      "Que Canva no tiene plantillas",
      "Que el post se ve bonito y nadie entiende la oferta",
      "Que el archivo pesa demasiado",
    ],
    answer: 1,
    explain: "Así es. El diseño no inventa la oferta: la muestra. Sin frase, es adorno.",
  },
  {
    type: "content",
    title: "Conoce Magic Studio",
    blocks: [
      {
        kind: "p",
        text: "Magic Studio es el cajón de IAs de Canva: Magic Design, Magic Write, Magic Edit y quitar fondo viven ahí. No es otro programa. Es Canva con atajos.",
      },
      {
        kind: "p",
        text: "En esta ruta armas piezas que sí se pueden publicar: copy con datos, layout con marca y el archivo del canal.",
      },
      img("03.png"),
    ],
  },
  {
    type: "content",
    title: "Jerarquía antes que adorno",
    blocks: [
      { kind: "h", text: "Tres piezas que cambian el resultado" },
      {
        kind: "ul",
        items: [
          "Mensaje en una frase",
          "Formato del canal (dónde se publica)",
          "Titular / apoyo / CTA",
          "Stickers y marcos al final",
        ],
      },
      {
        kind: "callout",
        text: "💡 Primer descubrimiento. Canva acelera el lienzo. No decide la promo. Si el texto es flojo, el layout más limpio no salva.",
      },
    ],
  },
  {
    type: "fill",
    title: "Completa el orden",
    lead: "Lectura, no decoración.",
    template: "Primero el {blank}, después el {blank}. El {blank} no salva un texto flojo.",
    answers: ["mensaje", "formato", "diseño"],
    bank: ["mensaje", "formato", "diseño"],
    slots: ["1", "2", "qué no salva"],
    hint: "Toca las fichas en ese orden.",
    workspaceBrand: "Canva AI",
    simReply: {
      intro: "Titular listo: “El termo no suda en la combi”. Ahora sí el 4:5.",
      sections: [
        { title: "Titular", text: "Una frase. Se lee a un brazo de distancia." },
        { title: "Aún no", text: "Ni sticker ni marco. Eso es la última pasada." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Revisas el texto dónde?",
    options: [
      "En el lienzo enorme del escritorio",
      "En el tamaño real de publicación",
      "En un PDF de 40 páginas",
    ],
    answer: 1,
    explain: "La historia no es el zoom del monitor. Si no se lee en el celular, no se lee.",
    doneBanner: "Completa el orden",
    doneLead: "Lectura, no decoración.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: el texto manda: mensaje, formato y dónde se publica." },
      { kind: "ul", items: ["Frase primero", "Ratio después", "Adorno al final"] },
    ],
  },
];

const magicWriteSteps = [
  {
    type: "content",
    title: "Magic Write y Magic Studio",
    blocks: [
      {
        kind: "p",
        text: "Magic Write está dentro de Magic Studio: te suelta un titular, un apoyo o un caption sin saltar a otro chat.",
      },
      {
        kind: "p",
        text: "Si no le pegas la oferta, el descuento y para quién es, escribe brochure. “Sé creativo” no es un producto. “2x1 este viernes, termo mate, recargo en colonia Roma” sí.",
      },
      img("04.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Qué le falta a “escríbeme un post chido” en Magic Write?",
    options: [
      "Nada, Magic Write adivina la oferta",
      "Producto, oferta, para quién y cuántos caracteres",
      "Un filtro de Instagram",
      "El nombre del diseñador",
    ],
    answer: 1,
    explain: "Sin oferta y tope, sale brochure. Lo chido no se publica.",
  },
  {
    type: "content",
    title: "Copy con datos, no con adjetivos",
    blocks: [
      {
        kind: "p",
        text: "Magic Write predice frases. Tú recortas con oferta, tono y tope de caracteres. Luego pegas ese texto en la pieza; no dejas que el lienzo invente otra promesa.",
      },
      {
        kind: "ul",
        items: [
          "Oferta y fecha (si hay)",
          "Para quién y en qué tono",
          "Tope de caracteres del canal",
          "Tú recortas claims que no puedes cumplir",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Pide el copy",
    lead: "Datos primero. Adjetivo después.",
    template: "Eres copy de {blank}. Titular de {blank} caracteres: oferta {blank}, tono cercano, sin “premium”.",
    answers: ["una tienda chica", "40", "2x1 este viernes en el termo mate"],
    bank: ["una tienda chica", "40", "2x1 este viernes en el termo mate"],
    slots: ["quién", "tope", "oferta"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/04.png?v=3",
    simReply: {
      intro: "Titular: “2x1 en el termo: este viernes y ya”. 38 caracteres. El “premium” no apareció.",
      sections: [
        { title: "Apoyo", text: "Roma, hasta las 8. Un CTA: “Aparta el tuyo”." },
        { title: "Veto", text: "Nada de “experiencia única”. Eso no se cobra en caja." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Magic Write puede inventar el descuento?",
    options: ["Sí, por eso es mágico", "No: la oferta la pegas tú, él solo la redacta", "Solo en Magic Studio"],
    answer: 1,
    explain: "Redacta. No decide la promo. Si inventa un 50%, tú lo cazas.",
    doneBanner: "Pide el copy",
    doneLead: "Datos primero. Adjetivo después.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: Magic Write redacta. Tú pegas oferta, tono y tope de caracteres." },
      { kind: "ul", items: ["Datos antes del adjetivo", "Tope del canal", "Claims que sí puedes cumplir"] },
    ],
  },
];

const magicDesignSteps = [
  {
    type: "content",
    title: "Magic Design: de frase a layout",
    blocks: [
      {
        kind: "p",
        text: "Magic Design te arma varios layouts a partir de una frase o una foto. Sirve para no empezar el lienzo en blanco. No sirve para publicar el primer resultado a ciegas.",
      },
      {
        kind: "p",
        text: "El pedido tiene que llevar mensaje, formato y, si ya existe, color de marca. “Hazlo bonito” le da permiso de inventarte una estética que no es tuya.",
      },
      img("05.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Cuál es el uso sano de Magic Design?",
    options: [
      "Publicar la primera opción sin leer",
      "Sacar variaciones, elegir una y editar mensaje y marca",
      "Sustituir al diseñador en un empaque impreso fino",
      "Generar 80 y no elegir",
    ],
    answer: 1,
    explain: "Boceto con dirección. El final se recorta en el lienzo.",
  },
  {
    type: "content",
    title: "Generar, elegir, recortar",
    blocks: [
      {
        kind: "p",
        text: "Tres o cuatro opciones. Eliges la que se lee. Luego quitas lo que estorba. Magic Design no conoce tu logo hasta que se lo das.",
      },
      {
        kind: "ul",
        items: [
          "Mensaje + ratio en el pedido",
          "Colores de marca si ya los tienes",
          "Elige uno, no combines tres",
          "Editas texto y logo a mano después",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Pide el layout",
    lead: "Frase, canal, paleta.",
    template: "Magic Design: post {blank}, titular “{blank}”, paleta {blank}, sin texto inventado.",
    answers: ["4:5", "2x1 este viernes", "naranja y carbón"],
    bank: ["4:5", "2x1 este viernes", "naranja y carbón"],
    slots: ["ratio", "mensaje", "marca"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/05.png?v=3",
    simReply: {
      intro: "Cuatro layouts. El 2 se lee. El 3 inventó un slogan: fuera. Pasamos el 2 al lienzo.",
      sections: [
        { title: "Qué se quedó", text: "4:5, titular intacto, naranja/carbón." },
        { title: "Qué se va", text: "El sello “NUEVO” que nadie pidió." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Publicas el primer Magic Design?",
    options: ["Sí, por velocidad", "No: eliges uno y editas texto y marca", "Solo si está bonito"],
    answer: 1,
    explain: "Variaciones. Luego el oficio de recortar.",
    doneBanner: "Pide el layout",
    doneLead: "Frase, canal, paleta.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: Magic Design arranca. Tú eliges y recortas. El primer layout no se publica." },
      { kind: "ul", items: ["Mensaje y ratio en el pedido", "Una opción, no un collage", "Logo y claims a mano"] },
    ],
  },
];

const formatoSteps = [
  {
    type: "content",
    title: "1:1, 4:5 y 9:16",
    blocks: [
      {
        kind: "p",
        text: "Si no dices el ratio, recortas a ciegas. El titular que se leía en 1:1 se cae del 9:16 o queda ahogado en un recuadro que Instagram recorta.",
      },
      {
        kind: "p",
        text: "Un archivo para todos los canales es un archivo que no sirve en ninguno. Pide el tamaño del canal, genera, revisa en el celular.",
      },
      img("06.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Cuándo pides el ratio?",
    options: ["Al exportar, con fe", "Antes de generar", "Nunca", "Cuando el sticker no cabe"],
    answer: 1,
    explain: "Si no, recortas a ciegas y el titular se cae.",
  },
  {
    type: "content",
    title: "Un lienzo, un canal",
    blocks: [
      {
        kind: "p",
        text: "1:1 para feed cuadrado, 4:5 para el retrato de Instagram, 9:16 para historias y Reels. Magic Studio puede redimensionar, pero el titular hay que volver a mirarlo: lo que cabía arriba ya no cabe.",
      },
      {
        kind: "ul",
        items: [
          "1:1 feed cuadrado",
          "4:5 retrato de feed",
          "9:16 historias y Reels",
          "Revisar el recorte en el teléfono, no en el zoom",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Completa el canal",
    lead: "Tamaño primero. Adorno después.",
    template: "Feed cuadrado: {blank}. Retrato de Instagram: {blank}. Historia: {blank}.",
    answers: ["1:1", "4:5", "9:16"],
    bank: ["1:1", "4:5", "9:16"],
    slots: ["cuadrado", "retrato", "vertical"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/06.png?v=3",
    simReply: {
      intro: "Tres piezas, tres ratios. El titular subió en el 9:16. El sticker bajó.",
      sections: [
        { title: "4:5", text: "Se lee en el feed. El CTA quedó abajo, no recortado." },
        { title: "9:16", text: "Más aire arriba y abajo. El mismo 1:1 no se estira." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Un solo archivo para feed e historia?",
    options: ["Sí, para ahorrar", "No: cada canal tiene su ratio y su recorte de texto", "Da igual"],
    answer: 1,
    explain: "La historia no es el feed. El titular se redibuja, no se estira.",
    doneBanner: "Completa el canal",
    doneLead: "Tamaño primero. Adorno después.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: revisa el texto en el tamaño real de publicación." },
      { kind: "ul", items: ["Ratio antes de generar", "Un archivo por canal", "El celular manda"] },
    ],
  },
];

const brandKitSteps = [
  {
    type: "content",
    title: "Kit de marca, o Canva inventa otra",
    blocks: [
      {
        kind: "p",
        text: "Si no cargas el kit de marca, Magic Design te arma una tienda verde agua con una tipografía que no es tuya. El feed se siente de otra empresa cada martes.",
      },
      {
        kind: "p",
        text: "Subes logo, paleta y dos fuentes. Las aplicas al diseño. Un color “de temporada” por post rompe la casa.",
      },
      img("07.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Qué pasa si generas sin kit de marca?",
    options: [
      "Canva adivina tu logo a la perfección",
      "Inventa paleta y tipo, y el feed no se siente de la misma casa",
      "Nada, el algoritmo ya te conoce",
      "Solo baja la resolución",
    ],
    answer: 1,
    explain: "Sin casa, cada layout es otra marca.",
  },
  {
    type: "content",
    title: "La casa se configura una vez",
    blocks: [
      {
        kind: "p",
        text: "Kit de marca: logo en claro y oscuro, 3–4 colores, titular y cuerpo. Luego Magic Design y Magic Write heredan. Si cambias de paleta cada pieza, no hay marca: hay collage.",
      },
      {
        kind: "ul",
        items: [
          "Logo (versión clara y oscura)",
          "Paleta corta, no quince códigos de color",
          "Dos fuentes: titular y cuerpo",
          "Aplicar el kit antes de generar en serie",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Arma la casa",
    lead: "Tres piezas que no cambian.",
    template: "Kit: logo {blank}, paleta {blank}, fuentes {blank}. Luego Magic Design.",
    answers: ["claro y oscuro", "naranja y carbón", "titular grueso y cuerpo simple"],
    bank: ["claro y oscuro", "naranja y carbón", "titular grueso y cuerpo simple"],
    slots: ["logo", "color", "tipo"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/07.png?v=3",
    simReply: {
      intro: "Kit aplicado. El verde agua inventado se fue. El naranja de la tienda se quedó.",
      sections: [
        { title: "Antes", text: "Cada post otra estética." },
        { title: "Después", text: "Misma casa. Cambia el producto, no la paleta." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Cambias la paleta en cada post?",
    options: ["Sí, para “novedad”", "No: la casa se queda, cambia el mensaje", "Solo los viernes"],
    answer: 1,
    explain: "Marca es repetición. La novedad está en la oferta, no en el código de color.",
    doneBanner: "Arma la casa",
    doneLead: "Tres piezas que no cambian.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: carga logo, paleta y fuentes una vez. Si no, Canva te diseña otra marca." },
      { kind: "ul", items: ["Kit antes de la serie", "Paleta corta", "El feed se copia"] },
    ],
  },
];

const textoSteps = [
  {
    type: "content",
    title: "El texto en la pieza",
    blocks: [
      {
        kind: "p",
        text: "Magic Design a veces deja el titular gris sobre foto sucia. En el monitor se ve. En el celular, no. El oficio es contraste y tamaño, no más palabras.",
      },
      {
        kind: "p",
        text: "Una idea por pieza. Si el titular dice la oferta, el apoyo no la vuelve a explicar. El CTA es un verbo: “Aparta”, no “Descubre nuestra esencia”.",
      },
      img("08.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "El titular gris sobre la foto no se lee. ¿Qué haces?",
    options: [
      "Añades más palabras para compensar",
      "Subes contraste o pones una placa, y recortas a una idea",
      "Lo dejas: “se siente editorial”",
      "Lo pasas a 8k",
    ],
    answer: 1,
    explain: "Legible o no sale. El editorial que no se lee no vende.",
  },
  {
    type: "content",
    title: "Se lee o no se publica",
    blocks: [
      {
        kind: "p",
        text: "Contraste alto, titular corto, apoyo de una línea, CTA con verbo. Revisa al 100% en el tamaño del canal. Magic Write puede recortar; tú decides qué se queda.",
      },
      {
        kind: "ul",
        items: [
          "Una idea, no cuatro",
          "Contraste: claro sobre oscuro o al revés",
          "Titular grande, apoyo chico, CTA claro",
          "Prueba en el teléfono, no en el zoom",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Recorta la jerarquía",
    lead: "Orden de lectura en el celular.",
    template: "Titular: {blank}. Apoyo: {blank}. CTA: {blank}. Nada más.",
    answers: ["2x1 este viernes", "termo mate, Roma", "Aparta el tuyo"],
    bank: ["2x1 este viernes", "termo mate, Roma", "Aparta el tuyo"],
    slots: ["qué", "dónde", "verbo"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/08.png?v=3",
    simReply: {
      intro: "Se lee a un brazo. El párrafo de “esencia de la marca” se fue.",
      sections: [
        { title: "Antes", text: "Cuatro ideas, gris sobre foto." },
        { title: "Después", text: "Una oferta, placa oscura, un verbo." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿El sticker va antes que el titular?",
    options: ["Sí, es la marca", "No: después de que se lee el mensaje", "Da igual"],
    answer: 1,
    explain: "Adorno. No mensaje.",
    doneBanner: "Recorta la jerarquía",
    doneLead: "Orden de lectura en el celular.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: una idea, contraste alto, CTA con verbo. Si no se lee en el celular, no se publica." },
      { kind: "ul", items: ["Recorta palabras", "Placa si la foto come el texto", "Verbo, no “esencia”"] },
    ],
  },
];

const magicEditSteps = [
  {
    type: "content",
    title: "Magic Edit y quitar fondo",
    blocks: [
      {
        kind: "p",
        text: "Magic Edit pinta encima de un pedazo de la foto: cambias el color del vaso, quitas un objeto, no rehaces la escena. Si le pides “hazla impresionante”, toca todo y ya no reconoces el producto.",
      },
      {
        kind: "p",
        text: "Quitar fondo es otro botón: el sujeto queda recortado para pegarlo en el color de marca. Revisa el pelo y el borde. Un recorte sucio se ve de feria, no de tienda.",
      },
      img("09.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Cómo usas Magic Edit sin desarmar la foto?",
    options: [
      "“Hazla impresionante” en toda la escena",
      "Marcas un objeto y pides un cambio concreto",
      "Quintas el fondo y editas a la vez, por velocidad",
      "Lo aplicas 20 veces seguidas",
    ],
    answer: 1,
    explain: "Una palanca. “Impresionante” no es una instrucción.",
  },
  {
    type: "content",
    title: "Una palanca, luego la otra",
    blocks: [
      {
        kind: "p",
        text: "O editas un objeto, o quitas el fondo. Las dos a la vez y no sabes qué rompió el borde. Magic Studio también tiene borrador mágico: un objeto, no la mesa entera.",
      },
      {
        kind: "ul",
        items: [
          "Magic Edit: un objeto, una instrucción",
          "Quitar fondo: sujeto limpio sobre color de marca",
          "Revisar borde y pelo al zoom",
          "No pidas “más profesional” al recorte",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Un cambio, no la escena",
    lead: "Objeto o fondo. No los dos.",
    template: "Magic Edit: cambia {blank}. Luego quita el {blank}. El sujeto {blank}.",
    answers: ["el vaso a naranja marca", "fondo", "se queda igual"],
    bank: ["el vaso a naranja marca", "fondo", "se queda igual"],
    slots: ["objeto", "qué se va", "qué no se toca"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/09.png?v=3",
    simReply: {
      intro: "Vaso naranja. Fondo fuera. El termo no mutó. El borde del asa: un retoque a mano.",
      sections: [
        { title: "Edit", text: "Solo el vaso. El resto de la mesa intacto." },
        { title: "Fondo", text: "Carbón de marca. Pelo del borde revisado." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Quitar fondo y Magic Edit a la vez?",
    options: ["Sí, más rápido", "No: una palanca por intento, si no no sabes qué rompió", "Da igual"],
    answer: 1,
    explain: "Un problema por clic. Si no, es magia y no aprendes.",
    doneBanner: "Un cambio, no la escena",
    doneLead: "Objeto o fondo. No los dos.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: un objeto por Magic Edit. El fondo se quita aparte. Revisa el borde." },
      { kind: "ul", items: ["Una palanca", "Color de marca detrás", "Zoom al pelo y al asa"] },
    ],
  },
];

const exportarSteps = [
  {
    type: "content",
    title: "Exportar para el canal",
    blocks: [
      {
        kind: "p",
        text: "Capturar la pantalla del editor es el camino más corto a un post borroso. Canva exporta: PNG si hay transparencia o tipografía fina, JPG si es foto a sangre, PDF para imprimir, MP4 si hay movimiento.",
      },
      {
        kind: "p",
        text: "Descargas el ratio que diseñaste. “Compartir” a Instagram desde el escritorio a veces recorta distinto que subir el archivo desde el teléfono. Tú eliges el archivo, no el atajo.",
      },
      img("10.png"),
    ],
  },
  {
    type: "quiz",
    title: "Revisa lo anterior",
    question: "¿Cómo sacas la pieza del editor?",
    options: [
      "Una captura de pantalla",
      "Exportas el formato del canal (PNG, JPG, PDF o MP4) en el ratio correcto",
      "Se la mandas por WhatsApp recortada",
      "La dejas en el recents de Canva y ya",
    ],
    answer: 1,
    explain: "Archivo del canal. La captura ensucia el tipo y el recorte.",
  },
  {
    type: "content",
    title: "Formato, peso, destino",
    blocks: [
      {
        kind: "p",
        text: "PNG para pieza con fondo transparente o logo. JPG para foto. PDF para taller o imprenta. MP4 para historia con movimiento. Revisa peso si la historia te lo rechaza. El nombre del archivo con el canal: 4x5-viernes, no “final-final-3”.",
      },
      {
        kind: "ul",
        items: [
          "PNG: transparencia y tipo nítido",
          "JPG: foto a sangre, menos peso",
          "PDF: imprenta o enviar al taller",
          "MP4: historia o Reel, no una captura",
        ],
      },
    ],
  },
  {
    type: "fill",
    title: "Elige el archivo",
    lead: "Destino, no costumbre.",
    template: "Feed con logo recortado: {blank}. Foto a sangre: {blank}. Historia con movimiento: {blank}.",
    answers: ["PNG", "JPG", "MP4"],
    bank: ["PNG", "JPG", "MP4"],
    slots: ["transparencia", "foto", "video"],
    workspaceBrand: "Canva AI",
    resultImage: "/lessons/canva/10.png?v=3",
    simReply: {
      intro: "Tres archivos, tres destinos. Cero capturas. El 4x5-viernes.png pesa bien.",
      sections: [
        { title: "Feed", text: "PNG 4:5. Logo nítido sobre carbón." },
        { title: "Historia", text: "MP4 9:16. El titular no se recorta en la barra." },
      ],
    },
  },
  {
    type: "quiz",
    title: "Por qué funcionó el pedido",
    question: "¿Sirve la captura del lienzo?",
    options: ["Sí, es más rápido", "No: exportas el formato y el ratio del canal", "Solo si el sticker se ve bonito"],
    answer: 1,
    explain: "La captura no es un archivo de publicación. Canva exporta; tú eliges el tipo.",
    doneBanner: "Elige el archivo",
    doneLead: "Destino, no costumbre.",
  },
  {
    type: "content",
    title: "Para llevar",
    last: true,
    blocks: [
      { kind: "callout", text: "Truco Mauri: exporta el archivo del canal. La captura del editor no es un post." },
      { kind: "ul", items: ["PNG / JPG / PDF / MP4 según el uso", "Un archivo por ratio", "Nombre con el canal, no “final-3”"] },
    ],
  },
];

function lesson(id, title, blurb, steps) {
  return { id, title, blurb, type: "content", hasAudio: true, steps };
}

export const canvaUnits = [
  {
    id: "u1",
    title: "De frase a pieza",
    lessons: [
      lesson("mensaje", "El texto manda", "Si el mensaje es flojo, el diseño bonito no salva.", mensajeSteps),
      lesson("magic-write", "Magic Write y Magic Studio", "El copy nace en Canva. La oferta la pones tú.", magicWriteSteps),
      lesson("magic-design", "Magic Design: de frase a layout", "Pides variaciones. Eliges una. Luego editas. No es el arte final.", magicDesignSteps),
      lesson("formato", "1:1, 4:5 y 9:16", "La historia no es el feed. Di el ratio antes de generar.", formatoSteps),
    ],
  },
  {
    id: "u2",
    title: "Marca y publicación",
    lessons: [
      lesson("brand-kit", "Kit de marca, o Canva inventa otra", "Logo, colores y fuentes una vez. Magic Design deja de adivinar tu estética.", brandKitSteps),
      lesson("texto", "El texto en la pieza", "Si no se lee a un brazo, no se lee. Contraste, tamaño, una idea.", textoSteps),
      lesson("magic-edit", "Magic Edit y quitar fondo", "Un cambio por intento. El fondo se va; el sujeto se queda.", magicEditSteps),
      lesson("exportar", "Exportar para el canal", "El archivo correcto. No una captura del editor.", exportarSteps),
    ],
  },
];
