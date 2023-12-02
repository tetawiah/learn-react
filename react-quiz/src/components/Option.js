export default function Option({ question, dispatch, answer }) {
  const hasAnswered = answer != null;
  return (
    <div className="options">
      {question.options.map((o, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={o}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
