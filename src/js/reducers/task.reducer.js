import { ADD_TASK, EDIT_TASK, GET_TASKS } from "../actions/task.action";

const initialState = {};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.payload;
    case ADD_TASK:
      return [action.payload, ...state];
    case EDIT_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.description,
          };
        } else return task;
      });
    default:
      return state;
  }
}
