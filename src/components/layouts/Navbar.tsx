import {
  Box,
  Button,
  Flex,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Image,
  Text,
  Collapse,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import logo from '../../assets/logo.svg'

const Navbar: React.FC<{ login: boolean }> = ({ login }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MobileNavbarButton isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <MobileNavbar isOpen={isOpen} login={login} toggleNavbar={toggleNavbar} />
      <DesktopNavbar login={login} />
    </>
  )
}

const MobileNavbarButton: React.FC<{
  isOpen: boolean
  toggleNavbar: () => void
}> = ({ isOpen, toggleNavbar }) => {
  return (
    <Box display={{ base: 'flex', md: 'none' }} ml="auto">
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
        onClick={toggleNavbar}
        aria-label={''}
      />
    </Box>
  )
}

const MobileNavbar: React.FC<{
  isOpen: boolean
  login: boolean
  toggleNavbar: () => void
}> = ({ isOpen, login, toggleNavbar }) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Stack
        direction="column"
        align="center"
        justify="center"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="white"
        zIndex="999"
      >
        <Box mb={4}>
          <IconButton
            icon={<CloseIcon />}
            variant="ghost"
            onClick={toggleNavbar}
            aria-label="Close"
          />
        </Box>

        {login ? (
          <>
            <NavItems item="Dashboard" />
            <NavItems item="Scholarships" />
            <NavItems item="Bookmarks" />

            <Popover trigger={'click'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box fontSize={'lg'}>
                  Document Preparation <ChevronDownIcon />
                </Box>
              </PopoverTrigger>

              <PopoverContent p={4}>
                <Stack spacing={5}>
                  <Text>Upload Document</Text>
                  <Text>Document Review</Text>
                </Stack>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <NavItems item="Home" />
        )}

        <NavItems item="About Us" />

        {login ? (
          <Popover trigger={'click'}>
            <PopoverTrigger>
              <Button color={'white'} bg={'primary.300'} onClick={toggleNavbar}>
                Sukmana
              </Button>
            </PopoverTrigger>
            <PopoverContent p={4}>
              <Stack spacing={5}>
                <Text>View Profile</Text>
              </Stack>
            </PopoverContent>
          </Popover>
        ) : (
          <Button color={'white'} bg={'primary.300'} onClick={toggleNavbar}>
            Login
          </Button>
        )}
      </Stack>
    </Collapse>
  )
}

const DesktopNavbar: React.FC<{ login: boolean }> = ({ login }) => {
  return (
    <Stack
      direction={'row'}
      p={4}
      align="center"
      boxShadow={'lg'}
      display={{ base: 'none', md: 'flex' }}
    >
      <Flex>
        <Image src={logo} alt={''} width={'15'} height={'10'} />
      </Flex>
      <Flex flex={{ base: 1, md: 'auto' }}>
        <Stack direction={'row'} spacing={10} ml={4}>
          {login ? (
            <>
              <NavItems item="Dashboard" />
              <NavItems item="Scholarships" />
              <NavItems item="Bookmarks" />

              <Box>
                <Popover trigger={'click'} placement={'bottom-start'}>
                  <PopoverTrigger>
                    <Box fontSize={'lg'}>
                      Document Preparation <ChevronDownIcon />
                    </Box>
                  </PopoverTrigger>

                  <PopoverContent p={4}>
                    <Stack spacing={5}>
                      <Text>Upload Document</Text>
                      <Text>Document Review</Text>
                    </Stack>
                  </PopoverContent>
                </Popover>
              </Box>
            </>
          ) : (
            <>
              <NavItems item="Home" />
            </>
          )}

          <NavItems item="About Us" />
        </Stack>
      </Flex>

      <Flex>
        {login ? (
          <Popover trigger={'click'}>
            <PopoverTrigger>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                color={'white'}
                bg={'primary.300'}
              >
                Sukmana
              </Button>
            </PopoverTrigger>
            <PopoverContent p={4}>
              <Stack spacing={5}>
                <Text>View Profile</Text>
              </Stack>
            </PopoverContent>
          </Popover>
        ) : (
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            color={'white'}
            bg={'primary.300'}
          >
            Login
          </Button>
        )}
      </Flex>
    </Stack>
  )
}

interface NavItemsProps {
  item: string
}

const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  return (
    <Box>
      <Text fontSize={'lg'}>{item}</Text>
    </Box>
  )
}

export default Navbar
