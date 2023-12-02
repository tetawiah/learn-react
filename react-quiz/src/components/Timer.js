import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = Math.floor(secondsRemaining % 60);
  useEffect(() => {
    const Id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(Id);
  }, []);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 0 && "0"}
      {secs}
    </div>
  );
}
