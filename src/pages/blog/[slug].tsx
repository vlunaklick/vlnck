import Link from 'next/link'
import matter from 'gray-matter'

import fs from 'fs'
import path from 'path'

import MainLayout from '../../components/layouts/MainLayout'
import FrontMatter from '../../types/post'
import ParserMd from '../../components/markdowns/ParserMd'

interface Props {
  frontmatter: FrontMatter
  slug: string
  content: string
}

const Post = ({ frontmatter, content }: Props) => {
  const formatedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <MainLayout>
      <div className="flex flex-col px-4">
        <div className="flex flex-col gap-3">
          <Link href="/blog">
            <a className="text-xs text-slate-600 dark:text-slate-300">
              ← Back to blog
            </a>
          </Link>
        </div>

        <div className="prose dark:prose-invert text-black dark:text-white max-w-none mt-2">
          <h1 className="text-xl sm:text-3xl font-bold mb-2 mt-5">
            {frontmatter.title}
          </h1>
          <p className="text-xs mt-2 text-slate-400">{formatedDate}</p>
          <ParserMd>{content}</ParserMd>
        </div>
      </div>
    </MainLayout>
  )
}

export default Post

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMetadata = fs.readFileSync(
    path.join('content/posts/', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMetadata)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
