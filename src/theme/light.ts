import { ThemeOptions } from '@mui/material/styles';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light'
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