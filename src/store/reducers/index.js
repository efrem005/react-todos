import { combineReducers } from "redux";
import { todos } from "./todosReducer.js";
import { filters } from "./filterReducer.js";


export const rootReducer = combineReducers({
    todos,
    // filters
})