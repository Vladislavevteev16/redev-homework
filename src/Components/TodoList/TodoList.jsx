import styles from "../Common/UserProfile.module.css";
import { useState } from "react";

export const TodoList = () => {
  const tasks = [
    "Купить хлеб",
    "Погулять с собакой",
    "Выучить React",
    "Сходить на тренировку",
    "Приготовить ужин",
    "Постирать носки",
    "Сходить на работу",
  ];
  const [active, setActive] = useState([]);
  const randomTasks = () => tasks[Math.floor(Math.random() * tasks.length)];
  const addTask = () => setActive((prev) => [...prev, randomTasks()]);
  const deleteLastTask = () => setActive((prev) => prev.slice(0, -1));
  const showAllTasks = () => setActive(tasks);

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
          <button onClick={deleteLastTask} className={styles.topButtons}>
            Удалить
          </button>
        </div>
        <button onClick={showAllTasks} className={styles.bottomButton}>
          Все задачи
        </button>
      </div>
    </div>
  );
};
