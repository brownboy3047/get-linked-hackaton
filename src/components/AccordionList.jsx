// import { useState } from "react";
import "./AccordionList.css";

const AccordionList = ({ faq, currOpen, setCurrOpen }) => {
  //   const [open, setopen] = useState(false);

  const isOpen = faq.id === currOpen;

  const handleOpen = () => {
    setCurrOpen(isOpen ? null : faq.id);
  };
  return (
    <li
      className={`accordion-list   ${isOpen ? "accordion-list-open" : ""}`}
      onClick={handleOpen}
    >
      <div>
        <p>{faq.question}</p>
        <span className="accordion-list-icon">{isOpen ? "-" : "+"}</span>
      </div>

      <p className="accordion-list-answer">{isOpen && faq.answer}</p>
    </li>
  );
};

export default AccordionList;
