import { CounterButton } from "./components/CounterButton";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import { createUserList } from "./utils/createUserList";
import { Toggle } from "./components/Toggle";
import { ThemeContext } from "./context/themeContext";
import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [userList] = useState(() => createUserList());
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);

  const handleQueryChange = useCallback((e) => {
    const { value } = e.target;
    setSearchQuery(value);
  }, []);

  const handleCountIncrement = useCallback(
    () => setCount((prev) => prev + 1),
    []
  );

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <div
        className={`main-container ${
          theme === "light" ? "ligth-theme" : "dark-theme"
        }`}
      >
        <div className="container">
          <Toggle />
          <SearchInput
            handleQueryChange={handleQueryChange}
            searchQuery={searchQuery}
          />
          <ItemList searchQuery={searchQuery} userList={userList} />
          <CounterButton onClick={handleCountIncrement} count={count} />
        </div>
      </div>
    </ThemeContext>
  );
}

export default App;
