export default function FinishedScreen({ points, totalPoints, highScore }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}
