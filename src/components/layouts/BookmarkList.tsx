import {
  Button,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Stack,
} from '@chakra-ui/react'

import Pagination from '../sections/Pagination'
import SearchButton from '../sections/SearchButton'
import CoverageSlider from '../sections/CoverageSlider'

const BookmarkList: React.FC = () => {
  return (
    <Stack direction={'column'} align={'center'}>
      <SearchButton />
      <CoverageSlider />
      <BookmarkTable />
      <Pagination />
    </Stack>
  )
}

const BookmarkTable: React.FC = () => {
  const bookmarkData = Array.from({ length: 3 }, (_, index) => index) // Create an array with 10 elements
  return (
    <Table size="lg" variant="striped" w="90%">
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
            <Select color={'black'} bg="gray.100">
              <option value="5">5</option>
              <option value="5">10</option>
              <option value="5">15</option>
              <option value="5">20</option>
            </Select>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {bookmarkData.map((index) => (
          <BookmarkData key={index} />
        ))}
      </Tbody>
    </Table>
  )
}

const BookmarkData: React.FC = () => {
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
        <Button mr={10} bg={'primary.100'}>
          View More
        </Button>
        <Button bg={'primary.100'}>Remove Bookmark</Button>
      </Td>
    </Tr>
  )
}

export default BookmarkList
