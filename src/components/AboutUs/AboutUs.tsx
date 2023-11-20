'use client'

import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

interface AboutUsProps {
  name: string
  role: string
  description: string
  img: string
}

export default function AboutUs({
  name,
  role,
  description,
  img,
}: AboutUsProps) {
  return (
    <Box
      minW={'270px'}
      maxW={'270px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      alignItems={'center'}
      alignContent={'center'}
    >
      <Image
        h={'120px'}
        w={'full'}
        src={
          'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        }
        objectFit="cover"
        alt="#"
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={img}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>{role}</Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Text fontSize={'sm'} color={'gray.500'}>
            {description}
          </Text>
        </Stack>

        <Button
          w={'full'}
          mt={8}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          Follow
        </Button>
      </Box>
    </Box>
  )
}
