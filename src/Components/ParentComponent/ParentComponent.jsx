import { useState } from "react";
import styles from "./ParentComponent.module.css";
import { ChildComponent } from "../ChildComponent";
import { SiblingComponent } from "../SiblingComponent";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const randomNum = () => setCount(Math.floor(Math.random() * 11));
  const countIncrement = () => setCount((value) => value + 1);
  const resetCount = () => setCount(0);
  const countDecrement = () => count > 0 && setCount((value) => value - 1);

  return (
    <div>
      <p>{count}</p>
      <div className={styles.buttons}>
        <button onClick={countIncrement}>Увеличить</button>
        <button onClick={resetCount}>Сбросить</button>
        <button onClick={randomNum}>Случайное значение</button>
        <button onClick={countDecrement}>Уменьшить</button>
      </div>

      <ChildComponent name={"Паша"} num={count} />
      <SiblingComponent />
    </div>
  );
};