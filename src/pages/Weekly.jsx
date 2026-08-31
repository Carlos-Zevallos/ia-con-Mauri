import { Link } from "react-router-dom";
import { useStore } from "../store.jsx";

export default function Weekly() {
  const { weekDays, weekGoal, user } = useStore();
  const days = weekDays();
  const lessons = days.reduce((a, d) => a + d.lessons, 0);
  const prompts = days.reduce((a, d) => a + d.prompts, 0);
  const max = Math.max(3, ...days.map((d) => d.lessons + d.prompts));
  const pct = Math.min(100, Math.round((lessons / weekGoal) * 100));

  return (
    <div className="desktop-layout" style={{ paddingTop: 8 }}>
      <h1 className="section-title">Avances semanales</h1>
      <p className="muted" style={{ margin: "8px 0 20px" }}>
        {user.name}, esta semana cuenta lo que terminas, no lo que guardas para “después”.
      </p>

      <div className="card" style={{ padding: 16, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Meta de la semana</strong>
          <span className="muted">{lessons}/{weekGoal} caps</span>
        </div>
        <div className="progress-bar" style={{ marginTop: 10, height: 10 }}>
          <span style={{ width: `${pct}%` }} />
        </div>
        <p className="muted" style={{ marginTop: 8, fontSize: 13 }}>
          {pct >= 100 ? "Meta cubierta. Si quieres, tira otro cap." : `Te faltan ${Math.max(0, weekGoal - lessons)} caps para la meta.`}
        </p>
      </div>

      <div className="week-grid">
        {days.map((d) => (
          <div key={d.key} className={`week-day${d.isToday ? " today" : ""}`}>
            <div className="week-label">{d.label}</div>
            <div className="week-bar-wrap">
              <div
                className="week-bar"
                style={{ height: `${Math.max(8, ((d.lessons + d.prompts) / max) * 72)}px` }}
              />
            </div>
            <div className="week-count">{d.lessons + d.prompts}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "18px 0" }}>
        <div className="card" style={{ padding: 14 }}>
          <div className="muted" style={{ fontSize: 12, fontWeight: 800 }}>CAPS</div>
          <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)" }}>{lessons}</div>
        </div>
        <div className="card" style={{ padding: 14 }}>
          <div className="muted" style={{ fontSize: 12, fontWeight: 800 }}>PROMPTS USADOS</div>
          <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)" }}>{prompts}</div>
        </div>
      </div>

      <h2 style={{ fontSize: 16, marginBottom: 10 }}>Día a día</h2>
      <div style={{ display: "grid", gap: 8, marginBottom: 20 }}>
        {days.map((d) => (
          <div key={d.key} className="card" style={{ padding: 12, display: "flex", justifyContent: "space-between" }}>
            <div>
              <strong>{d.name}</strong>
              {d.isToday ? <span className="chip" style={{ marginLeft: 8 }}>hoy</span> : null}
            </div>
            <span className="muted">{d.lessons} caps · {d.prompts} prompts</span>
          </div>
        ))}
      </div>

      <Link to="/guides/chatgpt/u1/conoce?isLastLesson=false&isAudio=false&hasAudio=true" className="ui-primary-button" style={{ display: "block", textAlign: "center" }}>
        Seguir un cap ahora
      </Link>
    </div>
  );
}
