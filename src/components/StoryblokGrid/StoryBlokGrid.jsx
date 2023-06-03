import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Grid from '@mui/material/Grid'

export default function StoryblokGrid ({ blok }) {
  return (
    <Grid
      container
      {...storyblokEditable(blok)}
      {...JSON.parse(blok.gridProps)}
    >
      {blok?.gridItems?.map(nestedBlok => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      })}
    </Grid>
  )
}
