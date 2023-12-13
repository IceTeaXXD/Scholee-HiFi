import { BookmarkTable } from '../components/Bookmarks/Bookmarks'
import SearchButton from '../components/Scholarships/SearchButton'
import Pagination from '../components/Scholarships/Pagination'
import Layout from '../components/Layout'
import { Box } from '@chakra-ui/react'

export default function Bookmarks() {
  return (
    <Layout>
      <Box p={'10'}>
        <SearchButton />
        <BookmarkTable />
        <Pagination />
      </Box>
    </Layout>
  )
}
