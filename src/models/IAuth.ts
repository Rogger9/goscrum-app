import { IFetchResponse } from './IFetch'
import { IUser } from './IUser'

export interface IAuthState {
  status: 'idle' | 'loading' | 'failed' | 'authenticated'
  user: IUser | null
}

export interface ILogin extends Pick<IUser, 'email'> {
  password: string
}

export type ILoginResponse = IFetchResponse<IUser>
