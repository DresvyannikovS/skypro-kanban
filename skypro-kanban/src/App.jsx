import "./App.css";
import "./signin.css";
import "./signup.css";
import "react-day-picker/style.css";

import { Routes, Route, useNavigate } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";

import { Desk } from "./pages/Desk";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { TaskProfile } from "./pages/TaskProfile";
import { useState } from "react";
import { useEffect } from "react";
import { getUserData, getUserToken, setUserData } from "./storage";
import { UserContext } from "./context/UserContext";
import { TaskContext } from "./context/TaskContext";
import { GetTasks } from "./api";
import { NewTaskProfile } from "./pages/NewTask";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState("false");

  const updateTasks = (tasks) => {
    setTaskList(tasks);
  };

  useEffect(() => {
    setIsLoadingTasks(true);
    try {
      GetTasks()
        .then((answer) => {
          setTaskList(answer.tasks);
        })
        .then(() => {
          setIsLoadingTasks(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    if (!user) {
      updateUser(JSON.parse(getUserData()));
      console.log(JSON.parse(getUserData()));
    } else {
      setUserData(JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (getUserToken() !== "" && getUserToken() !== null) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <TaskContext.Provider value={{ taskList, isLoadingTasks, updateTasks }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route index element={<Desk />} />
            <Route path="task/:id" element={<TaskProfile />} />
            <Route path="newTask" element={<NewTaskProfile />} />
          </Route>

          <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
          <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} />} />
        </Routes>
      </TaskContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
