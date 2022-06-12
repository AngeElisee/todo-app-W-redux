import React from "react";
import { useSelector } from "react-redux";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import { isEmpty } from "./components/Utils";

const App = () => {
  const tasks = useSelector((state) => state.taskReducer);
  return (
    <div className="App">
      <FormTask />
      <div className="content">
        <div className="task-container">
          {!isEmpty(tasks) &&
            tasks.map((task, index) => <Task key={index} task={task} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
