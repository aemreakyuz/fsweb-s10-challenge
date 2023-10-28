import { combineReducers } from "redux";
import noteReducer from "./reducers";

//COMBINE
export const rootReducers = combineReducers({
  notes: noteReducer,
});
