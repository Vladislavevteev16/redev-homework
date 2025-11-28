import { useState } from "react";
import styles from "../../styles/common.module.css";

const names = ["Vasya", "Petr", "Vlad", "Pasha"];

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 26,
    isActive: true,
  });

  const getRandomName = () => names[Math.floor(Math.random() * names.length)];

  const updateName = () =>
    setUser((user) => ({ ...user, name: getRandomName() }));

  const handleAgeIncrement = () =>
    setUser((user) => ({ ...user, age: user.age + 1 }));

  const handleChangeActive = () =>
    setUser((user) => ({ ...user, isActive: !user.isActive }));

  return (
    <div className={`${styles.card} ${styles.bgUserProfile}`}>
      <h1>Профиль пользователя</h1>
      <div>
        <p>
          <strong>Имя: {user.name}</strong>
        </p>
        <p>
          <strong>Возраст: {user.age}</strong>
        </p>
        <p>
          <strong>Активен: {user.isActive ? "Да" : "Нет"}</strong>
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={updateName} className={styles.topButtons}>
          Сменить имя
        </button>
        <button onClick={handleAgeIncrement} className={styles.topButtons}>
          Увеличить возраст
        </button>
      </div>
      <button onClick={handleChangeActive} className={styles.bottomButton}>
        Переключить активность
      </button>
    </div>
  );
};
