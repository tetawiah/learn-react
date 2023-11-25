import { useState } from "react";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map(({ title, text }, i) => (
        <Question
          num={i < 9 ? "0" + (i + 1) : i + 1}
          title={title}
          text={text}
          key={i}
        />
      ))}
    </div>
  );
}

const Question = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div
      className={`item ${isOpen === true ? "open" : ""}`}
      onClick={() => handleChange(num)}
    >
      <p className={`number ${isOpen === true ? "open" : ""} `}>{num}</p>
      <p className={`title isOpen === true ? "open" : "" `}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
};
