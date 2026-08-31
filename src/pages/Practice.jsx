import { Link } from "react-router-dom";
import { practiceScenarios } from "../data.js";

export default function Practice() {
  return (
    <div className="desktop-layout" style={{ paddingTop: 8 }}>
      <h1 className="section-title" style={{ fontFamily: "var(--font-display)" }}>Cancha</h1>
      <p className="muted" style={{ margin: "8px 0 20px" }}>
        Casos inventados para ensayar lo que viste en las rutas. Nadie te califica.
      </p>
      <div style={{ display: "grid", gap: 12 }}>
        {practiceScenarios.map((item) => (
          <div key={item.id} className="card" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 style={{ fontSize: 18 }}>{item.title}</h2>
              <span className="chip">+{item.xp} pts</span>
            </div>
            <p style={{ margin: "10px 0 16px" }}>{item.prompt}</p>
            <Link
              to="/ai-tools/chatgpt"
              state={{ prompt: item.prompt }}
              className="ui-primary-button"
              style={{ display: "block", textAlign: "center" }}
            >
              Probar ahora
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
