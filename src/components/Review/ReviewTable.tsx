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
  Center,
} from '@chakra-ui/react'

export const ReviewTable: React.FC = () => {
  const scholarshipData = Array.from({ length: 5 }, (_, index) => index)
  return (
    <Stack align={'center'} marginTop="5">
      <Table size="lg" variant="striped" w="90%" overflow={'true'}>
        <Thead textColor={'white'}>
          <Tr background={'primary.400'} color={'white'}>
            <Th>
              <Text color={'white'}>ID File</Text>
            </Th>
            <Th>
              <Text color={'white'}>File</Text>
            </Th>
            <Th>
              <Text color={'white'}>Type</Text>
            </Th>
            <Th>
              <Text color={'white'}>Review Status</Text>
            </Th>
            <Th>
              <Text color={'white'}>Comment</Text>
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
  return (
    <Tr>
      <Td>
        <Text fontWeight={'bold'}>IF-0000</Text>
      </Td>
      <Td>Tugas Harian</Td>
      <Td>mp4</Td>
      <Td>Reviewed</Td>
      <Td>Kerja bagus</Td>
      <Td>
        <Stack direction={'row'} spacing={4}>
          <Button mr={10} bg={'primary.100'}>
            Daftarkan
          </Button>
        </Stack>
      </Td>
    </Tr>
  )
}
