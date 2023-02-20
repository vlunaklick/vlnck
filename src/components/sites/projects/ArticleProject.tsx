/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

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
  return (
    <article className="mt-5 flex flex-col justify-center gap-4 rounded transition-all sm:mt-0 sm:flex-row">
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
        <h3 className="text-lg font-semibold text-slate-900 transition-colors dark:text-slate-50">
          {title}
        </h3>

        <p className="text-sm leading-loose text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="flex gap-2 text-sm text-blue-500">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live view"
            className="hover:text-blue-400"
          >
            Live view
          </Link>

          <p>•</p>

          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-blue-400"
          >
            Github
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ArticleProject
