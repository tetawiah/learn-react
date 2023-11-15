export default function PackagingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, description, quantity, packed }) => (
          <li key={id}>
            <span style={{ textDecoration: packed && "line-through" }}>
              {quantity} {description}
            </span>
            <button style={{ color: "red" }}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
