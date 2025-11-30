import { TodoAPI } from "./todo-api";
import { useState, useEffect } from "react";

export const LifecycleComponent2 = () => {
  const [count, setCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const handleCountIncrement = () => setCount((prev) => prev + 1);

  const getAllTasks = async () => {
    const { token } = await TodoAPI.getToken();
    const userTasks = await TodoAPI.getTasks(token);
    console.log("Function component", userTasks);
  };

  useEffect(() => {
    getAllTasks();

    return () => {
      console.log("Compoment will unmount");
    };
  }, []);

  useEffect(() => {
    console.log(`Count: ${count}`);
    
    if (count % 2 === 0) {
      setVisibleCount(count);
    }
  }, [count]);

  return (
    <>
      <button onClick={handleCountIncrement}>Click</button>
      <p>Count: {visibleCount}</p>
    </>
  );
};
