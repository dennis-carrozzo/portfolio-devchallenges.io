import { storyblokEditable } from '@storyblok/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function SkillsCard ({ blok }) {
  return (
    <Card {...storyblokEditable(blok)} sx={{ width: 1 }} raised>
      <CardHeader
        title={
          <Typography variant='h6' component='h2'>
            {blok.title}
          </Typography>
        }
      />
      <CardContent>
        <Stack spacing={2}>
          {JSON.parse(blok?.skills).map(skill => {
            return (
              <Stack
                key={skill.name}
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={2}
                sx={{ paddingRight: { lg: 5 } }}
              >
                <Typography component='p' variant='subtitle2' sx={{ width: 0.2 }}>
                  {skill.name}
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 10,
                    overflow: 'hidden',
                    width: 0.5,
                    height: 7,
                    backgroundColor: 'lightgray'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: skill.percentage / 100,
                      height: 1,
                      backgroundColor: 'primary.light',
                      zIndex: 10
                    }}
                  />
                </Box>
              </Stack>
            )
          })}
        </Stack>
      </CardContent>
    </Card>
  )
}
