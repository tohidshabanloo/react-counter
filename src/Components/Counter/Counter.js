import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.css";

const Counter = () => {
  const [count, setcount] = useState(10);
  const increament = () => {
    setcount(count + 1);
  };
  const decreament = () => {
    setcount(count - 1);
  };
  const colorHnadler = () => {
    if (count > 10) return "green";
    if (count < 0) return "red";
  };

  return (
    <div className="counter">
      <button onClick={increament} backgroundColor="black">
        +
      </button>
      <div style={{ color: colorHnadler() }}>{count}</div>
      <button
        onClick={decreament}
        backgroundColor="black"
        style={{ marginLeft: 10 }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
