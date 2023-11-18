'use client'

import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import hero from '../../assets/hero.webp'
import wave from '../../assets/wave.webp'

export default function Hero() {
  return (
    <>
      <Stack
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={wave}
        backgroundSize={'cover'}
        backgroundPosition={'left bottom'}
      >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={{ base: 'lg', md: 'xl' }}>
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              maxW={'lg'}
            >
              <Text color={'primary.300'} as={'span'}>
                Get matched to Scholarships that fits you
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Finding college scholarships shouldn&apos;t be overwhelming. We
              make it simple and match you to scholarships you qualify for.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Get Started
              </Button>
              <Button rounded={'full'}>More Information</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          maxH={'100vh'}
          align={'center'}
          justify={'center'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={hero}
            width={'65%'}
          />
        </Flex>
      </Stack>
    </>
  )
}
