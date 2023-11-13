import React from "react";
import "./style.css";

export default function Buttons ({prevStep,nexStep}) {
    return (
    <div className="buttons">
        <button className="previous" style = {{backgroundColor: '#7950f2', color: '#fff'}} onClick={prevStep}> Previous </button>
        <button className="next" style = {{backgroundColor: '#7950f2',color : '#fff'}} onClick={nexStep}> Next </button>
    </div>
    )
}

