import "../styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../services/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    if (isLoggingOut) return;

    try {
      setIsLoggingOut(true);
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  }

  const links = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Members", path: "/members" },
    { label: "Attendance", path: "/attendance" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h2 className="navbar__logo">Flexx</h2>
      </div>

      <div className="navbar__center">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="navbar__right">
        <button className="navbar__profile">AJ</button>
        <button
          className="navbar__logout"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </nav>
  );
}