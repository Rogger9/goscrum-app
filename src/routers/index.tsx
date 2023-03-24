import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export interface IRouterProps {
  isAuth: boolean
  redirectPath?: string
}

const AppRouter = () => {
  const isAuth = true

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuth={isAuth} />}>
          <Route path='/login' element={<h1>Login</h1>} />
        </Route>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path='/' element={<h1>Dashboard</h1>} />

          <Route path='*' element={<h1>404 - Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
