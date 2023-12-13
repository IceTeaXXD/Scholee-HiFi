import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  MenuButton,
  Stack,
  Button,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'

const SearchButton: React.FC = () => {
  const [minCoverage, setMinCoverage] = useState('0')
  const [maxCoverage, setMaxCoverage] = useState('0')
  const parse = (val: string) => val.replace(/^\$/, '')
  const format = (val: string) => `$` + val
  return (
    <Stack
      spacing={4}
      direction={{ base: 'column', md: 'row' }}
      maxWidth={'90%'}
      margin={'auto'}
      mb={'1rem'}
    >
      {/* Search Bar */}
      <InputGroup borderRadius={10} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          borderRadius={10}
          placeholder="Search..."
          border="1px solid #949494"
        />
      </InputGroup>

      {/* Filter Menu */}
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          leftIcon={<FaFilter />}
          rightIcon={<ChevronDownIcon />}
          size={'md'}
          minWidth={'150px'}
        >
          Filter
        </MenuButton>
        <MenuList minWidth={'240px'}>
          {/* Types */}
          <MenuOptionGroup title={'Types'} type={'checkbox'}>
            <MenuItemOption value={'Kuliah'}>Kuliah</MenuItemOption>
            <MenuItemOption value={'Manajemen'}>Manajemen</MenuItemOption>
            <MenuItemOption value={'Basis Data'}>Basis Data</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          {/* Items per Page */}
          <MenuOptionGroup title="Items per Page" type="radio" defaultValue="5">
            <MenuItemOption value="5">5</MenuItemOption>
            <MenuItemOption value="10">10</MenuItemOption>
            <MenuItemOption value="15">15</MenuItemOption>
            <MenuItemOption value="20">20</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          {/* Coverage */}
          <MenuGroup title="Minimum Coverage">
            <NumberInput
              id="min-coverage"
              min={0}
              defaultValue={0}
              value={format(minCoverage)}
              onChange={(valueString) => setMinCoverage(parse(valueString))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Maximum Coverage">
            <NumberInput
              id="max-coverage"
              min={0}
              defaultValue={0}
              value={format(maxCoverage)}
              onChange={(valueString) => setMaxCoverage(parse(valueString))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Stack>
  )
}

export default SearchButton
