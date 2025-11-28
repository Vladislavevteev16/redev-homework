import "./App.css";
import { TodoList } from "./components/todo-list/todo-list";
import { UserProfile } from "./components/user-profile/user-profile";
import { ShoppingCart } from "./components/shopping-сart/shopping-cart";

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