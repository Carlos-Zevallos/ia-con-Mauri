function t(title, body, prompt, scene = "desk", tool = "chatgpt", image) {
  return { title, body, prompt, scene, tool, image };
}

export const daysByChallenge = {
  "21-dias": [
    t("Un pedido con tres piezas", "Escribe rol, qué quieres y un límite (palabras o tono). Sin eso, el chat rellena con brochure.", "Actúa como copy de una tienda chica. Reescribe este mail de seguimiento en español cercano, máximo 80 palabras, un solo CTA. Cero emojis.\n\nMail:\nHola, te escribo para ver si viste mi mensaje.", "desk", "chatgpt", "/challenges/tres-piezas.png"),
    t("Pega el borrador real", "Hoy no inventes el contexto. Toma un texto tuyo (mail, bio o aviso) y pide reescritura con límites.", "Reescribe este texto. Mantén los hechos. Tono cercano. Máximo 90 palabras. Un CTA al final.\n\n{{pega tu texto}}"),
    t("Recap en tabla", "Convierte notas sueltas en decisiones, dueños y fechas. Nada de ensayo.", "Convierte estas notas en tabla: decisión, dueño, fecha, riesgo. Si falta un dato, pon “por confirmar”.\n\nNotas:\nHablamos del lanzamiento, María se encarga del mail, aún no hay fecha.", "desk", "chatgpt", "/challenges/recap-tabla.png"),
    t("Pide palo, no palmadas", "Pide 3 fallas concretas y la reescritura del párrafo más flojo.", "Sé directo. Marca 3 fallas de este texto y reescribe el párrafo más flojo. Sin halagos.\n\n{{pega el texto}}", "desk", "chatgpt", "/challenges/palo.png"),
    t("El mail incómodo", "Un atraso de 3 días. Honesto, corto, con fecha nueva. Eso es el reto de hoy.", "Un cliente espera un pedido que se atrasó 3 días. Escribe un mensaje honesto, máximo 90 palabras, con nueva fecha y un CTA. Sin emojis.", "desk", "chatgpt", "/challenges/mail-incomodo.png"),
    t("Cinco viñetas para tu jefe", "Resume un tema largo en 5 puntos. Una línea por punto.", "Resume esto en 5 viñetas para un jefe ocupado. Tono directo. Sin introducción.\n\n{{pega el texto o el tema}}"),
    t("Variante corta y formal", "Pide dos versiones: una de 60 palabras y otra más formal. Elige.", "Dame 2 versiones de este mensaje: A) 60 palabras, cercana. B) formal, sin contracciones. Marca cuál usarías con un cliente nuevo.\n\n{{pega el mensaje}}"),
    t("Qué no debe decir", "Agrega vetos: sin urgencia falsa, sin “sinergia”, sin emojis.", "Reescribe este aviso interno. Sin ironía, sin urgencia falsa, sin la palabra sinergia. Máximo 70 palabras.\n\n{{pega el aviso}}"),
    t("Un CTA que se puede tocar", "El cierre tiene que ser una acción, no “cualquier duda estoy aquí”.", "Cierra este mail con un solo CTA concreto (fecha, link o pregunta de sí/no). Quita el “cualquier duda”.\n\n{{pega el mail}}", "desk", "chatgpt", "/challenges/cta.png"),
    t("Explica como a un colega", "Toma un concepto técnico y bájalo a 6 frases.", "Explica {{concepto}} en 6 frases simples, una analogía cotidiana y un mini ejercicio de 2 minutos."),
    t("Lista de sí / no de tu voz", "Enséñale cómo hablas con ejemplos, no con “sé cool”.", "Con estos 3 textos, arma una guía: 5 cosas que sí suenan a mí y 5 que no.\n\n1.\n2.\n3."),
    t("Un no educado", "Rechaza sin quemar el puente. Corto.", "Redacta un no educado a un proveedor. Agradece, explica que ahora no encaja por tiempo, deja abierta una revisión en 90 días. Máximo 70 palabras."),
    t("Pregunta de investigación", "Acota país y año antes de buscar. Luego contrastas tú.", "Arma 3 preguntas de búsqueda sobre {{tema}} para México en 2026, cada una con un recorte de público distinto.", "search", "perplexity"),
    t("Brief de una página", "A quién le hablas, la promesa, 3 canales y un número para medir.", "Arma un brief de una página para {{idea}}: audiencia, promesa, 3 canales y una métrica. Sin relleno."),
    t("Itera con criterio", "No pidas “házlo mejor”. Di qué falló.", "Esta versión está larga. Quítale adverbios, déjala en 70 palabras y deja un CTA al final.\n\n{{pega la versión}}"),
    t("Guarda el kit", "Anota 5 pedidos que ya te sirvieron. Eso es el hábito.", "Convierte estos 5 pedidos sueltos en una plantilla reutilizable con huecos {{así}}.\n\n1.\n2.\n3.\n4.\n5."),
    t("Un anuncio de 90 caracteres", "Beneficio concreto. Sin emoji. Elige el más directo.", "Dame 8 copys de anuncio para {{oferta}}. Máximo 90 caracteres. Un beneficio concreto. Sin emojis. Marca cuál es más directo."),
    t("Revisa números", "Pide pasos y una revisión al final. Cazas el signo.", "Resuelve esto en pasos numerados y haz una revisión final del signo y las unidades.\n\n{{pega el cálculo}}", "code", "deepseek"),
    t("Describe una foto", "Sujeto, lugar y luz. Veta el texto en la imagen.", "Describe una foto hero de {{producto}} sobre madera clara, luz de ventana a la izquierda, 50 mm, fondo suave, sin letras.", "camera", "dalle", "/challenges/foto.png"),
    t("Una pantalla, una acción", "Lista usuario, pantallas y qué se toca en cada una.", "Define el usuario, 3 pantallas y la acción principal de cada una para {{app}}. Luego describe el primer mock.", "product", "lovable", "/challenges/pantalla.png"),
    t("Cierre de 21 días", "Elige un pedido de esta ruta y úsalo hoy en un caso real tuyo.", "Usa este pedido con MI contexto (pégalo abajo). No inventes datos. Si falta algo, pregunta.\n\nPedido:\n{{elige uno de los 20 días}}\n\nContexto:\n{{pega el caso real}}"),
  ],
  bolsillo: [
    t("Oferta en una frase", "Qué vendes, a quién y en cuánto tiempo se nota el resultado.", "Escribe 5 frases de oferta para {{servicio}}. Cada una: para quién, el resultado y en cuánto tiempo. Máximo 20 palabras."),
    t("Un mail que cobre", "Seguimiento a los 4 días de mandar una propuesta. Sin insistir dos veces.", "Eres account manager. Seguimiento a los 4 días de enviar una propuesta. Recuerda el punto que más le importó, ofrece 15 minutos y no insistas más de una vez. 80–110 palabras."),
    t("Paquete de 3 precios", "Básico, estándar, plus. Qué incluye cada uno, en una tabla.", "Arma 3 paquetes para {{oferta}}: nombre, incluye, no incluye y precio de ejemplo. Tabla. Español claro."),
    t("Testimonio usable", "Pasa de “fue increíble” a un resultado medible.", "Reescribe este testimonio. Deja un número o un antes/después. Máximo 40 palabras.\n\n{{pega el testimonio}}"),
    t("Landing de 6 bloques", "Promesa, para quién, cómo, prueba, precio, CTA.", "Esquema de landing para {{oferta}}: 6 bloques con un titular cada uno y un CTA único al final."),
    t("Respuesta a “está caro”", "Sin pelear. Recupera valor y ofrece un siguiente paso.", "Un prospecto dijo “está caro”. Responde en 70 palabras: reconoce, recuerda el resultado y ofrece una llamada de 10 minutos."),
    t("Mini producto de 48 horas", "Algo que puedes entregar esta semana. Nombre y alcance.", "Propón un mini producto de 48 horas para {{skill}}: nombre, entrega, precio y 3 bullets de alcance. Lo que NO incluye, también."),
    t("Post que invita a escribir", "No pidas like. Pide un dato o una pregunta.", "Escribe un post de 80 palabras que termine con UNA pregunta concreta para {{nicho}}. Sin emojis."),
    t("Una factura clara", "Concepto, qué incluye, fecha, forma de pago.", "Redacta el texto de una factura/simple acuerdo para {{servicio}}: alcance, fecha de entrega, monto y qué pasa si hay cambios."),
    t("Cierre de bolsillo", "Elige un mini producto y escribe el mail de anuncio.", "Mail de anuncio para {{mini producto}}: 90 palabras, un precio, un CTA de responder “quiero”."),
  ],
  "sin-codigo": [
    t("Lista lo que se repite", "Anota 5 tareas que haces igual cada semana. Una se automatiza hoy.", "Tengo estas tareas repetidas:\n{{lista}}\nElige UNA para automatizar sin código. Describe disparador, pasos y resultado."),
    t("Un formulario que basta", "Qué preguntas sí necesitas. El resto estorba.", "Diseña un formulario de 6 campos para {{proceso}}. Di por qué cada campo existe y cuál sobra si apuras."),
    t("De mail a tabla", "Pide extraer campos fijos: nombre, fecha, pedido.", "Extrae de este mail: nombre, fecha, pedido y estado. Tabla. Si falta, “por confirmar”.\n\n{{pega el mail}}"),
    t("Reglas primero", "Pega las reglas antes del caso. Si van al final, ya improvisó.", "Estas son las reglas:\n{{reglas}}\nAhora resuelve este caso sin saltártelas:\n{{caso}}", "code", "deepseek"),
    t("Un aviso automático", "Qué dispara el aviso y qué NO debe decir.", "Redacta el texto de un aviso automático cuando {{evento}}. Máximo 50 palabras. Sin urgencia falsa."),
    t("Checklist de 8 pasos", "El flujo en humano, luego lo pasas a bloques.", "Convierte este proceso en 8 pasos numerados, cada uno con un verbo.\n\n{{describe el proceso}}"),
    t("Cierre sin código", "Elige el flujo de la semana y descríbelo para armarlo mañana.", "Describe el flujo ganador de esta semana: disparador, 4 pasos, resultado y qué revisar a mano."),
  ],
  "primeros-pasos": [
    t("Di hola con contexto", "Preséntate en una línea y pide un resultado chico.", "Soy {{rol}}. Necesito {{resultado}} en menos de 80 palabras. Tono cercano. Empieza."),
    t("El trío RPL", "Rol, pedido, límites. Úsalo en un mail corto.", "Eres un editor. Resume este párrafo en 3 viñetas para un colega, tono directo.\n\n{{pega un párrafo}}"),
    t("No publiques sin leer", "Pide una versión y luego marca qué cambiarías tú.", "Dame un borrador y, aparte, 3 cosas que YO debo checar antes de enviarlo.\n\nTema: {{tema}}"),
    t("Una pregunta, no diez", "Si mezclas todo, sale un ladrillo. Hoy una sola cosa.", "Responde SOLO esto: {{pregunta}}. Máximo 6 frases. Si falta dato, pregunta."),
    t("Cierre suave", "Guarda el pedido que sí te funcionó en estas 5 tardes.", "Convierte mi pedido favorito en una plantilla con huecos {{así}}.\n\nPedido:\n{{pégalo}}"),
  ],
  "claude-largo": [
    t("Pide el mapa", "Tesis, secciones y una pregunta que el texto no responde.", "Resume este documento por encabezados. En cada uno: idea, cita corta y una duda abierta.\n\n{{pega o describe el doc}}", "docs", "claude"),
    t("Que señale el párrafo", "Si no puede citar, es hipótesis.", "Resume y cita el encabezado o párrafo en el que te apoyas. Si no puedes, dilo.\n\n{{pega un extracto}}", "docs", "claude"),
    t("Tono contenido", "Sin ironía ni urgencia falsa. Aviso interno.", "Reescribe esto como aviso interno. Sin ironía, sin urgencia falsa, con un siguiente paso claro.\n\n{{pega el texto}}", "docs", "claude"),
    t("Contrato en claro", "Qué obliga, qué no, y un riesgo.", "Lee este extracto. Lista obligaciones, lo que NO dice y un riesgo.\n\n{{pega el extracto}}", "docs", "claude"),
    t("Política a humano", "Misma regla, menos jurídico.", "Traduce esta política a un texto de 120 palabras para el equipo. No inventes reglas nuevas.\n\n{{pega la política}}", "docs", "claude"),
    t("Dos versiones de tono", "Una para legal, otra para el equipo.", "Dame 2 versiones: A) precisa para legal. B) cercana para el equipo. Misma información.\n\n{{pega el texto}}", "docs", "claude"),
    t("Lo que el PDF no dice", "Pide huecos, no solo el resumen.", "Además del resumen, lista 5 preguntas que el documento no responde.\n\n{{pega o describe}}", "docs", "claude"),
    t("Carta difícil", "Alguien se va o un cambio de alcance. Cercano, sin chiste.", "Escribe una carta corta para {{situación}}. Cercana, sin chiste, 90 palabras. Un siguiente paso.", "docs", "claude"),
    t("Compara dos textos", "Dónde se contradicen. Sin elegir el más dramático.", "Compara A y B. Dónde coinciden, dónde se contradicen y qué checaría yo.\n\nA:\nB:", "docs", "claude"),
    t("Resumen de 40 páginas", "No un ladrillo. Un mapa.", "Mapa de un PDF largo: tesis, 5 secciones, 3 riesgos, 1 acción.\n\n{{describe el contenido}}", "docs", "claude"),
    t("Quita el relleno", "Misma idea, 40% menos palabras.", "Corta este texto un 40% sin perder hechos ni nombres.\n\n{{pega el texto}}", "docs", "claude"),
    t("Preguntas para la junta", "5 preguntas que sí mueven la decisión.", "Con este resumen, dame 5 preguntas para la junta. Cada una cabe en una línea.\n\n{{pega el resumen}}", "docs", "claude"),
    t("Versión para clientes", "Sin jerga interna.", "Reescribe para un cliente que no conoce nuestro argot. 100 palabras.\n\n{{pega el interno}}", "docs", "claude"),
    t("Cierre Claude", "Usa el mapa + cita en un caso real tuyo.", "Aplica mapa + cita a este documento mío. No inventes párrafos.\n\n{{pega extractos}}", "docs", "claude"),
  ],
  "claude-corto": [
    t("Cuándo sí Claude", "PDF, política, tono que no puede sonar agresivo.", "Tengo este tipo de texto: {{tipo}}. Dime si conviene un resumen con citas o un borrador libre, y por qué.", "docs", "claude"),
    t("Cita o no te fíes", "Pide el fragmento. Si no sale, vuelves al doc.", "Resume en 5 líneas y señala el fragmento. Si no puedes citar, dilo.\n\n{{pega texto}}", "docs", "claude"),
    t("Sin agresividad", "Un no o un aviso. Contenido.", "Reescribe sin tono agresivo. Mantén el límite claro.\n\n{{pega el borrador}}", "docs", "claude"),
    t("Una página, no diez", "Tope de palabras desde el pedido.", "Una página máximo (220 palabras). Tesis al inicio. Tres bullets. Un siguiente paso.\n\nTema: {{tema}}", "docs", "claude"),
    t("Cierre en 5 tardes", "El pedido corto que vas a reutilizar.", "Convierte esto en mi plantilla fija para documentos largos, con huecos {{así}}.\n\n{{pega tu pedido}}", "docs", "claude"),
  ],
};

export function todayFor(challenge) {
  const list = daysByChallenge[challenge.id] || [];
  if (!list.length) {
    return t("Reto de hoy", challenge.blurb, "Escribe un pedido con rol, resultado y un límite de palabras.", "desk", "chatgpt");
  }
  const idx = Math.min(Math.max((challenge.currentDay || 1) - 1, 0), list.length - 1);
  return { ...list[idx], day: idx + 1, total: challenge.days };
}
