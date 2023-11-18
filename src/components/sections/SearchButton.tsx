import { SearchIcon } from '@chakra-ui/icons'
import { Box, Icon, Input } from '@chakra-ui/react'
import { useState } from 'react'

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

export default SearchButton
