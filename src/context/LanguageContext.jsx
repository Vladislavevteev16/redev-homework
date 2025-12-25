import { createContext, useState } from "react";
import { changeLanguage } from "../utils/changeLanguage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    changeLanguage(setLang);
  };

  const value = {
    lang,
    setLang,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
