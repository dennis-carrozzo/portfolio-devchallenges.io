import { storyblokEditable } from '@storyblok/react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'

export default function Hero ({ blok }) {
  return (
    <Stack
      {...JSON.parse(blok?.stackProps)}
      {...storyblokEditable(blok)}
      justifyContent='center'
      alignItems='center'
    >
      <Typography {...JSON.parse(blok.titleProps)}>{blok.title}</Typography>
      {!!blok?.subtitle && (
        <Typography {...JSON.parse(blok.subtitleProps)}>
          {blok.subtitle}
        </Typography>
      )}
      {!!blok.primaryCtaLinkText && (
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={5}
        >
          <NextMuiLink href={blok.primaryCtaLink?.cached_url}>
            <Button variant='contained'>{blok.primaryCtaLinkText}</Button>
          </NextMuiLink>
          {!!blok.secondaryCtaLinkText && (
            <NextMuiLink
              href={blok.secondaryCtaLink?.cached_url}
              anchor={blok.secondaryCtaLink.anchor}
            >
              <Button variant='outlined'>{blok.secondaryCtaLinkText}</Button>
            </NextMuiLink>
          )}
        </Stack>
      )}
    </Stack>
  )
}
