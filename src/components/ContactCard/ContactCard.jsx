import { storyblokEditable } from '@storyblok/react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Github from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import ArrowRight from '@mui/icons-material/ArrowRight'
import NextMuiLink from '@/components/NextMuiLink'

// todo: add social links on contact card
// todo: add variant without link
export default function ContactCard ({ blok }) {
  return (
    <Stack
      component={Card}
      alignItems={{ xs: 'start', sm: 'center', md: 'start' }}
      sx={{ width: 1, padding: 2, overflow: 'hidden' }}
      {...storyblokEditable(blok)}
      raised
    >
      <CardMedia
        component='img'
        height='300'
        image={blok.image.filename}
        alt={blok.image.alt}
        sx={{ borderRadius: 2, maxWidth: 400 }}
      />
      <CardHeader
        title={
          <Typography variant='h6' component='h2'>
            {blok.name}
          </Typography>
        }
        subheader={
          <Typography variant='subtitle1' component='p' color='secondary'>
            {blok.role}
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Stack gap={1}>
          {/* Email link */}
          <Stack
            direction='row'
            gap={1}
            justifyContent='start'
            alignItems='center'
            component={NextMuiLink}
            href={`mailto:${blok.email}`}
          >
            <EmailIcon />
            <Typography variant='subtitle2'>{blok.email}</Typography>
          </Stack>
          {/* Phone link */}
          <Stack
            direction='row'
            gap={1}
            justifyContent='start'
            alignItems='center'
            component={NextMuiLink}
            href={`tel:${blok.phone}`}
          >
            <PhoneIcon />
            <Typography variant='subtitle2'>{blok.phone}</Typography>
          </Stack>
          {/* Github link */}
          <Stack
            direction='row'
            gap={1}
            justifyContent='start'
            alignItems='center'
            component={NextMuiLink}
            href={blok.githubLink}
          >
            <Github />
            <Typography variant='subtitle2'>{blok.githubUsername}</Typography>
          </Stack>
          {/* LinkedIn link */}
          <Stack
            direction='row'
            gap={1}
            justifyContent='start'
            alignItems='center'
            component={NextMuiLink}
            href={blok.linkedInLink}
          >
            <LinkedIn />
            <Typography variant='subtitle2'>{blok.linkedInUsername}</Typography>
          </Stack>
          {/* Summary text */}
        </Stack>
        {blok.variant === 'full' && (
          <Typography
            variant='body2'
            component='p'
            color='secondary'
            sx={{ marginTop: 4 }}
          >
            {blok.snippet}
          </Typography>
        )}
      </CardContent>
      {blok.variant === 'full' && (
        <CardActions sx={{ justifyContent: 'center' }}>
          <NextMuiLink href='/about'>
            <Button variant='outlined' size='small' endIcon={<ArrowRight />}>
              Read More About Me
            </Button>
          </NextMuiLink>
        </CardActions>
      )}
    </Stack>
  )
}
