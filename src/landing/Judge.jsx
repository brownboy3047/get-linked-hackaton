import judge from "../assets/judge.png";
import Button from "../components/Button";
//style
import "./Judge.css";

const Judge = () => {
  return (
    <div className="judge">
      <div className="judge-image">
        <img src={judge} alt="judge" />
      </div>

      <div className="judge-info">
        <h1>
          Judging Criteria <br />
          <span>Key attributes</span>
        </h1>

        <ul className="judge-list">
          <li>
            <span>Innovation and Creativity:</span> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </li>

          <li>
            <span>Functionality:</span> Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </li>

          <li>
            <span>Impact and Relevance:</span> Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </li>

          <li>
            <span>Technical Complexity:</span> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </li>

          <li>
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </li>
        </ul>

        <Button className="judge-btn">Read More</Button>
      </div>
    </div>
  );
};

export default Judge;
