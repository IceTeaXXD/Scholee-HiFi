import Layout from '../components/Layout'
import CoverageSlider from '../components/Scholarships/CoverageSlider'
import Pagination from '../components/Scholarships/Pagination'
import { ScholarshipTable } from '../components/Scholarships/ScholarshipsList'
import SearchButton from '../components/Scholarships/SearchButton'

export default function Scholarships() {
  return (
    <Layout>
      <SearchButton />
      <CoverageSlider />
      <ScholarshipTable />
      <Pagination />
    </Layout>
  )
}
