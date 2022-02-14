import { Box, Fab, Typography, useScrollTrigger, Zoom } from '@mui/material'

import { DoubleArrowUp } from './CustomIcons'

export default function ScrollTopButton() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Zoom in={scrolled}>
      <Box position="fixed" right={24} bottom={24}>
        <Fab color="primary" sx={{
          flexFlow: 'column',
          width: 64,
          height: 64,
        }} id="btnScrollTop" onClick={scrollTop}>
          <DoubleArrowUp />
          <Typography component="span" variant="caption" textTransform="lowercase">To top</Typography>
        </Fab>
      </Box>
    </Zoom>
  )
}
