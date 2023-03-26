import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { RecursivePartial } from '../custom'

import TaskReducer from './taskSlice'

const rootReducer = combineReducers({
  task: TaskReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type InitialRootState = RecursivePartial<RootState>
