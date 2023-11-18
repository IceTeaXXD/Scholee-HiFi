import { BookmarkTable } from '../components/Bookmarks/Bookmarks'
import SearchButton from '../components/Scholarships/SearchButton'
import CoverageSlider from '../components/Scholarships/CoverageSlider'
import Pagination from '../components/Scholarships/Pagination'
import Layout from '../components/Layout'

export default function Bookmarks() {
  return (
    <Layout>
      <SearchButton />
      <CoverageSlider />
      <BookmarkTable />
      <Pagination />
    </Layout>
  )
}
