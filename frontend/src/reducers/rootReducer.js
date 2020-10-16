import { combineReducers } from "redux"
import taskListReducer from "./taskListReducer"
import actualTaskReducer from "./actualTaskReducer"


const rootReducer = combineReducers({
  taskList: taskListReducer,
  actualTask: actualTaskReducer,
})

export default rootReducer