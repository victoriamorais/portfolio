import { Box, Container, Grid, Typography } from '@mui/material'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

type Props = {
  title: string
  description: string
  image: string
}

export default function ProjectCover({ title, description, image }: Props) {
  return (
    <ParallaxProvider>
      <Box component="section" position="relative">
        <Box component={ParallaxBanner} layers={[{ image, speed: -10 }]} height='72vh' />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Container>
            <Grid container alignItems="center" minHeight='72vh'>
              <Grid item xs={12} sm={7} md={6} lg={5}>
                <Typography component="h3" variant="h3" color="text.primary" fontWeight={700} mb={3}>{title}</Typography>
                <Typography component="p" variant="subtitle1" color="text.primary" fontWeight={300}>{description}</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ParallaxProvider>
  )
}
