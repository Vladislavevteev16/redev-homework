import "./header.css";

export const Header = ({ countUpdate }) => {
  return (
    <header className="header">
      <h1>Галлерея собак</h1>
      <p>
        Картинки обновлены <strong>{countUpdate}</strong> раз(а)
      </p>
    </header>
  );
};
