import { storyblokEditable } from '@storyblok/react'
import Button from '@mui/material/Button'
import NextMuiLink from '@/components/NextMuiLink'

export default function StoryblokCTA ({ blok }) {
  return (
    <NextMuiLink href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
      <Button {...JSON.parse(blok.buttonProps)} >{blok.text}</Button>
    </NextMuiLink>
  )
}
