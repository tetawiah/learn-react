import { useState } from "react";

export default function PackagingList({
  items,
  onRemoveItem,
  onCheckItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => {
      console.log(Number(a.packed));
      return Number(a.packed) - Number(b.packed);
    });

  return (
    <div className="list">
      <ul>
        {sortedItems.map(({ id, description, quantity, packed }) => (
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

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
