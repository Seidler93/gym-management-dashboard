import "../styles/navbar.css"
import { NavLink } from "react-router-dom";
export default function Navbar() {

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
              isActive ? "navbar__link--active" : "navbar__link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="navbar__right">
        <button className="navbar__profile">AJ</button>
        <button className="navbar__logout">
          Logout
        </button>
      </div>
    </nav>
  );
}