import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Pagination from '../components/Scholarships/Pagination'
import SearchButton from '../components/Scholarships/SearchButton'
import { ReviewTable } from '../components/Review/ReviewTable'

export default function ReviewDocument() {
  return (
    <Layout>
      <Box p={'10'}>
        <SearchButton />
        <ReviewTable />
        <Pagination />
      </Box>
    </Layout>
  )
}
