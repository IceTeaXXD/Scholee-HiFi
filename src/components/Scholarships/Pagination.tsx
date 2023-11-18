import { Button } from '@chakra-ui/button'
import { Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/layout'

const Pagination: React.FC = () => {
  return (
    <HStack mt={4} spacing={4} align={'center'} justify={'center'}>
      <Button disabled>
        <ChevronLeftIcon />
      </Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Text>...</Text>
      <Button>5</Button>
      <Button>
        <ChevronRightIcon />
      </Button>
    </HStack>
  )
}

export default Pagination
