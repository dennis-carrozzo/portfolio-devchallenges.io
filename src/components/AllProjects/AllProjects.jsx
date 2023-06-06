import { useState, useEffect } from 'react'
import { storyblokEditable, getStoryblokApi } from '@storyblok/react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ProjectCard from '@/components/ProjectCard'
import TagsList from '@/components/TagsList'

export default function AllProjects ({ blok }) {
  const [projects, setProjects] = useState([])
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
        return projects
      }

      // check if current visibleProject tags list is in selectedTags
      return prev.filter(project => {
        for (let i = 0; i < project.tags.length; i++) {
          if (selectedTags.has(project.tags[i])) {
            return true
          }
        }
        return false
      })
    })
  }

  useEffect(() => {
    const getProjects = async () => {
      const storyblokApi = getStoryblokApi()
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'projects/',
        is_startpage: false
      })

      setProjects(prev =>
        data.stories.map(project => {
          project.content._uid = project.uuid
          return project.content
        })
      )
    }
    getProjects()
  }, [])

  useEffect(() => {
    if (projects) {
      function getTags () {
        const tags = new Set()
        projects.forEach(project => {
          if (!Array.isArray(project.tags)) {
            const projectTagsArray = project?.tags?.split(' ')
            project.tags = projectTagsArray
            projectTagsArray.forEach(tag => {
              tags.add(tag)
            })
            setTags(tags)
          }
        })
      }
      setVisibleProjects(projects)
      getTags()
    }
  }, [projects])

  return (
    <Stack justifyContent='center' alignItems='start' spacing={2}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ paddingInline: { xs: 1, md: 25 } }}
      >
        <Typography variant='h6'>Filter By tag:</Typography>
        <TagsList
          tags={tags}
          selectedTags={selectedTags}
          clickHandler={setVisibilityFilter}
        />
      </Stack>
      <Grid
        container
        {...JSON.parse(blok?.gridProps)}
        {...storyblokEditable(blok)}
      >
        {!!visibleProjects[0] &&
          visibleProjects.map(project => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={project._uid}
                justifyContent='center'
                alignItems='center'
                sx={{
                  paddingLeft: { xs: '5px !important', md: 0, lg: 20 },
                  paddingRight: { xs: 6, md: 10, lg: 20 }
                }}
              >
                <ProjectCard project={project} />
              </Grid>
            )
          })}
      </Grid>
    </Stack>
  )
}
