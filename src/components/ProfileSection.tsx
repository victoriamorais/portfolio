import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'

import ProfilePicture from '../images/profile-picture.png'

export default function ProfileSection() {
  return (
    <Box component="section" sx={({ palette: { common: { black, white } } }) => ({
      pt: 6,
      pb: 8,
      bgcolor: black,
      color: white,
    })}>
      <h3 hidden>Profile</h3>
      <Container>
        <Grid container spacing={3} alignItems="stretch" justifyContent="space-between">
          <Grid item xs={12} sm={7} lg={6}>
            <Stack spacing={3} height="100%">
              <Stack flexGrow={1} justifyContent="center">
                <Typography variant="h3" fontWeight={700} mb={.75}>Hello! 🤘🏻</Typography>
                <Typography variant="h3" fontWeight={700} mb={3}>I'm Victoria Morais</Typography>
                <Typography variant="body1" fontWeight={300} mb={2.25}>A designer with UX/UI and product skills with more than 3 years of experience in industry, education and e-commerce. I'm currently working at Whirlpool and my objective is to contribute with my knowledge and skills to deliver the best solution for business and people needs.</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>❤️ Product Discovery</Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>📚 UX Research</Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>💪🏻 UX/UI Design</Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} lg="auto" alignSelf="center">
            <Avatar variant="square" src={ProfilePicture} alt="Victoria's profile picture" sx={{
              width: '100%',
              maxWidth: 410,
              height: 'auto',
              maxHeight: 456
            }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
