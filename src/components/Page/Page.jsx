import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

const Page = ({ blok }) => (
  <Box
    component='main'
    sx={{
      backgroundColor: grey[100],
      width: 1,
      overflow: 'hidden',
      scrollBehavior: 'smooth'
    }}
    {...storyblokEditable(blok)}
  >
    {blok.body.map(nestedBlok => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </Box>
)

export default Page
