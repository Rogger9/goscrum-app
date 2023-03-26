import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { RecursivePartial } from '../custom'

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type InitialRootState = RecursivePartial<RootState>
