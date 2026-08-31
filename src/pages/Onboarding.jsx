import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { quizSteps } from "../data/quiz.js";
import { postAuthPath } from "../data/offer.js";
import { useStore } from "../store.jsx";
import Logo from "../components/Logo.jsx";

export default function Onboarding() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { session, isRegistered, registerAccount, signIn, paid, isRoot, offer } = useStore();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState(params.get("email") || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const current = quizSteps[step];
  const total = quizSteps.length;
  const pct = ((step + 1) / total) * 100;

  const profile = useMemo(() => answers, [answers]);

  useEffect(() => {
    if (current?.type !== "loading") return undefined;
    const t = window.setTimeout(() => setStep((s) => s + 1), 1600);
    return () => window.clearTimeout(t);
  }, [current]);

  if (session) return <Navigate to={postAuthPath({ isRoot, paid, offer })} replace />;

  function pick(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep((s) => s + 1);
  }

  function back() {
    if (step === 0) {
      navigate("/auth/signin");
      return;
    }
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  function onCreate(e) {
    e.preventDefault();
    const mail = email.trim();
    if (name.trim().length < 2) {
      setError("Escribe tu nombre.");
      return;
    }
    if (!mail.includes("@") || !mail.includes(".")) {
      setError("Checa el correo.");
      return;
    }
    if (isRegistered(mail)) {
      setError("Ese correo ya tiene cuenta. Entra con tu clave.");
      return;
    }
    if (password.length < 4) {
      setError("La clave debe tener al menos 4 caracteres.");
      return;
    }
    const result = registerAccount({
      email: mail,
      password,
      name: name.trim(),
      profile,
    });
    if (!result.ok) {
      setError(result.reason === "exists" ? "Ese correo ya tiene cuenta." : "No se pudo crear la cuenta.");
      return;
    }
    localStorage.setItem("mauri.app.onboarded", "1");
    signIn(mail, { name: name.trim(), password, profile });
  }

  return (
    <div className="quiz-funnel">
      <header className="quiz-funnel-bar">
        <button type="button" className="quiz-funnel-back" onClick={back} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <div className="progress-bar quiz-funnel-progress">
          <span style={{ width: `${pct}%` }} />
        </div>
      </header>

      <div className="quiz-funnel-body">
        {current.type === "photos" ? (
          <>
            <p className="quiz-funnel-kicker">{current.kicker}</p>
            <h1>{current.q}</h1>
            {email ? (
              <p className="muted" style={{ textAlign: "center", fontSize: 14 }}>
                {email} aún no tiene cuenta. Completa el desafío para registrarte.
              </p>
            ) : null}
            <div className="quiz-photo-row">
              {current.options.map((opt) => (
                <button key={opt.value} type="button" className="quiz-photo-card" onClick={() => pick(opt.value)}>
                  <img src={opt.image} alt="" />
                  <span className="quiz-photo-cta">
                    {opt.label}
                    <ChevronRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : null}

        {current.type === "list" ? (
          <>
            <Logo height={28} />
            <h1>{current.q}</h1>
            <div className="quiz-funnel-options">
              {current.options.map((opt) => (
                <button key={opt} type="button" className="quiz-option" onClick={() => pick(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {current.type === "proof" ? (
          <div className="quiz-proof">
            <div className="quiz-proof-faces" aria-hidden>
              <img src="/quiz/quiz-work-company.png" alt="" />
              <img src="/quiz/quiz-work-freelance.png" alt="" />
              <span>2M+</span>
            </div>
            <h1>{current.title}</h1>
            <p className="muted">{current.body}</p>
            <button type="button" className="ui-primary-button" onClick={() => setStep((s) => s + 1)}>
              Seguir
            </button>
          </div>
        ) : null}

        {current.type === "loading" ? (
          <div className="quiz-loading">
            <div className="quiz-loading-ring" />
            <h1>{current.title}</h1>
            <p className="muted">{current.body}</p>
          </div>
        ) : null}

        {current.type === "account" ? (
          <>
            <p className="quiz-funnel-kicker">{current.kicker}</p>
            <h1>{current.q}</h1>
            <p className="muted" style={{ marginTop: -8, marginBottom: 8 }}>
              {current.body}
            </p>
            <form className="quiz-account-form" onSubmit={onCreate}>
              <div className="field">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  autoComplete="name"
                />
                <label>Nombre</label>
              </div>
              <div className="field">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  autoComplete="email"
                />
                <label>Correo</label>
              </div>
              <div className="field">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  autoComplete="new-password"
                />
                <label>Clave</label>
              </div>
              {error ? <p style={{ color: "var(--color-red-500)", fontSize: 14 }}>{error}</p> : null}
              {isRegistered(email) ? (
                <button
                  type="button"
                  className="link"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  onClick={() => navigate("/auth/signin", { state: { registered: true } })}
                >
                  Ya tengo cuenta. Entrar
                </button>
              ) : null}
              <button className="ui-primary-button" type="submit">
                Crear cuenta y entrar
              </button>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}
