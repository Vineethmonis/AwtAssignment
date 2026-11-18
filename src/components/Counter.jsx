
import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Counter Application</h2>

      <h3>{count}</h3>
      <p>Counter Count</p>

      <div className="buttons">
        <button className="decrement"
          onClick={() => setCount(count - 1)}>
          − Decrement
        </button>

        <button className="increment"
          onClick={() => setCount(count + 1)}>
          + Increment
        </button>
      </div>

      <button className="reset"
        onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
