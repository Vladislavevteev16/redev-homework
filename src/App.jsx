import { TodoList } from "./components/TodoList/TodoList";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { ShoppingCart } from "./components/shopping-сart/ShoppingCart";
import "./App.css";

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