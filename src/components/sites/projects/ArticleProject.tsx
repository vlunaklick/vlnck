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
    <article className="mt-5 flex flex-col justify-center gap-4 rounded transition-all sm:mt-0 sm:flex-row sm:p-4 sm:hover:-translate-y-1 sm:hover:bg-slate-100 sm:hover:shadow-sm sm:dark:hover:bg-slate-800">
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
        <h3 className="text-lg font-medium text-slate-800 first-letter:capitalize dark:text-slate-100">
          {title}
        </h3>

        <p className="text-sm leading-loose text-slate-600 first-letter:capitalize dark:text-slate-300">
          {description}
        </p>

        <div className="flex gap-2 text-sm text-blue-500 first-letter:capitalize">
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
