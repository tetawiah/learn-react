export default function Button({ bill, onReset }) {
  if (bill > 0) {
    return (
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  } else {
    return null;
  }
}
