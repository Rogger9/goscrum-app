import { getAuthState } from '../store/authSlice'
import { loginAsync } from '../store/authSlice/thunks'
import { useAppDispatch, useAppSelector } from '../store/hooks'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { user, status } = useAppSelector(getAuthState)

  const login = () => dispatch(loginAsync())

  return { user, status, login }
}
