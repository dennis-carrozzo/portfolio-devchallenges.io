import { useState } from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

function TabPanel ({ children, value, index, ...props }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function TabsSection ({ blok }) {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card sx={{ width: 1, }} {...storyblokEditable(blok)} raised>
      {!!blok?.title && (
        <CardHeader
          title={
            <Typography variant='h4' component='h2'>
              {blok.title}
            </Typography>
            
          }
          sx={{marginBlock: 3, textAlign: 'center'}}
        />
      )}
      <Stack
        direction='row'
        justifyContent='center'
        sx={{ borderBottom: 1, borderColor: 'divider', width: 1 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='privates and companies related tabs'
        >
          <Tab label={blok.tab1Label} {...a11yProps(0)} />
          <Tab label={blok.tab2Label} {...a11yProps(1)} />
        </Tabs>
      </Stack>
      <TabPanel value={value} index={0}>
        {blok?.tab1?.map(nestedBlok => (
          <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {blok?.tab2?.map(nestedBlok => (
          <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
        ))}
      </TabPanel>
    </Card>
  )
}
