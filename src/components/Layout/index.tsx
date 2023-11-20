import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Box,Flex } from '@chakra-ui/react'

export default function Layout(props: React.PropsWithChildren) {
  return (
    <Flex minH={'100vh'} direction="column" minW="100vw">
      <Navbar />
      <Box flex="1">
      {props.children}
      </Box>
      <Footer />
    </Flex>
  )
}
