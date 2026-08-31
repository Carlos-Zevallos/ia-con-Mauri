import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { lessonGuides } from "../data.js";
import CoverArt from "../components/CoverArt.jsx";
import AiIcon from "../components/AiIcon.jsx";

const filters = ["Todas", "Texto y razonamiento", "Visual y video", "Producto"];

export default function Guides() {
  const [filter, setFilter] = useState("Todas");
  const list = useMemo(
    () => (filter === "Todas" ? lessonGuides : lessonGuides.filter((g) => g.subtitle === filter)),
    [filter]
  );

  return (
    <div className="desktop-layout" style={{ paddingTop: 8 }}>
      <h1 className="section-title" style={{ marginBottom: 16, fontFamily: "var(--font-display)" }}>Rutas</h1>
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 16 }}>
        {filters.map((f) => (
          <button
            key={f}
            className={`chip${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
        }}
      >
        {list.map((guide) => (
          <Link key={guide.id} to={`/guides/${guide.id}`} className="card">
            <CoverArt id={guide.id} />
            <div style={{ padding: 14 }}>
              <div className="muted" style={{ fontSize: 12, fontWeight: 700 }}>
                {guide.subtitle}
              </div>
              <h2 style={{ fontSize: 18, marginTop: 2, display: "flex", alignItems: "center", gap: 8 }}>
                <AiIcon id={guide.id} size={28} />
                {guide.title}
              </h2>
              <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>{guide.blurb}</p>
              <div className="progress-bar" style={{ marginTop: 12 }}>
                <span style={{ width: `${guide.progress}%` }} />
              </div>
              <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                {guide.units} bloques · {guide.minutes} min · {guide.progress}%
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
