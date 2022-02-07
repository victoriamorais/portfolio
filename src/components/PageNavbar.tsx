import { Link } from 'react-router-dom'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography, useScrollTrigger, Zoom } from '@mui/material'
import { alpha } from '@mui/material/styles'

import { GitHubRounded, LinkedInRounded, MediumRounded } from './CustomIcons'

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
          <Button component={Link} to="/" color="inherit" sx={(theme) => ({
            mr: .75,
            ml: .75,
            '&:hover': {
              bgcolor: alpha(theme.palette.common.white, .3),
            },
          })} id="btnWork">Home</Button>
          <Button component={Link} to="/contact" color="inherit" sx={(theme) => ({
            mr: .75,
            ml: .75,
            '&:hover': {
              bgcolor: alpha(theme.palette.common.white, .3),
            },
          })} id="btnContact">Contact</Button>
          <Tooltip title="Medium" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://medium.com/@moraes_victoria" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on Medium" id="btnMedium">
              <MediumRounded />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://github.com/victoriamorais" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on GitHub" id="btnGitHub">
              <GitHubRounded />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on LinkedIn" id="btnLinkedIn">
              <LinkedInRounded />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar >
  )
}
