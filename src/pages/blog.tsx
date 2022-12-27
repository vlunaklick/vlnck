import type { NextPage } from 'next'

import Post from '../types/post'
import { sortByDate } from '../utils/sortByDate'
import { getPosts } from '../lib/mdReader'

import BodyLayout from '../components/layouts/BodyLayout'
import CardBlog from '../components/sites/blog/CardBlog'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  posts.sort((a, b) => sortByDate(a.frontmatter.date, b.frontmatter.date))

  return (
    <BodyLayout>
      <div className="flex flex-col gap-4 px-4">
        <p className="font-semibold m-0 dark:text-white text-black">Blog</p>
        {posts.map(post => (
          <CardBlog key={post.slug} {...post.frontmatter} slug={post.slug} />
        ))}
      </div>
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
