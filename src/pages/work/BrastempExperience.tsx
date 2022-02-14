import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import PageWrapper from '../../components/PageWrapper'
import ProjectCover from '../../components/ProjectCover'
import ContentNavbar from '../../components/ContentNavbar'

import Cover from '../../images/projects/brastemp-experience/cover.png'
import Discovery1 from '../../images/projects/brastemp-experience/discovery1.png'

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
        <Box zIndex={1} bgcolor="background.default">
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
            <Box component="section" mb={10} id="overview">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Overview</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>I was responsible for the product discovery process and when it had been concluded the team choosed the next squad's mission: to improve the location service of the technical assistants. This service shows the closest assistance in the user region, it helps users when they have a problem with their home appliance and need to repair it.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 6,
                    px: 4,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={1}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Estimated time: 4 months</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>My role: Product designer</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>KPI goal: <Typography component="span" color="primary" fontWeight={400}>+5%</Typography> of online shedule</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={10} id="discovery">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Discovery</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Before beggining the mission, I needed to understand and collect all the information about the service. The CSD matrix was the perfect tool to discover our certainties, suppositions and doubts about this service and direct the research and improvements.</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>After a critical analysis on the information, some questions were raised and it had been discovered during the project and in the end, we must get the answers about it.</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    pt: 5,
                    pb: 2,
                    px: 1,
                    textAlign: 'center',
                  })}>
                    <Box component="figure">
                      <Box component="img" src={Discovery1} sx={{
                        width: '100%',
                        maxWidth: 482,
                        height: 'auto',
                        maxHeight: 158,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>Matrix CSD Participants: product designers, CRO, PO, SEO, developers, QA, Tech lead and stakeholders.</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Box component="article" my={6}>
                <Grid container spacing={6} alignItems="stretch">
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      p: 6,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>Suppositions</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>"Users don't know which services a technical visit attends"</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>"Users maybe schedule a visit to solve the problem using an online service"</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>"Users are searching more informations of the tecnhical assistant on this page "</Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      p: 6,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>Questions/Doubts</Typography>
                        <Stack component="ol" spacing={2} pl={2}>
                          <Typography component="li" variant="body1" fontWeight={300}>Which moment users have been using it (scenario)?</Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>What do they need for this service?</Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>What's the channel preference for looking for information?</Typography>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box component="article" my={6}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>Analytics</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>In this moment I searched the information based on matrix CSD to validate all de certainties presented. The challenged was to sorting throught the data and made meaningfull informations  about the supositions and doubts to do the survey.</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 6,
                    px: 4,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={1}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>+60% of organic acess</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>3th page with more visits per month</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>16% of total online services representation</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </PageWrapper>
  )
}
