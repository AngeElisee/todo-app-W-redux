import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, isdone } from "../js/actions/task.action";

const Task = ({ task }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editDesc, seteditDesc] = useState(task.description);
  const [isDone, setIsDone] = useState(task.done); // ici

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      description: editDesc,
      done: false,
      id: task.id,
    };
    dispatch(editTask(data));
    setEditToggle(false);
  };

  const handleIsdone = () => {
    const data = {
      description: task.description,
      done: !task.done,
      id: task.id,
    };
    dispatch(isdone(data));
    setIsDone(!isDone);
  };
  return (
    <div className="task">
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <input
            type="text"
            defaultValue={task.description}
            onChange={(e) => seteditDesc(e.target.value)}
          />
        </form>
      ) : (
        <p>{task.description}</p>
      )}

      {isDone ? (
        <div>
          <img
            src="./icons/check-solid.svg"
            alt="done"
            onClick={handleIsdone}
          />
        </div>
      ) : (
        <div>
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="./icons/edit.svg"
            alt="edit"
          />
          <img src="./icons/bell.svg" alt="" onClick={handleIsdone} />
        </div>
      )}
    </div>
  );
};

export default Task;
