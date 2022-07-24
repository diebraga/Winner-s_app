import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Switch } from '@chakra-ui/switch'
import { useColorMode } from '@chakra-ui/color-mode'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark' ? true : false;

  return (
    <Flex
      justify='space-between'
      bg={isDarkMode ? 'gray.800' : 'gray.50'}
      py='3'
      position={'absolute'}
      w='100%'
    >
      <Heading
        color={isDarkMode ? 'gray.400' : "gray.500"}
        ml='3'
      >
        Header
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
