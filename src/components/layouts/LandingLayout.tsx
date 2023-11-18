import React from 'react'
import Footer from '../sections/Footer'

export default function LandingLayout(props: React.PropsWithChildren) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  )
}
