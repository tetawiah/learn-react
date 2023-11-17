import React from "react";
import { useState } from "react";
import "./style.css";

import Bill from "./Bill";
import Rating from "./Rating";
import Output from "./Output";
import Button from "./Button";

export default function App() {
  const [bill, setBill] = useState(0);

  const handleSetBill = (num) => {
    setBill(num);
  };

  return (
    <div>
      <Bill handleSetBill={handleSetBill} />
      <Rating bill={bill}>
        <span>How did you like the service?</span>
      </Rating>
      <Rating bill={bill}>
        <span>How did your friend like the service?</span>
      </Rating>
      <Output bill={bill} tip={5} />
      <Button bill={bill} />
    </div>
  );
}
