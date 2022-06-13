import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, getTasks } from "../js/actions/task.action";

const FormTask = () => {
  const [newTask, setnewTask] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    if (newTask) {
      const addData = {
        description: newTask,
        done: false,
      };
      await dispatch(addTask(addData));
      dispatch(getTasks());

      setnewTask("");
    }
  };

  return (
    <div className="form-container">
      <h1>MES TÂCHES</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          type="text"
          placeholder="Ajouter une tâche "
        />
      </form>
    </div>
  );
};

export default FormTask;
