import { ThemeOptions } from '@mui/material/styles'

import typography from './config/typography'
import breakpoints from './config/breakpoints'
import components from './config/components'

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#242424',
      white: '#fff',
    },
    primary: {
      main: '#1a1b1f',
      light: '#404246',
      dark: '#010101',
    },
    text: {
      primary: '#1a1b1f',
      secondary: '#7c7c7c',
    },
    divider: '#7c7c7c',
    background: {
      paper: '#fff',
      default: '#f9f9f9',
    }
  },
  typography,
  breakpoints,
  components,
}

export default theme
