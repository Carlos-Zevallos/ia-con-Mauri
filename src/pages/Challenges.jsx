import { Link, useNavigate, useParams } from "react-router-dom";
import { challenges } from "../data.js";
import { todayFor } from "../data/daily.js";
import LessonScene from "../components/LessonScene.jsx";
import { useStore } from "../store.jsx";

export default function Challenges() {
  const { challengeId } = useParams();
  const selected = challenges.find((c) => c.id === challengeId) || challenges[0];
  const today = todayFor(selected);
  const navigate = useNavigate();
  const { logPromptUse } = useStore();

  function startToday() {
    logPromptUse();
    navigate(`/ai-tools/${today.tool}`, { state: { prompt: today.prompt } });
  }

  return (
    <div className="desktop-layout" style={{ paddingTop: 8 }}>
      <h1 className="section-title" style={{ fontFamily: "var(--font-display)" }}>Retos</h1>
      <p className="muted" style={{ margin: "8px 0 20px" }}>
        Un rato corto. Una idea nueva. Sin menú infinito cada mañana.
      </p>

      <div className="card challenge-card" style={{ marginBottom: 20 }}>
        <LessonScene scene={today.scene} caption={today.title} src={today.image} />
        <div className="challenge-body">
          <div className="challenge-kicker">
            {selected.title} · DÍA {selected.currentDay} / {selected.days}
          </div>
          <h2>{today.title}</h2>
          <p>{today.body}</p>
          <div className="challenge-prompt">
            <div className="muted" style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>
              PEDIDO DE HOY
            </div>
            <p>{today.prompt}</p>
          </div>
          <div className="progress-bar" style={{ margin: "14px 0" }}>
            <span style={{ width: `${(selected.currentDay / selected.days) * 100}%` }} />
          </div>
          <button className="ui-primary-button" type="button" onClick={startToday}>
            Hacer el reto de hoy
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {challenges.map((c) => {
          const day = todayFor(c);
          return (
            <Link
              key={c.id}
              to={`/challenges/${c.id}`}
              className="card"
              style={{
                padding: 14,
                borderColor: c.id === selected.id ? "var(--color-brand-500)" : undefined,
              }}
            >
              <div style={{ fontWeight: 800 }}>{c.title}</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
                Día {c.currentDay}: {day.title}
              </div>
              <div className="muted" style={{ fontSize: 13 }}>
                {c.days} días · ~{c.minutes} min/día
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
