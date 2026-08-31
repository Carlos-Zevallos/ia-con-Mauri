import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Flag,
  Pause,
  Play,
  RotateCcw,
  Star,
  X,
} from "lucide-react";
import { findLesson } from "../data.js";
import { canOpenLesson, lessonKey } from "../lib/progress.js";
import { useStore } from "../store.jsx";
import LessonScene from "../components/LessonScene.jsx";
import LessonTrack from "../components/LessonTrack.jsx";
import LyriaTrack from "../components/LyriaTrack.jsx";
import { GeminiCreateMusicGrid, GeminiToolsMenu } from "../components/GeminiMusicMock.jsx";
import PremiumPaywall from "../components/PremiumPaywall.jsx";

function Rich({ text }) {
  if (!text) return null;
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>
  );
}

function pauseLessonTracks() {
  document.querySelectorAll("video.lesson-video, audio.lesson-audio").forEach((el) => {
    el.pause();
  });
}

function Blocks({ blocks, fallbackTitle, navigate, guideId, onPlayTrack }) {
  if (!blocks?.length) return null;
  return blocks.map((block, i) => {
    if (block.kind === "image") {
      if (block.src) {
        return (
          <figure key={i} className="lesson-figure">
            <img src={block.src} alt="" className="lesson-photo" />
            {block.caption ? <figcaption>{block.caption}</figcaption> : null}
          </figure>
        );
      }
      return <LessonScene key={i} scene={block.scene} caption={block.caption || fallbackTitle} />;
    }
    if (block.kind === "video") {
      if (block.lyriaPrompt) {
        return (
          <div key={i} className="workspace-card lyria-result-card">
            <div className="workspace-head">✦ Con tecnología de AI Workspace</div>
            <div className="workspace-brand">
              <span className="gemini-mark" /> Gemini
            </div>
            <div className="ws-result-media lyria-result-media">
              <LyriaTrack
                prompt={block.lyriaPrompt}
                imageUrl={block.lyriaImage}
                poster={block.poster}
                fallbackSrc={block.src}
                onPlayTrack={onPlayTrack}
              />
            </div>
          </div>
        );
      }
      return (
        <LessonTrack
          key={i}
          src={block.src}
          poster={block.poster}
          onPlayTrack={onPlayTrack}
        />
      );
    }
    if (block.kind === "music-tools") {
      return <GeminiToolsMenu key={i} />;
    }
    if (block.kind === "music-grid") {
      return <GeminiCreateMusicGrid key={i} />;
    }
    if (block.kind === "ul") {
      return (
        <ul key={i} className="lesson-list">
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    }
    if (block.kind === "h") {
      return (
        <h2 key={i} className="lesson-h">
          {block.text}
        </h2>
      );
    }
    if (block.kind === "fill-note") {
      return (
        <p key={i} className="fill-note">
          {block.text}
        </p>
      );
    }
    if (block.kind === "callout") {
      return (
        <div key={i} className="lesson-callout">
          <Rich text={block.text} />
        </div>
      );
    }
    if (block.kind === "example") {
      return (
        <div key={i} className="card lesson-example">
          <div className="muted" style={{ fontSize: 12, fontWeight: 700 }}>
            {block.title}
          </div>
          <p style={{ marginTop: 6 }}>{block.text}</p>
        </div>
      );
    }
    if (block.kind === "task") {
      return (
        <button
          key={i}
          className="ui-secondary-btn"
          style={{ marginTop: 12 }}
          onClick={() => navigate(`/ai-tools/${guideId}`)}
        >
          {block.text}
        </button>
      );
    }
    if (block.kind === "p" || !block.kind) {
      return (
        <p key={i} className="lesson-p">
          <Rich text={block.text} />
        </p>
      );
    }
    return block?.text ? (
      <p key={i} className="lesson-p">
        <Rich text={block.text} />
      </p>
    ) : null;
  });
}

function FeedbackPanel({ result }) {
  if (!result) return null;
  const Icon = result.ok ? Check : AlertCircle;
  return (
    <div className={`feedback-panel${result.ok ? " ok" : " bad"}`}>
      <strong>
        <Icon size={18} /> {result.title}
      </strong>
      {!result.ok && result.missed?.length ? (
        <p>
          <span className="muted">Te faltó marcar:</span> {result.missed.join(" · ")}
        </p>
      ) : null}
      {!result.ok && result.extras?.length ? (
        <p>
          <span className="muted">Marcaste de más:</span> {result.extras.join(" · ")}
        </p>
      ) : null}
      {!result.ok && result.answers?.length ? (
        <p>
          <span className="muted">Respuesta correcta:</span> {result.answers.join(" · ")}
        </p>
      ) : null}
      {result.explain ? <p>{result.explain}</p> : null}
    </div>
  );
}

function filledPrompt(step, values) {
  if (!step.template) return (values || []).filter(Boolean).join(" ");
  let i = 0;
  return step.template.replace(/\{blank\}/g, () => values[i++] || "");
}

function TypeLine({ text }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    if (!text) return undefined;
    const id = setInterval(() => {
      setN((x) => {
        if (x >= text.length) {
          clearInterval(id);
          return text.length;
        }
        return x + Math.max(1, Math.ceil(text.length / 90));
      });
    }, 24);
    return () => clearInterval(id);
  }, [text]);
  const done = n >= (text?.length || 0);
  return (
    <p>
      {text.slice(0, n)}
      {done ? null : <span className="ws-caret">|</span>}
    </p>
  );
}

