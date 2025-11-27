import "./App.css";
import { Counter } from "./Components/Counter";
import { TextInput } from "./Components/TextInput";
import { ToggleText } from "./Components/ToggleText";
import { ColorToggle } from "./Components/ColorToggle";

function App() {
  return (
    <div className="container">
      <ToggleText />
      <Counter />
      <TextInput />
      <ColorToggle />
    </div>
  );
}

export default App;
