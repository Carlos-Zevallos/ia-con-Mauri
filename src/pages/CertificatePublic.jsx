import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { findGuide } from "../data.js";
import { getCert, iconIdForGuide, saveCert, certPublicPath } from "../lib/certs.js";
import AiIcon from "../components/AiIcon.jsx";
import CertSheet from "../components/CertSheet.jsx";

export default function CertificatePublic() {
  const { certId } = useParams();
  const [params] = useSearchParams();
  const stored = getCert(certId);
  const guideId = stored?.guideId || params.get("g") || "";
  const guide = guideId ? findGuide(guideId) : null;

  const record = {
    id: String(certId || stored?.id || "").toUpperCase(),
    guideId,
    title: stored?.title || params.get("t") || guide?.title || "Curso de IA",
    name: stored?.name || params.get("n") || "ESTUDIANTE",
    hours: Number(stored?.hours || params.get("h") || 4),
    issued: stored?.issued || params.get("d") || "",
  };
  const iconId = iconIdForGuide(record.guideId);
  const publicUrl = record.guideId ? certPublicPath(record) : "";

  useEffect(() => {
    if (record.id && record.guideId) saveCert(record);
  }, [record.id, record.guideId, record.name, record.hours, record.issued, record.title]);

  if (!record.id || !record.guideId) {
    return (
      <div className="cert-page" style={{ paddingTop: 40 }}>
        <h1 className="section-title">Diploma no encontrado</h1>
        <p className="muted">Ese código no coincide con un certificado emitido.</p>
        <Link to="/home" className="cert-back">
          Ir al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cert-page cert-public">
      <div className="cert-verify-card">
        <AiIcon id={iconId} size={48} />
        <div>
          <p className="muted" style={{ fontWeight: 800, letterSpacing: "0.08em", fontSize: 12 }}>
            DIPLOMA VERIFICADO
          </p>
          <h1>{record.title}</h1>
          <p>
            <strong>{record.name}</strong> completó esta ruta · {record.hours} horas
          </p>
          <p className="muted">ID del certificado: {record.id}{record.issued ? ` · ${record.issued}` : ""}</p>
        </div>
      </div>
      <CertSheet record={record} verifyUrl={publicUrl} />
      <div className="cert-actions">
        <Link to={`/guides/${record.guideId}`} className="ui-primary-button" style={{ textAlign: "center" }}>
          Ir al curso
        </Link>
        <Link to="/home" className="cert-back">
          Inicio
        </Link>
      </div>
    </div>
  );
}
