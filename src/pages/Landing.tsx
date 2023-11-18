import Layout from '../components/Layout'
import Hero from '../components/Landing/Hero'
import Video from '../components/Landing/Video'
import Testimonials from '../components/Landing/Testimonials'

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <Video />
      <Testimonials />
    </Layout>
  )
}
