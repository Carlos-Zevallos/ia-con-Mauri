import { track } from "./kit.js";

/** Lección corta al estilo Coursiv: teoría → quiz → práctica → cierre. */
export function quick({
  brand,
  scene = "desk",
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
      simReply: { intro: sim },
      review: { question: rq, options: ropts, answer: rans, explain: rwhy },
    },
    close: { tip, items },
  });
}

export function units(groups) {
  return groups.map(([id, title, lessons]) => ({ id, title, lessons }));
}
