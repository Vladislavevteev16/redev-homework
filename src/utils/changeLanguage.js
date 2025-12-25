import { TRANSLATIONS } from "../constans/translations";

const AVAILABLE_LANGUAGES = Object.keys(TRANSLATIONS);
let index = 0;
let isFirstLoad = true;
export const changeLanguage = (fn) => {
  if (isFirstLoad) {
    index = 1;
    isFirstLoad = false;
  }
  const currLang = AVAILABLE_LANGUAGES[index];
  fn(currLang);
  index++;

  if (index >= AVAILABLE_LANGUAGES.length) {
    index = 0;
  }
};
