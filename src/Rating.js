export default function Rating({ children, bill, updateTip }) {
  return (
    <div>
      <span>{children}</span>
      <select onChange={(e) => updateTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={0.05 * bill}>It was okay (5%)</option>
        <option value={0.1 * bill}>It was good(10%)</option>
        <option value={0.2 * bill}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
