import "./App.css";
import { MyComp1 } from "./Components/MyComp1";
import { MyComp2 } from "./Components/MyComp2";
import { MyComp3 } from "./Components/MyComp3";
import { MyComp4 } from "./Components/MyComp4";
import { MyComp5 } from "./Components/MyComp5";
import { MyComp6 } from "./Components/MyComp6";

function App() {
  const obj = { firstName: "Vladislav", lastName: "Evteev" };
  const sayHi = () => console.log("Privet");
  const array = ['Vladislav', 'Evteev', '29', 'Vitebsk']
  return (
    <div>
      <MyComp1 age={29} />
      <MyComp2 name={"Vitebsk"} />
      <MyComp3 isMan={true} />
      <MyComp4 {...obj} />
      <MyComp5 fn={sayHi} />
      <MyComp6 arr={array} />
    </div>
  );
}

export default App;
