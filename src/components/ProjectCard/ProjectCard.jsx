import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'
export default function Projectcard ({ project }) {
  if (project.variant === 'large') {
    return (
      <Card raised sx={{ padding: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Image */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ borderRadius: 10, overflow: 'hidden' }}
            >
              <Stack justifyContent='center' alignItems='center'>
                <CardMedia
                  image={project?.image?.filename}
                  alt={project?.image?.alt}
                  sx={{ width: 200, height: 200 }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              {/* Tags */}
              <Stack direction='row' spacing={1}>
                {project?.tags?.map(tag => {
                  return (
                    <Typography variant='subtitle1' key={tag} color='secondary'>
                      #{tag}
                    </Typography>
                  )
                })}
              </Stack>
              {/* Title */}
              <Typography variant='h6' component='h2'>
                {project?.title}
              </Typography>
              {/* Summary */}
              <Typography
                variant='body1'
                color='secondary'
                sx={{
                  marginBlock: 2,
                  width: 300,
                  WebkitLineClamp: 3,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                {project?.summary}
              </Typography>
              {/* Actions */}
              <Stack
                component={CardActions}
                direction='row'
                spacing={1}
                sx={{ paddingBlock: 2 }}
                divider={<Divider orientation='vertical' flexItem />}
              >
                <NextMuiLink href={project?.demoLink?.url} target='blank'>
                  <Button
                    variant='contained'
                    color='blue'
                    sx={{ color: 'white' }}
                  >
                    Demo
                  </Button>
                </NextMuiLink>
                <NextMuiLink href={project?.codeLink?.url} target='blank'>
                  <Button variant='outlined' color='blue'>
                    Code
                  </Button>
                </NextMuiLink>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  } else {
    return (
      <Stack
        component={Card}
        spacing={1}
        justifyContent='center'
        alignItems='center'
        sx={{ minWidth: 300, padding: 2 }}
        raised
      >
        <Stack
          direction='row'
          spacing={1}
          justifyContent='end'
          sx={{ width: 1 }}
        >
          {project?.tags?.map(tag => {
            return (
              <Typography variant='subtitle1' key={tag} color='secondary'>
                #{tag}
              </Typography>
            )
          })}
        </Stack>
        <Typography variant='h6' component='h2' align='left' sx={{ width: 1 }}>
          {project?.title}
        </Typography>
        <CardMedia
          image={project?.image?.filename}
          alt={project?.image?.alt}
          sx={{ width: 200, height: 200 }}
        />
        <CardContent
          sx={{
            marginBlock: 2,
            height: 100
          }}
        >
          <Typography
            variant='body2'
            color='secondary'
            align='left'
            sx={{
              width: 200,
              WebkitLineClamp: 3,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {project?.summary}
          </Typography>
        </CardContent>
        <Stack
          component={CardActions}
          justifyContent='end'
          alignItems='center'
          direction='row'
          spacing={1}
          divider={<Divider orientation='vertical' flexItem />}
        >
          <NextMuiLink href={project?.demoLink?.url} target='blank'>
            <Button variant='contained' color='blue' sx={{ color: 'white' }}>
              Demo
            </Button>
          </NextMuiLink>
          <NextMuiLink href={project?.codeLink?.url} target='blank'>
            <Button variant='outlined' color='blue'>
              Code
            </Button>
          </NextMuiLink>
        </Stack>
      </Stack>
    )
  }
}
