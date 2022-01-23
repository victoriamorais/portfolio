import { ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#242424',
      white: '#fff'
    },
    primary: {
      main: '#1a1b1f',
      light: '#404246',
      dark: '#010101'
    },
    text: {
      primary: '#1a1b1f',
      secondary: '#7c7c7c'
    },
    divider: '#7c7c7c',
    background: {
      paper: '#fff',
      default: '#f9f9f9'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(',')
  }
};

export default theme;