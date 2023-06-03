import { useState, useEffect } from 'react'
import { storyblokEditable } from '@storyblok/react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ProjectCard from '@/components/ProjectCard'
import NextMuiLink from '@/components/NextMuiLink'
import TagsList from '@/components/TagsList'
export default function PopularProjects ({ blok }) {
  const [tags, setTags] = useState()
  const [selectedTags, setSelectedTags] = useState(new Set())
  const [visibleProjects, setVisibleProjects] = useState([])

  const setVisibilityFilter = tag => {
    setSelectedTags(prev => {
      // toggle selectedTag functionality
      if (prev.has(tag)) {
        prev.delete(tag)
        return prev
      }
      prev.add(tag)
      return prev
    })
    setVisibleProjects(prev => {
      // if no tag is selected or all selected, render all projects
      if (selectedTags.size === 0 || selectedTags.size === tags.size) {
        return blok.projects
      }

      // check if current visibleProject tags list is in selectedTags
      return prev.filter(project => {
        for (let i = 0; i < project.content.tags.length; i++) {
          if (selectedTags.has(project.content.tags[i])) {
            return true
          }
        }
        return false
      })
    })
  }

  // creating the tags list
  useEffect(() => {
    function getTags () {
      const tags = new Set()
      blok?.projects?.forEach(project => {
        if (!Array.isArray(project.content.tags)) {
          const projectTagsArray = project?.content?.tags?.split(' ')
          project.content.tags = projectTagsArray
          projectTagsArray.forEach(tag => {
            tags.add(tag)
          })
          setTags(tags)
        }
      })
    }
    getTags()
    setVisibleProjects(blok?.projects)
  }, [])

  return (
    <Stack {...storyblokEditable(blok)} spacing={2}>
      <Card sx={{ padding: 2 }} raised>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent='space-between'
        >
          <Typography variant='h6' component='h2' sx={{ display: 'inline' }}>
            Projects ({blok?.projects?.length || 0})
          </Typography>
          <TagsList
            tags={tags}
            selectedTags={selectedTags}
            clickHandler={setVisibilityFilter}
          />
        </Stack>
      </Card>
      {visibleProjects?.map(nestedBlok => {
        return (
          <ProjectCard project={nestedBlok.content} key={nestedBlok.uuid} />
        )
      })}
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ width: 1, paddingTop: 3, paddingBottom: 7 }}
      >
        <NextMuiLink href='/projects'>
          <Button variant='contained' sx={{ width: 200 }}>
            View All Projects
          </Button>
        </NextMuiLink>
      </Stack>
    </Stack>
  )
}
