import Link from 'next/link'
import { readingTime } from 'reading-time-estimator'

import { getFileWithMetadata, getFileBySlug } from '../../lib/mdReader'

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

  const readingTimeEstimate = readingTime(content)

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
          <div className="flex ">
            <p className="text-xs mt-2 text-slate-400">{formatedDate}</p>
            <p className="text-xs mt-2 text-slate-400 mx-2">•</p>
            <p className="text-xs mt-2 text-slate-400">
              {readingTimeEstimate.text}
            </p>
          </div>
          <ParserMd>{content}</ParserMd>
        </div>
      </div>
    </MainLayout>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = await getFileBySlug()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const { content, frontmatter } = await getFileWithMetadata(slug)

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  }
}
