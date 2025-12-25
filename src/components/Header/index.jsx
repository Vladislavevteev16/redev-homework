import { LanguageContext } from "../../context/LanguageContext";
import { useContext, useState } from "react";
import { TRANSLATIONS } from "../../constans/translations";
import style from "./index.module.css";

export const Header = () => {
  const [translation] = useState(() => TRANSLATIONS);

  const { lang } = useContext(LanguageContext);
  return <h1 className={style.header}>{translation[lang].welcome}</h1>;
};
