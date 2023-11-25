export default function Count({ count, addCount, subCount }) {
  return (
    <div>
      <button onClick={subCount}>-</button>
      <span> Count: {count} </span>
      <button onClick={addCount}>+</button>
    </div>
  );
}
