import { ThemeOptions } from '@mui/material/styles';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#010101',
      white: '#fff'
    },
    primary: {
      main: '#1a1b1f',
      light: '#404246',
      dark: '#010101'
    },
    text: {
      primary: '#1a1b1f',
      secondary: '#1a1b1f'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(',')
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: '14px 28px'
        }
      }
    }
  }
};

export default lightTheme;