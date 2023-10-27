import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers";

const middleWares = applyMiddleware(logger, thunk);

export const myStore = createStore(rootReducers, middleWares);
