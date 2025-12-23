import { LanguageContext } from "../../context/LanguageContext";
import { useContext, useState } from "react";
import { translations } from "../../assets/translations";
import style from "./index.module.css";

export const Header = () => {
  const [translation] = useState(() => translations);

  const { lang } = useContext(LanguageContext);
  return <h1 className={style.header}>{translation[lang].welcome}</h1>;
};
