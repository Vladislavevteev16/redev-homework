import { memo } from "react";

export const UserInfo = memo(({ user }) => {
  console.log("UserInfo render");
  return (
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
  );
});
