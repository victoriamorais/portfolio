import { Avatar, Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

import ProfilePicture from '../images/profile-picture.png';

export default function ProfileSection() {
  return (
    <Box component="section">
      <h3 hidden>Profile</h3>
      <Container>
        <Grid container spacing={3} alignItems="stretch" justifyContent="space-between">
          <Grid item xs={12} sm={8} md={7} lg={6}>
            <Stack spacing={3} height="100%">
              <Stack flexGrow={1} justifyContent="center">
                <Typography variant="h3" fontWeight={700} mb={.75}>Hello! ;D</Typography>
                <Typography variant="h3" fontWeight={700} mb={3}>I'm Victoria Morais</Typography>
                <Typography variant="body1" fontWeight={300} mb={1.5}>I'm a designer with UX/UI and product skills with more than 3 years of experience in industry, education and e-commerce. I'm currently working at Whirlpool and my objective is to contribute with my knowledge and skills to deliver the best solution for business and people needs.</Typography>
                <Typography variant="body1" fontWeight={500}>Product discovery • Usability • User centered design</Typography>
              </Stack>
              <Box textAlign="right">
                <Link variant="body1" sx={{
                  fontWeight: 500,
                  '&:after': {
                    content: '" >"'
                  }
                }}>See complete profile</Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} lg="auto">
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
  );
}