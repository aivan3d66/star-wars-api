import {appReducer} from "./app-reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  appPage: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
