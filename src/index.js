import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.log("State after dispatch: ", store.getState()));

const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.log("dispatching", action);
  let result = next(action);
  return result;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
