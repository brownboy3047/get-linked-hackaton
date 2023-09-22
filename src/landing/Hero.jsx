import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

//components
import Button from "../components/Button";

//assets
import chain from "../assets/chain.png";
import bulb from "../assets/bulb.png";
import bomb from "../assets/bomb.png";
import heroImg from "../assets/hero-img.png";
import manOnGlass from "../assets/man-wearing-smart-glasses.png";

//style
import "./Hero.css";

const Hero = () => {
  //   const [time, setTime] = useState();
  //   const [mins, setMins] = useState();
  //   const [seconds, setSeconds] = useState();

  const time = new Date();

  //   useEffect(() => {
  //     const curtime = new Date();
  //     setInterval(() => {
  //       setTime(curtime);
  //     }, 1000);
  //   });

  return (
    <section className="hero">
      <h1>Igniting a Revolution in HR Innovation</h1>

      <div className="hero-container">
        <div className="hero-info">
          <div className="hero-info-one">
            <img src={bulb} alt="bulb icon" />
            <h2>getlinked Tech</h2>
          </div>

          <div className="hero-info-two">
            <h2>Hackathon 1.0</h2>
            <img src={chain} alt="chain icon" />
            <img src={bomb} alt="bulb icon" />
          </div>

          <p className="hero-info-text">
            Participate in getlinked tech Hackathon 2023 stand <br /> a chance
            to win a Big prize
          </p>

          <Link to="register">
            <Button className="hero-info-btn">Register</Button>
          </Link>

          <div className="hero-info-time">
            <span>
              {time.getHours()}
              <small>H</small>
            </span>

            <span>
              {time.getMinutes()}
              <small>M</small>
            </span>

            <span>
              {time.getSeconds()}
              <small>S</small>
            </span>
          </div>
        </div>

        <div className="hero-image">
          <img src={manOnGlass} alt="man on glass" className="hero-image-one" />
          <img src={heroImg} alt="hero light" className="hero-image-two" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
