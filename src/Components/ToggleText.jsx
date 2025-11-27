import { useState } from "react";

export const ToggleText = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      <button onClick={() => setActive((value) => !value)}>Click</button>
      {active && <h1>Hello everyone</h1>}
    </div>
  );
};
