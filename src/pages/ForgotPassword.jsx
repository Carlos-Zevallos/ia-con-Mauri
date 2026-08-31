import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo.jsx";

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="auth-page phone-col">
      <Logo height={36} />
      <h1 style={{ fontFamily: "var(--font-display)" }}>Nueva clave</h1>
      <p className="muted" style={{ marginTop: -12, marginBottom: 20 }}>
        Te mandamos un enlace para inventar una clave nueva. Nada de drama.
      </p>
      {sent ? (
        <div className="card" style={{ padding: 16, width: "100%" }}>
          <strong>Revisa tu bandeja.</strong>
          <p className="muted" style={{ marginTop: 8 }}>
            Si {email} está registrado, el correo llega en un rato.
          </p>
        </div>
      ) : (
        <form
          style={{ width: "100%", display: "grid", gap: 16 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="field">
            <input
              placeholder=" "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Correo</label>
          </div>
          <button className="ui-primary-button">Enviar enlace</button>
        </form>
      )}
      <Link to="/auth/signin" className="link" style={{ marginTop: 24 }}>
        Volver a entrar
      </Link>
    </div>
  );
}
