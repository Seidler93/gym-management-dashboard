import "../styles/navbar.css"

export default function Navbar() {

  const links = ["Dashboard", "Members", "Attendance" ];
  
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h2 className="navbar__logo">Flexx</h2>
      </div>

      <div className="navbar__center">
        {links.map((link) => (
          <button key={link} className="navbar__link">
            {link}
          </button>
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