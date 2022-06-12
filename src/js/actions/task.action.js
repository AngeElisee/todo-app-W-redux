import axios from "axios";

export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const getTasks = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/tasks")
      .then((res) => {
        dispatch({ type: GET_TASKS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addTask = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3009/tasks", data)
      .then(() => {
        dispatch({ type: ADD_TASK, payload: data });
      })
      .catch((err) => console.log(err));
  };
};
export const editTask = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3009/tasks/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        dispatch({ type: EDIT_TASK, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
