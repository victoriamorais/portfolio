import { Box, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const NavbarLink = styled(Link)(() => ({
  marginLeft: 16,
  marginRight: 16,
  fontWeight: 500,
}))

type Props = {
  items: Array<{
    label: string
    anchorId: string
  }>
}

export default function ContentNavbar({ items }: Props) {
  return (
    <Box component="nav" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: 8,
      pb: 9,
    }}>
      {items.map((item) => (
        <NavbarLink color="primary" typography="body1">{item.label}</NavbarLink>
      ))}
    </Box>
  )
}
