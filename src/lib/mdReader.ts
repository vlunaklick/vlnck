import matter from 'gray-matter'

import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getPosts(limit?: number) {
  const files = fs.readdirSync(path.join(root, 'content/posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMetadata = fs.readFileSync(
      path.join(root, 'content/posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMetadata)

    return {
      slug,
      frontmatter,
    }
  })

  if (limit) {
    return posts.slice(0, limit)
  }

  return posts
}

export async function getFileBySlug() {
  const files = fs.readdirSync(path.join(root, 'content/posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return paths
}

export async function getFileWithMetadata(slug: string) {
  const markdownWithMetadata = fs.readFileSync(
    path.join(root, 'content/posts', slug + '.md'),
    'utf-8'
  )
  const { data: frontmatter, content } = matter(markdownWithMetadata)

  return {
    frontmatter,
    content,
  }
}
