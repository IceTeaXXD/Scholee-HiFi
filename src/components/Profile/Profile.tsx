import React, { useState } from 'react'
import {
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  Input,
} from '@chakra-ui/react'
import profpic from '../../assets/react.svg'

const ProfilePage: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [originalName, setOriginalName] = useState('Professioneel Tien Jaar')
  const [originalUniversity, setOriginalUniversity] = useState(
    'Technische Hogeschool te Bandung'
  )
  const [originalMajor, setOriginalMajor] = useState('Teknik Kerja Rodi')
  const [originalLevel, setOriginalLevel] = useState('Koning van Nederland')

  const [name, setName] = useState(originalName)
  const [university, setUniversity] = useState(originalUniversity)
  const [major, setMajor] = useState(originalMajor)
  const [level, setLevel] = useState(originalLevel)

  const handleEditClick = () => {
    setIsEditMode(!isEditMode)
  }

  const handleSaveChanges = () => {
    setOriginalName(name)
    setOriginalUniversity(university)
    setOriginalMajor(major)
    setOriginalLevel(level)
    setIsEditMode(false)
  }

  const handleCancelEdit = () => {
    setName(originalName)
    setUniversity(originalUniversity)
    setMajor(originalMajor)
    setLevel(originalLevel)
    setIsEditMode(false)
  }

  return (
    <Grid
      mt={{ base: '8', md: '150' }}
      boxShadow={
        'rgba(0, 0, 0, 0.5) 0px 4px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 4px -1px'
      }
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
            {isEditMode ? (
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight={'bold'}
              />
            ) : (
              `Name: ${name}`
            )}
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            {isEditMode ? (
              <Input
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                fontSize={{ base: 'lg', md: 'xl' }}
              />
            ) : (
              `University: ${university}`
            )}
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            {isEditMode ? (
              <Input
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                fontSize={{ base: 'lg', md: 'xl' }}
              />
            ) : (
              `Major: ${major}`
            )}
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            {isEditMode ? (
              <Input
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                fontSize={{ base: 'lg', md: 'xl' }}
              />
            ) : (
              `Level: ${level}`
            )}
          </Text>
          {isEditMode ? (
            <Stack direction="row" spacing={4}>
              <Button bg={'primary.100'} onClick={handleSaveChanges}>
                Save Changes
              </Button>
              <Button onClick={handleCancelEdit}>Cancel</Button>
            </Stack>
          ) : (
            <Button bg={'primary.100'} width={200} onClick={handleEditClick}>
              Edit Profile
            </Button>
          )}
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ProfilePage
