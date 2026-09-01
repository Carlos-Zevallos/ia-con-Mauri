import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { enrichSimReply } from "../lessons/fillResults.js";
import { canOpenLesson, lessonKey } from "../lib/progress.js";
import { useStore } from "../store.jsx";
import LessonScene from "../components/LessonScene.jsx";
import LessonTrack from "../components/LessonTrack.jsx";
import LyriaTrack from "../components/LyriaTrack.jsx";
import { GeminiCreateMusicGrid, GeminiToolsMenu } from "../components/GeminiMusicMock.jsx";
import PremiumPaywall from "../components/PremiumPaywall.jsx";
import {
  DsCostChart,
  DsKeyPoints,
  DsMathReply,
  DsModesBar,
  DsThinkSearch,
  DsUseGrid,
} from "../components/DeepSeekLessonBits.jsx";
import AiIcon from "../components/AiIcon.jsx";

const BRAND_ICON = {
  Claude: "claude",
  ChatGPT: "chatgpt",
  DeepSeek: "deepseek",
  Gemini: "gemini",
  Perplexity: "perplexity",
  Jasper: "jasper",
  Midjourney: "midjourney",
  "Stable Diffusion": "sd",
  Kling: "kling",
  Omni: "omni",
  Grok: "grok",
  "DALL·E": "dalle",
  "Nano Banana": "nano",
  "Canva AI": "canva",
  Canva: "canva",
  Lovable: "lovable",
};

function brandIconId(name) {
  return BRAND_ICON[name] || "claude";
}

function WorkspaceBrand({ name, size = 18 }) {
  const id = brandIconId(name);
  return (
    <span className="ws-brand-row">
      <AiIcon id={id} size={size} />
      <strong>{name}</strong>
    </span>
  );
}

