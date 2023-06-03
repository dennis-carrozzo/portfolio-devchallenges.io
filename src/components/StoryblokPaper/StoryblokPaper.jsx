import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Paper from '@mui/material/Paper'

export default function StoryblokPaper ({ blok }) {
  return (
    <Paper {...storyblokEditable(blok)} {...JSON.parse(blok.paperProps)}>
      {blok?.children?.map(nestedBlok => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </Paper>
  )
}
