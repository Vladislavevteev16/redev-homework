import { memo } from "react";

export const TaskItem = memo(({ task }) => {
  return <li>{task}</li>;
});
