import { Box, Container, Stack } from '@mui/material'

import ProjectCard from './ProjectCard'

import BastempCover from '../images/projects/brastemp-cover.png'
import VuptCover from '../images/projects/vupt-cover.png'
import SkillAssessmentCover from '../images/projects/skillassessment-cover.png'

export default function WorkSection() {
  return (
    <Box component="section" my={6.5}>
      <h3 hidden>Work</h3>
      <Container>
        <Stack spacing={8.5} mt={7.25}>
          <ProjectCard
            company="Whirlpool"
            title="Brastemp Experience"
            description="Most recently activities I participated working at whirlpool's Brastemp brand improving the customer experience."
            role="Product Designer"
            imgSrc={BastempCover}
            imgAlt="Brastemp cover"
            imgPos="right"
          />
          <ProjectCard
            company="Validation concept"
            title="Vupt"
            description="A new way of tracking orders in e-commerce experience. A solution wicth buyers can choose when will receive their orders."
            role="Product Designer | UX Research"
            imgSrc={VuptCover}
            imgAlt="Vupt cover"
            imgPos="left"
          />
          <ProjectCard
            company="Gama Academy"
            title="Skill Assessment"
            description="An auto evaluation service to understand the student's profile and offer the best solution: a preparatory study content, Experience program or Learning path."
            role="Product Designer"
            imgSrc={SkillAssessmentCover}
            imgAlt="Skill Assessment cover"
            imgPos="right"
          />
        </Stack>
      </Container>
    </Box>
  )
}
