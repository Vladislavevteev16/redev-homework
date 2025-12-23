import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import style from "./index.module.css";

export const CounterButton = ({ onClick, count }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={style[theme]} onClick={onClick}>
      {count}
    </button>
  );
};
