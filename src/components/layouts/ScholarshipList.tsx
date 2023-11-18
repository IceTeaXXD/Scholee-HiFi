import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
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
  HStack,
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'

import { BsBookmarkFill } from 'react-icons/bs'

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

const SearchButton: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false)

  const handleSearchClick = () => {
    setIsSearching(true)
  }

  const handleCloseClick = () => {
    setIsSearching(false)
  }

  return (
    <Box>
      {!isSearching ? (
        <Icon
          as={SearchIcon}
          boxSize={10}
          aria-label="Search"
          onClick={handleSearchClick}
        />
      ) : (
        <Input
          placeholder="Search..."
          paddingRight="2rem"
          onBlur={handleCloseClick}
          autoFocus
        />
      )}
    </Box>
  )
}

const CoverageSlider: React.FC = () => {
  const [coverage, setCoverage] = useState(50)
  return (
    <>
      <Slider
        w="50%"
        defaultValue={coverage}
        min={0}
        max={1000}
        step={10}
        onChange={(e) => {
          setCoverage(e)
        }}
      >
        <SliderTrack bg="gray">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="primary.400" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Text>Coverage: ${coverage}</Text>
    </>
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

const Pagination: React.FC = () => {
  return (
    <HStack mt={4} spacing={4}>
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

export default ScholarshipsList
