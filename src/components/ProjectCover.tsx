import { Box, Container, Grid, Typography } from '@mui/material'

type Props = {
  title: string
  description: string
  image: string
}

export default function ProjectCover({ title, description, image }: Props) {
  return (
    <Box component="section" sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom right',
      pt: 6,
      pb: 8,
    }}>
      <Container>
        <Grid container alignItems="center" sx={{ minHeight: '60vh' }}>
          <Grid item xs={12} sm={7} md={6} lg={5}>
            <Typography component="h3" variant="h3" color="text.primary" fontWeight={700} mb={3}>{title}</Typography>
            <Typography component="p" variant="subtitle1" color="text.primary" fontWeight={300}>{description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
