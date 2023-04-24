import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { IAuthState } from '../../models/IAuth'
import { loginAsync } from './thunks'

export const initialState: IAuthState = {
  status: 'idle',
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'authenticated'
        state.user = action.payload?.data
      })
      .addCase(loginAsync.rejected, state => {
        state.status = 'failed'
        state.user = null
      })
  },
})

export const getAuthState = (state: RootState) => state.auth

export default authSlice.reducer
