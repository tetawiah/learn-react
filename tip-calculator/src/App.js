import React from "react";
import { useState } from "react";
import "./style.css";

import Bill from "./Bill";
import Rating from "./Rating";
import Output from "./Output";
import Button from "./Button";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);

  const handleChangeTip = (amount) => {
    setTip((tip) => (tip === 0 ? amount : (tip + amount) / 2));
  };

  const handleSetBill = (amount) => {
    setBill(amount);
  };

  const reset = () => {
    setBill("");
    setTip(0);
  };

  return (
    <div>
      <Bill bill={bill} handleSetBill={handleSetBill} />
      <Rating bill={bill} updateTip={handleChangeTip}>
        <span>How did you like the service?</span>
      </Rating>
      <Rating bill={bill} updateTip={handleChangeTip}>
        <span>How did your friend like the service?</span>
      </Rating>
      <Output bill={bill} tip={tip} />
      <Button bill={bill} onReset={reset} />
    </div>
  );
}
