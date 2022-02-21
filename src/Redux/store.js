import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/userreducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk'


const reducer = combineReducers({
  // ...
  user: userReducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;