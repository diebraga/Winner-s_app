import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Switch } from '@chakra-ui/switch'
import { useDarkMode } from '../utils/useDarkMode'

export function Header() {
  const { isDarkMode, toggleColorMode } = useDarkMode()

  return (
    <Flex
      justify='space-between'
      bg={isDarkMode ? 'gray.800' : 'gray.50'}
      py='3'
      position={'absolute'}
      w='100%'
      alignItems={'center'}
    >
      <Heading
        ml='3'
        fontSize={['1.4rem', '1.8rem', '2rem']}
      >
        Winner app
      </Heading>
      <Flex>
        <Button
          bg='transparent'
          _hover={{ backgroundColor: 'transparent' }}
          leftIcon={isDarkMode ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        >
          <Switch
            isChecked={isDarkMode}
            as={'div'}
          />
        </Button>
      </Flex>
    </Flex>
  )
}
