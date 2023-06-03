import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Grid from '@mui/material/Grid'

export default function StoryblokGridItem ({ blok }) {
  return (
    <Grid
      item
      {...JSON.parse(blok?.gridItemProps)}
      {...storyblokEditable(blok)}
    >
      {blok?.childComponent?.map(nestedBlok => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      })}
    </Grid>
  )
}
