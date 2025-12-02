import "./Button.css";

export const Button = ({ onClick }) => {
  return (
    <button className="update-btn" onClick={onClick}>
      Обновить
    </button>
  );
};
