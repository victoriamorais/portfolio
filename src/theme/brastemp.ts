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
      paper: '#f9f9f9',
      default: '#fff',
    }
  },
  typography,
}

export default theme
