import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Library, Zap } from "lucide-react";
import { challenges, flattenLessons, industryGuides, lessonGuides } from "../data.js";
import { todayFor } from "../data/daily.js";
import { useStore } from "../store.jsx";
import { lessonKey } from "../lib/progress.js";
import CoverArt from "../components/CoverArt.jsx";
import AiIcon from "../components/AiIcon.jsx";
import LessonScene from "../components/LessonScene.jsx";

function GuideMini({ guide }) {
  return (
    <Link
      to={`/guides/${guide.id}`}
      className="card"
      style={{ minWidth: 168, width: 168, flexShrink: 0 }}
    >
      <CoverArt id={guide.id} size="sm" />
      <div style={{ padding: 12 }}>
            <div style={{ fontWeight: 800, display: "flex", alignItems: "center", gap: 6 }}>
              <AiIcon id={guide.id} size={22} />
              {guide.title}
            </div>
        <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
          {guide.subtitle}
        </div>
        <div className="progress-bar" style={{ marginTop: 10 }}>
          <span style={{ width: `${guide.progress}%` }} />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const { user, paid, isRoot, isDone } = useStore();
  const ongoing = lessonGuides.find((g) => g.progress > 0) || lessonGuides[0];
  const ongoingLessons = flattenLessons(ongoing);
  const firstIncomplete =
    ongoingLessons.find((l) => !isDone(lessonKey(ongoing.id, l.unitId, l.id))) || ongoingLessons[0];
  const pathDone =
    ongoingLessons.length > 0 &&
    ongoingLessons.every((l) => isDone(lessonKey(ongoing.id, l.unitId, l.id)));
  const continueTo = pathDone
    ? paid || isRoot
      ? `/guides/${ongoing.id}/certificate`
      : `/guides/${ongoing.id}`
    : `/guides/${ongoing.id}/${firstIncomplete.unitId}/${firstIncomplete.id}`;
  const challenge = challenges[0];
  const today = todayFor(challenge);

  return (
    <div className="desktop-layout" style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 8 }}>
      <section>
        <p className="muted" style={{ fontWeight: 700, fontSize: 14 }}>
          Qué bueno verte
        </p>
        <h1 className="section-title" style={{ fontSize: 28, fontFamily: "var(--font-display)" }}>
          {user.name}
        </h1>
      </section>

      {!paid && !isRoot ? (
        <Link
          to="/offer/wheel"
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            background: "#fff4e8",
            borderColor: "#ffd9b3",
          }}
        >
          <div>
            <div style={{ fontWeight: 800 }}>2 lecciones gratis en cada IA</div>
            <div className="muted" style={{ fontSize: 13 }}>
              Gira la ruleta y activa Premium para el resto de la ruta y el diploma.
            </div>
          </div>
          <ArrowRight size={18} color="#FF5A3C" />
        </Link>
      ) : null}

      <Link
        to="/challenges"
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 16px",
          background: "#ffe8e3",
          borderColor: "#ffcbbf",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Zap color="#FF5A3C" fill="#FF5A3C" />
          <div>
            <div style={{ fontWeight: 800 }}>{user.streak} días seguidos</div>
            <div className="muted" style={{ fontSize: 13 }}>
              Hoy también cuenta. Entra al reto del día.
            </div>
          </div>
        </div>
        <ArrowRight size={18} color="#FF5A3C" />
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Link to="/avances" className="card" style={{ padding: 14 }}>
          <CalendarDays size={20} color="#FF5A3C" />
          <div style={{ fontWeight: 800, marginTop: 8 }}>Avances semanales</div>
          <p className="muted" style={{ fontSize: 13 }}>Caps y prompts de esta semana</p>
        </Link>
        <Link to="/prompts" className="card" style={{ padding: 14 }}>
          <Library size={20} color="#FF5A3C" />
          <div style={{ fontWeight: 800, marginTop: 8 }}>Biblioteca</div>
          <p className="muted" style={{ fontSize: 13 }}>Paquete completo de prompts</p>
        </Link>
      </div>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 className="section-title" style={{ fontSize: 18 }}>Sigue donde ibas</h2>
          <Link to="/guides" className="link" style={{ fontSize: 14 }}>Ver rutas</Link>
        </div>
        <Link
          to={continueTo}
          className="card"
          style={{ display: "flex", overflow: "hidden" }}
        >
          <div style={{ width: 100, flexShrink: 0 }}>
            <CoverArt id={ongoing.id} size="sm" />
          </div>
          <div style={{ padding: 14, flex: 1 }}>
            <div className="muted" style={{ fontSize: 12, fontWeight: 700 }}>
              {ongoing.title}
            </div>
            <div style={{ fontWeight: 800, marginTop: 2 }}>
              {pathDone ? "Bloque terminado" : firstIncomplete.title}
            </div>
            <div className="progress-bar" style={{ marginTop: 10 }}>
              <span style={{ width: `${ongoing.progress}%` }} />
            </div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              {ongoing.progress}% listo
            </div>
          </div>
        </Link>
      </section>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 className="section-title" style={{ fontSize: 18 }}>Reto del día</h2>
          <Link to="/challenges" className="link" style={{ fontSize: 14 }}>Todos</Link>
        </div>
        <Link to={`/challenges/${challenge.id}`} className="card challenge-card">
          <LessonScene scene={today.scene} caption={today.title} src={today.image} />
          <div className="challenge-body">
            <div className="challenge-kicker">
              DÍA {challenge.currentDay} DE {challenge.days} · {challenge.minutes} MIN
            </div>
            <h3>{today.title}</h3>
            <p>{today.body}</p>
            <div className="challenge-cta">Hacer el reto →</div>
          </div>
        </Link>
      </section>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h2 className="section-title" style={{ fontSize: 18, margin: 0 }}>
            Rutas para practicar
          </h2>
          <Link to="/guides" className="link" style={{ fontSize: 14, fontWeight: 800 }}>
            Ver todos
          </Link>
        </div>
        <div className="hscroll">
          {lessonGuides.map((g) => (
            <GuideMini key={g.id} guide={g} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
          Según tu rol
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {industryGuides.map((item) => (
            <Link
              key={item.id}
              to="/guides"
              className="card"
              style={{ padding: 14 }}
            >
              <CoverArt id={item.art} size="sm" />
              <div style={{ fontWeight: 800, marginTop: 8 }}>{item.title}</div>
              <div className="muted" style={{ fontSize: 12 }}>{item.lessons} caps</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
