import { Link, NavLink } from "react-router-dom";

import logo from "../assets/getlinked.png";
import Button from "../components/Button";
//style
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav-bar-links">
        <ul className="nav-bar-link">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li className="nav-bar-link-contact">
            <NavLink to="contact">Contacts</NavLink>
          </li>
        </ul>

        <NavLink to="register">
          <Button className="nav-bar-btn">Register</Button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
