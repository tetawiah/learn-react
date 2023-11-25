import React from "react";
import "./style.css";

export default function Steps ({step}) {
    return (
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? "active" : ''}>3</div>
      </div>
    )
}