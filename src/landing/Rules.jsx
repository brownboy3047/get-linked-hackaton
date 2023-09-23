import rules from "../assets/rules.png";
//style
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules">
      <div className="rules-info">
        <h1 className="rules-info-heading">
          Rules and <br />
          <span>Guidelines</span>
        </h1>

        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you are a coding genius,
          a design maverick, or a concept wizard, you will have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that is what we are all about!
        </p>
      </div>

      <div className="rules-image">
        <img src={rules} alt="rules" />
      </div>
    </div>
  );
};

export default Rules;
