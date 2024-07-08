import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
}

export default Counter;
