import { useColorMode } from "@chakra-ui/color-mode";

interface UseIsDarkModeReturn {
  isDarkMode: boolean
  colorMode: string
  toggleColorMode: () => void
}

export function useDarkMode(): UseIsDarkModeReturn {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark' ? true : false;

  return {
    isDarkMode: isDarkMode,
    colorMode: colorMode,
    toggleColorMode: toggleColorMode
  }
}
