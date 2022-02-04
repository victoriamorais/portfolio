import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
  company: string
  title: string
  description: string
  role: string
  imgSrc: string
  imgAlt: string
  imgPos?: 'right' | 'left'
}

export default function ProjectCard({ company, title, description, role, imgSrc, imgAlt, imgPos = 'right' }: Props) {
  return (
    <Card elevation={0} sx={(theme) => ({
      borderRadius: 0,
      bgcolor: 'background.default',
      [theme.breakpoints.up('md')]: {
        p: 0,
      },
      [theme.breakpoints.only('sm')]: {
        mx: -3,
      },
      [theme.breakpoints.only('xs')]: {
        mx: -2,
      },
    })}>
      <CardActionArea sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          flexDirection: (imgPos === 'right') ? 'row' : 'row-reverse',
          alignItems: 'center',
        },
        textAlign: 'left',
        transition: theme.transitions.create('background-color'),
        '& > img': {
          opacity: 1,
          transition: theme.transitions.create('opacity'),
        },
        '& > div': {
          transition: theme.transitions.create('padding'),
        },
        '&:hover, &:focus': {
          '& > img': {
            opacity: .5,
          },
          [theme.breakpoints.up('md')]: {
            '& > div': {
              pr: (imgPos === 'right') ? 16.5 : 4,
              pl: (imgPos === 'right') ? 4 : 16.5,
            }
          },
        }
      })}>
        <CardContent sx={(theme) => ({
          flexGrow: 1,
          [theme.breakpoints.up('md')]: {
            pr: (imgPos === 'right') ? 19.5 : 0,
            pl: (imgPos === 'left') ? 19.5 : 0,
          },
        })}>
          <Typography variant="overline" color="text.secondary" fontWeight={500}>{company}</Typography>
          <Typography variant="h4" fontWeight={500} mb={3}>{title}</Typography>
          <Typography variant="body1" fontWeight={300} mb={1.5}>{description}</Typography>
          <Typography variant="body2" fontWeight={500}>My role: {role}</Typography>
        </CardContent>
        <CardMedia component="img" sx={(theme) => ({
          width: '100%',
          height: 'auto',
          textAlign: 'center',
          [theme.breakpoints.up('md')]: {
            maxWidth: 518,
            maxHeight: 346,
          },
          [theme.breakpoints.down('md')]: {
            pt: 3,
          },
          [theme.breakpoints.only('sm')]: {
            // px: 2,
          },
          [theme.breakpoints.only('xs')]: {
            maxHeight: 274,
            // px: 2,
            objectFit: 'cover',
          },
        })} image={imgSrc} alt={imgAlt} />
      </CardActionArea>
    </Card>
  )
}
