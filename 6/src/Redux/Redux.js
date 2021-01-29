import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"


import EmployessReducer from "./EmployeesReducer";

let reducers = combineReducers({
    EmployessReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;