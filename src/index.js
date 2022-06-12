import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./js/reducers";
import thunk from "redux-thunk";
import { getTasks } from "./js/actions/task.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getTasks());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
