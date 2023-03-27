import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../api/auth'

export const loginAsync = createAsyncThunk('auth/fetch', login)
