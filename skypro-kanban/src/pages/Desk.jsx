import { Header } from "../components/Header";
import { Main } from "../components/Main";

import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export const Desk = () => {
  
  const [isDarkTheme, setIsDarkTheme] = useState("light");
  
  const { taskList, isLoadingTasks, updateTasks } = useTaskContext();

  const toggleTheme = () => {
    setIsDarkTheme(isDarkTheme === "dark" ? "light" : "dark");
    console.log(isDarkTheme);
  };

  return (
    <>
      <Header
        changeTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      {isLoadingTasks ? <p>загрузка задач</p> : <Main tasks={taskList} isDarkTheme={isDarkTheme} />}
    </>
  );
};
