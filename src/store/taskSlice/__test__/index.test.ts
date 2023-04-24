import { vi } from 'vitest'
import { getTaskState, initialState, updateFilteredTasks } from '..'
import { store } from '../..'
import * as apiTask from '../../../api/task'
import { HttpStatus } from '../../../models/IFetch'
import { ITaskResponse } from '../../../models/ITask'
import { tasks } from '../../../__mock__'
import { createTaskAsync, deleteTaskAsync, fetchTaskAsync, updateTaskAsync } from '../thunks'

vi.mock('../../../api/task')
const fetchTask = vi.spyOn(apiTask, 'fetchTask')
const createTask = vi.spyOn(apiTask, 'createTask')
const updateTask = vi.spyOn(apiTask, 'updateTask')
const deleteTask = vi.spyOn(apiTask, 'deleteTask')
const rej: ITaskResponse = { statusCode: HttpStatus.BAD_REQUEST, data: [] }
const res: ITaskResponse = { statusCode: HttpStatus.OK, data: tasks }
const success = 'success'
const failed = 'failed'
const [task] = tasks

describe('taskSlice', () => {
  afterEach(() => vi.clearAllMocks())

  test('should get initial state', () => {
    expect(getTaskState(store.getState())).toEqual(initialState)
  })

  test('should update list of filtered task', () => {
    expect(getTaskState(store.getState()).filtered).toBe(null)
    store.dispatch(updateFilteredTasks(tasks))
    expect(getTaskState(store.getState()).filtered).toEqual(tasks)
  })

  test('should successfully fetch tasks', async () => {
    fetchTask.mockResolvedValue(res)
    await store.dispatch(fetchTaskAsync())
    expect(getTaskState(store.getState()).status).toBe(success)
  })

  test('should rejected fetch tasks', async () => {
    fetchTask.mockRejectedValue(rej)
    await store.dispatch(fetchTaskAsync())
    expect(getTaskState(store.getState()).status).toBe(failed)
  })

  test('should successfully create tasks', async () => {
    createTask.mockResolvedValue(res)
    await store.dispatch(createTaskAsync({ list: tasks, task }))
    expect(getTaskState(store.getState()).status).toBe(success)
  })

  test('should rejected create tasks', async () => {
    createTask.mockRejectedValue(rej)
    await store.dispatch(createTaskAsync({ list: tasks, task }))
    expect(getTaskState(store.getState()).status).toBe(failed)
  })

  test('should successfully update tasks', async () => {
    updateTask.mockResolvedValue(res)
    await store.dispatch(updateTaskAsync({ id: task.id, list: tasks, task }))
    expect(getTaskState(store.getState()).status).toBe(success)
  })

  test('should rejected update tasks', async () => {
    updateTask.mockRejectedValue(rej)
    await store.dispatch(updateTaskAsync({ id: task.id, list: tasks, task }))
    expect(getTaskState(store.getState()).status).toBe(failed)
  })

  test('should successfully delete tasks', async () => {
    deleteTask.mockResolvedValue(res)
    await store.dispatch(deleteTaskAsync({ id: task.id, list: tasks }))
    expect(getTaskState(store.getState()).status).toBe(success)
  })

  test('should rejected delete tasks', async () => {
    deleteTask.mockRejectedValue(rej)
    await store.dispatch(deleteTaskAsync({ id: task.id, list: tasks }))
    expect(getTaskState(store.getState()).status).toBe(failed)
  })
})
