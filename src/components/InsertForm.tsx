import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { AddIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Flex, Text } from '@chakra-ui/layout'
import { ChangeEvent, FormEvent } from 'react'
import { useDarkMode } from '../utils/useDarkMode'

interface InsertFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function InsertForm({ onChange, name, onSubmit }: InsertFormProps) {
  const { isDarkMode } = useDarkMode()

  return (
    <Flex
      as={'form'}
      direction='column'
      px='5'
      mt='70px'
      w='100%'
      maxW={'780px'}
      // @ts-ignore
      onSubmit={onSubmit}
    >
      <Text
        as={'h1'}
        fontSize={['1.4rem', '1.8rem', '2rem']}
        fontWeight='bold'
        mt='5'
        py='1'
        mb={['0', '4', '6']}
        textAlign={'center'}
      >
        Insert a person
      </Text>
      <Flex>
        <Input
          w={'100%'}
          size={['sm', 'md', 'lg']}
          variant='filled'
          focusBorderColor={isDarkMode ? 'blue.100' : 'blue.600'}
          value={name}
          onChange={onChange}
          colorScheme='facebook'
        />
        <IconButton
          size={['sm', 'md', 'lg']}
          ml='2'
          type='submit'
          colorScheme='facebook'
          disabled={name.length === 0}
          icon={<AddIcon />}
          aria-label='add button'
        />         
      </Flex>
    </Flex>
  )
}
