import { taskListInitialState } from '../states/initialStates'

const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state
  }
}

export default taskListReducer