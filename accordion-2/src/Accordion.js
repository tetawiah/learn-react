import { useState } from "react";

export default function Accordion({ faqs }) {
  const [curOpen, setcurOpen] = useState(null);

  const updatecurOpen = (num) => {
    setcurOpen(num);
  };

  return (
    <div className="accordion">
      {faqs.map(({ title, text }, i) => (
        <AccordionItem
          num={i < 9 ? "0" + (i + 1) : i + 1}
          title={title}
          key={i}
          onOpen={updatecurOpen}
          curOpen={curOpen}
        >
          {text}
        </AccordionItem>
      ))}
    </div>
  );
}

const AccordionItem = ({ num, title, onOpen, curOpen, children }) => {
  const isOpen = curOpen === num;

  const handleChange = (num) => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleChange(num)}
    >
      <p className={`number ${isOpen ? "open" : ""} `}>{num}</p>
      <p className={`title ${isOpen} ? "open" : "" `}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
};
