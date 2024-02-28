import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filtersSlice";
import todoReducer from "../components/TodoList/todoSlice";

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoReducer
})

export default rootReducer;