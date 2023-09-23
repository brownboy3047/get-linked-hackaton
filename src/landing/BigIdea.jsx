// import bulb from "../assets/bulb.png";
import big from "../assets/big-idea.png";

import "./BigIdea.css";

const BigIdea = () => {
  return (
    <div className="big-idea">
      <div className="big-idea-image">
        <img src={big} alt="big idea" />
        <p>
          The Big <br /> Idea!
        </p>
      </div>

      <div className="big-idea-info">
        <h1>
          Introduction to getlinked <br />
          <span>tech Hackathon 1.0</span>
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
    </div>
  );
};

export default BigIdea;
