import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Lock } from "lucide-react";
import { useStore } from "../store.jsx";
import { findGuide } from "../data.js";
import Logo from "../components/Logo.jsx";
import PremiumPaywall from "../components/PremiumPaywall.jsx";

export default function Pay() {
  const { paid } = useStore();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const guideId = params.get("guide") || "chatgpt";
  const guide = findGuide(guideId);
  const [open, setOpen] = useState(true);

  if (paid) {
    return (
      <div className="desktop-layout phone-col" style={{ paddingTop: 16 }}>
        <Logo height={28} />
        <h1 className="section-title" style={{ marginTop: 16 }}>Plan activo</h1>
        <p className="muted">Premium desbloquea el resto de cada ruta. El diploma se libera al terminar el bloque.</p>
        <Link to={`/guides/${guideId}`} className="ui-primary-button" style={{ display: "block", textAlign: "center", marginTop: 16 }}>
          Volver a la ruta
        </Link>
      </div>
    );
  }

  return (
    <div className="desktop-layout phone-col" style={{ paddingTop: 8 }}>
      <button
        type="button"
        className="link"
        onClick={() => navigate(-1)}
        style={{ background: "none", border: "none", cursor: "pointer", marginBottom: 12 }}
      >
        ← Volver
      </button>
      <div className="card" style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800 }}>
          <Lock size={18} /> Premium · {guide?.title || "IA con Mauri"}
        </div>
        <p className="muted" style={{ fontSize: 14, marginTop: 10 }}>
          Las 2 primeras lecciones de cada IA son gratis. Premium abre la tercera y el resto. El diploma se libera al terminar cada bloque.
        </p>
        <button className="ui-primary-button" type="button" style={{ marginTop: 16 }} onClick={() => setOpen(true)}>
          Activar Premium
        </button>
      </div>
      <PremiumPaywall
        open={open}
        guideTitle={guide?.title}
        onClose={() => setOpen(false)}
        onPaid={() => navigate(`/guides/${guideId}`, { replace: true })}
      />
    </div>
  );
}
