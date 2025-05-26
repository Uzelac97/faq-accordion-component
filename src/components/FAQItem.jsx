import { useState } from "react";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <div className="question-wrapper" onClick={handleClick}>
        <h2>{question}</h2>
        <img src={open ? iconMinus : iconPlus} alt="toggle-icon" />
      </div>
      {open && <p className="answer">{answer}</p>}
    </>
  );
}

export default FAQItem;
