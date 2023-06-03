import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// todo: add copyright on images
// todo: turn hobby snippets in image with figcaption for be semantically correct
// todo: add image loader
export default function HobbiesCard ({ blok }) {
  return (
    <Card
      sx={{ width: 1, padding: 2, overflow: 'hidden' }}
      {...storyblokEditable(blok)}
      raised
    >
      <CardHeader
        title={
          <Typography variant='h6' component='h2'>
            {blok.title}
          </Typography>
        }
      />
      <CardContent>
        <Stack
          justifyContent='center'
          alignItems='center'
          spacing={10}
          sx={{ width: 1 }}
        >
          {blok?.hobbies?.map(hobby => {
            return (
              <Stack
                spacing={1}
                sx={{ width: 1 }}
                justifyContent={{
                  xs: 'center',
                  lg: 'start'
                }}
                alignItems='center'
                key={hobby.title}
              >
                <Image
                  src={hobby.image.filename}
                  alt={hobby.image.alt}
                  title={hobby.image.copyright}
                  style={{ objectFit: 'cover' }}
                  width={250}
                  height='100'
                  priority
                />
                <Box sx={{ width: 1 }}>
                  <Typography
                    component='h2'
                    variant='subtitle2'
                    sx={{ textAlign: { xs: 'center', lg: 'left' } }}
                    >
                    {hobby.title}
                  </Typography>
                  <Typography
                    component='p'
                    variant='caption'
                    color='secondary.main'
                    sx={{ textAlign: { xs: 'center', lg: 'left' } }}
                  >
                    {hobby.subtitle}
                  </Typography>
                </Box>
              </Stack>
            )
          })}
        </Stack>
      </CardContent>
    </Card>
  )
}
