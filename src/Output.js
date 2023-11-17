export default function Output({ bill, tip }) {
  return (
    <div>
      <h3> {`You pay ${bill + tip}  (${bill} + $5 tip)`}</h3>
    </div>
  );
}
