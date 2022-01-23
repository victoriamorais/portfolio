import { AppBar, Box, Button, Container, IconButton, LinkProps, SvgIcon, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const NavButton = styled(Button)<LinkProps>(({ theme }) => ({
  marginRight: 6,
  marginLeft: 6,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, .3)
  }
}));

const NavIconButton = styled(IconButton)<LinkProps>(({ theme }) => ({
  marginRight: 6,
  marginLeft: 6,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, .3)
  }
}));

export default function PageNavbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return (
    <AppBar position="sticky" sx={({ palette: { common: { black, white } } }) => ({
      bgcolor: black,
      color: white
    })} elevation={trigger ? 4 : 0}>
      <Toolbar component={Container} disableGutters>
        <Box sx={{
          flexGrow: 1
        }}>
          <Typography component="h2" variant="body1" fontWeight={700} textTransform="uppercase">Portfolio</Typography>
        </Box>
        <Box component="nav" sx={{
          mr: -1.75
        }}>
          <NavButton color="inherit" href="www.dd.com" target="_blank">Work</NavButton>
          <NavButton color="inherit">About</NavButton>
          <NavButton color="inherit">Contact</NavButton>
          <NavIconButton color="inherit" href="https://medium.com/@moraes_victoria" target="_blank" aria-label="View profile on Medium">
            <SvgIcon>
              <path d="M19 24H5C2.239 24 0 21.761 0 19V5C0 2.239 2.239 0 5 0H19C21.762 0 24 2.239 24 5V19C24 21.761 21.763 23.999 19 24ZM19.97 18.351V18.082L18.723 16.858C18.613 16.774 18.558 16.636 18.581 16.499V7.501C18.558 7.364 18.613 7.226 18.723 7.142L20 5.918V5.649H15.578L12.426 13.512L8.84 5.649H4.202V5.918L5.696 7.717C5.842 7.85 5.917 8.044 5.897 8.24V15.312C5.941 15.567 5.86 15.828 5.681 16.014L4 18.052V18.321H8.766V18.052L7.085 16.014C6.904 15.828 6.819 15.569 6.853 15.312V9.196L11.036 18.321H11.522L15.115 9.196V16.469C15.115 16.663 15.115 16.701 14.988 16.828L13.696 18.082V18.351H19.97Z" />
            </SvgIcon>
          </NavIconButton>
          <NavIconButton color="inherit" href="https://github.com/victoriamorais" target="_blank" aria-label="View profile on GitHub">
            <SvgIcon>
              <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM14.534 19.59C14.129 19.668 14 19.419 14 19.206V17.011C14 16.264 13.738 15.778 13.45 15.53C15.232 15.332 17.104 14.655 17.104 11.583C17.104 10.709 16.792 9.995 16.281 9.436C16.363 9.234 16.637 8.42 16.202 7.319C16.202 7.319 15.531 7.104 14.004 8.139C13.364 7.959 12.68 7.872 12 7.868C11.32 7.871 10.636 7.959 9.997 8.137C8.469 7.102 7.797 7.317 7.797 7.317C7.363 8.419 7.637 9.232 7.72 9.435C7.208 9.995 6.896 10.708 6.896 11.582C6.896 14.646 8.763 15.333 10.541 15.536C10.312 15.736 10.105 16.088 10.033 16.606C9.576 16.81 8.419 17.163 7.705 15.94C7.705 15.94 7.282 15.172 6.478 15.115C6.478 15.115 5.698 15.105 6.423 15.602C6.423 15.602 6.948 15.848 7.312 16.772C7.312 16.772 7.775 18.2 10 17.716V19.205C10 19.416 9.871 19.664 9.472 19.59C6.292 18.533 4 15.534 4 12C4 7.581 7.582 4 12 4C16.418 4 20 7.581 20 12C20 15.533 17.711 18.531 14.534 19.59Z" />
            </SvgIcon>
          </NavIconButton>
          <NavIconButton color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" aria-label="View profile on LinkedIn">
            <SvgIcon>
              <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" />
            </SvgIcon>
          </NavIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}