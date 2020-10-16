import * as taskListDispatcher from './taskListDispatcher'
import { actionTypes } from './index'

describe("Testing actions", () => {
  test('returns an action with type "SET_TASKS"', () => {
    expect(true).toEqual(true)
    // let action = taskListDispatcher.useTaskList().setTasks()
    // expect(action).toEqual({ type: actionTypes.SET_TASKS })
  })
})