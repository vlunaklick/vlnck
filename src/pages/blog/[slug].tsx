import Link from 'next/link'
import { readingTime } from 'reading-time-estimator'

import { getFileWithMetadata, getFileBySlug } from '../../lib/mdReader'
import { formatDate } from '../../utils/formatDate'
import FrontMatter from '../../types/post'

import BodyLayout from '../../components/layouts/BodyLayout'
import ParserMd from '../../components/markdowns/ParserMd'
import MainLayout from '../../components/layouts/MainLayout'

interface Props {
  frontmatter: FrontMatter
  slug: string
  content: string
}

const Post = ({ frontmatter, content }: Props) => {
  const formatedDate = formatDate(frontmatter.date)

  const readingTimeEstimate = readingTime(content)

  return (
    <BodyLayout>
      <MainLayout>
        <Link href="/blog">
          <a className="text-xs text-slate-600 dark:text-slate-300">
            ← Back to blog
          </a>
        </Link>
        <header>
          <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
          <div className="flex mt-2 gap-1 text-xs text-slate-500 dark:text-slate-400">
            <p>{formatedDate}</p>
            <p>•</p>
            <p>{readingTimeEstimate.text}</p>
          </div>
        </header>
        <div className="">
          <ParserMd>{content}</ParserMd>
        </div>
      </MainLayout>
    </BodyLayout>
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
