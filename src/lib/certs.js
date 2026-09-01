const KEY = "mauri.app.certs";
const ALPHANUM = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const GUIDE_ICONS = {
  "claude-excel": "claude",
  "claude-fondo": "claude",
  "claude-largo": "claude",
  "claude-corto": "claude",
  "chatgpt-fondo": "chatgpt",
  "21-dias": "chatgpt",
  "primeros-pasos": "chatgpt",
  bolsillo: "jasper",
  "sin-codigo": "lovable",
};

export function iconIdForGuide(id) {
  return GUIDE_ICONS[id] || id;
}

export function makeCertId(guideId) {
  let h = 2166136261;
  for (const ch of String(guideId || "ia")) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  let out = "";
  for (let i = 0; i < 8; i++) {
    h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
    out += ALPHANUM[h % ALPHANUM.length];
  }
  const hasLetter = /[A-Z]/.test(out);
  const hasDigit = /\d/.test(out);
  if (!hasLetter) return `A${out.slice(1, 4)}7${out.slice(4)}`.slice(0, 8);
  if (!hasDigit) return `${out.slice(0, 3)}7${out.slice(4)}`;
  return out;
}

function loadCerts() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") || {};
  } catch {
    return {};
  }
}

export function saveCert(record) {
  const all = loadCerts();
  all[record.id] = record;
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function getCert(id) {
  return loadCerts()[String(id || "").toUpperCase()] || loadCerts()[id] || null;
}

export function hasCertForGuide(guideId) {
  const all = loadCerts();
  const id = makeCertId(guideId);
  if (all[id] || all[String(id).toUpperCase()]) return true;
  return Object.values(all).some((c) => c && c.guideId === guideId);
}

export function certPublicPath(record) {
  const q = new URLSearchParams({
    g: record.guideId,
    n: record.name,
    h: String(record.hours),
    d: record.issued,
    t: record.title || "",
  });
  return `/certificates/public/${record.id}?${q.toString()}`;
}
