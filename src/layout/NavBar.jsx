import { NavLink } from "react-router-dom";
import { useState } from "react";

//component
import Button from "../components/Button";
import Logo from "../components/Logo";

//assets
import menuOpen from "../assets/menu-open.png";
import menuClose from "../assets/menu-close.png";
//style
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav-bar">
      <Logo className="nav-bar-logo" />

      <div className="nav-bar-links" id={showMenu ? "nav-bar-links" : ""}>
        <div
          className="nav-bar-close"
          onClick={() => setShowMenu((show) => !show)}
        >
          <img src={menuClose} alt="close menu" />
        </div>

        <ul className="nav-bar-link">
          <li>Timeline</li>
          <li className="nav-bar-link-contact">
            <NavLink to="/">Overview</NavLink>
          </li>
          <li>FAQs</li>
          <li className="nav-bar-link-contact">
            <NavLink to="contact">Contacts</NavLink>
          </li>
        </ul>

        <NavLink to="register">
          <Button className="nav-bar-btn">Register</Button>
        </NavLink>
      </div>

      <div
        className="nav-bar-open"
        onClick={() => setShowMenu((show) => !show)}
      >
        <img src={menuOpen} alt="open menu" />
      </div>
    </nav>
  );
};

export default NavBar;
