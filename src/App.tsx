import { Button } from '@chakra-ui/button'
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
      duration: 4000,
      isClosable: true,
    })
    setName('')
  }

  function handleDeletePerson(id: number, name: string) {
    setPersonList(personList.filter(person => person.id !== id))
    toast({
      position: 'top',
      title: name + ' has been deleted.',
      status: 'error',
      duration: 4000,
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
        <Flex
          maxH={'60vh'}
          overflow='auto'
          w='100%'
          direction={'column'}
          alignItems='center'
          justify={'center'}
          mt='20px'
        >
          {personList.map(item => {
            return (
              <PersonListItem
                name={item.name}
                onDelete={() => handleDeletePerson(item.id, item.name)}
                key={item.id}
              />
            )
          })}
        </Flex>
        <Flex
          px='5'
          w='100%'
          alignItems={'center'}
          justify='center'
        >
          <Button
            w='100%'
            maxW={'739px'}
            mt='40px'
            size={['sm', 'md', 'lg']}
            px='5'
            disabled={personList.length === 0}
            colorScheme='facebook'
          >
            Select Winner
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default App
