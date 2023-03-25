import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './routers'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App
