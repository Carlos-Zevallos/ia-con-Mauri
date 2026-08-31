import { Link } from "react-router-dom";
import { Bell, CalendarDays, ChevronRight, CreditCard, HelpCircle, Library, Lock, LogOut, Settings } from "lucide-react";
import { certificates } from "../data.js";
import { useStore } from "../store.jsx";

export default function Profile() {
  const { user, signOut, paid, isRoot } = useStore();

  return (
    <div className="desktop-layout phone-col" style={{ paddingTop: 8 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 24 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--color-brand-100)",
            color: "var(--color-brand-500)",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: 24,
            fontFamily: "var(--font-display)",
          }}
        >
          {user.name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <h1 style={{ fontSize: 22, fontFamily: "var(--font-display)" }}>{user.name}</h1>
          <p className="muted">{user.email}{isRoot ? " · root" : ""}</p>
        </div>
      </div>

      <h2 style={{ fontSize: 16, marginBottom: 10 }}>Diplomas</h2>
      <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
        {certificates.map((c) => (
          <Link
            key={c.id}
            to={paid || isRoot ? `/guides/${c.id}/certificate` : `/pay?guide=${c.id}`}
            className="card"
            style={{ padding: 14, opacity: paid ? 1 : 0.85 }}
          >
            <div style={{ fontWeight: 800, display: "flex", alignItems: "center", gap: 8 }}>
              {!paid ? <Lock size={16} /> : null}
              {c.title}
            </div>
            <div className="progress-bar" style={{ marginTop: 8 }}>
              <span style={{ width: `${c.pct}%` }} />
            </div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              {paid || isRoot ? `${c.pct}% · en curso` : "2 lecciones gratis · Premium para el diploma"}
            </div>
          </Link>
        ))}
      </div>

      {[
        { to: "/avances", icon: CalendarDays, label: "Avances semanales" },
        { to: "/prompts", icon: Library, label: "Biblioteca de prompts" },
        { to: "/profile/settings", icon: Settings, label: "Ajustes" },
        { to: "/pay", icon: CreditCard, label: "Plan y diploma" },
        { to: "/profile/settings", icon: Bell, label: "Avisos" },
        { to: "/profile/settings", icon: HelpCircle, label: "Ayuda" },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            to={item.to}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid var(--border-primary)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
              <Icon size={18} /> {item.label}
            </span>
            <ChevronRight size={18} color="var(--color-grey-400)" />
          </Link>
        );
      })}

      <button
        onClick={() => {
          signOut();
          window.location.href = "/auth/signin";
        }}
        style={{
          marginTop: 24,
          background: "none",
          border: "none",
          color: "var(--color-red-500)",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <LogOut size={18} /> Salir
      </button>
    </div>
  );
}
