import Box from '@mui/material/Box'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer'

export default function RichText ({ blok }) {
  return (
    <Box {...storyblokEditable(blok)} {...JSON.parse(blok.richTextProps)}>
      {render(blok.content, {
        defaultBlokResolver: (name, props) => {
          const blok = { ...props, component: name }
          return <StoryblokComponent blok={blok} key={blok._uid} />
        }
      })}
    </Box>
  )
}
