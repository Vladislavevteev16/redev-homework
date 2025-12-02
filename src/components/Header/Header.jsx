import "./Header.css";

export const Header = ({ countUpdate }) => {
  return (
    <header className="header">
      <h1>Галлерея собак</h1>
      <p>
        Картинки обнoвлены <strong>{countUpdate}</strong> раз(а)
      </p>
    </header>
  );
};