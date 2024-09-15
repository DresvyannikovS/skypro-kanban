import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { useTaskContext } from "../context/TaskContext";

export const Desk = () => {
    
  const { taskList, isLoadingTasks, updateTasks } = useTaskContext();

  return (
    <>
      <Header />
      {isLoadingTasks ? <p>загрузка задач</p> : <Main tasks={taskList} />}
    </>
  );
};
