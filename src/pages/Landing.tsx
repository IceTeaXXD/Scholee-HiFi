import LandingLayout from '../components/layouts/LandingLayout'
import Hero from '../components/sections/Hero'
import Video from '../components/sections/Video'
import Testimonials from '../components/sections/Testimonials'

export default function Landing() {
  return (
    <>
      <LandingLayout>
        <Hero />
        <Video />
        <Testimonials />
      </LandingLayout>
    </>
  )
}
