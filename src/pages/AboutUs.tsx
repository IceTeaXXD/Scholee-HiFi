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
          img="https://media.licdn.com/dms/image/C5603AQGPYTUXPvg4iQ/profile-displayphoto-shrink_400_400/0/1629891955698?e=2147483647&v=beta&t=H8Co2fuyyGHgvOLaiVQy2yxeBY1MINP92U8FBIgngC8"
        />
        <AboutUs
          name="Matthew Mahendra"
          role="13521007"
          description="Sipaling bucin sama 13221002 ke Bandung mulu dahlah gak ngerti lagi."
          img="https://media.licdn.com/dms/image/C4D03AQG6Iacmk5bpAQ/profile-displayphoto-shrink_100_100/0/1632934625785?e=1706140800&v=beta&t=Ke2zI1Tot-qzNP7U4pil5ixS0qBO2cGdCc39G25jPRE"
        />
        <AboutUs
          name="Ahmad Nadil"
          role="13521024"
          description="hah hoh hah hoh saya suka ngoding ngoding is lyfe lyfe is ngoding ha ho ha ho"
          img="https://media.licdn.com/dms/image/D5603AQH1wvPMg5qdAQ/profile-displayphoto-shrink_400_400/0/1675839305895?e=1706140800&v=beta&t=ztvIfBCEpJ8Wfw7H7UqChx7ZJKhrAMNXdoc8viMKgu4"
        />
      </Stack>
    </Layout>
  )
}
