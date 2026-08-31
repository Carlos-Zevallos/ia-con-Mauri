import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Compass, Home, Sparkles, UserRound } from "lucide-react";
import Logo from "./Logo.jsx";
import { useStore } from "../store.jsx";

const tabs = [
  { to: "/home", label: "Inicio", icon: Home },
  { to: "/guides", label: "Rutas", icon: BookOpen },
  { to: "/explore-ai-tools", label: "Explora", icon: Compass },
  { to: "/ai-tools", label: "Taller", icon: Sparkles },
  { to: "/profile", label: "Perfil", icon: UserRound },
];

export default function AppLayout() {
  const { user } = useStore();
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="desktop-header">
        <NavLink to="/home">
          <Logo height={32} />
        </NavLink>
        <nav className="desktop-nav">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {tab.label}
            </NavLink>
          ))}
          <NavLink to="/prompts">Prompts</NavLink>
          <NavLink to="/avances">Avances</NavLink>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 800,
              color: "#FF5A3C",
            }}
          >
            ⚡ {user.streak}
          </span>
          <NavLink to="/profile" style={{ fontWeight: 700, fontSize: 14 }}>
            {user.name}
          </NavLink>
        </div>
      </header>

      <header className="header">
        <NavLink to="/home">
          <Logo />
        </NavLink>
        <NavLink
          to="/challenges"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontWeight: 800,
            color: "#FF5A3C",
          }}
        >
          ⚡ {user.streak}
        </NavLink>
      </header>

      <main>
        <Outlet key={location.pathname} />
      </main>

      <nav className="bottom-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            >
              <Icon size={22} strokeWidth={2.2} />
              {tab.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
