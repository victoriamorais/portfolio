import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import AppRouter from './AppRouter'

import lightTheme from '../theme/light'

let theme = createTheme(lightTheme)
theme = responsiveFontSizes(theme)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}
