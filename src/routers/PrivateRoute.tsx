import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { IRouterProps } from '.'
import AdminLayout from '../layout/AdminLayout'

const PrivateRoute = ({ isAuth, redirectPath = '/login' }: IRouterProps): ReactElement => {
  return isAuth ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <Navigate to={redirectPath} />
  )
}

export default PrivateRoute
