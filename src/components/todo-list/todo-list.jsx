import { useState } from "react";
import styles from "../../styles/common.module.css";

const tasks = [
  "Купить хлеб",
  "Погулять с собакой",
  "Выучить React",
  "Сходить на тренировку",
  "Приготовить ужин",
  "Постирать носки",
  "Сходить на работу",
];

export const TodoList = () => {
  const [active, setActive] = useState([]);
  const getRandomTasks = () => tasks[Math.floor(Math.random() * tasks.length)];
  const addTask = () => setActive((prev) => [...prev, getRandomTasks()]);
  const removeLastTask = () => setActive((prev) => prev.slice(0, -1));
  const loadAllTasks = () => setActive(tasks);

  return (
    <div className={`${styles.card} ${styles.bgTodoList}`}>
      <div className={styles.contentContainer}>
        <h1>Список задач</h1>
        <div className={styles.listContainer}>
          <ul>
            {active.map((tasks, index) => (
              <li key={index}>{tasks}</li>
            ))}
          </ul>
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={addTask} className={styles.topButtons}>
            Добавить задачу
          </button>
          <button onClick={removeLastTask} className={styles.topButtons}>
            Удалить
          </button>
        </div>
        <button onClick={loadAllTasks} className={styles.bottomButton}>
          Все задачи
        </button>
      </div>
    </div>
  );
};
