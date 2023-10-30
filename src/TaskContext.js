import { createContext } from "react";

export const TaskContext = createContext({
  TaskItems: [],
  setTaskItems: () => {},
  done: false,
});
