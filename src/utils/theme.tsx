import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    100: '#CBE8FA',
    200: '#4266B0',
    300: '#2A6DB6',
    400: '#2C347F',
  },
}

const customTheme = extendTheme({ colors })

export default customTheme
