import React, { useState } from "react";
import "./style.css";

import Form from "./Form";
import Logo from "./Logo";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((items) => items.filter(({ id }) => id !== itemId));
  };

  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm("Are you sure you want to clear list?");
    if (confirmed) setItems([]);
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onCheckItem={handleUpdateItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
