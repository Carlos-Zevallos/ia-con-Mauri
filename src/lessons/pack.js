import { track } from "./kit.js";

/** Respuesta completa del workspace: intro + bloques con título y listas. */
export function expandSim(sim, { idea, bullets, items, tip } = {}) {
  if (sim && typeof sim === "object" && sim.sections?.length) {
    return { animate: true, intro: sim.intro || "", sections: sim.sections };
  }
  const intro =
    (typeof sim === "string" && sim.trim()) ||
    (sim && typeof sim === "object" && sim.intro) ||
    "";
  const sections = [];
  if (bullets?.length) {
    sections.push({ title: "Qué queda en el pedido", items: [...bullets] });
  }
  if (idea && idea.trim() !== intro.trim()) {
    sections.push({ title: "Cómo responde", text: idea });
  }
  if (items?.length) {
    sections.push({ title: "Para llevar", items: [...items] });
  }
  if (tip) {
    sections.push({ title: "Siguiente paso", text: tip });
  }
  return { intro, sections, animate: true };
}

/** Lección corta al estilo Coursiv: teoría → quiz → práctica → cierre. */
export function quick({
  brand,
  scene = "desk",
  pack,
  id,
  title,
  blurb,
  hooks,
  idea,
  bullets,
  q,
  opts,
  ans,
  why,
  fillTitle,
  fillLead,
  template,
  answers,
  slots,
  sim,
  rq,
  ropts,
  rans,
  rwhy,
  tip,
  items,
}) {
  return track({
    id,
    title,
    blurb,
    scene,
    brand,
    pack,
    hook: hooks,
    body: { title: "Cómo se usa", text: idea },
    bullets,
    quiz: { question: q, options: opts, answer: ans, explain: why },
    practice: {
      title: fillTitle,
      lead: fillLead,
      template,
      answers,
      slots,
      simReply: expandSim(sim, { idea, bullets, items, tip }),
      review: { question: rq, options: ropts, answer: rans, explain: rwhy },
    },
    close: { tip, items },
  });
}

export function units(groups) {
  return groups.map(([id, title, lessons]) => ({ id, title, lessons }));
}
