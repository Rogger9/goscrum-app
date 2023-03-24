import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { IRouterProps } from '.'

const PublicRoute = ({ isAuth, redirectPath = '/' }: IRouterProps): ReactElement => {
  return isAuth ? <Navigate to={redirectPath} /> : <Outlet />
}

export default PublicRoute
