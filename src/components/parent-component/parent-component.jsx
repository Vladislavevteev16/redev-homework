import { useState } from "react";
import { ChildComponent } from "../child-component";
import { SiblingComponent } from "../sibling-component";
import styles from "./parent-component.module.css";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const getRandomNum = () => setCount(Math.floor(Math.random() * 11));
  const handleCountIncrement = () => setCount((value) => value + 1);
  const handleResetCount = () => setCount(0);
  const handleCountDecrement = () => count > 0 && setCount((value) => value - 1);

  return (
    <div>
      <p>{count}</p>
      <div className={styles.buttons}>
        <button onClick={handleCountIncrement}>Увеличить</button>
        <button onClick={handleResetCount}>Сбросить</button>
        <button onClick={getRandomNum}>Случайное значение</button>
        <button onClick={handleCountDecrement}>Уменьшить</button>
      </div>

      <ChildComponent name={"Паша"} num={count} />
      <SiblingComponent />
    </div>
  );
};