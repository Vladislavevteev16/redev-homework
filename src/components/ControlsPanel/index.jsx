import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import style from "./index.module.css";

export const ControlsPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <div className={style.buttonsContainer}>
      <button onClick={toggleLanguage}>change language</button>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  );
};