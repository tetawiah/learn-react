export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list</p>
      </footer>
    );
  }
  const total = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = total === 0 ? 0 : Math.round((numOfPacked / total) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything! Ready to go"
          : `💼 You have ${total} items on your list and you already packed (${percentage}%)`}
      </em>
    </footer>
  );
}
