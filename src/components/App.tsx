import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import lightTheme from '../theme/light';

import Home from '../pages/Home';

const theme = createTheme(lightTheme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}