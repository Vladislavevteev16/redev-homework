import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

import { TRANSLATIONS } from "../../constans/translations";

import style from "./index.module.css";

export const ControlsPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, setLang } = useContext(LanguageContext);

  const handleChangeLanguage = ({ target: { value } }) => {
    setLang(value);
  };

  return (
    <div className={style.buttonsContainer}>
      <button onClick={toggleLanguage}>change language</button>
      <select onChange={handleChangeLanguage}>
        {Object.keys(TRANSLATIONS).map((lang, index) => (
          <option key={`${lang} -${index}`} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  );
};
