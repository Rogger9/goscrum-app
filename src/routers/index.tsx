import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Home from '../features/Home'
import Login from '../features/Login'
import { useAuth } from '../hooks'

export interface IRouterProps {
  isAuth: boolean
  redirectPath?: string
}

const AppRouter = () => {
  const { status } = useAuth()
  const isAuth = true

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuth={isAuth} />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path='/' element={<Home />} />

          <Route path='*' element={<h1>404 - Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
