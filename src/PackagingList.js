export default function PackagingList({ items, onRemoveItem, onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, description, quantity, packed }) => (
          <li key={id}>
            {packed === false ? (
              <input
                type="checkbox"
                value={packed}
                onChange={() => onCheckItem(id)}
              ></input>
            ) : null}
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
