import { combineReducers } from "redux";
import covid from "./covid";

const rootReducer = combineReducers({
  covid: covid,
});
export default rootReducer;
