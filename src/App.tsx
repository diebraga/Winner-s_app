import { Box, Flex } from '@chakra-ui/layout'
import { Header } from './components/Header'
import { InsertForm } from './components/InsertForm'

function App() {

  return (
    <Box>
      <Header />
      <Flex
        alignItems={'center'}
        justify='center'
      >

        <InsertForm />
      </Flex>
    </Box>
  )
}

export default App
