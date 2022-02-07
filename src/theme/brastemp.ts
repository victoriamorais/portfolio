import { ThemeOptions } from '@mui/material/styles'

import breakpoints from './config/breakpoints'
import typography from './config/typography'

const theme: ThemeOptions = {
  breakpoints,
  palette: {
    mode: 'light',
    common: {
      black: '#242424',
      white: '#fff',
    },
    primary: {
      main: '#f55d2f',
      light: '#ff8f5c',
      dark: '#bb2800',
    },
    text: {
      primary: '#242424',
      secondary: '#4f4f4f',
    },
    divider: '#e5e5e5',
    background: {
      paper: '#fff',
      default: '#f9f9f9',
    }
  },
  typography,
}

export default theme
