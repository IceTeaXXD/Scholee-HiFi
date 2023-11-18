import { Box } from '@chakra-ui/react'
import BookmarkList from '../components/layouts/BookmarkList'

const BookmarksPage: React.FC = () => {
  return (
    <Box p={'5'}>
      <BookmarkList />
    </Box>
  )
}

export default BookmarksPage
