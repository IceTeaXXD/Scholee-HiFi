import React from 'react'
import Footer from '../sections/Footer'
import Navbar from './Navbar'

export default function LandingLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Navbar login={true} />
      {props.children}
      <Footer />
    </>
  )
}