function SimReply({ reply }) {
  if (!reply) return null;
  return (
    <div className="ws-text-result">
      {reply.intro ? (reply.animate ? <TypeLine text={reply.intro} /> : <p>{reply.intro}</p>) : null}
      {reply.sections?.map((section) => (
        <div key={section.title} className="sim-section">
          <strong>{section.title}:</strong> {section.text || ""}
          {section.items ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function stepsOf(lesson) {
  if (lesson.steps?.length) return lesson.steps;
  return [lesson];
}

function speakText(text, rate) {
  if (!text || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  u.rate = rate;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

function textOf(step) {
  if (step.blocks) return step.blocks.filter((b) => b.text).map((b) => b.text).join(". ");
  return [step.lead, step.question, step.title].filter(Boolean).join(". ");
}

export default function Lesson() {
  const { guideId, unitId, lessonId } = useParams();
  const [params] = useSearchParams();
  const found = findLesson(guideId, unitId, lessonId);
  const navigate = useNavigate();
  const { markDone, isDone, isRoot, paid } = useStore();
  const listen = params.get("isAudio") === "true";
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(listen);
  const [rate, setRate] = useState(1);
  const [picked, setPicked] = useState(null);
  const [pickedMany, setPickedMany] = useState([]);
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);
  const [fill, setFill] = useState([]);
  const [fillRevealed, setFillRevealed] = useState(false);
  const [complete, setComplete] = useState(false);
  const [stars, setStars] = useState(0);
  const [toast, setToast] = useState("");
  const [paywall, setPaywall] = useState(false);

  const steps = found ? stepsOf(found.lesson) : [];
  const step = steps[stepIndex] || null;

  useEffect(() => {
    setStepIndex(0);
    setComplete(false);
    setStars(0);
  }, [guideId, unitId, lessonId]);

  useEffect(() => {
    if (!found) return;
    const { guide, all, index } = found;
    const isFinished = (item) => isDone(lessonKey(guide.id, item.unitId, item.id));
    const open = canOpenLesson({
      index,
      lessons: all,
      isFinished,
      bypass: isRoot,
      paid,
    });
    if (open) {
      setPaywall(false);
      return;
    }
    const seqOk = canOpenLesson({
      index,
      lessons: all,
      isFinished,
      bypass: isRoot,
      paid: true,
    });
    if (!seqOk) {
      navigate(`/guides/${guide.id}`, { replace: true });
      return;
    }
    setPaywall(true);
  }, [guideId, unitId, lessonId, isRoot, isDone, paid, navigate]);

  useEffect(() => {
    const n = step?.answers?.length || 3;
    setFill(Array(n).fill(""));
    setPicked(null);
    setPickedMany([]);
    setChecked(false);
    setResult(null);
    setFillRevealed(false);
    setToast("");
  }, [stepIndex, step?.answers?.length, lessonId]);

  useEffect(() => {
    if (!listen) {
      setPlaying(false);
      window.speechSynthesis?.cancel();
    }
  }, [listen]);

  useEffect(() => {
    if (!listen || !step || !playing) {
      window.speechSynthesis?.cancel();
      return;
    }
    pauseLessonTracks();
    const t = setTimeout(() => speakText(textOf(step), rate), 200);
    return () => {
      clearTimeout(t);
      window.speechSynthesis?.cancel();
    };
  }, [stepIndex, playing, rate, lessonId, listen]);

  const progress = useMemo(() => {
    if (!steps.length) return 0;
    return ((stepIndex + 1) / steps.length) * 100;
  }, [stepIndex, steps.length]);

  if (!found || !step) {
    return (
      <div className="auth-page">
        <p>No encontramos ese cap.</p>
        <button className="ui-primary-button" onClick={() => navigate("/guides")}>
          Volver a las rutas
        </button>
      </div>
    );
  }

  if (paywall) {
    return (
      <div className="auth-page phone-col" style={{ padding: 24, gap: 12 }}>
        <p style={{ fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 22 }}>
          Esta lección es Premium
        </p>
        <p className="muted" style={{ textAlign: "center", maxWidth: 360 }}>
          Las 2 primeras lecciones de {found.guide.title} son gratis. Activa Premium para entrar a la tercera y al resto de la ruta.
        </p>
        <button
          type="button"
          className="ui-secondary-btn"
          onClick={() => navigate(`/guides/${found.guide.id}`)}
        >
          Volver a la ruta
        </button>
        <PremiumPaywall
          open
          guideTitle={found.guide.title}
          onClose={() => navigate(`/guides/${found.guide.id}`, { replace: true })}
          onPaid={() => setPaywall(false)}
        />
      </div>
    );
  }

  const { guide, lesson } = found;
  const hasAudio = listen;
  const isLast = step.last || stepIndex === steps.length - 1;
  const needsCheck = step.type === "quiz" || step.type === "multiquiz" || step.type === "fill";
  const fillSolved = step.type === "fill" && (result?.ok || fillRevealed);
  const fillWrong = step.type === "fill" && checked && !fillSolved;
  const canContinue = !needsCheck || (step.type === "fill" ? fillSolved : checked);
  const bank = step.bank || step.answers || [];
  const parts = step.type === "fill" ? (step.template || "").split("{blank}") : [];

  function goMap(mark) {
    window.speechSynthesis?.cancel();
    if (mark) markDone(`${guide.id}:${unitId}:${lesson.id}`);
    navigate(`/guides/${guide.id}?done=${lesson.id}&unit=${unitId}`);
  }

  function advance() {
    if (!canContinue) return;
    pauseLessonTracks();
    window.speechSynthesis?.cancel();
    if (listen) setPlaying(true);
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
      window.scrollTo(0, 0);
      return;
    }
    markDone(`${guide.id}:${unitId}:${lesson.id}`);
    window.speechSynthesis?.cancel();
    setComplete(true);
  }

  function goPrev() {
    if (complete) {
      setComplete(false);
      return;
    }
    if (stepIndex === 0) {
      navigate(`/guides/${guide.id}`);
      return;
    }
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function goFwd() {
    if (canContinue) advance();
  }

  function cycleRate() {
    setRate((r) => (r === 1 ? 1.5 : r === 1.5 ? 2 : 1));
  }

  function muteLessonVoice() {
    window.speechSynthesis?.cancel();
  }

  function checkQuiz() {
    const ok = picked === step.answer;
    setChecked(true);
    setResult({
      ok,
      title: ok ? step.success || "Respuesta correcta" : "Respuesta incorrecta",
      missed: [],
      extras: [],
      answers: [step.options[step.answer]],
      explain: step.explain,
    });
  }

  function checkMulti() {
    const want = step.answers || [];
    const missedIdx = want.filter((i) => !pickedMany.includes(i));
    const extraIdx = pickedMany.filter((i) => !want.includes(i));
    const ok = missedIdx.length === 0 && extraIdx.length === 0;
    setChecked(true);
    setResult({
      ok,
      title: ok ? "Respuesta correcta" : missedIdx.length ? "Te faltó marcar algunas" : "Hay opciones de más",
      missed: missedIdx.map((i) => step.options[i]),
      extras: extraIdx.map((i) => step.options[i]),
      answers: want.map((i) => step.options[i]),
      explain: step.explain,
    });
  }

  function toggleMany(i) {
    if (checked) return;
    setPickedMany((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  }

  function checkFill() {
    const ok = step.answers.every((a, i) => (fill[i] || "").trim().toLowerCase() === a.toLowerCase());
    setChecked(true);
    setFillRevealed(false);
    setResult({
      ok,
      title: ok ? step.success || "¡Increíble!" : "Incorrecto",
      missed: [],
      extras: [],
      answers: step.answers,
      explain: ok
        ? step.successSub || "Estás en el buen camino con tu enfoque."
        : "¡Ya casi! Revisa los pasos e inténtalo de nuevo",
    });
  }

  function retryFill() {
    setFill(Array(step.answers.length).fill(""));
    setChecked(false);
    setResult(null);
    setFillRevealed(false);
  }

  function revealFill() {
    setFill([...step.answers]);
    setFillRevealed(true);
    setResult({
      ok: true,
      title: step.success || "¡Increíble!",
      missed: [],
      extras: [],
      answers: step.answers,
      explain: "Así debe quedar el prompt y el resultado.",
    });
  }

  function putWord(word) {
    if (checked) return;
    const slot = fill.findIndex((v) => !v);
    if (slot === -1) return;
    const next = [...fill];
    next[slot] = word;
    setFill(next);
  }

  function clearSlot(i) {
    if (checked) return;
    const next = [...fill];
    next[i] = "";
    setFill(next);
  }

  function clearLast() {
    if (checked) return;
    const last = [...fill].reverse().findIndex((v) => v);
    if (last === -1) return;
    const i = fill.length - 1 - last;
    clearSlot(i);
  }

  if (complete) {
    return (
      <div className="app-shell lesson-complete-page">
        <div className="phone-col lesson-complete-inner">
          <button className="icon-btn" onClick={() => goMap(true)} aria-label="Cerrar">
            <X />
          </button>
          <div className="complete-burst" aria-hidden>
            <Check size={54} strokeWidth={3} />
          </div>
          <h1>¡Lección completa!</h1>
          <p className="muted">¡Continúa practicando para mantener tu progreso!</p>
          <div className="rate-box">
            <p>¿Cómo calificarías esta lección?</p>
            <div className="rate-stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" className={stars >= n ? "on" : ""} onClick={() => setStars(n)}>
                  <Star size={28} fill={stars >= n ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            <div className="rate-labels">
              <span>No es lo mío</span>
              <span>¡Me encantó!</span>
            </div>
          </div>
          <button className="ui-primary-button" onClick={() => goMap(true)}>
            Continuar
          </button>
        </div>
      </div>
    );
  }

  const primaryLabel = !needsCheck
    ? isLast
      ? "Finalizar lección"
      : "Continuar"
    : checked
      ? isLast
        ? "Finalizar lección"
        : "Continuar"
      : step.type === "fill"
        ? "Revisar"
        : "Enviar";

  const primaryDisabled = needsCheck && !checked && (
    step.type === "quiz"
      ? picked === null
      : step.type === "multiquiz"
        ? !pickedMany.length
        : fill.some((v) => !String(v).trim())
  );

  function onPrimary() {
    if (needsCheck && !checked) {
      if (step.type === "quiz") checkQuiz();
      else if (step.type === "multiquiz") checkMulti();
      else checkFill();
      return;
    }
    advance();
  }

  return (
    <div className="app-shell lesson-player">
      <div className="phone-col lesson-top">
        <button className="icon-btn" onClick={goPrev} aria-label="Atrás">
          <ChevronLeft />
        </button>
        <div className="progress-bar lesson-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
        <button className="icon-btn close-x" onClick={() => navigate(`/guides/${guide.id}`)} aria-label="Cerrar">
          <X size={18} />
        </button>
      </div>

      <div className="phone-col lesson-body">
        {step.doneBanner ? (
          <div className="done-banner">
            <div className="done-workspace-head">✦ Con tecnología de AI Workspace</div>
            <p className="done-kicker">Tarea completada</p>
            <h2>{step.doneBanner}</h2>
            {step.doneLead ? <p className="muted">{step.doneLead}</p> : null}
            <button
              type="button"
              className="repeat-btn"
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
            >
              <RotateCcw size={16} /> Repetir tarea
            </button>
          </div>
        ) : null}

        {step.type !== "fill" && step.title && !(step.doneBanner && step.type === "content") ? (
          <h1 className="lesson-title">{step.title}</h1>
        ) : null}

        {step.type !== "content" && step.image ? (
          <figure className="lesson-figure">
            <img src={step.image} alt="" className="lesson-photo" />
          </figure>
        ) : step.type !== "content" && step.scene ? (
          <LessonScene scene={step.scene} caption={step.title} />
        ) : null}

        <Blocks
          blocks={step.blocks}
          fallbackTitle={step.title}
          navigate={navigate}
          guideId={guide.id}
          onPlayTrack={muteLessonVoice}
        />

        {step.type === "quiz" && (
          <div className={`quiz-wrap${step.pair ? " pair" : ""}`}>
            {step.card ? (
              <div className="gemini-prompt-card">
                <p className="quiz-lead">
                  <Rich text={step.card.lead} />
                </p>
                <div className="gemini-prompt-box">{step.card.prompt}</div>
              </div>
            ) : step.question && step.title !== step.question ? (
              <p className="quiz-q">{step.question}</p>
            ) : step.question ? (
              <p className="quiz-q">{step.question}</p>
            ) : null}
            <div className={step.pair ? "quiz-pair" : "quiz-stack"}>
              {step.options.map((opt, i) => {
                let cls = "quiz-option";
                if (picked === i) cls += " selected";
                if (checked && i === step.answer) cls += " correct";
                if (checked && picked === i && i !== step.answer) cls += " wrong";
                return (
                  <button key={opt} className={cls} onClick={() => !checked && setPicked(i)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            <FeedbackPanel result={result} />
          </div>
        )}

        {step.type === "multiquiz" && (
          <div className="quiz-card">
            <p className="quiz-q">{step.question}</p>
            {step.hint ? <p className="muted quiz-hint">{step.hint}</p> : null}
            {step.options.map((opt, i) => {
              let cls = "quiz-option multi";
              if (pickedMany.includes(i)) cls += " selected";
              if (checked && step.answers.includes(i)) cls += " correct";
              if (checked && pickedMany.includes(i) && !step.answers.includes(i)) cls += " wrong";
              if (checked && step.answers.includes(i) && !pickedMany.includes(i)) cls += " missed";
              return (
                <button key={opt} className={cls} onClick={() => toggleMany(i)}>
                  <span className={`tick${pickedMany.includes(i) ? " on" : ""}`} />
                  {opt}
                </button>
              );
            })}
            <FeedbackPanel result={result} />
          </div>
        )}

        {step.type === "fill" && (
          <div>
            <h1 className="lesson-title">{step.title}</h1>
            {step.lead ? <p className="lesson-p">{step.lead}</p> : null}
            <div className="workspace-card">
              <div className="workspace-head">✦ Con tecnología de AI Workspace</div>
              <div className="workspace-brand">
                <span className="gemini-mark" /> {step.workspaceBrand || "Gemini"}
              </div>
              {!checked || fillWrong || step.lyriaPrompt ? (
                <>
                  {step.currentLyriaPrompt || step.currentTrack ? (
                    <div className="ws-current-track">
                      <p className="ws-media-cap">{step.currentCaption || "Pista actual"}</p>
                      {step.currentLyriaPrompt ? (
                        <LyriaTrack
                          prompt={step.currentLyriaPrompt}
                          imageUrl={step.currentLyriaImage}
                          poster={step.currentPoster}
                          fallbackSrc={step.currentTrack}
                          onPlayTrack={muteLessonVoice}
                        />
                      ) : (
                        <LessonTrack
                          src={step.currentTrack}
                          poster={step.currentPoster}
                          onPlayTrack={muteLessonVoice}
                        />
                      )}
                    </div>
                  ) : null}
                  <p className="workspace-prompt">
                    {parts.map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < parts.length - 1 ? (
                          <button
                            type="button"
                            className={`ws-slot${fill[i] ? " filled" : ""}${fillWrong && fill[i] && fill[i].toLowerCase() !== step.answers[i].toLowerCase() ? " bad" : ""}`}
                            disabled={fillWrong || (checked && Boolean(step.lyriaPrompt))}
                            onClick={() => clearSlot(i)}
                          >
                            {fill[i] || `[${step.slots?.[i] || "____"}]`}
                          </button>
                        ) : null}
                      </span>
                    ))}
                  </p>
                </>
              ) : (
                <div className="ws-thread">
                  <div className="ws-row">
                    <span className="ws-avatar user" aria-hidden />
                    <p>{filledPrompt(step, fill)}</p>
                  </div>
                  {step.resultImage || step.resultVideo || step.simReply || step.lyriaPrompt ? (
                    <div className="ws-row">
                      <span className="gemini-mark" />
                      <div className="ws-out">
                        {step.lyriaPrompt || step.resultVideo ? (
                          <div className="ws-result-media">
                            {step.lyriaPrompt ? (
                              <LyriaTrack
                                prompt={step.lyriaPrompt}
                                imageUrl={step.lyriaImage}
                                poster={step.resultPoster}
                                fallbackSrc={step.resultVideo}
                                onPlayTrack={muteLessonVoice}
                              />
                            ) : (
                              <LessonTrack
                                src={step.resultVideo}
                                poster={step.resultPoster}
                                onPlayTrack={muteLessonVoice}
                              />
                            )}
                          </div>
                        ) : null}
                        {step.resultImage ? (
                          <img src={step.resultImage} alt="Resultado del prompt" className="ws-result-img" />
                        ) : null}
                        <SimReply reply={step.simReply} />
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            {!checked ? (
              <>
                <div className="word-bank">
                  {bank
                    .filter((word) => !fill.includes(word))
                    .map((word) => (
                      <button key={word} type="button" className="word-chip" onClick={() => putWord(word)}>
                        {word}
                      </button>
                    ))}
                </div>
                {step.hint ? <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>{step.hint}</p> : null}
              </>
            ) : null}
            {fillWrong ? (
              <div className="fill-wrong">
                <span className="fill-wrong-icon" aria-hidden>
                  <X size={18} strokeWidth={3} />
                </span>
                <div>
                  <strong>Incorrecto</strong>
                  <p>¡Ya casi! Revisa los pasos e inténtalo de nuevo</p>
                </div>
              </div>
            ) : fillSolved && !fillRevealed ? (
              <FeedbackPanel result={result} />
            ) : null}
          </div>
        )}
      </div>

      <div className="phone-col lesson-dock">
        {hasAudio ? (
          <div className="audio-row">
            <div className="audio-bar">
              <button type="button" onClick={goPrev} aria-label="Anterior">
                <ChevronsLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pausa" : "Reproducir"}
              >
                {playing ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button type="button" onClick={goFwd} aria-label="Siguiente">
                <ChevronsRight size={20} />
              </button>
              <button type="button" className="speed-btn" onClick={cycleRate}>
                {rate}x
              </button>
            </div>
            <button
              type="button"
              className="flag-btn"
              aria-label="Reportar"
              onClick={() => {
                setToast("Gracias. Revisaremos este cap.");
                setTimeout(() => setToast(""), 1800);
              }}
            >
              <Flag size={16} />
            </button>
          </div>
        ) : null}

        <div className="primary-row">
          {fillWrong ? (
            <div className="fill-wrong-actions">
              <button type="button" className="see-answer-btn" onClick={revealFill}>
                Ver respuesta
              </button>
              <button type="button" className="ui-primary-button retry-fill-btn" onClick={retryFill}>
                <RotateCcw size={18} />
                Inténtalo de nuevo
              </button>
            </div>
          ) : (
            <>
              <button
                className={`ui-primary-button${fillSolved || (checked && result?.ok) ? " success-btn" : ""}`}
                disabled={primaryDisabled}
                onClick={onPrimary}
              >
                {primaryLabel}
              </button>
              {step.type === "fill" && !checked ? (
                <button type="button" className="clear-slot-btn" onClick={clearLast} aria-label="Borrar">
                  <X size={16} />
                </button>
              ) : null}
            </>
          )}
        </div>
      </div>
      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
