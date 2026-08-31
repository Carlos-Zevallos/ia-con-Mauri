import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { findGuide, flattenLessons, nextLessonGuide } from "../data.js";
import { useStore } from "../store.jsx";
import CertSheet from "../components/CertSheet.jsx";
import { certPublicPath, makeCertId, saveCert } from "../lib/certs.js";

const COURSE_META = {
  gemini: { hours: 4 },
  chatgpt: { hours: 6 },
  claude: { hours: 5 },
  grok: { hours: 3 },
  midjourney: { hours: 6 },
  dalle: { hours: 3 },
  diseno: { hours: 4 },
  lovable: { hours: 4 },
  jasper: { hours: 6 },
  deepseek: { hours: 5 },
  perplexity: { hours: 3 },
  sd: { hours: 4 },
  nano: { hours: 2 },
  canva: { hours: 3 },
  kling: { hours: 4 },
};

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function issueDate(d = new Date()) {
  return `${d.getDate()} de ${MONTHS[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function Certificate() {
  const { guideId } = useParams();
  const guide = findGuide(guideId);
  const { user, paid, isDone, isRoot } = useStore();
  const lessons = guide ? flattenLessons(guide) : [];
  const pathDone = lessons.length > 0 && lessons.every((l) => isDone(`${guide.id}:${l.unitId}:${l.id}`));
  const record = guide
    ? {
        id: makeCertId(guide.id),
        guideId: guide.id,
        title: guide.title,
        name: (user?.name || "Estudiante").trim().toUpperCase(),
        hours: COURSE_META[guide.id]?.hours || Math.max(4, Math.round((guide.minutes || 60) / 60)),
        issued: issueDate(),
      }
    : null;
  const verifyUrl = record ? certPublicPath(record) : "";
  const nextCourse = nextLessonGuide(guideId);

  useEffect(() => {
    if (record) saveCert(record);
  }, [record?.id, record?.guideId, record?.name, record?.hours, record?.issued, record?.title]);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  if (!isRoot && !paid) {
    return <Navigate to={`/pay?guide=${guideId}`} replace />;
  }

  if (!isRoot && !pathDone) {
    return <Navigate to={`/guides/${guideId}`} replace />;
  }

  return (
    <div className="cert-page">
      <CertSheet record={record} verifyUrl={verifyUrl} />
      <div className="cert-actions">
        <Link to={verifyUrl} className="ui-primary-button" style={{ textAlign: "center" }}>
          Ver datos del diploma
        </Link>
        {nextCourse ? (
          <Link to={`/guides/${nextCourse.id}`} className="ui-primary-button" style={{ textAlign: "center" }}>
            Saltar al siguiente curso
          </Link>
        ) : (
          <Link to="/guides" className="ui-primary-button" style={{ textAlign: "center" }}>
            Ver todas las rutas
          </Link>
        )}
        <Link to={`/guides/${guideId}`} className="cert-back">
          Volver a la ruta
        </Link>
      </div>
    </div>
  );
}
