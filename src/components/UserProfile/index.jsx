import { useState, useContext } from "react";
import { translations } from "../../assets/translations";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./index.module.css";

export const UserProfile = () => {
  const { lang } = useContext(LanguageContext);
  const [translation] = useState(() => translations);

  return <h2 className={styles.userProfile}>{translation[lang].profile}</h2>;
};