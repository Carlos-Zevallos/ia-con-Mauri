import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { exploreLessonCatalog } from "../data.js";
import CoverArt from "../components/CoverArt.jsx";
import AiIcon from "../components/AiIcon.jsx";

export default function Explore() {
  const navigate = useNavigate();

  return (
    <div className="desktop-layout explore-ai-page" style={{ paddingTop: 8 }}>
      <button type="button" className="link explore-back" onClick={() => navigate(-1)}>
        <ChevronLeft size={18} /> Volver
      </button>
      <h1 className="section-title" style={{ fontFamily: "var(--font-display)", margin: "8px 0 6px" }}>
        Rutas para practicar
      </h1>
      <p className="muted" style={{ marginBottom: 18, fontSize: 14 }}>
        Acceso rápido a cada curso: lecciones, horas y el oficio, como en Coursiv.
      </p>

      <div className="explore-ai-grid">
        {exploreLessonCatalog.map((item) => (
          <Link key={item.id} to={item.to} className="card explore-ai-card">
            <div className="explore-ai-cover">
              <CoverArt id={item.coverId} size="sm" />
            </div>
            <div className="explore-ai-body">
              <div className="explore-ai-title">
                <AiIcon id={item.coverId} size={22} />
                {item.title}
              </div>
              <p className="muted explore-ai-meta">
                {item.lessons} lecciones · {item.hours} horas
              </p>
              <div className="progress-bar">
                <span style={{ width: `${item.progress}%` }} />
              </div>
              <div className="explore-ai-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
