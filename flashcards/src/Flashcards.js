import { useState } from "react";

export default function FlashCards({ flashcards }) {
  const [selectedId, setSelectedId] = useState(null);

  const changeView = (id, selectedId) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {flashcards.map(({ id, question, answer }) => (
        <FlashCard
          id={id}
          selectedId={selectedId}
          question={question}
          answer={answer}
          key={id}
          changeView={changeView}
        />
      ))}
    </div>
  );
}

const FlashCard = ({ id, selectedId, question, answer, changeView }) => {
  return (
    <div
      className={selectedId === id ? "selected" : ""}
      onClick={() => changeView(id, selectedId)}
    >
      <p> {selectedId === id ? answer : question} </p>
    </div>
  );
};
