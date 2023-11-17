export default function Button({ bill }) {
  if (bill > 0) {
    return (
      <div>
        <button>Reset</button>
      </div>
    );
  } else {
    return null;
  }
}
