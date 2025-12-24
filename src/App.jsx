import { CounterButton } from "./components/CounterButton";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import { createUserList } from "./utils/createUserList";
import { WithRenderTracker } from "./components/ItemList";
import { useState, useCallback } from "react";
import "./App.css";

function App() {
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
    <div className="main-container">
      <SearchInput
        handleQueryChange={handleQueryChange}
        searchQuery={searchQuery}
      />
      {/* <ItemList searchQuery={searchQuery} userList={userList} /> */}
      <WithRenderTracker searchQuery={searchQuery} userList={userList} />
      <CounterButton onClick={handleCountIncrement} count={count} />
    </div>
  );
}

export default App;
