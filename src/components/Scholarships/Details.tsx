import { Box, Button, Center, Text } from '@chakra-ui/react'

const Details: React.FC = () => {
  return (
    <Center>
      <Box mt={90} bg={'gray.200'} p={30} w={'80%'} justifyContent={'center'}>
        <Box p={15} border={'20px'} borderColor={'gray.200'}>
          <Text fontSize={'4xl'} fontWeight={'bold'}>
            Beasiswa Kehadiran Kelas Minggu 09
          </Text>
          <Text fontSize={'lg'} pt={5}>
            Hadiah untuk mereka yang mengisi presensi tetapi tidak hadir di
            kelas
          </Text>
          <Text fontSize={'lg'} pt={5}>
            Pertemuan hari ini (minggu 09) hanya dihadiri oleh 13 orang
            mahasiswa sedangkan yang mengisi presensi di web akademik ada 15
            orang. Silakan 2 orang yang menyatakan diri hadir padahal sebenarnya
            absen segera menghubungi saya.
          </Text>
          <Text fontSize={'2xl'} fontWeight={'bold'} pt={8}>
            Information
          </Text>
          <Text fontSize={'lg'}>Coverage: $3,140.00</Text>
          <Text fontSize={'lg'}>Contact Name: Rina Ester</Text>
          <Text fontSize={'lg'}>Contact Email: terdakwa@if3140.edu</Text>

          <Center>
            <Button size={'lg'} colorScheme={'twitter'} variant={'solid'}>
              Bookmark
            </Button>
          </Center>
        </Box>
      </Box>
    </Center>
  )
}

export default Details
