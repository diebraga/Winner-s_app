import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useDarkMode } from "../utils/useDarkMode";

interface ItemListItemProps {
  name: string
  onDelete: () => void
  hasBorder: boolean
  hasWinner: boolean
}

export function ItemListItem({ name, onDelete, hasBorder, hasWinner }: ItemListItemProps) {
  const { isDarkMode } = useDarkMode()

  function defineContainerClassName() {
    const className = isDarkMode ? 'neonText winnerTextDark' : 'neonText winnerText'

    return className
  }

  return (
    <Box
      w='100%'
      px='5'
      py='6'
      maxW={'780px'}
      as='form'
      //@ts-ignore
      onSubmit={(e) => {
        e.preventDefault()
        onDelete()
      }}
    >
      <Flex
        alignItems={'center'}
        justify='space-between'
        className={hasBorder ? defineContainerClassName() : ''}
      >
        <Text
          ml='2'
          w='100%'
          fontSize={['0.7rem', '1rem', '1.2rem', '1.4rem']}
        >
          {name}
        </Text>
        <IconButton
          size={['sm', 'md', 'lg']}
          pl='2'
          variant={'ghost'}
          colorScheme='red'
          disabled={hasWinner}
          icon={<CloseIcon />}
          aria-label='delete button'
          type="submit"
        />
      </Flex>
    </Box>
  )
}
