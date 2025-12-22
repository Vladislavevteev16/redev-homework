import { UserInfo } from "./UserInfo";
import { useState } from "react";
import styles from "../../styles/common.module.css";

const nameList = ["Vasya", "Petr", "Vlad", "Pasha"];

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 26,
    isActive: true,
  });

  const [count, setCount] = useState(0);

  const getRandomName = () =>
    nameList[Math.floor(Math.random() * nameList.length)];

  const updateName = () =>
    setUser((user) => ({ ...user, name: getRandomName() }));

  const handleAgeIncrement = () =>
    setUser((user) => ({ ...user, age: user.age + 1 }));

  const handleChangeActive = () =>
    setUser((user) => ({ ...user, isActive: !user.isActive }));

  // Компонет UserInfo будет ре-рендирится только если поменяются его пропсы (user)
  return (
    <div className={`${styles.card} ${styles.bgUserProfile}`}>
      <h1>Профиль пользователя</h1>
      <UserInfo user={user} />
      <div className={styles.buttonsContainer}>
        <button onClick={updateName} className={styles.topButtons}>
          Сменить имя
        </button>
        <button onClick={handleAgeIncrement} className={styles.topButtons}>
          Увеличить возраст
        </button>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Counter {count}
        </button>
      </div>
      <button onClick={handleChangeActive} className={styles.bottomButton}>
        Переключить активность
      </button>
    </div>
  );
};
