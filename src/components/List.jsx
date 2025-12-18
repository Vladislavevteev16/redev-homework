import { useState } from "react";

export const List = ({ list }) => {
  const [users, setUsers] = useState(list);

  const handleChangeInnerText = (id) => {
    setUsers((prev) => {
      return prev.map((user) => {
        return user.id === id ? { ...user, name: `!!!${user.name}` } : user;
      });
    });
  };

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>City:</strong>{" "}
            {user.city}
            <button onClick={() => handleChangeInnerText(user.id)}>
              Click
            </button>
          </li>
        );
      })}
    </ul>
  );
};
