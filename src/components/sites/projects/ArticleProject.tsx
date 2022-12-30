/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import Tag from './TagProject'

interface Props {
  title: string
  description: string
  tags: string[]
  url: string
  github: string
  image: string
}

const ArticleProject = ({
  title,
  description,
  tags,
  url,
  github,
  image,
}: Props) => {
  let tagsCards = tags.map(tag => {
    return <Tag key={title + tag} name={tag} />
  })

  return (
    <article className="transition-all sm:hover:bg-slate-100 sm:dark:hover:bg-slate-800 sm:hover:shadow-sm sm:p-4 rounded flex sm:flex-row flex-col gap-4 justify-center sm:mt-0 mt-5 sm:hover:-translate-y-1">
      {/* <a
        href={url}
        target="_blank"
        className="sm:max-h-36 rounded aspect-video cursor-pointer w-full sm:min-w-max"
        rel="noopener noreferrer"
      >
        <picture>
          <img
            src={'/images/projects/' + image}
            alt={title}
            className="w-full h-full"
          />
        </picture>
      </a> */}
      <div className="flex flex-col justify-between gap-1">
        <h3 className="text-slate-800 dark:text-slate-100 font-medium first-letter:capitalize text-lg">
          {title}
        </h3>

        <p className="text-sm leading-loose text-slate-600 dark:text-slate-300 first-letter:capitalize">
          {description}
        </p>
        <div className="flex gap-2 first-letter:capitalize text-sm text-blue-500">
          <Link href={url} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live view"
              className="hover:text-blue-400"
            >
              Live view
            </a>
          </Link>
          <p>•</p>
          <Link href={github} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="hover:text-blue-400"
            >
              Github
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ArticleProject
