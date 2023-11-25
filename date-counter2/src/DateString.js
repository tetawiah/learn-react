export default function DateString({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count < 0
        ? `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was `
        : count > 0
        ? `${Math.abs(count)} ${count === 1 ? "day" : "days"} from today is `
        : "Today is "}
      {date.toDateString()}
    </p>
  );
}
