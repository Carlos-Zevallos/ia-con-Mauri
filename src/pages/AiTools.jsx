import { Link } from "react-router-dom";
import { aiTools } from "../data.js";
import { promptLibrary } from "../data/prompts.js";
import { useStore } from "../store.jsx";
import CoverArt from "../components/CoverArt.jsx";
import AiIcon from "../components/AiIcon.jsx";

const cats = [...new Set(aiTools.map((t) => t.category))];

export default function AiTools() {
  const { user } = useStore();

  return (
    <div className="desktop-layout" style={{ paddingTop: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <h1 className="section-title" style={{ fontFamily: "var(--font-display)" }}>Taller</h1>
        <span className="chip">{user.tokens} fichas hoy</span>
      </div>
      <p className="muted" style={{ margin: "8px 0 20px" }}>
        Prueba ideas aquí. Es un simulador local, sin cuentas extra.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <Link
          to="/prompts"
          className="card"
          style={{ padding: 16, background: "var(--color-brand-100)", borderColor: "transparent" }}
        >
          <div style={{ fontWeight: 800 }}>Biblioteca de prompts</div>
          <p className="muted" style={{ marginTop: 4 }}>{promptLibrary.length} plantillas del paquete</p>
        </Link>
        <Link to="/ai-practice" className="card" style={{ padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Cancha</div>
          <p className="muted" style={{ marginTop: 4 }}>Casos cortos para ensayar</p>
        </Link>
      </div>
      {cats.map((cat) => (
        <section key={cat} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, marginBottom: 10 }}>{cat}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 10,
            }}
          >
            {aiTools
              .filter((t) => t.category === cat)
              .map((tool) => (
                <Link key={tool.id} to={`/ai-tools/${tool.id}`} className="card" style={{ overflow: "hidden" }}>
                  <CoverArt id={tool.id} size="sm" />
                  <div style={{ padding: 14, display: "flex", gap: 10, alignItems: "center" }}>
                    <AiIcon id={tool.id} size={32} />
                    <div>
                      <div style={{ fontWeight: 800 }}>{tool.name}</div>
                      <p className="muted" style={{ fontSize: 13, marginTop: 2 }}>{tool.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
