import { combineReducers } from "redux";
import { launchReducer } from "./launchReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  launches: launchReducer,
  auth: authReducer,
});
