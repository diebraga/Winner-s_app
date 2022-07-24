import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface PersonListItemProps {
  name: string
  onDelete: () => void
}

export function PersonListItem({ name, onDelete }: PersonListItemProps) {
  return (
    <Box
      w='100%'
      px='5'
      py='3'
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
        alignContent={'center'}
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
          icon={<CloseIcon />}
          aria-label='delete button'
          type="submit"
        />
      </Flex>
    </Box>
  )
}
