import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import mixedTheme from '../theme/mixed'

import AppRouter from './AppRouter'

let theme = createTheme(mixedTheme)
theme = responsiveFontSizes(theme)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}
