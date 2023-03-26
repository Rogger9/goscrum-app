import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { ITaskState } from '../../models/ITask'
import { createTaskAsync, deleteTaskAsync, fetchTaskAsync } from './thunks'

const initialState: ITaskState = {
  status: 'idle',
  list: [],
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTaskAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchTaskAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.list = action.payload.data
      })
      .addCase(fetchTaskAsync.rejected, state => {
        state.status = 'failed'
        state.list = []
      })
      .addCase(createTaskAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(createTaskAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.list = action.payload.data
      })
      .addCase(createTaskAsync.rejected, state => {
        state.status = 'failed'
      })
      .addCase(deleteTaskAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.list = action.payload.data
      })
      .addCase(deleteTaskAsync.rejected, state => {
        state.status = 'failed'
      })
  },
})

export const getTaskState = (state: RootState) => state.task

export default taskSlice.reducer
