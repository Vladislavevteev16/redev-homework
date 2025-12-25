import { TRANSLATIONS } from "../constans/translations";

const AVAILABLE_LANGUAGES = Object.keys(TRANSLATIONS);
let index = 0;

export const changeLanguage = (fn) => {
  const currLang = AVAILABLE_LANGUAGES[index];
  fn(currLang);
  index++;
  if (index >= AVAILABLE_LANGUAGES.length) {
    index = 0;
  }
};
