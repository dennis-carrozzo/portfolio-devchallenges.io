import { storyblokEditable } from '@storyblok/react'
import Typography from '@mui/material/Typography'

export default function StoryblokTypography ({ blok }) {
  return (
    <Typography
      {...storyblokEditable(blok)}
      {...JSON.parse(blok.typographyProps)}
    >
      {blok.content}
    </Typography>
  )
}
