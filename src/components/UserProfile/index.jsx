import { useContext } from "react";
import { TRANSLATIONS } from "../../constans/translations";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./index.module.css";

export const UserProfile = () => {
  const { lang } = useContext(LanguageContext);

  return <h2 className={styles.userProfile}>{TRANSLATIONS[lang].profile}</h2>;
};