function FillLead({ text }) {
  const raw = String(text || "").trim();
  const line = /espacios en blanco/i.test(raw)
    ? raw
    : `Llena los espacios en blanco para ver cómo puedes construir un prompt.${raw ? ` ${raw}` : ""}`;
  const parts = line.split(/(los espacios en blanco)/i);
  return (
    <p className="lesson-p fill-lead">
      {parts.map((part, i) =>
        /los espacios en blanco/i.test(part) ? (
          <span key={i} className="fill-lead-hl">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function Rich({ text }) {
  if (!text) return null;
  const parts = String(text).split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("[[") && part.endsWith("]]")) {
      return (
        <abbr key={i} className="glossary-term">
          {part.slice(2, -2)}
        </abbr>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function pauseLessonTracks() {
  document.querySelectorAll("video.lesson-video, audio.lesson-audio").forEach((el) => {
    el.pause();
  });
}

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return Math.abs(h) || 1;
}

/** Mezcla estable por lección/paso: la correcta no se queda siempre en el mismo sitio. */
function shuffleList(list, seedStr) {
  const original = (list || []).map((value, source) => ({ value, source }));
  if (original.length <= 1) return original;
  let s = hashSeed(seedStr);
  let items = original.map((row) => ({ ...row }));
  for (let attempt = 0; attempt < 16; attempt += 1) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [items[i], items[j]] = [items[j], items[i]];
    }
    const sameOrder = items.every((row, i) => row.source === i);
    if (!sameOrder) return items;
  }
  [items[0], items[1]] = [items[1], items[0]];
  return items;
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
    if (block.kind === "ds-cost") return <DsCostChart key={i} />;
    if (block.kind === "ds-uses") return <DsUseGrid key={i} />;
    if (block.kind === "ds-modes") return <DsModesBar key={i} />;
    if (block.kind === "ds-think") return <DsThinkSearch key={i} />;
    if (block.kind === "ds-math") return <DsMathReply key={i} />;
    if (block.kind === "keypoints") return <DsKeyPoints key={i} items={block.items} />;
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

function flattenReply(reply) {
  if (!reply) return [];
  const parts = [];
  const sections = reply.sections || [];
  // La intro tipo “120 caracteres. Nadie revolucionó nada.” es nota de la lección, no el resultado del prompt.
  if (reply.intro && !sections.length) {
    parts.push({ kind: "p", text: reply.intro });
  }
  sections.forEach((section) => {
    const items = section.items || [];
    if (section.title && section.text && !items.length) {
      parts.push({ kind: "pair", title: String(section.title).replace(/:$/, ""), text: section.text });
    } else {
      if (section.title) parts.push({ kind: "h", text: section.title });
      if (section.text) parts.push({ kind: "p", text: section.text });
      items.forEach((item) => parts.push({ kind: "li", text: item }));
    }
  });
  return parts;
}

function partLen(part) {
  if (part.kind === "pair") return part.title.length + 2 + part.text.length;
  return part.text.length;
}

function Caret() {
  return <span className="ws-caret">|</span>;
}

function TypedPair({ title, text, take, caret }) {
  const head = `${title}:`;
  const titleTake = Math.min(take, head.length);
  const restTake = Math.max(0, take - head.length - 1);
  return (
    <p className="sim-line">
      <strong>{head.slice(0, titleTake)}</strong>
      {take > head.length ? ` ${text.slice(0, restTake)}` : null}
      {caret ? <Caret /> : null}
    </p>
  );
}

function SimReply({ reply, animate }) {
  const parts = useMemo(() => flattenReply(reply), [reply]);
  const total = useMemo(() => parts.reduce((n, part) => n + partLen(part), 0), [parts]);
  const run = Boolean(animate || reply?.animate);
  const [chars, setChars] = useState(run ? 0 : total);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!run) {
      setChars(total);
      return undefined;
    }
    setChars(0);
    let tick;
    const start = setTimeout(() => {
      tick = setInterval(() => {
        setChars((n) => {
          if (n >= total) {
            clearInterval(tick);
            return total;
          }
          return Math.min(total, n + 2);
        });
      }, 20);
    }, 320);
    return () => {
      clearTimeout(start);
      if (tick) clearInterval(tick);
    };
  }, [reply, run, total]);

  useEffect(() => {
    const body = boxRef.current?.closest(".lesson-body");
    if (!body) return;
    const gap = body.scrollHeight - body.scrollTop - body.clientHeight;
    if (gap < 96 || chars < 24) body.scrollTop = body.scrollHeight;
  }, [chars]);

  if (!reply || !parts.length) return null;

  const done = chars >= total;
  const nodes = [];
  let used = 0;
  let lis = [];
  const flushLis = (key) => {
    if (!lis.length) return;
    nodes.push(
      <ul key={key} className="sim-dashes">
        {lis}
      </ul>
    );
    lis = [];
  };

  parts.forEach((part, i) => {
    if (used >= chars) return;
    const len = partLen(part);
    const take = Math.min(len, chars - used);
    const complete = take >= len;
    const caret = !done && take === chars - used && take < len;
    used += take;

    if (part.kind === "li") {
      lis.push(
        <li key={`li-${i}`}>
          {part.text.slice(0, take)}
          {caret ? <Caret /> : null}
        </li>
      );
      if (!complete) flushLis(`ul-${i}`);
      return;
    }

    flushLis(`ul-${i}`);
    if (part.kind === "pair") {
      nodes.push(<TypedPair key={`pair-${i}`} title={part.title} text={part.text} take={take} caret={caret || (!done && complete && used === chars)} />);
      return;
    }
    if (part.kind === "h") {
      nodes.push(
        <strong key={`h-${i}`} className="sim-h">
          {part.text.slice(0, take)}
          {caret ? <Caret /> : null}
        </strong>
      );
      return;
    }
    nodes.push(
      <p key={`p-${i}`}>
        {part.text.slice(0, take)}
        {caret ? <Caret /> : null}
      </p>
    );
  });
  flushLis("ul-end");

  return (
    <div className="ws-text-result" ref={boxRef}>
      {chars === 0 ? (
        <p>
          <Caret />
        </p>
      ) : (
        nodes
      )}
    </div>
  );
}

function stepsOf(lesson) {
  if (lesson.steps?.length) return lesson.steps;
  return [lesson];
}

function stackStart(steps, index) {
  let i = index;
  while (i > 0 && steps[i]?.stack) i -= 1;
  return i;
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
  const [locked, setLocked] = useState({});

  const steps = found ? stepsOf(found.lesson) : [];
  const step = steps[stepIndex] || null;

  useEffect(() => {
    setStepIndex(0);
    setComplete(false);
    setStars(0);
    setLocked({});
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
    if (!step?.stack) return;
    const el = document.getElementById(`ls-${stepIndex}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [stepIndex, step?.stack]);

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
  const mixSeed = `${guide.id}:${unitId}:${lesson.id}:${stepIndex}`;
  const quizChoices = step.options?.length
    ? step.keepOrder
      ? step.options.map((value, source) => ({ value, source }))
      : shuffleList(step.options, `${mixSeed}:quiz`)
    : [];
  const quizAnswerAt = quizChoices.findIndex((c) => c.source === step.answer);
  const multiAnswerAt = new Set(
    (Array.isArray(step.answers) ? step.answers : [])
      .filter((i) => typeof i === "number")
      .map((src) => quizChoices.findIndex((c) => c.source === src))
      .filter((i) => i >= 0)
  );
  const bank = shuffleList(step.bank || step.answers || [], `${mixSeed}:bank`).map((c) => c.value);
  const parts = step.type === "fill" ? (step.template || "").split("{blank}") : [];
  const startIdx = stackStart(steps, stepIndex);
  const priorStack = steps.slice(startIdx, stepIndex);
  const fillPage = step.type === "fill";

  function choicesFor(s, abs) {
    const seed = `${guide.id}:${unitId}:${lesson.id}:${abs}`;
    if (!s.options?.length) return [];
    if (s.keepOrder) return s.options.map((value, source) => ({ value, source }));
    return shuffleList(s.options, `${seed}:quiz`);
  }

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
    setLocked((prev) => ({
      ...prev,
      [stepIndex]: { picked, pickedMany, checked, result, fill, fillRevealed },
    }));
    if (stepIndex < steps.length - 1) {
      const next = steps[stepIndex + 1];
      setStepIndex((i) => i + 1);
      if (!next?.stack) window.scrollTo(0, 0);
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
    const ok = picked === quizAnswerAt;
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
    const want = [...multiAnswerAt];
    const missedIdx = want.filter((i) => !pickedMany.includes(i));
    const extraIdx = pickedMany.filter((i) => !want.includes(i));
    const ok = missedIdx.length === 0 && extraIdx.length === 0;
    setChecked(true);
    setResult({
      ok,
      title: ok ? "Respuesta correcta" : missedIdx.length ? "Te faltó marcar algunas" : "Hay opciones de más",
      missed: missedIdx.map((i) => quizChoices[i]?.value),
      extras: extraIdx.map((i) => quizChoices[i]?.value),
      answers: want.map((i) => quizChoices[i]?.value),
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
    <div className={`app-shell lesson-player${fillPage ? " fill-page" : ""}`}>
      <div className="phone-col lesson-top">
        {fillPage ? (
          <button className="icon-btn close-x" onClick={() => navigate(`/guides/${guide.id}`)} aria-label="Cerrar">
            <X size={18} />
          </button>
        ) : (
          <button className="icon-btn" onClick={goPrev} aria-label="Atrás">
            <ChevronLeft />
          </button>
        )}
        {fillPage ? (
          <span className="lesson-progress" />
        ) : (
          <div className="progress-bar lesson-progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        )}
        {fillPage ? (
          <span />
        ) : (
          <button className="icon-btn close-x" onClick={() => navigate(`/guides/${guide.id}`)} aria-label="Cerrar">
            <X size={18} />
          </button>
        )}
      </div>

      <div className="phone-col lesson-body">
        {priorStack.map((s, k) => {
          const abs = startIdx + k;
          const fr = locked[abs] || {};
          const chs = choicesFor(s, abs);
          const ansAt = chs.findIndex((c) => c.source === s.answer);
          return (
            <div key={abs} className="lesson-stack-item is-past">
              {s.doneBanner ? (
                <div className="done-banner">
                  <div className="done-workspace-head">✦ Con tecnología de AI Workspace</div>
                  <p className="done-kicker">Tarea completada</p>
                  <h2>{s.doneBanner}</h2>
                  {s.doneLead ? <p className="muted">{s.doneLead}</p> : null}
                  <button
                    type="button"
                    className="repeat-btn"
                    onClick={() => setStepIndex(abs > 0 ? abs - 1 : abs)}
                  >
                    <RotateCcw size={16} /> Repetir tarea
                  </button>
                </div>
              ) : null}
              {s.type !== "fill" && s.title && !s.hideTitle && s.type === "content" ? (
                <h1 className="lesson-title">{s.title}</h1>
              ) : null}
              <Blocks
                blocks={s.blocks}
                fallbackTitle={s.title}
                navigate={navigate}
                guideId={guide.id}
                onPlayTrack={muteLessonVoice}
              />
              {s.type === "quiz" ? (
                <div className="quiz-wrap">
                  {s.question ? <p className="quiz-q">{s.question}</p> : null}
                  <div className="quiz-stack">
                    {chs.map((choice, i) => {
                      let cls = "quiz-option";
                      if (fr.picked === i) cls += " selected";
                      if (fr.checked && i === ansAt) cls += " correct";
                      if (fr.checked && fr.picked === i && i !== ansAt) cls += " wrong";
                      return (
                        <button key={`${choice.source}:${choice.value}`} className={cls} type="button" disabled>
                          {choice.value}
                        </button>
                      );
                    })}
                  </div>
                  <FeedbackPanel result={fr.result} />
                </div>
              ) : null}
            </div>
          );
        })}
        <div id={`ls-${stepIndex}`} className="lesson-stack-item">
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

        {step.type !== "fill" && step.title && !step.hideTitle && !(step.doneBanner && step.type === "content") ? (
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
              {quizChoices.map((choice, i) => {
                let cls = "quiz-option";
                if (picked === i) cls += " selected";
                if (checked && i === quizAnswerAt) cls += " correct";
                if (checked && picked === i && i !== quizAnswerAt) cls += " wrong";
                return (
                  <button
                    key={`${choice.source}:${choice.value}`}
                    className={cls}
                    onClick={() => !checked && setPicked(i)}
                  >
                    {choice.value}
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
            {quizChoices.map((choice, i) => {
              let cls = "quiz-option multi";
              const isRight = multiAnswerAt.has(i);
              if (pickedMany.includes(i)) cls += " selected";
              if (checked && isRight) cls += " correct";
              if (checked && pickedMany.includes(i) && !isRight) cls += " wrong";
              if (checked && isRight && !pickedMany.includes(i)) cls += " missed";
              return (
                <button key={`${choice.source}:${choice.value}`} className={cls} onClick={() => toggleMany(i)}>
                  <span className={`tick${pickedMany.includes(i) ? " on" : ""}`} />
                  {choice.value}
                </button>
              );
            })}
            <FeedbackPanel result={result} />
          </div>
        )}

        {step.type === "fill" && (
          <div>
            <h1 className="lesson-title">{step.title}</h1>
            <FillLead text={step.lead} />
            <div className="workspace-card">
              <div className="workspace-head">✦ Con tecnología de AI Workspace</div>
              <div className="workspace-brand">
                <WorkspaceBrand name={step.workspaceBrand || guide.title || "Claude"} />
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
                            className={`ws-slot${fill[i] ? " filled" : ""}${fillWrong && fill[i] && fill[i].toLowerCase() !== step.answers[i].toLowerCase() ? " bad" : ""}${fillSolved && fill[i] ? " ok" : ""}`}
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
                    <p className="ws-user-prompt">{filledPrompt(step, fill)}</p>
                  </div>
                  {step.resultImage || step.resultVideo || step.simReply || step.lyriaPrompt ? (
                    <div className="ws-row">
                      <span className="ws-ai-mark">
                        <AiIcon id={brandIconId(step.workspaceBrand || guide.title)} size={18} />
                      </span>
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
                        <SimReply reply={enrichSimReply(step)} animate />
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
              </>
            ) : null}
            {fillWrong ? (
              <div className="fill-wrong almost">
                <span className="fill-wrong-icon" aria-hidden>
                  <Check size={18} strokeWidth={3} />
                </span>
                <div>
                  <strong>Casi correcto</strong>
                  <p>¡Ya casi! Revisa los pasos e inténtalo de nuevo</p>
                </div>
              </div>
            ) : fillSolved && !fillRevealed ? (
              <FeedbackPanel result={result} />
            ) : null}
          </div>
        )}
        </div>
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
