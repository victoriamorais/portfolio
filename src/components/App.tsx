import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import mixedTheme from '../theme/mixed';

import Home from '../pages/Home';

let theme = createTheme(mixedTheme);
theme = responsiveFontSizes(theme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}