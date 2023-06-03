import { useState } from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'
import { IcecreamOutlined } from '@mui/icons-material'
// todo: add social links on drawer
// todo: move skills to config ~> config to context on load
// todo: move contacts to config ~> config to context on load
// todo: replace icon with letters logo
const Config = ({ blok }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ paddingBlock: 2, position: 'relative' }}
      >
        <CloseIcon sx={{ position: 'absolute', right: 20 }} />
        <NextMuiLink href='/' sx={{ textDecoration: 'none' }}>
          <Image
            src='/logo/icons8-tech-100.png'
            width='50'
            height='50'
            alt='logo'
          />
          {/* <Typography variant='h6' color='inherit' noWrap>
            Dennis, Full Stack Developer
          </Typography> */}
        </NextMuiLink>
      </Stack>
      <Divider />
      <List sx={{ marginBlock: 5 }}>
        {blok?.HeaderMenu?.map(nestedBlok => (
          <ListItem
            key={nestedBlok._uid}
            // disablePadding
            sx={{ textAlign: 'center' }}
          >
            <ListItemText
              primary={
                <Button variant='text'>
                  <StoryblokComponent
                    blok={nestedBlok}
                    sx={{ color: 'secondary', textDecoration: 'none' }}
                  />
                </Button>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', width: 1 }} {...storyblokEditable(blok)}>
      <AppBar component='nav'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NextMuiLink
            href='/'
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
                display: 'flex',
                direction: 'row'
              },
              color: 'white'
            }}
          >
            <Image
              src='/logo/icons8-tech-100.png'
              width='25'
              height='25'
              alt='logo'
              style={{
                display: 'inline',
                transform: 'translateY(5px)',
                marginRight: 10
              }}
            />
            <Typography
              variant='h6'
              component='h1'
              sx={{ width: 'min-content', minWidth: 275, display: 'inline' }}
            >
              &lt;Dennis Full Stack Dev /&gt;
            </Typography>
          </NextMuiLink>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: 'auto', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            spacing={3}
            direction='row'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {blok?.HeaderMenu?.map(nestedBlok => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          anchor='right'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Config
