import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Pagination from '../components/Scholarships/Pagination'
import { ScholarshipTable } from '../components/Scholarships/ScholarshipsList'
import SearchButton from '../components/Scholarships/SearchButton'

export default function Scholarships() {
  return (
    <Layout>
      <Box p={'10'}>
        <SearchButton />
        <ScholarshipTable />
        <Pagination />
      </Box>
    </Layout>
  )
}
