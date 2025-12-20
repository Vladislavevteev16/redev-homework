import style from "./index.module.css";

export const SearchInput = ({ searchQuery, handleQueryChange }) => {
  return (
    <input
      className={style.input}
      placeholder="search"
      type="text"
      value={searchQuery}
      onChange={handleQueryChange}
    />
  );
};
