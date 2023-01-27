import Head from 'next/head'

import type { NextPage } from 'next'

import Post from '../types/post'
import { sortByDate } from '../utils/sortByDate'
import { getPosts } from '../lib/mdReader'

import BodyLayout from '../components/layouts/BodyLayout'
import CardBlog from '../components/sites/blog/CardBlog'
import MainLayout from '../components/layouts/MainLayout'
import Title from '../components/app/Title'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  const validPosts = posts.filter(post => post.frontmatter.published)

  validPosts.sort((a, b) => sortByDate(a.frontmatter.date, b.frontmatter.date))

  return (
    <BodyLayout>
      <Head>
        <title>{'Valentín Lunaklick — Blog'}</title>
        <meta
          name="description"
          content="Here I'll post blogs of what I'm learning"
        />
        <meta property="og:title" content={'Valentín Lunaklick — Blog'} />
        <meta
          property="og:description"
          content={"Here I'll post blogs of what I'm learning"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://vlnck.tech/api/og?title=Valentín Lunaklick — Blog`}
        />
      </Head>
      <MainLayout>
        <Title>Blog</Title>
        {validPosts.map(post => (
          <CardBlog key={post.slug} {...post.frontmatter} slug={post.slug} />
        ))}
      </MainLayout>
    </BodyLayout>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
