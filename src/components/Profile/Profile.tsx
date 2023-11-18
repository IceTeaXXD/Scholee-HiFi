import {
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import profpic from '../../assets/react.svg'

const ProfilePage: React.FC = () => {
  return (
    <Grid
      mt={{ base: '8', md: '150' }}
      boxShadow={'dark-lg'}
      border={100}
      bg={'white'}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <GridItem w="100%" textAlign={'center'} p={50}>
        <Center>
          <Image src={profpic} w={150} h={150} borderRadius={100} />
        </Center>
      </GridItem>
      <GridItem w="100%">
        <Stack spacing={6} p={4}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight={'bold'}>
            Name: Professioneel Tien Jaar
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            University: Technische Hogeschool te Bandung
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            Major: Teknik Kerja Rodi
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            Level: Koning van Nederland
          </Text>
          <Button bg={'primary.100'} width={200}>
            Edit Profile
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ProfilePage
