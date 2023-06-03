import { storyblokEditable } from '@storyblok/react'
import NextMuiLink from '../NextMuiLink'

const MenuLink = ({ blok, sx }) => {
  return (
    <NextMuiLink
      to={blok.link.cached_url === 'home' ? '/' : blok.link.cached_url}
      {...storyblokEditable(blok)}
      sx={sx || { color: 'white' }}
    >
      {blok.title}
    </NextMuiLink>
  )
}
export default MenuLink
