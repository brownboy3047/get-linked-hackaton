import { useState } from "react";

import { faqs } from "../faq";
import AccordionList from "./AccordionList";

//style
import "./Accordion.css";

const Accordion = () => {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      <h1>
        Frequently Ask <br />
        <span>Question</span>
      </h1>

      <p className="accordion-intro">
        We got answers to the questions that you might <br />
        want to ask about <span>getlinked Hackathon 1.0</span>
      </p>

      <ul className="accordion-faq">
        {faqs.length > 0 &&
          faqs.map((faq) => (
            <AccordionList
              key={faq.id}
              faq={faq}
              currOpen={currOpen}
              setCurrOpen={setCurrOpen}
            />
          ))}
      </ul>
    </div>
  );
};

export default Accordion;
