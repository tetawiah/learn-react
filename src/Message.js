import React from "react";
import './style.css';

export default function Message({message,step}) {
    return (<p className="message"> {`Step ${step}: ${message}`}  </p>)
}