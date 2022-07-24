import { Button } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface PersonListItemProps {
  name: string
}

export function PersonListItem({ name }: PersonListItemProps) {
  return (
    <Box
      w='100%'
      px='5'
      py='3'
      maxW={'780px'}
    >
      <Flex
        alignItems={'center'}
        justify='space-between'
        alignContent={'center'}
      >
        <Text
          ml='2'
          w='100%'
          fontSize={['1rem', '1.2rem', '1.4rem']}
        >
          {name}
        </Text>
        <Button
          size={['sm', 'md', 'lg']}
          pl='2'
          variant={'ghost'}
          colorScheme='red'
        >
          <CloseButton />
        </Button>
      </Flex>
    </Box>
  )
}
