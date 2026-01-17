import { useState } from "react";

import { MyForm } from "./components/MyForm";
import { Modal } from "./components/Modal";

import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);

  return (
    <>
      <MyForm setData={setData} setActive={setActive} />
      {active && <Modal setActive={setActive} data={data} />}
    </>
  );
}

export default App;
