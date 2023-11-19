import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Add: React.FC = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'} rounded={'xl'} p={6} my={12}>
        <Heading>Add Beasiswa</Heading>
        <Box boxShadow={'dark-lg'} rounded={'lg'} p={'30'}>
          <FormControl isRequired>
            <FormLabel>Scholarship Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Scholarship Full Description</FormLabel>
            <Textarea />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Scholarship Short Description</FormLabel>
            <Textarea />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Coverage</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Contact Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Contact Email</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Scholarship Type(s)</FormLabel>
            <Input type="text" />
          </FormControl>

          <HStack mt={'10'}>
            <Button bg={'primary.100'}>Tambah Beasiswa</Button>

            <Link to="/scholarships">
              <Button color={'white'} bg={'red'}>
                Cancel
              </Button>
            </Link>
          </HStack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Add
