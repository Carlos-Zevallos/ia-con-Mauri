/** Completa la respuesta del workspace: el prompt debe devolver el entregable, no una frase. */

function R(intro, sections) {
  return { animate: true, intro: intro || "Pedido listo. Aquí va el entregable.", sections };
}

function fillTemplate(template, answers = []) {
  let i = 0;
  return String(template || "").replace(/\{blank\}/g, () => answers[i++] || "…");
}

function theoryOnly(reply) {
  const secs = reply?.sections || [];
  if (!secs.length) return true;
  return secs.every((s) =>
    /^(Qué queda en el pedido|Cómo responde|Para llevar|Siguiente paso)$/i.test(s.title || "")
  );
}

function needsEnrich(reply) {
  if (!reply?.intro) return true;
  if ((reply.sections || []).length < 2) return true;
  return theoryOnly(reply);
}

const CATALOG = {
  "Usa {blank}. Busca el costo de un dominio .mx en {blank} y dame {blank} con fuente.": {
    intro: "Con búsqueda activa, esto es un recorte. Abre al menos dos enlaces antes de pagar.",
    sections: [
      {
        title: "Tabla 2026",
        items: [
          "GoDaddy — ~280 MXN/año .mx — fuente: godaddy.com/tlds/mx",
          "Namecheap — ~250 MXN/año .mx — fuente: namecheap.com",
          "Akky (NIC México) — ~320 MXN/año .mx — fuente: akky.mx",
        ],
      },
      { title: "Qué falta", text: "Promos y DNS. Tú confirmas en el sitio del registrar. ChatGPT no cobra el dominio." },
      { title: "Tú abres", items: ["GoDaddy", "Akky", "El precio del chat no es una orden de compra"] },
    ],
  },
  "Foto de un {blank} sobre {blank}, luz de {blank}, 50 mm, sin texto.": {
    intro: "Toma lista. Si el copy va encima, ábrelo en Canva AI. La imagen no escribe.",
    sections: [
      {
        title: "Qué salió",
        items: [
          "1: termo mate entero sobre mesa de pino, ventana a la izquierda, 50 mm",
          "2: mismo set, más cerca de la tapa — gana para el feed",
          "3: recortó la base del vaso",
          "4: apareció un letrero borroso a la derecha: fuera",
        ],
      },
      { title: "Elige", text: "La 2. Sujeto, luz y mesa se reconocen. Sin letras." },
      { title: "Qué no incluye", items: ["Slogan", "Precio", "Logo de la marca — eso se pega en Canva"] },
    ],
  },
  "Project {blank}. Instrucciones: tono cercano, tabla. Esta semana pega {blank} y entrega {blank}.": {
    intro: "Project listo. El rol no se vuelve a escribir. Solo cambian las notas.",
    sections: [
      {
        title: "Instrucciones fijas",
        items: ["Tono cercano, no brochure", "Salida: tabla decisión / dueño / fecha", "Si falta un dato: por confirmar"],
      },
      { title: "Esta semana", text: "Pegas las notas del lunes. El Project ya sabe el formato." },
      {
        title: "Salida de prueba",
        items: [
          "Subir el 2x1 del termo | Ana | viernes 12:00",
          "Cortar el combo de 89 | por confirmar | lunes",
          "Pedir tapa extra | Ops | 18 mar",
        ],
      },
    ],
  },
  "GPT {blank}. Siempre entrega {blank}. Nunca {blank}.": {
    intro: "Ficha lista. Quien pegue notas recibe la misma tabla. Los plazos vacíos quedan por confirmar.",
    sections: [
      { title: "Nombre", text: "Recap de tienda" },
      {
        title: "Siempre",
        items: ["Tabla: decisión, dueño, fecha", "Una fila por pendiente", "Hueco = por confirmar"],
      },
      { title: "Nunca", text: "Inventar plazos. Si no estaba en las notas, la celda queda vacía y etiquetada." },
    ],
  },
  "Convierte estas notas en tabla: {blank}, {blank}, {blank}. Si falta un dato, pon por confirmar.": {
    intro: "Tres filas. El dueño de la 2 quedó por confirmar. Nadie inventó un nombre.",
    sections: [
      {
        title: "Tabla",
        items: [
          "Decisión: publicar el 2x1 del termo mate | Dueño: Ana | Fecha: viernes 12:00",
          "Decisión: cortar el combo de 89 | Dueño: por confirmar | Fecha: lunes",
          "Decisión: pedir 20 tapas extra | Dueño: Ops | Fecha: por confirmar",
        ],
      },
      { title: "Huecos", text: "Dueño de la fila 2 y fecha de la 3: no estaban en las notas. No rellené con un nombre “típico”." },
      { title: "Siguiente", text: "Tú asignas el dueño. Yo no firmo la junta." },
    ],
  },
  "Mercado de termos en {blank}, año {blank}. Tabla: precio, rival, {blank}.": {
    intro: "Cuatro filas. La 3 sin fuente quedó gris. El promedio de EE. UU. no entró.",
    sections: [
      {
        title: "Tabla México 2026",
        items: [
          "Termo Mate 500 ml | 349 MXN | rival: Hydro Flask 32 oz | fuente: listado propio / sitio 2026",
          "Termo A 750 ml | 429 MXN | rival: Stanley | fuente: nota El Economista, mar 2026",
          "Termo B “premium” | 890 MXN | rival: por confirmar | fuente: no aparece — gris",
          "Vaso 350 ml | 189 MXN | rival: local Roma | fuente: carta de precios pegada",
        ],
      },
      { title: "Fuera", text: "El promedio de EE. UU. no entra: otro país, otra moneda." },
      { title: "Tú abres", items: ["El Economista (fila 2)", "Tu listado (fila 1)", "Fila 3: se confirma o se cae"] },
    ],
  },
  "Post para {blank}, {blank} caracteres. Oferta: {blank}. CTA: Aparta el tuyo. Cero urgencia falsa.": {
    intro: "120 caracteres. El 2x1 se lee en un segundo. Nadie “revolucionó” nada.",
    sections: [
      { title: "Post Instagram", text: "2x1 este viernes en el termo mate. Aparta el tuyo en tienda Roma." },
      { title: "Conteo", text: "98 caracteres. Cabe en 120. Se entiende a 5 cm." },
      { title: "Vetos respetados", items: ["Cero “revolucionar”", "Cero “último día”", "CTA: Aparta el tuyo"] },
    ],
  },
  "Eres tú. Mail a {blank}, tono {blank}, máximo {blank} palabras, un CTA. Cero ironía.": {
    intro: "Mail corto. La fecha nueva va al inicio. El CTA pide confirmar si le sirve el nuevo horario.",
    sections: [
      { title: "Asunto", text: "Tu pedido sale el jueves 12 — ¿te sirve ese horario?" },
      {
        title: "Cuerpo",
        text: "Hola Laura: el termo se atrasó un día. Nueva salida: jueves 12. Si ese horario no te sirve, responde este mail y lo movemos. Perdón el tropiezo — Ana, tienda Roma.",
      },
      { title: "Límites", items: ["82 palabras", "Tono directo y calmado", "Cero ironía", "Un CTA: confirmar el jueves"] },
    ],
  },
  "1) {blank}. 2) {blank}. 3) {blank}. 4) lista huecos.": {
    intro: "Pipeline listo. El copy espera al cruce. Los huecos van al final.",
    sections: [
      {
        title: "Paso 1 — Extrae",
        items: ["12 hitos del PDF", "3 montos por confirmar", "Dueños: Ana, Ops, por confirmar"],
      },
      { title: "Paso 2 — Cruza", text: "Meta de la semana: publicar el 2x1. Choca con el atraso del termo (jueves, no martes)." },
      {
        title: "Paso 3 — Una página",
        text: "Recap de una cara: 4 decisiones, 1 riesgo (atraso), 1 CTA interno.",
      },
      { title: "Paso 4 — Huecos", items: ["Dueño del combo de 89", "Monto del envío B", "Fecha de las tapas extra"] },
    ],
  },
  "Periodo {blank}. Gastos en {blank}. Tabla vs tope y dime {blank}.": {
    intro: "Ocio 1 050 vs tope 800. Comida bajo tope. Una fila roja, no un discurso.",
    sections: [
      {
        title: "Marzo 2026 · MXN",
        items: [
          "Comida: 4 200 / tope 4 500 — ok",
          "Transporte: 1 100 / tope 1 200 — ok",
          "Ocio: 1 050 / tope 800 — se pasó 250",
          "Ahorro: 2 000 / meta 2 000 — ok",
        ],
      },
      { title: "Qué se pasó", text: "Ocio, 250 MXN. Una fila roja. El resto aguanta." },
      { title: "No hice", text: "Sermón de hábitos. Tú decides si recortas el 2x1 o el café." },
    ],
  },
  "Dame {blank} para {blank}. Empieza en 2 minutos. Veta {blank}. Luego elige 2 y di por qué.": {
    intro: "Ocho. Dos se pueden grabar en el mostrador. El motivational no pasó el veto.",
    sections: [
      {
        title: "8 conceptos (15 s)",
        items: [
          "1. Tapa a rosca en close, 2 s de click",
          "2. Termo en la combi, cristal empañado afuera",
          "3. Mano llena, no suda",
          "4. Mostrador Roma, precio en sticker real",
          "5. Antes/después del café en el vaso",
          "6. “Vive tu mejor versión” — vetado",
          "7. Unboxing en mesa de pino",
          "8. Dueña enseña la tapa al cliente",
        ],
      },
      {
        title: "Elige 2",
        items: [
          "2: se rueda en 2 minutos en la combi, sin set",
          "4: el mostrador ya está; el sticker es el CTA",
        ],
      },
      { title: "Fuera", text: "El 6 (motivational). No se graba." },
    ],
  },
  "Evento el {blank}, 40 personas, tope {blank} MXN. Entrega timeline, compras y un mail con {blank}.": {
    intro: "Timeline de 10 días. Compras bajo 8 000. El mail pide confirmar asistencia, no “únete a la magia”.",
    sections: [
      {
        title: "Timeline",
        items: [
          "D-10: confirmar local Roma (ya apartado)",
          "D-7: compras — vasos, hielo, 40 termos de demo",
          "D-3: mail de confirmación",
          "Viernes 19:00: puertas. Tope 8 000 MXN",
        ],
      },
      {
        title: "Compras (7 420 MXN)",
        items: ["Hielo y vasos 1 200", "Botanas 2 400", "Demo termos 3 200", "Impresión de cards 620", "Colchón 580"],
      },
      {
        title: "Mail",
        text: "Asunto: Confirmas el viernes 19:00 en Roma? Cuerpo: 40 lugares. Responde SÍ si vienes. Si no, suelta el lugar antes del miércoles.",
      },
    ],
  },
  "Reescribe este borrador para {blank}. Tono {blank}, máximo {blank}, y cierra con {blank}.": {
    intro: "90 palabras. Directo. La fecha nueva cierra el mail.",
    sections: [
      { title: "Asunto", text: "Nueva fecha de entrega: jueves 12" },
      {
        title: "Cuerpo",
        text: "Hola. El pedido se mueve al jueves 12 por un atraso del proveedor. El termo sigue apartado a tu nombre. Si el jueves no te sirve, responde y lo acomodamos. Gracias por la paciencia.",
      },
      { title: "Cierre", items: ["Fecha nueva: jueves 12", "88 palabras", "Tono directo y calmado"] },
    ],
  },
  "Con este {blank} y este {blank}, lista las {blank} y marca lo que {blank}.": {
    intro: "Tres inconsistencias. Lo que no aparece en CSV ni PDF queda marcado, no inventado.",
    sections: [
      {
        title: "Inconsistencias",
        items: [
          "IVA: en el PDF de reglas sí; en el CSV no — marcar “no aparece en CSV”",
          "Descuento 10%: signo al revés en fila 4 del CSV",
          "SKU tapa extra: en CSV, no en el PDF de reglas",
        ],
      },
      { title: "No aparece en ninguno", text: "Costo de envío a Guadalajara. No lo calculé." },
      { title: "Siguiente", text: "Tú decides si el IVA entra al margen. Yo solo crucé." },
    ],
  },
  "Eres {blank}. Con este {blank}, entrega {blank}. Si falta un dato, {blank}.": {
    intro: "Gem listo para guardar. El reporte de esta semana ya sale en tabla.",
    sections: [
      { title: "Rol", text: "Editor interno. No brochure." },
      {
        title: "Salida de prueba",
        items: [
          "1. 2x1 del termo: Ana, viernes — fuente: notas",
          "2. Combo 89: dueño no aparece",
          "3. Tapas extra: Ops, 18 mar",
          "4. Envío GDL: no aparece",
          "5. Stock vaso 350: 40 piezas — fuente: CSV",
        ],
      },
      { title: "Veto", text: "Si falta un dato, escribe “no aparece”. Cero cifras inventadas." },
    ],
  },
  "Con estos archivos, primero un {blank}. Luego {blank} con {blank}. Lo que no esté, {blank}.": {
    intro: "Mapa primero. Cinco hallazgos con ancla. Lo demás: no aparece.",
    sections: [
      { title: "Mapa", items: ["CSV de precios: 4 pestañas", "PDF de reglas: 12 páginas", "Notas del lunes: 1 página"] },
      {
        title: "5 hallazgos",
        items: [
          "IVA no está en el CSV — PDF p. 4",
          "Descuento fila 4 con signo al revés — CSV",
          "SKU tapa extra solo en CSV",
          "Meta 2x1 en notas, no en reglas",
          "Envío GDL: no aparece",
        ],
      },
      { title: "Hueco", text: "Envío GDL marcado “no aparece”. No puse un promedio." },
    ],
  },
  "Primero {blank}. Luego {blank}. Después {blank}. Al final {blank}.": {
    intro: "Cuatro cajas. El recap espera al cruce de plazos.",
    sections: [
      { title: "1. Extraer", items: ["4 decisiones", "3 fechas", "2 dueños nombrados"] },
      { title: "2. Cruzar", text: "El 2x1 del viernes choca con el atraso del termo (jueves)." },
      { title: "3. Recap", text: "Una cara: 4 pendientes, 1 riesgo, 1 CTA interno a Ana." },
      { title: "4. Revisar", items: ["Nombres: Ana, Ops", "Fechas: viernes vs jueves", "Hueco: dueño del combo"] },
    ],
  },
  "Dame {blank} para {blank}. Promesa: {blank}. Sin {blank}.": {
    intro: "Ocho conceptos. Promesa: empieza en 2 minutos. Cero motivational.",
    sections: [
      {
        title: "Conceptos",
        items: [
          "Click de la tapa en el mostrador",
          "Termo en la combi a las 8",
          "Mano seca, cristal empañado afuera",
          "Sticker de precio real",
          "Dueña enseña la rosca",
          "Unboxing en pino",
          "Antes/después del café",
          "Frase motivational — vetada, no sale",
        ],
      },
      { title: "Se ruedan ya", items: ["Combi a las 8", "Mostrador con sticker"] },
      { title: "Promesa", text: "Empieza en 2 minutos. Sin clichés." },
    ],
  },
  "Cada {blank} tomo {blank}, corro el Gem y entrego {blank}. Antes de publicar, {blank}.": {
    intro: "Flujo de los lunes. El Gem no publica. Tú revisas nombres y fechas.",
    sections: [
      { title: "Lunes", items: ["Tomas las notas de la semana", "Corres el Gem", "Sale una tabla de pendientes"] },
      {
        title: "Salida",
        items: [
          "2x1 termo | Ana | viernes",
          "Combo 89 | por confirmar | lunes",
          "Tapas | Ops | 18 mar",
        ],
      },
      { title: "Antes de publicar", text: "Revisas nombres y fechas. El Gem no manda el recap solo." },
    ],
  },
  "Esta tarea es de {blank}. Por eso uso DeepSeek y pido {blank} con {blank}.": {
    intro: "Oficio correcto. El mail de disculpa se va a Claude. Aquí se queda el margen.",
    sections: [
      { title: "Cálculo", items: ["Precio 89 MXN", "Costo 41 MXN", "Margen actual: 48 MXN (53,9 %)"] },
      { title: "Si sube a 96", items: ["Margen: 55 MXN (57,3 %)", "Delta: +7 MXN por pieza"] },
      { title: "Unidades", text: "Todo en pesos MXN. IVA: no estaba en la tabla — por confirmar, no lo metí." },
    ],
  },
  "No {blank}. Si falta un dato, {blank}. Muestra {blank}.": {
    intro: "El IVA no estaba en tu tabla: quedó por confirmar. No rellenó el hueco. Bien.",
    sections: [
      { title: "Pasos", items: ["Precio 89 − costo 41 = 48 MXN", "Margen % = 48 / 89 = 53,9 %"] },
      { title: "Por confirmar", text: "IVA. No estaba. No puse 16 % “porque siempre”." },
      { title: "Unidades", text: "MXN. Visible en cada renglón." },
    ],
  },
  "Decisión: {blank}. Datos: {blank}. Unidades: {blank}.": {
    intro: "Margen actual vs. 96. Falta el IVA: por confirmar. Ya hay un cálculo, no un suspiro.",
    sections: [
      { title: "Hoy (89 MXN)", items: ["Costo 41", "Margen 48 MXN · 53,9 %"] },
      { title: "A 96 MXN", items: ["Margen 55 MXN · 57,3 %", "Ganas 7 MXN más por pieza"] },
      { title: "No calculé", text: "IVA: no venía en los datos. Por confirmar." },
    ],
  },
  "Calcula en {blank}, muestra {blank} y revisa el {blank}.": {
    intro: "Pasos en MXN. El signo del descuento estaba al revés en el paso 2.",
    sections: [
      { title: "Pasos", items: ["1. Precio 12 000 MXN", "2. Descuento 10 %: −1 200 (estaba como +1 200)", "3. Total 10 800 MXN"] },
      { title: "Signo", text: "El descuento se restaba al revés. Corregido en el paso 2." },
      { title: "Unidades", text: "Pesos MXN en cada línea." },
    ],
  },
  "Reglas: {blank}. Caso: {blank}. Si falta un dato: {blank}.": {
    intro: "No calculó el IVA. Lo pidió el plan B. Eso es avanzado.",
    sections: [
      { title: "Plan A (sin IVA)", items: ["Combo 89 vs 96", "Margen 48 vs 55 MXN"] },
      { title: "Plan B", text: "Si quieres IVA, pégalo. Hasta entonces: por confirmar y no calculo." },
      { title: "Regla", text: "No inventar. IVA aparte." },
    ],
  },
  "Revisa {blank} y {blank}. Si hay error, {blank} el paso y el total.": {
    intro: "El paso 3 tenía el descuento al revés. Total nuevo: 11 200. El lindo era mentira.",
    sections: [
      { title: "Error", text: "Paso 3: descuento aplicado como suma. Unidades ok (MXN)." },
      { title: "Corrección", items: ["Paso 3: 12 400 − 1 200 = 11 200 MXN", "Total nuevo: 11 200", "El 13 600 “lindo” se cae"] },
      { title: "Marca", text: "Paso 3 tachado. Total sustituido." },
    ],
  },
  "Compara {blank} vs {blank} vs nosotros. Campos: {blank}. No inventes envío.": {
    intro: "El envío de B no estaba en tu pegado: vacío. El claim de A sí: tapa a rosca.",
    sections: [
      {
        title: "Cruce",
        items: [
          "Nosotros: 349 MXN | no suda en la combi | envío CDMX 89",
          "Termo A: 429 MXN | tapa a rosca | envío: por confirmar",
          "Termo B: 390 MXN | “24 h frío” | envío: no estaba — vacío",
        ],
      },
      { title: "No inventé", text: "Envío de B. Celda vacía." },
      { title: "Claim anclado", text: "A: tapa a rosca, sí estaba en tu pegado." },
    ],
  },
  "Entra {blank}. DeepSeek entrega {blank}. Yo reviso {blank} antes de pegarlo.": {
    intro: "Flujo de 4 pasos. El 3 es tu revisión. El 4 pega el brief. Nadie cobra solo.",
    sections: [
      { title: "Entra", text: "Tabla de precios de esta semana." },
      { title: "DeepSeek entrega", items: ["Pasos en MXN", "Total 11 200", "IVA por confirmar"] },
      { title: "Tú revisas", text: "Signo y unidades. Luego pegas el brief. El modelo no cobra." },
    ],
  },
  "Extiende la {blank} circundante de manera fluida hacia el área seleccionada --sin {blank}.": {
    intro: "Cuatro parches. Elige el que continúa el asfalto sin inventar gente.",
    sections: [
      { title: "Qué pedí", items: ["Extender la calle de la ciudad", "Sin vehículos ni personas"] },
      {
        title: "Qué salió",
        items: [
          "1: asfalto continuo, sombra del edificio igual — gana",
          "2: un auto fantasma a la derecha — fuera",
          "3: acera bien, pero cambió el tono del cielo",
          "4: persona borrosa al fondo — fuera",
        ],
      },
      { title: "Elige", text: "La 1. El camión desaparece y la calle sigue. El copy no está en el PNG." },
    ],
  },
  "Toda la región del cielo que coincida con un {blank}. Luz cálida a nivel de la calle ya presente en la imagen --no {blank}.": {
    intro: "Cielo de hora dorada. La calle no se recalentó. Sin texto encima.",
    sections: [
      { title: "Qué pedí", items: ["Degradado ámbar y naranja", "Sin grises planos ni letras"] },
      {
        title: "Qué salió",
        items: [
          "1: ámbar suave, luz de calle intacta — gana",
          "2: nubes con borde duro — fuera",
          "3: overlay de texto “GOLDEN” — fuera",
          "4: cielo bien, pero apagó las luces del piso",
        ],
      },
      { title: "Elige", text: "La 1. El corredor se queda. El cielo ya no es gris." },
    ],
  },
  "Crea una imagen de {blank} en {blank} que muestre a {blank} {blank} con {blank}. Adapta el tono general a un proyecto profesional.": {
    intro: "Cuatro oficinas. Elige la de luz suave. Nadie posa a cámara.",
    sections: [
      {
        title: "Qué salió",
        items: [
          "1: mesa limpia, portátiles, luz de ventana — gana",
          "2: demasiado stock, sonrisas a cámara — fuera",
          "3: caos de cables — fuera",
          "4: logo inventado en la pared — fuera",
        ],
      },
      { title: "Elige", text: "La 1. Estilo limpio, empleados concentrados, iluminación natural." },
      { title: "Qué no incluye", text: "Copy ni marca. Eso se pega en Canva." },
    ],
  },
  "Foto de {blank} sobre {blank}, luz {blank}, estilo {blank}, --sin {blank}.": {
    intro: "Packshot listo. Sin manos ni letras. Elige la de estudio suave.",
    sections: [
      {
        title: "Qué salió",
        items: [
          "1: audífonos negros sobre madera clara, luz de estudio — gana",
          "2: una mano extra — fuera",
          "3: logo fantasma en la orejera — fuera",
          "4: recorte del cable",
        ],
      },
      { title: "Elige", text: "La 1. Foto de revista,  sin texto." },
      { title: "Canva", text: "Ahí va el slogan. No en el PNG." },
    ],
  },
  "Pega el {blank}, el {blank} y pide el {blank} mínimo. Nada de rewrite.": {
    intro: "Causa en dos frases y un diff de 6 líneas. El rewrite sobraba. xAI no firmó tu deploy.",
    sections: [
      { title: "Causa", text: "`user` llega null porque `getUser()` no espera el fetch. `parseInt` truena en la línea 42." },
      {
        title: "Diff mínimo",
        items: [
          "const user = await getUser();",
          "if (!user) return res.status(401).json({ ok: false });",
          "const id = Number.parseInt(String(req.query.id), 10);",
        ],
      },
      { title: "No toqué", items: ["El helper", "El nombre del archivo", "Un rewrite de 200 líneas"] },
    ],
  },
  "Solo toca {blank}. No {blank}. Devuelve el {blank} mínimo.": {
    intro: "Seis líneas. El nombre del helper se quedó. Bien: se puede revisar en un café.",
    sections: [
      { title: "Toqué", text: "Solo la función que truena." },
      {
        title: "Diff",
        items: [
          "if (id === 0 || Number.isFinite(id)) { /* 0 ya no es “vacío” */ }",
          "return parseUser(raw);",
        ],
      },
      { title: "No hice", text: "Renombres ni archivos nuevos." },
    ],
  },
  "Causa en {blank} frases y el {blank} en un {blank}. Sin ensayo.": {
    intro: "Causa: el `user` llega null porque el fetch no espera. Parche: un guard en la línea 42. Listo.",
    sections: [
      { title: "Causa", text: "El fetch no se espera. `user` es null. `user.id` truena." },
      { title: "Parche", text: "Un guard en la línea 42: `if (!user) return;`" },
      { title: "Formato", text: "Dos frases + diff. Cero ensayo." },
    ],
  },
  "Con {blank} esperaba {blank} y salió {blank}. Pega las 12 líneas. Cambio mínimo.": {
    intro: "Hipótesis: `id=0` es falsy y el guard lo trata como vacío. Parche de 3 líneas. Corre el caso otra vez.",
    sections: [
      { title: "Repro", items: ["Input: id=0", "Esperaba: 200 y un user", "Salió: TypeError en parseInt"] },
      { title: "Hipótesis", text: "`id=0` es falsy. El guard `if (!id)` lo tira." },
      { title: "Parche", items: ["Cambiar a `if (id == null)`", "Number.parseInt(..., 10)", "Retest con id=0"] },
    ],
  },
  "Este texto es para {blank}. Quiero tono {blank}, {blank} chistes.": {
    intro: "Ocho líneas. Cero ironía. El meme del deploy se queda en el canal interno.",
    sections: [
      { title: "Ticket", text: "Hola. El pago del termo sigue en revisión. Te confirmo hoy a las 18:00 si ya corrió. Si no, te mando otra fecha. Gracias por esperar." },
      { title: "Límites", items: ["8 líneas", "Tono ticket", "Cero chistes"] },
      { title: "Fuera", text: "El meme del deploy. Canal interno, no el cliente." },
    ],
  },
  "Pego {blank}, {blank} y {blank}. Nada más en este hilo.": {
    intro: "Con eso alcanza. El README de 80 páginas no iba a salvar el `parseInt`.",
    sections: [
      { title: "En el hilo", items: ["20 líneas de parseUser", "El tipo User", "El log de hoy"] },
      { title: "Lectura", text: "El TypeError está en parseInt de id. El README no aporta." },
      { title: "Siguiente", text: "Parche mínimo sobre esas 20 líneas. Nada más." },
    ],
  },
  "Qué se dijo {blank} en X sobre {blank}. Dame {blank} y no lo des por cierto.": {
    intro: "Dos hilos. El de las 09:14 afirma timeout; el otro habla de keys. Abre los dos. No tuitees el resumen.",
    sections: [
      {
        title: "Pistas de hoy",
        items: [
          "@dev_mx 09:14 — timeout en el corte de la API — no verificado",
          "@ops_latam 11:02 — “rotaron keys” — no verificado",
        ],
      },
      { title: "No es hecho", text: "Ninguno está confirmado. Son dos cuentas, dos versiones." },
      { title: "Tú abres", text: "Los dos hilos. No publiques el resumen como noticia." },
    ],
  },
  "El stack se va a {blank}. El PDF legal, a {blank}. El mail de 80 palabras, a {blank}.": {
    intro: "Reparto listo. Grok no firma la política. Claude no debuggea tu `parseInt` a las 2 a.m. mejor que un stack pegado aquí.",
    sections: [
      { title: "Reparto", items: ["Stack / TypeError → Grok", "PDF legal → Claude", "Mail de 80 palabras → ChatGPT"] },
      { title: "Qué no mezclo", text: "Grok no redacta la política. Claude no parchea el parseInt de madrugada mejor que el archivo pegado aquí." },
      { title: "Firma", text: "Tú despliegas. Ningún modelo firma el merge." },
    ],
  },
  "App para {blank}: Home, Detalle y Pago del {blank}. CTA {blank}. Sin login ni dashboard.": {
    intro: "Primer mock en camino. Tres pantallas. El blog no salió: lo vetaste.",
    sections: [
      { title: "Home", text: "Cards para dueñas de tienda. Termo mate 500 ml a 349 MXN. CTA Pedir." },
      { title: "Detalle", text: "Foto, precio 349, bullet “no suda en la combi”, botón Pedir." },
      { title: "Pago", items: ["Nombre, WhatsApp, dirección", "Sin login", "Sin dashboard ni blog"] },
    ],
  },
  "Del Home al {blank} al tap del card. Del Detalle a {blank} con {blank}. Sin admin.": {
    intro: "Tres pantallas, dos toques. El admin se queda fuera del MVP.",
    sections: [
      { title: "Flujo", items: ["Home → Detalle al tap del card", "Detalle → Pago con Pedir"] },
      { title: "Toques", text: "Dos. Card, luego Pedir." },
      { title: "Fuera", text: "Admin. No está en el MVP." },
    ],
  },
  "Catálogo: {blank} a {blank} MXN, vaso 350 ml y tapa extra. Cero {blank}.": {
    intro: "Tres cards. El 349 se lee. Product 1 no apareció.",
    sections: [
      {
        title: "Catálogo",
        items: ["Termo mate 500 ml — 349 MXN", "Vaso 350 ml — precio en la card", "Tapa extra — precio en la card"],
      },
      { title: "Copy", text: "Cero Lorem ipsum. Cero “Product 1”." },
      { title: "CTA", text: "Pedir en cada card." },
    ],
  },
  "En {blank}: el botón {blank} más grande y el {blank} arriba. No toques Home.": {
    intro: "Pago actualizado. Home intacto. El “premium” no se pidió: no salió.",
    sections: [
      { title: "Pago", items: ["Botón Pedir más grande", "Precio arriba", "Mismo flujo"] },
      { title: "No toqué", text: "Home. Sigue igual." },
      { title: "Fuera", text: "La palabra “premium”. No estaba en el ticket." },
    ],
  },
  "Campos: {blank}, {blank}, dirección. Al enviar: {blank}. Sin newsletter.": {
    intro: "Tres inputs. El newsletter no está. El pulgar llega al CTA.",
    sections: [
      { title: "Form", items: ["Nombre", "WhatsApp", "Dirección"] },
      { title: "Al enviar", text: "Pantalla “pedido recibido”." },
      { title: "Fuera", text: "Newsletter. No está el checkbox." },
    ],
  },
  "Producto: {blank}. Hecho: {blank}. Nunca {blank}.": {
    intro: "Knowledge listo. El anuncio puede hablar de la tapa. El 2x1 no estaba: por confirmar.",
    sections: [
      { title: "Hechos", items: ["Termo mate 500 ml", "No suda en la combi", "Tapa a rosca"] },
      { title: "Por confirmar", text: "El 2x1. No estaba en knowledge. No salió en el ad." },
      { title: "Nunca", text: "Inventar precios ni descuentos." },
    ],
  },
  "Titular máximo {blank} palabras. CTA: {blank}. Nunca {blank}.": {
    intro: "Guía corta. El ad de búsqueda ya no grita. El de stories se escribe con otra regla.",
    sections: [
      { title: "Titular", text: "Termo mate que no suda en la combi" },
      { title: "CTA", text: "Aparta el tuyo" },
      { title: "Nunca", items: ["Urgencia falsa", "Más de 8 palabras en el titular", "Gritos en el ad de búsqueda"] },
    ],
  },
  "El mail del cliente va al {blank}. El pipeline de investigación va a {blank}. No los {blank}.": {
    intro: "Oficios partidos. A fondo no es el chat de los stickers.",
    sections: [
      { title: "Reparto", items: ["Mail del cliente → ChatGPT diario", "Pipeline de investigación → A fondo"] },
      { title: "Qué no mezclo", text: "Un soplo no es un sistema. El sticker se queda en el curso corto." },
      { title: "Números Coursiv", items: ["Diario: 13 caps, 6 h", "A fondo: 12 caps, 4 h"] },
    ],
  },
  "Project {blank}. Nunca {blank}. Archivos: {blank}.": {
    intro: "Project listo. La veda está arriba. El brief es el de esta semana.",
    sections: [
      { title: "Instrucciones", items: ["Nunca inventar cifras", "Tono de equipo", "Salida: tabla + huecos"] },
      { title: "Knowledge", text: "El brief de esta semana. No los PDFs de 2019." },
      { title: "Nombre", text: "research Q3" },
    ],
  },
  "Busca en {blank}, año {blank}, para {blank}. Lista fuentes.": {
    intro: "Tres fuentes. Una sin fecha: hipótesis. Las otras dos se pueden abrir.",
    sections: [
      {
        title: "Fuentes",
        items: [
          "INEGI — ingresos pymes comida, 2026 — se abre",
          "El Economista — ticket promedio, mar 2026 — se abre",
          "Blog sin fecha — hipótesis, no entra al brief",
        ],
      },
      { title: "Recorte", text: "México, 2026, pymes de comida." },
      { title: "Tú abres", text: "Las dos con fecha. La tercera se etiqueta." },
    ],
  },
};

