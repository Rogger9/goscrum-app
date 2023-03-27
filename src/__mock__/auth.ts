import { ILoginResponse } from '../models/IAuth'
import { HttpStatus } from '../models/IFetch'
import { IMockApiProps } from '../utils/mockApiResponse'
import { user } from './user'

export const fetchLoginResponse: IMockApiProps<ILoginResponse> = {
  res: {
    statusCode: HttpStatus.OK,
    data: user,
  },
  rej: {
    statusCode: HttpStatus.UNAUTHORIZED,
  },
}
