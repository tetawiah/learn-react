import React, { useState } from "react";
import "./style.css";

import Step from "./Step";
import Button from "./Button";
import Count from "./Count";
import DateString from "./DateString";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const updateVal = (event) => {
    const { value } = event.target;
    setStep(Number(value));
  };

  const subCount = () => {
    setCount((count) => count - step);
  };

  const addCount = () => {
    setCount((count) => count + step);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <Step step={step} updateVal={updateVal} />
      <Count count={count} addCount={addCount} subCount={subCount} />
      <DateString count={count} />
      {(count !== 0 || step !== 1) && <Button reset={reset} />}
    </div>
  );
}
