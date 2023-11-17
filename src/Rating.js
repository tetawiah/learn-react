import { useState } from "react";

export default function Rating({ children, bill }) {
  const [tip, setTip] = useState(0);
  return (
    <div>
      <span>{children}</span>
      <select onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={0.05 * bill}>It was okay (5%)</option>
        <option value={0.1 * bill}>It was good(10%)</option>
        <option value={0.2 * bill}>Absolutely amazing! (20%)</option>
      </select>
      <span>{tip}</span>
    </div>
  );
}
