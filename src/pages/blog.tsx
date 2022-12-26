import type { NextPage } from 'next'

import Post from '../types/post'
import { sortByDate } from '../utils/sortByDate'
import { getPosts } from '../lib/mdReader'

import MainLayout from '../components/layouts/MainLayout'
import CardBlog from '../components/sites/blog/CardBlog'

interface Props {
  posts: Post[]
}

const root = process.cwd()

const Blog: NextPage<Props> = ({ posts }) => {
  posts.sort((a, b) => sortByDate(a.frontmatter.date, b.frontmatter.date))

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <p className="font-semibold m-0 dark:text-white text-black">Blog</p>
        {posts.map(post => (
          <CardBlog key={post.slug} {...post.frontmatter} slug={post.slug} />
        ))}
      </div>
    </MainLayout>
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
