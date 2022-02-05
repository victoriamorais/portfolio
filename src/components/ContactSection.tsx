import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, SvgIcon, Typography } from '@mui/material'

import { EmailOutlined, LinkedIn, WhatsAppOutlined } from './CustomIcons'

export default function ContactSection() {
  return (
    <Box component="section" pt={6} pb={8}>
      <h3 hidden>Contact</h3>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md="auto">
            <Stack flexGrow={1} spacing={.75} justifyContent="center">
              <Typography variant="h3" fontWeight={700}>Enjoy my work?</Typography>
              <Typography variant="h3" fontWeight={700}>Let's talk!</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md="auto">
            <List>
              <ListItem>
                <ListItemIcon>
                  <WhatsAppOutlined />
                </ListItemIcon>
                <ListItemText primary="+55 11 98827-3800" primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500
                }}></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailOutlined />
                </ListItemIcon>
                <ListItemText primary="moraes_victoria@hotmail.com" primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500
                }}></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedIn />
                </ListItemIcon>
                <ListItemText primary="https://www.linkedin.com/in/victoria-morais/" primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500
                }}></ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
