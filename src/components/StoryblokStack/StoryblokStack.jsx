import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Stack from '@mui/material/Stack'

export default function StoryblokStack ({ blok }) {
  return (
    <Stack
      {...storyblokEditable(blok)}
      {...JSON.parse(blok.stackProps)}
    >
      {blok?.stackItems?.map(nestedBlok => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      })}
    </Stack>
  )
}
