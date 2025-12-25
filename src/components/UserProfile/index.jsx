import { useState, useContext } from "react";
import { TRANSLATIONS } from "../../constans/translations";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./index.module.css";

export const UserProfile = () => {
  const { lang } = useContext(LanguageContext);
  const [translation] = useState(() => TRANSLATIONS);

  return <h2 className={styles.userProfile}>{translation[lang].profile}</h2>;
};
