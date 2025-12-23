import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import lightImg from "../../assets/light.png";
import darkImg from "../../assets/dark.png";
import style from "./index.module.css";


export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={style.button}
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      <img
        className={style.light}
        src={theme === "light" ? darkImg : lightImg}
        alt="theme"
      />
    </button>
  );
};
