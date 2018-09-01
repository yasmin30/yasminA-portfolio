import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import thunk from "redux-thunk";
import rootReducer from "./Reducer.js";
const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

store.subscribe(() => {
  console.log(store.getState());
});
render(<App store={store} />, document.getElementById("root"));
