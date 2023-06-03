import { storyblokInit, apiPlugin } from '@storyblok/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import PropTypes from 'prop-types'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import AllProjects from '@/components/AllProjects'
import Config from '@/components/Config'
import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import HobbiesCard from '@/components/HobbiesCard'
import MenuLink from '@/components/MenuLink'
import Page from '@/components/Page'
import Layout from '@/components/Layout'
import PopularProjects from '@/components/PopularProjects'
import ProjectCard from '@/components/ProjectCard'
import RichText from '@/components/RichText'
import SkillsCard from '@/components/SkillsCard'
import StoryblokCTA from '@/components/StoryblokCTA'
import StoryblokGrid from '@/components/StoryblokGrid'
import StoryblokGridItem from '@/components/StoryblokGridItem'
import StoryblokPaper from '@/components/StoryblokPaper'
import StoryblokStack from '@/components/StoryblokStack'
import StoryblokTypography from '@/components/StoryblokTypography'
import TabsSection from '@/components/TabsSection'
import theme from '@/theme'

const components = {
  AllProjects,
  Config,
  ContactCard,
  ContactForm,
  Hero,
  HobbiesCard,
  MenuLink,
  Page,
  ProjectCard,
  PopularProjects,
  RichText,
  SkillsCard,
  StoryblokCTA,
  StoryblokGrid,
  StoryblokGridItem,
  StoryblokPaper,
  StoryblokStack,
  StoryblokTypography,
  TabsSection
}

storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components
})

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout story={pageProps.config}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
