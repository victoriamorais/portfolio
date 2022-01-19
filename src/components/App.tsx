import { createTheme, ThemeProvider } from '@mui/material/styles';

import lightTheme from '../theme/light';

import Home from '../pages/Home';

const theme = createTheme(lightTheme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}