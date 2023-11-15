import React, { useState } from "react";
import "./style.css";

import Form from "./Form";
import Logo from "./Logo";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pajamas", quantity: 3, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((items) => items.filter(({ id }) => id !== itemId));
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList items={items} onRemoveItem={handleRemoveItem} />
      <Stats />
    </div>
  );
}
