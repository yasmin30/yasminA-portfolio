import { combineReducers } from "redux";
import loginReducer from "./loginReducer.js";
const Mainreducer = combineReducers({
  loginReducer
  // <-- use it!
});

export { Mainreducer };
