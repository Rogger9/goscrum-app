import { createAsyncThunk } from '@reduxjs/toolkit'
import { createTask, deleteTask, fetchTask } from '../../api/task'
import { ICreateTaskProps, IDeleteTaskProps } from '../../models/ITask'

export const fetchTaskAsync = createAsyncThunk('task/fetch', fetchTask)

export const createTaskAsync = createAsyncThunk('task/create', ({ task, list }: ICreateTaskProps) =>
  createTask(task, list),
)

export const deleteTaskAsync = createAsyncThunk('task/delete', ({ id, list }: IDeleteTaskProps) =>
  deleteTask(id, list),
)
