import { Box, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const NavbarLink = styled(Link)(() => ({
  marginLeft: 16,
  marginRight: 16,
  fontWeight: 500,
}))

export default function ContentNavbar() {
  return (
    <Box component="nav" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: 8,
      pb: 9,
    }}>
      <NavbarLink color="primary" typography="body1">Overview</NavbarLink>
      <NavbarLink color="primary" typography="body1">Discovery</NavbarLink>
      <NavbarLink color="primary" typography="body1">Validation and Ideate</NavbarLink>
      <NavbarLink color="primary" typography="body1">Results and Learnings</NavbarLink>
    </Box>
  )
}
