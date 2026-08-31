import { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BookOpen, Check, Lock, Play, Trophy, Volume2 } from "lucide-react";
import { findGuide, flattenLessons, nextLessonGuide } from "../data.js";
import { canOpenLesson, FREE_LESSONS, lessonKey, needsPremium } from "../lib/progress.js";
import { hasCertForGuide } from "../lib/certs.js";
import { useStore } from "../store.jsx";
import CoverArt from "../components/CoverArt.jsx";
import AiIcon from "../components/AiIcon.jsx";
import PremiumPaywall from "../components/PremiumPaywall.jsx";

function blurbOf(lesson) {
  if (lesson.blurb) return lesson.blurb;
  const p = lesson.blocks?.find((b) => b.kind === "p" && b.text);
  if (p?.text) return p.text.length > 110 ? `${p.text.slice(0, 107)}…` : p.text;
  if (lesson.question) return lesson.question;
  if (lesson.template) return "Completa el ejercicio de este cap.";
  return "Lee o escucha este cap para seguir la ruta.";
}

export default function GuideDetail() {
  const { guideId } = useParams();
  const [params] = useSearchParams();
  const guide = findGuide(guideId);
  const navigate = useNavigate();
  const { isDone, paid, isRoot } = useStore();
  const [picked, setPicked] = useState(null);
  const [payOpen, setPayOpen] = useState(false);
  const [pending, setPending] = useState(null);

  if (!guide) {
    return (
      <div className="desktop-layout">
        <p>No encontramos esa ruta.</p>
        <Link to="/guides">Volver</Link>
      </div>
    );
  }

  const lessons = flattenLessons(guide);
  const doneId = params.get("done");
  const doneUnit = params.get("unit");
  const justFinished = lessons.find((l) => l.id === doneId && (!doneUnit || l.unitId === doneUnit));

  const nextCourse = nextLessonGuide(guide.id);
  const earnedCert = hasCertForGuide(guide.id);

  function finished(lesson) {
    return (
      isDone(lessonKey(guide.id, lesson.unitId, lesson.id)) ||
      (justFinished && lesson.id === justFinished.id && lesson.unitId === justFinished.unitId)
    );
  }

  function seqLockedAt(i) {
    return !canOpenLesson({
      index: i,
      lessons,
      isFinished: finished,
      bypass: isRoot,
      paid: true,
    });
  }

  function paywalledAt(i) {
    const lesson = lessons[i];
    if (!lesson || finished(lesson)) return false;
    return needsPremium(i, { paid, bypass: isRoot });
  }

  function lockedAt(i) {
    return !canOpenLesson({
      index: i,
      lessons,
      isFinished: finished,
      bypass: isRoot,
      paid,
    });
  }

  const doneCount = lessons.filter(finished).length;
  const nextLesson = lessons.find((l) => !finished(l));
  const pathDone = doneCount === lessons.length && lessons.length > 0;
  const pct = lessons.length ? Math.round((doneCount / lessons.length) * 100) : 0;

  const units = [];
  lessons.forEach((lesson, i) => {
    const last = units[units.length - 1];
    if (!last || last.id !== lesson.unitId) {
      units.push({ id: lesson.unitId, title: lesson.unitTitle, items: [{ lesson, i }] });
    } else {
      last.items.push({ lesson, i });
    }
  });

  function openLesson(lesson, i) {
    if (seqLockedAt(i)) return;
    if (paywalledAt(i)) {
      setPending({ lesson, i });
      setPayOpen(true);
      return;
    }
    setPicked({ lesson, i });
  }

  function go(mode) {
    if (!picked) return;
    const { lesson } = picked;
    const listen = mode === "listen";
    navigate(
      `/guides/${guide.id}/${lesson.unitId}/${lesson.id}?isAudio=${listen}&hasAudio=${listen}`
    );
  }

  return (
    <div className="desktop-layout phone-col map-page" style={{ paddingTop: 8 }}>
      <button
        onClick={() => navigate("/guides")}
        className="link"
        style={{ background: "none", border: "none", marginBottom: 12, cursor: "pointer" }}
      >
        ← Volver
      </button>
      <CoverArt id={guide.id} size="sm" />
      <h1 className="section-title" style={{ marginTop: 12, fontFamily: "var(--font-display)", display: "flex", alignItems: "center", gap: 10 }}>
        <AiIcon id={guide.id} size={36} />
        {guide.title}
      </h1>
      <p className="muted">{guide.blurb}</p>
      {!paid && !isRoot ? (
        <p className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          Las {FREE_LESSONS} primeras lecciones son gratis. Desde la tercera se pide Premium.
        </p>
      ) : null}
      <p style={{ marginTop: 8, fontWeight: 600, fontSize: 14 }}>
        Avance de la ruta: {doneCount}/{lessons.length} caps · {pct}%
      </p>
      {isRoot ? (
        <div className="guide-practice-row">
          <Link to={`/guides/${guide.id}/certificate`} className="view-all-btn cert">
            Ver certificado
          </Link>
        </div>
      ) : null}

      <div className="lesson-map">
        {units.map((unit) => (
          <div key={unit.id} className="map-unit">
            <div className="map-heading">
              <span />
              <p>
                UNIDAD {units.indexOf(unit) + 1}: {unit.title}
              </p>
              <span />
            </div>
            {unit.items.map(({ lesson, i }, local) => {
              const done = finished(lesson);
              const seqLocked = seqLockedAt(i);
              const premium = paywalledAt(i);
              const locked = lockedAt(i);
              const isNext = nextLesson && lesson.id === nextLesson.id && lesson.unitId === nextLesson.unitId;
              const side = local % 2 === 0 ? "left" : "right";
              const nextItem = unit.items[local + 1];
              const linkDone = nextItem ? finished(nextItem.lesson) || done : false;
              const isTrophy = Boolean(lesson.trophy) || i === lessons.length - 1;
              const freeTag = !paid && !isRoot && i < FREE_LESSONS;
              const nodeClass = done
                ? " done"
                : premium
                  ? " premium"
                  : seqLocked
                    ? " locked"
                    : " current";
              return (
                <div key={`${lesson.unitId}:${lesson.id}`}>
                  <div className={`map-step ${side}`}>
                    <div className="map-node-wrap">
                      {isNext && !premium ? <div className="map-tip">Inicio</div> : null}
                      {premium ? <div className="map-tip premium">Premium</div> : null}
                      <button
                        type="button"
                        className={`map-node${nodeClass}`}
                        disabled={seqLocked}
                        onClick={() => openLesson(lesson, i)}
                        aria-label={lesson.title}
                      >
                        {done ? (
                          isTrophy ? <Trophy strokeWidth={2.4} /> : <Check strokeWidth={3} />
                        ) : premium || seqLocked ? (
                          <Lock strokeWidth={2.2} />
                        ) : (
                          <Play fill="currentColor" />
                        )}
                      </button>
                      <div className={`map-label${locked && !premium ? " locked" : done ? " done" : ""}`}>
                        {lesson.title}
                        {freeTag ? <span className="map-free">Gratis</span> : null}
                      </div>
                    </div>
                  </div>
                  {nextItem ? <div className={`map-link ${side === "left" ? "to-right" : "to-left"}${linkDone || done ? " done" : ""}`} /> : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="diploma-lock">
        {(paid && pathDone) || isRoot ? (
          <>
            <Link to={`/guides/${guide.id}/certificate`} className="ui-primary-button" style={{ display: "block", textAlign: "center" }}>
              Ver diploma
            </Link>
            {earnedCert && nextCourse ? (
              <Link to={`/guides/${nextCourse.id}`} className="ui-primary-button" style={{ display: "block", textAlign: "center", marginTop: 12 }}>
                Saltar al siguiente curso
              </Link>
            ) : null}
          </>
        ) : paid ? (
          <>
            <button type="button" className="ui-primary-button locked-btn" disabled>
              <Lock size={16} /> Diploma bloqueado
            </button>
            <p className="muted" style={{ textAlign: "center", marginTop: 8, fontSize: 13 }}>
              Termina todas las lecciones del bloque para ver el diploma.
            </p>
          </>
        ) : (
          <>
            <button type="button" className="ui-primary-button" onClick={() => setPayOpen(true)}>
              <Lock size={16} /> Activar Premium
            </button>
            <p className="muted" style={{ textAlign: "center", marginTop: 8, fontSize: 13 }}>
              Con Premium se liberan las lecciones desde la tercera. El diploma se abre al terminar este bloque.
            </p>
          </>
        )}
      </div>

      <PremiumPaywall
        open={payOpen}
        guideTitle={guide.title}
        onClose={() => {
          setPayOpen(false);
          setPending(null);
        }}
        onPaid={() => {
          setPayOpen(false);
          if (pending) setPicked(pending);
          setPending(null);
        }}
      />

      {picked ? (
        <div className="lesson-modal-back" onClick={() => setPicked(null)} role="presentation">
          <div
            className="lesson-modal"
            role="dialog"
            aria-labelledby="lesson-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="lesson-modal-title">{picked.lesson.title}</h2>
            <p>{blurbOf(picked.lesson)}</p>
            <div className="lesson-modal-actions">
              <button type="button" className="mode-read" onClick={() => go("read")}>
                <BookOpen size={18} /> Leer
              </button>
              <button type="button" className="mode-listen" onClick={() => go("listen")}>
                <Volume2 size={18} /> Escuchar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
