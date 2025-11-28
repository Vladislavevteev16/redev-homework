import "./App.css";
import { TodoList } from "./Components/TodoList/TodoList";
import { UserProfile } from "./Components/UserProfile/UserProfile";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="main-container">
      <UserProfile />
      <TodoList />
      <ShoppingCart />
    </div>
  );
}

export default App;
