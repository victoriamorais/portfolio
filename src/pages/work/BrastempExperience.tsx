import { Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import PageWrapper from '../../components/PageWrapper'
import ProjectCover from '../../components/ProjectCover'
import ContentNavbar from '../../components/ContentNavbar'

import Cover from '../../images/projects/brastemp-experience/cover.png'

import brastempTheme from '../../theme/brastemp'

let theme = createTheme(brastempTheme)
theme = responsiveFontSizes(theme)

export default function BrastempExperience() {
  return (
    <PageWrapper>
      <ThemeProvider theme={theme}>
        <ProjectCover
          title="Technical assistance location"
          description="How we improved the service and make the searching process of a technical assistance more efficient"
          image={Cover}
        />
        <ContentNavbar items={[{
          label: 'Overview',
          anchorId: 'overview',
        }, {
          label: 'Discovery',
          anchorId: 'discovery',
        }, {
          label: 'Validation and Ideate',
          anchorId: 'validationAndIdeate',
        }, {
          label: 'Results and Learnings',
          anchorId: 'resultsAndLearnings',
        }]} />
        <Container>
          <Stack spacing={8}>
            <Grid container spacing={6} alignItems="center" component="article" id="overview">
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography component="h4" variant="h4" color="primary" fontWeight={600} id="#overview">Overview</Typography>
                  <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>I was responsible for the product discovery process and when it had been concluded the team choosed the next squad's mission: to improve the location service of the technical assistants. This service shows the closest assistance in the user region, it helps users when they have a problem with their home appliance and need to repair it.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={(theme) => ({
                  borderRadius: 0,
                  bgcolor: theme.palette.background.paper,
                  p: 6,
                  textAlign: 'center',
                })}>
                  <Stack spacing={1}>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Estimated time: 4 months</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>My role: Product designer</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>KPI goal: +5% of online shedule</Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </ThemeProvider>
    </PageWrapper>
  )
}
