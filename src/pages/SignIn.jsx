import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../components/Logo.jsx";
import { useStore } from "../store.jsx";
import { postAuthPath } from "../data/offer.js";

export default function SignIn() {
  const { signIn, session, isRegistered, verifyPassword, paid, isRoot, offer } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  if (session) return <Navigate to={postAuthPath({ isRoot, paid, offer })} replace />;

  function goQuiz(nextEmail) {
    const params = new URLSearchParams();
    if (nextEmail) params.set("email", nextEmail);
    navigate(`/onboarding?${params.toString()}`, { state: { fromLogin: true } });
  }

  function enterRoot() {
    signIn("root@mauri.local", { isRoot: true, password: "root" });
    navigate("/home", { replace: true });
  }

  function onSubmit(e) {
    e.preventDefault();
    const mail = email.trim();
    if (mail.toLowerCase() === "root@mauri.local" && password === "root") {
      enterRoot();
      return;
    }
    if (!mail.includes("@") || !mail.includes(".")) {
      setError("Checa el correo.");
      return;
    }
    if (!isRegistered(mail)) {
      goQuiz(mail);
      return;
    }
    if (password.length < 4 || !verifyPassword(mail, password)) {
      setError("Ingresa una clave válida.");
      return;
    }
    signIn(mail, { password });
    navigate(postAuthPath({ isRoot: false, paid, offer }), { replace: true });
  }

  return (
    <div className="auth-page phone-col">
      <Logo height={40} />
      <h1 style={{ fontFamily: "var(--font-display)" }}>Hola de nuevo</h1>
      {location.state?.registered ? (
        <p className="muted" style={{ marginTop: -12, marginBottom: 8, alignSelf: "stretch" }}>
          Cuenta lista. Entra con tu correo y clave.
        </p>
      ) : null}
      <form onSubmit={onSubmit} style={{ width: "100%", display: "grid", gap: 16 }}>
        <div className="field">
          <input
            id="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            autoComplete="email"
          />
          <label htmlFor="email">Correo</label>
        </div>
        <div className="field">
          <input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder=" "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            autoComplete="current-password"
            style={{ paddingRight: 44 }}
          />
          <label htmlFor="password">Clave</label>
          <button
            type="button"
            className="field-eye"
            onClick={() => setShowPass((v) => !v)}
            aria-label={showPass ? "Ocultar clave" : "Ver clave"}
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <div style={{ textAlign: "right" }}>
          <Link to="/auth/reset-password" className="link" style={{ fontSize: 14 }}>
            ¿Se te olvidó?
          </Link>
        </div>
        {error ? (
          <p style={{ color: "var(--color-red-500)", fontSize: 14 }}>{error}</p>
        ) : null}
        <button className="ui-primary-button" type="submit">
          Entrar
        </button>
      </form>
      <p className="muted" style={{ marginTop: 28, fontSize: 14 }}>
        ¿No tienes cuenta?{" "}
        <button type="button" className="link" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }} onClick={() => goQuiz()}>
          Empieza el desafío
        </button>
      </p>
    </div>
  );
}
