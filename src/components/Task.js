import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../js/actions/task.action";

const Task = ({ task }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editDesc, seteditDesc] = useState(task.description);
  const [isDone, setIsDone] = useState(task.done);

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      description: editDesc,
      done: false,
      id: task.id,
    };
    dispatch(editTask(data));
    setEditToggle(false);
  };
  return (
    <div className="task">
      {editToggle ? (
        <form onSubmit={(e) => handleForm(e)}>
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
            onClick={() => setIsDone(!isDone)}
          />
        </div>
      ) : (
        <div>
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="./icons/edit.svg"
            alt="edit"
          />
          <img
            src="./icons/thumbtack-solid.svg"
            alt=""
            onClick={() => setIsDone(!isDone)}
          />
        </div>
      )}
    </div>
  );
};

export default Task;
