import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header'
import { InsertForm } from './components/InsertForm'
import { ItemListItem } from './components/ItemListItem'
import { useLocalStorage } from './utils/useLocalStorage'
import ReactCanvasConfetti from "react-canvas-confetti";
import { useTriggerConetti } from './utils/useTriggerConetti'
import Sound from "./sounds/go.wav"

interface ItemList {
  id: number
  name: string
}

function App() {
  const [name, setName] = useState<string>('')
  const [itemList, setItemList] = useLocalStorage<ItemList[]>('items:winner:choice', [])
  const [winnerIndex, setWinnerIndex] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isChoosen, setIsChoosen] = useState<boolean>(false)
  const [audio] = useState(new Audio(Sound));

  const toast = useToast()

  const { fire, getInstance } = useTriggerConetti()

  function handleGetPersonsName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  };

  function handleAddNewPerson(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name) return
    setItemList(prev => [...prev, {
      id: itemList.length,
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
    setItemList(itemList.filter(person => person.id !== id))
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

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

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
          {itemList.map((item, index) => {
            return (
              <ItemListItem
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
          mt={itemList.length == 0 ? '30px' : ''}
        >
          <Button
            w='100%'
            maxW={'739px'}
            size={['sm', 'md', 'lg']}
            px='5'
            disabled={itemList.length === 0 && isLoading}
            colorScheme='facebook'
            isLoading={isLoading}
            onClick={() => {
              if (!isChoosen) {
                setIsLoading(true)
                setIsChoosen(true)
                setTimeout(function () {
                  setWinnerIndex(getRandomNumberBetween(0, itemList.length - 1))
                  setIsLoading(false)
                  fire()
                  audio.play()
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
      <ReactCanvasConfetti
        refConfetti={getInstance}
        // @ts-ignore
        style={canvasStyles}
      />
    </Box>
  )
}

export default App
