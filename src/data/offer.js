export const WHEEL_SEGMENTS = [
  { label: "10% off", value: 10 },
  { label: "15% off", value: 15 },
  { label: "20% off", value: 20 },
  { label: "30% off", value: 30 },
  { label: "40% off", value: 40 },
  { label: "50% off", value: 50 },
];

export const WHEEL_PRIZE = 50;

export const OFFER_MINUTES = 10;

export const plans = [
  {
    id: "1w",
    weeks: 1,
    title: "PLAN DE 1 SEMANA",
    full: 51,
    sale: { 50: 26, 60: 20 },
  },
  {
    id: "4w",
    weeks: 4,
    title: "PLAN DE 4 SEMANAS",
    full: 149,
    sale: { 50: 75, 60: 59 },
    popular: true,
  },
  {
    id: "12w",
    weeks: 12,
    title: "PLAN DE 12 SEMANAS",
    full: 299,
    sale: { 50: 149, 60: 119 },
  },
];

export const TICKER = [
  "david.ma*** Plan de 12 semanas",
  "john.mu*** Plan de 1 semana",
  "sophia.mo*** Plan de 12 semanas",
  "ana.lo*** Plan de 4 semanas",
  "luis.pe*** Plan de 12 semanas",
  "maria.sa*** Plan de 4 semanas",
  "diego.ru*** Plan de 1 semana",
  "camila.or*** Plan de 12 semanas",
];

export function soles(n) {
  const rounded = Math.round(Number(n) * 100) / 100;
  if (Number.isInteger(rounded)) return `S/${rounded}`;
  return `S/${rounded.toFixed(2)}`;
}

export function planAmount(plan, discount) {
  const pct = discount >= 60 ? 60 : discount >= 50 ? 50 : 0;
  if (!pct) return plan.full;
  return plan.sale[pct];
}

export function promoCode(name, discount) {
  const slug = String(name || "usuario")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const tail = discount >= 60 ? "_final" : "";
  return `${slug}_${day}${months[d.getMonth()]}${d.getFullYear()}${tail}`;
}

export function postAuthPath() {
  return "/home";
}
