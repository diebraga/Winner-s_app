import { Box, Flex } from '@chakra-ui/layout'
import { Header } from './components/Header'
import { InsertForm } from './components/InsertForm'
import { PersonListItem } from './components/PersonListItem'

function App() {

  return (
    <Box>
      <Header />
      <Flex
        alignItems={'center'}
        justify='center'
        flexDir={'column'}
      >
        <InsertForm />
        <PersonListItem />
      </Flex>
    </Box>
  )
}

export default App
