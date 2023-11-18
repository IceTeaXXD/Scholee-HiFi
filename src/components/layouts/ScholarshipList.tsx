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
} from '@chakra-ui/react'

import { BsBookmarkFill } from 'react-icons/bs'
import Pagination from '../sections/Pagination'
import SearchButton from '../sections/SearchButton'
import CoverageSlider from '../sections/CoverageSlider'

const ScholarshipsList: React.FC = () => {
  return (
    <Stack direction={'column'} align={'center'}>
      <SearchButton />
      <CoverageSlider />
      <ScholarshipTable />
      <Pagination />
    </Stack>
  )
}

const ScholarshipTable: React.FC = () => {
  const scholarshipData = Array.from({ length: 5 }, (_, index) => index) // Create an array with 10 elements
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
        {scholarshipData.map((index) => (
          <ScholarshipData key={index} />
        ))}
      </Tbody>
    </Table>
  )
}

const ScholarshipData: React.FC = () => {
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
        <Button bg={'primary.100'}>
          <Icon as={BsBookmarkFill} />
        </Button>
      </Td>
    </Tr>
  )
}

export default ScholarshipsList
