import { SearchIcon } from '@chakra-ui/icons'
import { Icon, Input, Stack } from '@chakra-ui/react'
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
    <Stack align={'center'}>
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
          width={'50%'}
          autoFocus
        />
      )}
    </Stack>
  )
}

export default SearchButton
