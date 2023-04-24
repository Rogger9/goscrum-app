import { createAsyncThunk } from '@reduxjs/toolkit'
import { createTask, deleteTask, fetchTask, updateTask } from '../../api/task'
import { ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps } from '../../models/ITask'

export const fetchTaskAsync = createAsyncThunk('task/fetch', async () => {
  const data = await fetchTask()
  return data
})

export const createTaskAsync = createAsyncThunk('task/create', ({ task, list }: ICreateTaskProps) =>
  createTask(task, list),
)

export const updateTaskAsync = createAsyncThunk(
  'task/update',
  ({ id, task, list }: IUpdateTaskProps) => updateTask(id, task, list),
)

export const deleteTaskAsync = createAsyncThunk('task/delete', ({ id, list }: IDeleteTaskProps) =>
  deleteTask(id, list),
)
