import type { NextPage } from 'next'

import { SEO_BLOG } from '../../content/seo'
import Post from 'src/types/post'
import { sortByDate } from 'src/utils'
import { getPosts } from 'src/lib/mdReader'

import PageLayout from 'src/components/layouts/PageLayout'
import CardBlog from 'src/components/sites/blog/CardBlog'
import Title from 'src/components/app/Title'
import Seo from 'src/components/app/Seo'

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

        <section>
          <Title>Blog</Title>

          {validPosts.map(post => (
            <CardBlog key={post.slug} {...post.frontmatter} slug={post.slug} />
          ))}
        </section>
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
