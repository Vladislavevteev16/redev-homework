import { ControlsPanel } from "./components/ControlsPanel";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";
import { ThemeContext } from "./context/ThemeContext";

import { useContext } from "react";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main-container ${theme}`}>
      <ControlsPanel />
      <Header />
      <UserProfile />
    </div>
  );
}

export default App;
