import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/actions/task.action";

const FormTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    if (task) {
      const addData = {
        description: task,
        done: false,
      };
      await dispatch(addTask(addData));

      setTask("");
    }
  };

  return (
    <div className="form-container">
      <h1>MES TÂCHES</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Ajoter une tâche "
        />
      </form>
    </div>
  );
};

export default FormTask;
