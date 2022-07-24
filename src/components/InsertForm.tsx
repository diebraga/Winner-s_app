import { Button } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Flex, Text } from '@chakra-ui/layout'

export function InsertForm() {
  return (
    <Flex
      as={'form'}
      direction='column'
      px='5'
      mt='70px'
      w='100%'
      maxW={'780px'}
    >
      <Text
        as={'h1'}
        fontSize={['1.7rem', '2rem', '2.7rem']}
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
        />
        <Button
          size={['sm', 'md', 'lg']}
          ml='2'
        >
          <AddIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
