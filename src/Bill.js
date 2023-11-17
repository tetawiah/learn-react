export default function Bill({ handleSetBill }) {
  return (
    <div>
      <span>How much was the bill </span>
      <input
        type="number"
        onChange={(e) => handleSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