function visualReply(step, intro) {
  const a = step.answers || [];
  const slots = step.slots || [];
  const labeled = a.map((x, i) => `${slots[i] || "ancla " + (i + 1)}: ${x}`);
  const blob = `${step.template || ""} ${intro || ""}`.toLowerCase();
  const video = Boolean(step.resultVideo) || /clip |segundos|cámara |dolly|9:16|reels|mp4/.test(blob);
  if (video) {
    return R(intro || "Clip listo. Un plano, un verbo. El copy se pega en CapCut.", [
      { title: "Anclas", items: labeled },
      {
        title: "Qué salió",
        items: [
          `Plano 1: ${a.join(", ") || "sujeto y cámara según el pedido"} — candidato`,
          "Plano 2: un extra que no pediste (baile, gorra, 2x1) — fuera",
          "Audio y CTA: no van en este MP4",
        ],
      },
      {
        title: "Qué eliges / qué no",
        items: [
          "Quédate con el clip que respeta duración, cámara y acción",
          "Si aparece un extra que no estaba en las anclas: fuera",
          "Precio, 2x1 y Pedir se escriben en CapCut, no en Kling ni Omni",
        ],
      },
    ]);
  }
  return R(intro || "Cuatro variaciones. Elige una y para.", [
    { title: "Anclas del pedido", items: labeled },
    {
      title: "Qué salió",
      items: [
        `1: respeta ${a[0] || "el sujeto"} — candidata`,
        `2: ${a[1] ? "cambia " + a[1] : "misma escena"}, un poco más cerca`,
        `3: recorte raro o extra que no pediste — fuera`,
        `4: texto o logo fantasma — fuera`,
      ],
    },
    {
      title: "Qué eliges / qué no",
      items: [
        "Quédate con la toma que conserva sujeto, luz y fondo",
        "Si aparece un extra que no estaba en las anclas: fuera",
        "El copy, el precio y el CTA se escriben en Canva, no en el PNG",
      ],
    },
  ]);
}

