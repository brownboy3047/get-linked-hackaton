import { Link } from "react-router-dom";

//assets
import phone from "../assets/phone.png";
import location from "../assets/location.png";

//components
import Logo from "../components/Logo";
import SocialLink from "../components/SocialLink";

//style
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-con">
        <div className="footer-info">
          <Logo className="footer-logo" />

          <h3>
            Getlinked Tech Hackathon is a technology innovation program <br />
            established by a group of organizations with the aim of showcasing
            <br />
            young and talented individuals in the field of technology
          </h3>

          <div className="footer-terms">
            <h3>Terms of Use</h3>

            <p></p>

            <h3>Privacy Policy</h3>
          </div>
        </div>

        <div className="footer-links">
          <h1>Useful Links</h1>

          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>

            <li>Timeline</li>

            <li>FAQs</li>

            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>

          <div className="footer-socials">
            <p>Follow us</p>

            <SocialLink />
          </div>
        </div>

        <div className="footer-contact">
          <h1>Contact Us</h1>

          <div className="footer-phone">
            <img src={phone} alt="phone icon" />
            <p>+234 6707653444</p>
          </div>

          <div className="footer-location">
            <img src={location} alt="location icon" />
            <p>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>

      <p className="footer-last-text">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
