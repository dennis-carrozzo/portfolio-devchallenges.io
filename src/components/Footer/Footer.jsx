import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '../NextMuiLink'

// todo: add navigation to footer
// todo: add links to footer
const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: 'primary.light',
        color: 'white',
        padding: 6,
        position: 'relative'
      }}
      component='footer'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      <Image
        src='/logo/icons8-tech-100.png'
        width='50'
        height='50'
        alt='logo'
      />

      <Typography variant='h6' align='center'>
        Dennis Carrozzo
      </Typography>
      <Typography variant='subtitle2' align='center' component='p'>
        Full Stack Dev
      </Typography>
      <Typography
        variant='body2'
        align='center'
        sx={{ position: 'absolute', bottom: 10 }}
      >
        {'Copyright © '}
        <NextMuiLink color='inherit' to='/'>
          dennisfullstack.dev
        </NextMuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Stack>
  )
}

export default Footer
