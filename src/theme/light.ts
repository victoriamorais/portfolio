import { ThemeOptions } from '@mui/material/styles'

import typography from './config/typography'

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
      paper: '#f9f9f9',
      default: '#fff',
    }
  },
  typography,
}

export default theme
