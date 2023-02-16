import Link from 'next/link'
import { readingTime } from 'reading-time-estimator'

import { getFileWithMetadata, getFileBySlug } from 'src/lib/mdReader'
import { useFormatedDate } from 'src/hooks/useFormatedDate'
import FrontMatter from 'src/types/post'

import ParserMd from 'src/components/markdowns/ParserMd'
import PageLayout from 'src/components/layouts/PageLayout'
import Seo from 'src/components/app/Seo'

interface Props {
  frontmatter: FrontMatter
  slug: string
  content: string
}

const Post = ({ frontmatter, content }: Props) => {
  const { formatedDate } = useFormatedDate(frontmatter.date)

  const readingTimeEstimate = readingTime(content)

  return (
    <>
      <PageLayout>
        <Seo
          title={frontmatter.title}
          description={frontmatter.description}
          og_title={frontmatter.title}
          og_description={frontmatter.description}
          og_type="website"
        />

        <Link
          href="/blog"
          className="w-max text-xs text-slate-400 dark:text-slate-500"
        >
          ← Back to blog
        </Link>

        <article>
          <header className="mb-4">
            <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
            <div className="mt-2 flex gap-1 text-xs text-slate-500 dark:text-slate-400">
              <time title={formatedDate}>{formatedDate}</time>
              <p>•</p>
              <p>{readingTimeEstimate.text}</p>
            </div>
          </header>

          <ParserMd>{content}</ParserMd>
        </article>
      </PageLayout>
    </>
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

  if (!frontmatter.published) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  }
}
