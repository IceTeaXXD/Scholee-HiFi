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
    </Stack>
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
        <Stack direction={'row'} spacing={4}>
          <Button mr={10} bg={'primary.100'}>
            View More
          </Button>
          <Button bg={'primary.100'}>
            <Icon as={BsBookmarkFill} />
          </Button>
        </Stack>
      </Td>
    </Tr>
  )
}
