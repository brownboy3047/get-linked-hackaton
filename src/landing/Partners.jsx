//assets
import one from "../assets/partner_one.png";
import two from "../assets/partner_two.png";
import three from "../assets/partner_three.png";
import four from "../assets/partner_four.png";

//style
import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-info">
        <h1>Partners and Sponsors</h1>

        <p>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
      </div>

      <div className="partners-logo">
        <div className="partners-logo-con">
          <div className="partners-logo-one">
            <img src={one} alt="partners logo" />
            <p></p>
          </div>

          <div className="partners-logo-two">
            <img src={two} alt="partners logo" />
            {/* <p></p> */}
          </div>

          <div className="partners-logo-three">
            <p></p>
            <img src={three} alt="partners logo" />
          </div>
        </div>

        {/* ///////////////// */}
        <div className="partners-logo-wrap">
          <div className="partners-logo-four">
            <img src={four} alt="partners logo" />
            <p></p>
          </div>

          <div className="partners-logo-five">
            <img src={two} alt="partners logo" />
            {/* <p></p> */}
          </div>

          <div className="partners-logo-six">
            <p></p>
            <img src={three} alt="partners logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
