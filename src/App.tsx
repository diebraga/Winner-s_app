import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header'
import { InsertForm } from './components/InsertForm'
import { PersonListItem } from './components/PersonListItem'
import { useLocalStorage } from './utils/useLocalStorage'

interface PersonList {
  id: number
  name: string
}

function App() {
  const [name, setName] = useState<string>('')
  const [personList, setPersonList] = useLocalStorage<PersonList[]>('people:winner:choice', [])
  const [winnerIndex, setWinnerIndex] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isChoosen, setIsChoosen] = useState<boolean>(false)

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

  function getRandomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function defineIsWinner(index: number) {
    return winnerIndex === index
  }

  return (
    <Box>
      <Header />
      <Flex
        alignItems={'center'}
        justify='center'
        flexDir={'column'}
        minH='80vh'
      >
        <InsertForm
          onChange={handleGetPersonsName}
          name={name}
          onSubmit={handleAddNewPerson}
        />
        <Flex
          maxH={'70vh'}
          overflow='auto'
          w='100%'
          direction={'column'}
          alignItems='center'
          justify={'center'}
        >
          {personList.map((item, index) => {
            return (
              <PersonListItem
                name={item.name}
                onDelete={() => handleDeletePerson(item.id, item.name)}
                key={item.id}
                hasBorder={defineIsWinner(index)}
                hasWinner={isChoosen}
              />
            )
          })}
        </Flex>
        <Flex
          px='5'
          w='100%'
          alignItems={'center'}
          justify='center'
          mt={personList.length == 0 ? '30px' : ''}
        >
          <Button
            w='100%'
            maxW={'739px'}
            size={['sm', 'md', 'lg']}
            px='5'
            disabled={personList.length === 0 && isLoading}
            colorScheme='facebook'
            isLoading={isLoading}
            onClick={() => {
              if (!isChoosen) {
                setIsLoading(true)
                setIsChoosen(true)
                setTimeout(function () {
                  setWinnerIndex(getRandomNumberBetween(0, personList.length - 1))
                  setIsLoading(false)
                }, 1000);
              } else {
                setIsChoosen(false)
                setWinnerIndex(undefined)
              }
            }}
          >
            {isChoosen ? 'OK' : 'Select Winner'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default App
