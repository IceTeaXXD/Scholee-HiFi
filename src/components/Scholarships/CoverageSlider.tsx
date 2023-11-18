import { Stack, Box, Text } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/slider'
import { useState } from 'react'

const CoverageSlider: React.FC = () => {
  const [coverage, setCoverage] = useState(50)
  return (
    <Stack align={'center'}>
      <Slider
        w="50%"
        defaultValue={coverage}
        min={0}
        max={1000}
        step={10}
        onChange={(e) => {
          setCoverage(e)
        }}
      >
        <SliderTrack bg="gray">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="primary.400" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Text>Coverage: ${coverage}</Text>
    </Stack>
  )
}

export default CoverageSlider
