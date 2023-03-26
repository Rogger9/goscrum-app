import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import AppRouter from './routers'
import { store } from './store'
import theme from './theme'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </Provider>
  )
}

export default App
