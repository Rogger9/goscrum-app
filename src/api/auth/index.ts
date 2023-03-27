import { ILoginResponse } from '../../models/IAuth'
import { mockApiResponse } from '../../utils/mockApiResponse'
import { fetchLoginResponse } from '../../__mock__/auth'

export const login = (): Promise<ILoginResponse> => mockApiResponse(fetchLoginResponse)
