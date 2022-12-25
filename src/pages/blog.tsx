import matter from 'gray-matter'

import type { NextPage } from 'next'
import fs from 'fs'
import path from 'path'

import Post from '../types/post'

import MainLayout from '../components/Layouts/MainLayout'
import CardBlog from '../components/Blog/CardBlog'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => {
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
  const files = fs.readdirSync('content/posts')

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('content/posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
