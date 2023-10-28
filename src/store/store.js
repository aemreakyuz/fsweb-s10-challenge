import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers";

const middlewares = applyMiddleware(logger, thunk);

export const myStore = createStore(rootReducers, middlewares);
