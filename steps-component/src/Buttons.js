import React from "react";
import "./style.css";

export default function Buttons({ prevStep, nexStep }) {
  return (
    <div className="buttons">
      <Button
        className="previous"
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={prevStep}
      >
        <span>👈</span>Previous
      </Button>
      <Button
        className="next"
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={nexStep}
      >
        <span>👉</span>Next
      </Button>
    </div>
  );
}

const Button = ({ className, style, onClick, children }) => (
  <button className={className} style={style} onClick={onClick}>
    {children}
  </button>
);
