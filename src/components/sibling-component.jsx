import { useState } from "react";

export const SiblingComponent = () => {
  const [text, setText] = useState("React");

  return (
    <>
      <h2>Текущий текст: {text}</h2>
      <button onClick={() => setText("Redev")}>Изменить текст</button>
    </>
  );
};