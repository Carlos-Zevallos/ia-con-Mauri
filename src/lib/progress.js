/** Key persistida en mauri.app.done */
export function lessonKey(guideId, unitId, lessonId) {
  return `${guideId}:${unitId}:${lessonId}`;
}

/** Primeras lecciones de cada IA abiertas sin Premium. */
export const FREE_LESSONS = 2;

/**
 * La lección 3 en adelante (índice >= 2) pide Premium,
 * salvo root, plan pagado o un cap que ya terminaste.
 */
export function needsPremium(index, { paid = false, bypass = false } = {}) {
  if (bypass || paid) return false;
  return index >= FREE_LESSONS;
}

/**
 * Solo la primera lección está abierta al entrar.
 * Cada cap siguiente se activa cuando terminas el que le antecede.
 * Sin Premium, las lecciones 1 y 2 (índices 0 y 1) son gratis;
 * desde la tercera hay que pagar.
 * Los caps ya hechos se pueden reabrir.
 */
export function canOpenLesson({
  index,
  lessons,
  isFinished,
  bypass = false,
  paid = false,
}) {
  if (bypass) return true;
  const current = lessons[index];
  if (current && isFinished(current)) return true;
  if (index > 0) {
    const prev = lessons[index - 1];
    if (!(prev && isFinished(prev))) return false;
  }
  if (needsPremium(index, { paid, bypass })) return false;
  return true;
}
