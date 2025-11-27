import { useState } from "react";

export const TextInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        onInput={({ target: { value } }) => setText(value)}
        type="text"
        placeholder="text"
      />
      <h1>{text}</h1>
    </div>
  );
};
