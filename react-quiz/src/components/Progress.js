export default function Progress({ i, len, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={len} value={i + Number(answer !== null)}></progress>
      <p>
        Question <strong>{i + 1}</strong> / {len}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
