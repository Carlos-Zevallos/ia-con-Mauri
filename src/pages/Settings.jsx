import { useNavigate } from "react-router-dom";
import { useStore } from "../store.jsx";

export default function Settings() {
  const { user, signOut } = useStore();
  const navigate = useNavigate();

  return (
    <div className="desktop-layout phone-col" style={{ paddingTop: 8 }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: "none", border: "none", color: "var(--text-action-info)", fontWeight: 700, cursor: "pointer" }}
      >
        ← Perfil
      </button>
      <h1 className="section-title" style={{ margin: "12px 0 20px", fontFamily: "var(--font-display)" }}>Ajustes</h1>

      <label className="muted" style={{ fontSize: 12, fontWeight: 800 }}>NOMBRE EN EL DIPLOMA</label>
      <div className="field" style={{ margin: "6px 0 16px" }}>
        <input defaultValue={user.name} placeholder=" " />
        <label>Nombre</label>
      </div>

      <label className="muted" style={{ fontSize: 12, fontWeight: 800 }}>CORREO</label>
      <div className="field" style={{ margin: "6px 0 16px" }}>
        <input defaultValue={user.email} placeholder=" " />
        <label>Correo</label>
      </div>

      <label className="muted" style={{ fontSize: 12, fontWeight: 800 }}>IDIOMA</label>
      <select
        defaultValue="es"
        style={{
          width: "100%",
          height: 48,
          marginTop: 6,
          borderRadius: 12,
          border: "1px solid var(--border-primary)",
          padding: "0 10px",
        }}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>

      <div className="card" style={{ padding: 14, marginTop: 24 }}>
        <div style={{ fontWeight: 800 }}>Plan</div>
        <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
          Las 2 primeras lecciones de cada IA son gratis. Premium abre el resto y libera el diploma al terminar cada bloque.
        </p>
        <button className="ui-secondary-btn" style={{ marginTop: 10 }} onClick={() => navigate("/pay")}>
          Ir al pago
        </button>
      </div>

      <button className="ui-primary-button" style={{ marginTop: 20 }} onClick={() => navigate("/profile")}>
        Guardar
      </button>
      <button className="ui-tertiary-btn" style={{ marginTop: 10 }} onClick={() => { signOut(); navigate("/auth/signin"); }}>
        Salir
      </button>
    </div>
  );
}
