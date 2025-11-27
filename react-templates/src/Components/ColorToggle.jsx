import { useState } from "react";

export const ColorToggle = () => {
  const [color, setColor] = useState("red");
  const colors = ["red", "yellow", "green", "brown", "pink"];
  const changeColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <button onClick={() => setColor(changeColor)}>Change color</button>
      <p style={{ color: color }}>Some text</p>
    </div>
  );
};
