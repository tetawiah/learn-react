export default function Bill({ handleSetBill, bill }) {
  return (
    <div>
      <span>How much was the bill </span>
      <input
        type="number"
        value={bill}
        onChange={(e) => handleSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
