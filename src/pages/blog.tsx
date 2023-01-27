import Head from 'next/head'

import type { NextPage } from 'next'

import Post from '../types/post'
import { SEO_BLOG } from '../../content/seo'
import { sortByDate } from '../utils'
import { getPosts } from '../lib/mdReader'

import PageLayout from '../components/layouts/PageLayout'
import CardBlog from '../components/sites/blog/CardBlog'
import Title from '../components/app/Title'
import Seo from '../components/app/Seo'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  const validPosts = posts.filter(post => post.frontmatter.published)

  validPosts.sort((a, b) => sortByDate(a.frontmatter.date, b.frontmatter.date))

  return (
    <>
      <PageLayout>
        <Seo {...SEO_BLOG} />

        <Title>Blog</Title>

        {validPosts.map(post => (
          <CardBlog key={post.slug} {...post.frontmatter} slug={post.slug} />
        ))}
      </PageLayout>
    </>
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
