import { OfficialMark, hasOfficialMark } from "./aiLogos.jsx";

/** Official brand marks for the diploma seal. Stroke/fill uses coral so it reads on the outlined badge. */

const INK = "#FF5A3C";

export default function CertSealMark({ id }) {
  if (hasOfficialMark(id)) {
    return <OfficialMark id={id} fill={INK} />;
  }

  if (id === "diseno") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <rect x="7.4" y="9.2" width="14.6" height="14.6" rx="3" />
        <rect x="14" y="12" width="14.6" height="14.6" rx="3" />
      </g>
    );
  }

  return <circle cx="18" cy="18" r="8" fill={INK} />;
}
