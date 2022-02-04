import { Box, Container, Typography } from '@mui/material'

type InnerHeadingProps = {
  text: string
}

export default function InnerHeading({ text }: InnerHeadingProps) {
  return (
    <Box position="relative" mt={-.125}>
      <Box color="common.black">
        <Container>
          <Typography component="p" variant="h4" fontSize={34} fontWeight={300}>My work</Typography>
        </Container>
      </Box>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        bgcolor: 'common.black',
        maxHeight: '80%',
        overflow: 'hidden',
        color: 'common.white'
      }} aria-hidden="true">
        <Container>
          <Typography component="p" variant="h4" fontSize={34} fontWeight={300}>{text}</Typography>
        </Container>
      </Box>
    </Box>
  )
}
