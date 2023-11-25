export default function Step({ step, updateVal }) {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={updateVal}
      ></input>
      <span>{step}</span>
    </div>
  );
}
