import styles from "../Common/UserProfile.module.css";
import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 26,
    isActive: true,
  });
  const names = ["Vasya", "Petr", "Vlad", "Pasha"];

  const randomName = () => names[Math.floor(Math.random() * names.length)];

  const changeName = () => setUser((user) => ({ ...user, name: randomName() }));

  const ageIncrement = () =>
    setUser((user) => ({ ...user, age: user.age + 1 }));

  const changeActive = () =>
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
        <button onClick={changeName} className={styles.topButtons}>
          Сменить имя
        </button>
        <button onClick={ageIncrement} className={styles.topButtons}>
          Увеличить возраст
        </button>
      </div>
      <button onClick={changeActive} className={styles.bottomButton}>
        Переключить активность
      </button>
    </div>
  );
};
