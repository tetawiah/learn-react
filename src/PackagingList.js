export default function PackagingList({ items, onRemoveItem }) {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, description, quantity, packed }) => (
          <li key={id}>
            <span style={{ textDecoration: packed && "line-through" }}>
              {quantity} {description}
            </span>
            <button style={{ color: "red" }} onClick={() => onRemoveItem(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
