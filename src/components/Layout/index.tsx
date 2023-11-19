import React from 'react'
import Footer from './Footer'
// import Navbar2 from './Navbar2'
import Navbar from './Navbar'
import { Box } from '@chakra-ui/react'

export default function Layout(props: React.PropsWithChildren) {
  return (
    <Box minH={'100vh'} minW={'100vw'}>
      <Navbar login={true} />
      {props.children}
      <Footer />
    </Box>
  )
}
