import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import { DeleteBookmarkDialog } from './DeleteBookmarkDialog'

export const BookmarkTable: React.FC = () => {
  const bookmarkData = Array.from({ length: 3 }, (_, index) => index) // Create an array with 10 elements
  return (
    <Stack align={'center'}>
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
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookmarkData.map((index) => (
            <BookmarkData key={index} />
          ))}
        </Tbody>
      </Table>
    </Stack>
  )
}

const BookmarkData: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleRemoveBookmark = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }
  return (
    <>
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
          <Stack direction={'row'} spacing={'4'}>
            <Link to="/scholarships/viewmore">
              <Button mr={10} bg={'primary.100'}>
                View More
              </Button>
            </Link>
            <Button bg={'primary.100'} onClick={handleRemoveBookmark}>
              Remove Bookmark
            </Button>
          </Stack>
        </Td>
      </Tr>
      <DeleteBookmarkDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </>
  )
}
