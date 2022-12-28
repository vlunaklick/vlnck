/* eslint-disable @next/next/no-img-element */
import { BsGithub } from 'react-icons/bs'
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
    <article className="transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 p-4 rounded flex sm:flex-row flex-col gap-4 justify-center">
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
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-slate-800 dark:text-slate-100 font-medium first-letter:capitalize text-lg">
            {title}
          </h3>
          <Link href={url} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live view"
              className="text-xs text-slate-400"
            >
              Live view
            </a>
          </Link>
          <p className="text-xs text-slate-400">•</p>
          <Link href={github} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Code"
              className="text-xs text-slate-400"
            >
              Code
            </a>
          </Link>
        </div>
        <p className="text-sm leading-5 text-slate-600 dark:text-slate-400 first-letter:capitalize">
          {description}
        </p>
        <div className="flex flex-row gap-2 flex-wrap mt-2">{tagsCards}</div>
      </div>
    </article>
  )
}

export default ArticleProject
