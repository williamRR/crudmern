import { useSelector, useDispatch } from 'react-redux'

export const useTaskList = () => {
    const tasks = useSelector(state =>
        state.taskList.tasks
    )
    const dispatch = useDispatch()
    const setTasks = value => dispatch({
        type: 'SET_TASKS',
        tasks: value
    })
    const resetTask = () => dispatch({
        type: 'RESET_TASKS'
    })
    return {
			tasks,
			setTasks,
			resetTask,
    }
}
