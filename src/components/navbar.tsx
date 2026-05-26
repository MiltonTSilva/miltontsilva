import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Sobre Mim" },
    { to: "/projects", label: "Projetos" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span
          className={`genericLine ${menuOpen ? "line-active" : "opacity-1"}`}
        />
        <span
          className={`genericLine ${menuOpen ? "opacity-0" : "opacity-1"}`}
        />
        <span
          className={`genericLine ${menuOpen ? "line-close" : "opacity-1"}`}
        />
      </div>

      <nav className="navbar">
        <ul className={`menu ${menuOpen ? "menu-flex" : "menu-hidden"}`}>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="link"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
