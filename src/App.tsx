import { Box, Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header'
import { InsertForm } from './components/InsertForm'
import { PersonListItem } from './components/PersonListItem'

interface PersonList {
  id: number
  name: string
}

function App() {
  const [name, setName] = useState<string>('')
  const [personList, setPersonList] = useState<PersonList[]>([])

  const toast = useToast()

  function handleGetPersonsName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  };

  function handleAddNewPerson(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name) return
    setPersonList(prev => [...prev, {
      id: personList.length,
      name: name
    }])
    toast({
      position: 'top',
      title: name + ' created.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Header />
      <Flex
        alignItems={'center'}
        justify='center'
        flexDir={'column'}
      >
        <InsertForm
          onChange={handleGetPersonsName}
          name={name}
          onSubmit={handleAddNewPerson}
        />
        {personList.map(item => {
          return (
            <PersonListItem
              name={item.name}
            />
          )
        })}
      </Flex>
    </Box>
  )
}

export default App
