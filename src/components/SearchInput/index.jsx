import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";
import style from "./index.module.css";

export const SearchInput = ({ searchQuery, handleQueryChange }) => {
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className={`${style.input} ${style[theme]}`}
      placeholder="search"
      type="text"
      value={searchQuery}
      onChange={handleQueryChange}
    />
  );
};
