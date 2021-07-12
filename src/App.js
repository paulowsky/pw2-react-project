import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from './contexts/auth'
import Layout from './layout'
import Routes from './routes'

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Layout>
          <Routes />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
