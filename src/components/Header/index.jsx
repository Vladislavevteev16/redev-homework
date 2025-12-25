import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { TRANSLATIONS } from "../../constans/translations";
import style from "./index.module.css";

export const Header = () => {
  const { lang } = useContext(LanguageContext);

  return <h1 className={style.header}>{TRANSLATIONS[lang].welcome}</h1>;
};
