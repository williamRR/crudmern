import { actualTaskInitialState } from '../states/initialStates'

const actualTaskReducer = (state = actualTaskInitialState, action) => {
  switch (action.type) {
    case 'SET_COMPLETED_TASK':
      return {
        ...state,
        completedTask: action.completedTask
      }
      case 'RESET_COMPLETED_TASK':
        return {
          ...state,
          completedTask: actualTaskInitialState.completedTask
        }
    default:
      return state
  }
}

export default actualTaskReducer