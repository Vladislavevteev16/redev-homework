import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((value) => value + 1)}>Click</button>
      <h1>Count:{count}</h1>
    </div>
  );
};
