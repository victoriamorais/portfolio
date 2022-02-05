import { Link } from 'react-router-dom'
import { AppBar, Box, Button, ButtonProps, Container, IconButton, LinkProps, SvgIcon, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import { GitHubRounded, LinkedInRounded, MediumRounded } from './CustomIcons'

const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginRight: 6,
  marginLeft: 6,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, .3),
  },
}))

const NavIconButton = styled(IconButton)<LinkProps>(({ theme }) => ({
  marginRight: 6,
  marginLeft: 6,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, .3),
  },
}))

export default function PageNavbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar position="sticky" sx={({ palette: { common: { black, white } } }) => ({
      bgcolor: black,
      color: white,
    })} elevation={trigger ? 4 : 0}>
      <Toolbar component={Container} disableGutters>
        <Box sx={{
          flexGrow: 1,
        }}>
          <Typography component="h2" variant="body1" fontWeight={700} textTransform="uppercase">Portfolio</Typography>
        </Box>
        <Box component="nav" sx={{
          mr: -1.75,
        }}>
          <NavButton color="inherit">Work</NavButton>
          <NavButton color="inherit">About</NavButton>
          <NavButton color="inherit">Contact</NavButton>
          <NavIconButton color="inherit" href="https://medium.com/@moraes_victoria" target="_blank" aria-label="View profile on Medium">
            <MediumRounded />
          </NavIconButton>
          <NavIconButton color="inherit" href="https://github.com/victoriamorais" target="_blank" aria-label="View profile on GitHub">
            <GitHubRounded />
          </NavIconButton>
          <NavIconButton color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" aria-label="View profile on LinkedIn">
            <LinkedInRounded />
          </NavIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
