import { ReactNode } from 'react'
import { Box, Stack } from '@mui/material'

import PageNavbar from './PageNavbar'
import PageFooter from './PageFooter'
import ScrollTopButton from './ScrollTopButton'

type Props = {
  children: ReactNode
}

export default function PageWrapper({ children }: Props) {
  return (
    <Stack minHeight="100vh">
      <PageNavbar />
      <Box flexGrow={1}>
        {children}
      </Box>
      <PageFooter />
      <ScrollTopButton />
    </Stack>
  )
}
