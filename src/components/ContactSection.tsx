import { Box, Container, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'

import { EmailOutlined, LinkedIn, WhatsAppOutlined } from './CustomIcons'

export default function ContactSection() {
  return (
    <Box component="section" sx={({ palette: { common: { black, white } } }) => ({
      bgcolor: black,
      pt: 6,
      pb: 8,
      color: white,
    })}>
      <h3 hidden>Contact</h3>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-around" sx={{ minHeight: '64vh' }}>
          <Grid item xs={12} md="auto">
            <Stack flexGrow={1} spacing={.75} justifyContent="center">
              <Typography variant="h3" fontWeight={700}>Enjoy my work?</Typography>
              <Typography variant="h3" fontWeight={700}>Let's talk!</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md="auto">
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <WhatsAppOutlined />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                }}>
                  <Link color="inherit" href="https://wa.me/5511956961007" target="_blank" underline="hover">+55 11 95696-1007</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <EmailOutlined />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                }}>
                  <Link color="inherit" href="mailto:moraes_victoria@hotmail.com" underline="hover">moraes_victoria@hotmail.com</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <LinkedIn />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                }}>
                  <Link color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" underline="hover">linkedin.com/in/victoria-morais</Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
