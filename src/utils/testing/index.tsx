/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { InitialRootState, rootReducer, RootState } from '../../store'

type TValues = string | number | boolean | []
interface IWrapperProps {
  children: ReactElement
}
interface MyRenderOpt extends RenderOptions {
  initialState?: InitialRootState
  router?: {
    path: string
    initialEntries: string
  }
  store?: ReturnType<typeof configureStore>
}

type RenderFunc = {
  (ui: ReactElement, options?: MyRenderOpt): RenderResult
}

const initialReducerState: InitialRootState = {}

const defaultConfig = {
  initialState: initialReducerState,
  router: {
    path: '/',
    initialEntries: '/',
  },
}

export const render: RenderFunc = function (
  ui: ReactElement,
  {
    initialState = initialReducerState,
    router = defaultConfig.router,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState as RootState,
    }),
    ...renderOptions
  } = {},
) {
  const Wrapper = ({ children }: IWrapperProps) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[router.initialEntries]}>
        <Routes>
          <Route path={router.path} element={children} />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export const changeValue = (element: HTMLElement, value: TValues) =>
  fireEvent.change(element, { target: { value } })

export { fireEvent, screen, waitFor } from '@testing-library/react'
