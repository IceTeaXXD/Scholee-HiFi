import { Stack } from '@chakra-ui/react'
import AboutUs from '../components/AboutUs/AboutUs'
import Layout from '../components/Layout'

export default function AboutUsPage() {
  return (
    <Layout>
      <Stack
        direction="row"
        spacing={10}
        align="center"
        justify={'center'}
        mt={10}
        mb={10}
      >
        <AboutUs
          name="Henry Anand"
          role="13521004"
          description="Halo, aku manusia dari Mojokerto, aku rasis, kerjaku adalah membully
            tiap hari."
        />
        <AboutUs
          name="Matthew Mahendra"
          role="13521007"
          description="Sipaling bucin sama 13221002 ke Bandung mulu dahlah gak ngerti lagi."
        />
        <AboutUs
          name="Ahmad Nadil"
          role="13521024"
          description="hah hoh hah hoh saya suka ngoding ngoding is lyfe lyfe is ngoding ha ho ha ho"
        />
      </Stack>
    </Layout>
  )
}
