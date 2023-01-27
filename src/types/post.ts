export default interface FrontMatter {
  title: string
  date: string
  description: string
  tags: string[]
  published: boolean
  og_image: string
}

export default interface Post {
  slug: string
  frontmatter: FrontMatter
}
