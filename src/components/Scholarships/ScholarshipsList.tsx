import {
  Button,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  Text,
  Stack,
  Center,
  useDisclosure,
} from '@chakra-ui/react'

import { BsBookmarkFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BookmarkModal from '../Bookmarks/BookmarkModal'
import useAuth from '../../hooks/useAuth'

export const ScholarshipTable: React.FC = () => {
  const scholarshipData = Array.from({ length: 7 }, (_, index) => index) // Create an array with 10 elements
  return (
    <Stack align={'center'}>
      <Table size="lg" variant="striped" w="90%" overflow={'true'}>
        <Thead textColor={'white'}>
          <Tr background={'primary.400'} color={'white'}>
            <Th>
              <Text color={'white'}>Nama Beasiswa</Text>
            </Th>
            <Th>
              <Text color={'white'}>Deskripsi</Text>
            </Th>
            <Th>
              <Text color={'white'}>Coverage</Text>
            </Th>
            <Th>
              <Text color={'white'}>Types</Text>
            </Th>
            <Th>
              <Center>
                <Select color={'black'} bg="gray.100" w={'50%'}>
                  <option value="5">5</option>
                  <option value="5">10</option>
                  <option value="5">15</option>
                  <option value="5">20</option>
                </Select>
              </Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {scholarshipData.map((index) => (
            <ScholarshipData key={index} />
          ))}
        </Tbody>
      </Table>
    </Stack>
  )
}

const ScholarshipData: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { auth } = useAuth()
  return (
    <Tr>
      <Td>
        <Text fontWeight={'bold'}>Beasiswa Kehadiran Kelas Minggu 09</Text>
      </Td>
      <Td>
        Hadiah untuk mereka yang mengisi presensi tetapi tidak hadir di kelas
      </Td>
      <Td>$3,140.00</Td>
      <Td>Kuliah, Manajemen, Basis Data</Td>
      <Td>
        <Stack direction={'row'} spacing={4}>
          <Link to="/scholarships/viewmore">
            <Button mr={10} bg={'primary.100'}>
              View More
            </Button>
          </Link>
          <Button bg={'primary.100'} onClick={onOpen}>
            <Icon as={BsBookmarkFill} />
          </Button>
          <Button mr={10} bg={'primary.100'}>
            {auth.role === 'admin' ? 'View More' : 'Edit'}
          </Button>
          <Button
            bg={auth.role === 'admin' ? 'red' : 'primary.100'}
            color={auth.role === 'admin' ? 'white' : 'black'}
          >
            {auth.role === 'admin' ? 'Delete' : <Icon as={BsBookmarkFill} />}
          </Button>

          {isOpen && <BookmarkModal open={isOpen} onClose={onClose} />}
        </Stack>
      </Td>
    </Tr>
  )
}