function musicReply(intro, answers) {
  const layers = answers.filter((x) => String(x).length > 2);
  return R(intro, [
    { title: "Capas", items: layers.length ? layers : ["Arreglo según el pedido"] },
    {
      title: "Qué se oye",
      items: [
        intro || "Pista generada con las capas que pediste",
        "Sin cambiar el género si lo vetaste",
        "Letra o idioma: solo si lo pediste en este paso",
      ],
    },
    { title: "Tú cierras", text: "Escucha el clip. Si falla una sola capa, pide solo ese cambio. No regeneres toda la cama." },
  ]);
}

function mailReply(intro, answers, filled) {
  const who = answers[0] || "el destinatario";
  return R(intro || "Borrador listo. Revisa nombres y fecha.", [
    { title: "Asunto", text: "Nueva fecha — ¿confirmas?" },
    {
      title: "Cuerpo",
      text: `Hola. Te escribo por ${who}. El hecho va al inicio, el tono es el que pediste, hay un solo CTA. Revisa nombres antes de mandar.`,
    },
    { title: "Pedido ejecutado", text: filled },
  ]);
}

function fallback(step) {
  const answers = step.answers || [];
  const intro = (typeof step.simReply === "string" ? step.simReply : step.simReply?.intro) || "";
  const filled = fillTemplate(step.template, answers);
  const blob = `${filled} ${intro} ${step.title || ""}`.toLowerCase();
  const labeled = answers.map((x, i) => `${(step.slots || [])[i] || "pieza " + (i + 1)}: ${x}`);

  if (step.lyriaPrompt || /balada folk|pista de hip|he compuesto|he creado una|cambia esta canción|hip hop inspirada/.test(blob)) {
    return musicReply(intro, answers);
  }
  if (step.resultImage || step.resultVideo || /foto |clip |png|encuadre|cámara |stylize|inpaint|mockup|--no |9:16|4:5/.test(blob)) {
    return visualReply(step, intro);
  }
  if (/mail |asunto|clienta|máximo \d+|cta/.test(blob) && /tono|palabras/.test(blob)) {
    return mailReply(intro, answers, filled);
  }
  if (/error|diff|parche|parseint|función que truena|typeerror/.test(blob)) {
    return R(intro || "Causa corta y un diff mínimo.", [
      { title: "Causa", text: answers[0] ? `El fallo parte de ${answers[0]}.` : "El `user` llega null porque el fetch no espera." },
      {
        title: "Parche",
        items: [
          "if (!user) return res.status(401).end();",
          "// no renombres helpers",
          "// 3–6 líneas, se revisa en un café",
        ],
      },
      { title: "No hice", text: "Rewrite del archivo. xAI no firma tu deploy." },
    ]);
  }
  if (/home|detalle|pago|pantallas|catálogo|lovable|supabase/.test(blob)) {
    return R(intro || "Tres pantallas. El extra que vetaste no salió.", [
      { title: "Pantallas", items: ["Home: cards del catálogo", "Detalle: precio y CTA", "Pago: formulario corto"] },
      { title: "Datos", items: labeled.length ? labeled : answers },
      { title: "Fuera del MVP", text: "Login, dashboard, newsletter y cobro Stripe en vivo: no se improvisan en este chat." },
    ]);
  }

  return R(intro || "Pedido ejecutado. Aquí va el entregable.", [
    { title: "Resultado", items: labeled.length ? labeled : [filled] },
    { title: "Pedido", text: filled },
    {
      title: "Tú cierras",
      text: "Revisa nombres, fechas, cifras y lo que no estaba en el recorte. Yo ordeno; la firma es tuya.",
    },
  ]);
}

function asResult(reply) {
  if (!reply) return null;
  const sections = reply.sections || [];
  if (!sections.length) return { animate: true, ...reply };
  return { animate: true, intro: "", sections };
}

export function enrichSimReply(step) {
  if (!step) return null;
  const answerKey = `${step.template}::${(step.answers || []).join(" | ")}`;
  const fromCatalog = CATALOG[answerKey] || CATALOG[step.template];
  if (fromCatalog) return asResult(R(fromCatalog.intro, fromCatalog.sections));
  if (!needsEnrich(step.simReply)) return asResult({ animate: true, ...step.simReply });
  return asResult(fallback(step));
}
