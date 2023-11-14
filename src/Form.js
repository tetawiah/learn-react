import { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
