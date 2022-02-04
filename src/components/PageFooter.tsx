import { Avatar, Grid, Link, Toolbar, Typography } from '@mui/material'

import DevPicture from '../images/eduardobasso-8bit.png'

export default function PageFooter() {
  return (
    <Toolbar>
      <Grid container spacing={.75} alignItems="center" justifyContent="center">
        <Grid item xs="auto">
          <Typography component="span" variant="caption" fontWeight={400}>Developed with ❤︎ by</Typography>
        </Grid>
        <Grid item xs="auto">
          <Avatar src={DevPicture} alt="Eduardo Basso (aka the developer)'s 8-bit photo" sx={{
            width: 28,
            height: 28,
            borderWidth: 1,
            borderColor: 'divider',
            borderStyle: 'solid'
          }} />
        </Grid>
        <Grid item xs="auto">
          <Link variant="caption" fontWeight={500} href="https://github.com/eduardobasso" target="_blank" underline="hover">Eduardo Basso</Link>
        </Grid>
      </Grid>
    </Toolbar>
  )
}
