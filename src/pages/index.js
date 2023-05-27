import Head from 'next/head'
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent
} from '@storyblok/react'

// todo store preview variable in context
// todo add description and icon
export default function Home ({ story, preview }) {
  story = useStoryblokState(story)

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps ({ params, ...context }) {
  const slug = 'home'

  // load the draft version
  const sbParams = {
    // version: context.preview ? 'draft' : 'published',
    version: 'draft',
    resolve_links: 'url'
  }

  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  const { data: config } = await storyblokApi.get('cdn/stories/config')

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
      preview: context.preview || false
    },
    revalidate: context.preview ? 0 : 3600 // revalidate every hour only in production
  }
}
