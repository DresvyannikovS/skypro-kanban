import { useEffect } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { useTaskContext } from "../context/TaskContext";
import { GetTasks } from "../api";

export const Desk = () => {
    
  const { taskList, isLoadingTasks, setIsLoadingTasks, updateTasks } = useTaskContext();

  useEffect(() => {
    setIsLoadingTasks(true);
    try {
      GetTasks()
        .then((answer) => {
          updateTasks(answer.tasks);
        })
        .then(() => {
          setIsLoadingTasks(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <Header />
      {isLoadingTasks ? <p>загрузка задач</p> : <Main tasks={taskList} />}
    </>
  );
};
