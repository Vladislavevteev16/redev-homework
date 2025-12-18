import { useRef } from "react";
import { List } from "./components/List";
import "./App.css";

const USER_LIST = [
  { id: 1, name: "Petya", city: "Minsk" },
  { id: 2, name: "Vasya", city: "Vitebsk" },
  { id: 3, name: "Kolya", city: "Brest" },
  { id: 4, name: "Masha", city: "Mogilev" },
  { id: 5, name: "Pasha", city: "Grodno" },
];

function App() {
  const ref = useRef(null);

  const onFocusButtonClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <input ref={ref} placeholder="Some text" type="text" />
      <button onClick={onFocusButtonClick}>Focus</button>
      <List list={USER_LIST} />
    </>
  );
}

export default App;
