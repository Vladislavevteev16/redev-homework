import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  };

  const value = {
    lang,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
