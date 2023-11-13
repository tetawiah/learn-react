import React, { useState } from "react";

import Message from "./Message";
import Buttons from "./Buttons";
import Steps from "./Steps";
import "./style.css";


const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
   const [currentStep,setCurrent] = useState(0);
   const [isOpen,setIsOpen] = useState(true);

   const prevStep = () => {
    if(currentStep > 0) {
      setCurrent((currentStep) => currentStep - 1)
    }
   }

   const nexStep = () => {
    if (currentStep < 2) {
      setCurrent((currentStep) => currentStep + 1)
    }
   }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {
        isOpen && (<div className="steps">
        <Steps step={currentStep + 1} />
        <Message message={messages[currentStep]} step={currentStep + 1}/>
        <Buttons prevStep={prevStep} nexStep={nexStep}  />
      </div> )
      }
    </div>
  )
}