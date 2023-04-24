import { vi } from 'vitest'
import { getAuthState, initialState } from '..'
import { store } from '../..'
import * as apiAuth from '../../../api/auth'
import { HttpStatus } from '../../../models/IFetch'
import { user } from '../../../__mock__/user'
import { loginAsync } from '../thunks'

vi.mock('../../../api/auth')
const login = vi.spyOn(apiAuth, 'login')

describe('authSlice', () => {
  afterEach(() => vi.clearAllMocks())

  test('should get initial state', () => {
    expect(getAuthState(store.getState())).toEqual(initialState)
  })

  test('should successfully login', async () => {
    login.mockResolvedValue({ statusCode: HttpStatus.OK, data: user })
    await store.dispatch(loginAsync())
    expect(getAuthState(store.getState()).status).toBe('authenticated')
  })

  test('should rejected login', async () => {
    login.mockRejectedValue({ statusCode: HttpStatus.BAD_REQUEST })
    await store.dispatch(loginAsync())
    expect(getAuthState(store.getState()).status).toBe('failed')
  })
})
