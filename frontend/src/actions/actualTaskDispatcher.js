import { useSelector, useDispatch } from 'react-redux'

export const useCompletedTask = () => {
  const completedTask = useSelector(state =>
    state.actualTask.completedTask
  )
  const dispatch = useDispatch()
  const setCompletedTask = value => dispatch({
    type: 'SET_COMPLETED_TASK',
    completedTask: value
  }) 
  const resetCompletedTask = () => dispatch({
    type: 'RESET_COMPLETED_TASK'
  })
  return {
    completedTask,
    setCompletedTask, 
    resetCompletedTask,
  }
}
