import { createContext, useContext } from "react";

export const TaskContext = createContext(null);

export function useTaskContext() {
  const tasks = useContext(TaskContext);

  if (!tasks) {
    throw new Error("Данные задачи не были найдены");
  }

  return tasks;
}