//assets
import award from "../assets/award_cup.png";
import gold from "../assets/gold_medal.png";
import silver from "../assets/silver_medal.png";
import bronze from "../assets/bronze_medal.png";

//style
import "./Prize.css";

const Prize = () => {
  return (
    <section className="prize">
      <div className="prize-medal-info">
        <div>
          <h1>
            Prizes and <br />
            <span>Rewards</span>
          </h1>

          <p>
            Highlight of the prizes or rewards for winners and <br />
            for participants.
          </p>
        </div>
      </div>

      <div className="prize-container">
        <div className="prize-award">
          <img src={award} alt="award cup" />
        </div>

        <div className="prize-medal">
          <div className="prize-medal-status">
            <div className="prize-medal-position">
              <img src={silver} alt="silver medal" className="silver-image" />

              <div className="prize-medal-silver-info">
                <h1>2nd</h1>
                <span>Runner</span>
                <p>N300,000</p>
              </div>
            </div>

            <div className="prize-medal-gold">
              <img src={gold} alt="gold medal" className="gold-image" />

              <div className="prize-medal-gold-info">
                <h1>1st</h1>
                <span>Runner</span>
                <p>N400,000</p>
              </div>
            </div>

            <div className="prize-medal-position">
              <img src={bronze} alt="bronze medal" className="bronze-image" />

              <div className="prize-medal-bronze-info">
                <h1>3rd</h1>
                <span>Runner</span>
                <p>N150,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize;
