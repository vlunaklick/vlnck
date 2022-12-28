import Link from 'next/link'

interface Props {
  start: Number
  end?: Number | string | null
  title: string
  place: string
  url: string
  description: string
}

const ArticleExp = ({ start, end, title, place, url, description }: Props) => {
  return (
    <article className="flex flex-col sm:flex-row sm:gap-1.5">
      <p className="text-slate-800 dark:text-slate-400 min-w-[13ch] text-[13px] sm:text-base leading-loose m-0">
        {end !== null && end !== undefined
          ? start + ' — ' + end
          : start.toString()}
      </p>
      <div>
        <p className="text-sm sm:text-base dark:text-white text-black font-medium leading-loose m-0">
          {title} at{' '}
          <Link href={url} passHref>
            <a
              target="_blank"
              className="underline hover:text-blue-500 transition-colors"
            >
              {place}
            </a>
          </Link>
        </p>
        <p className="text-sm leading-loose text-slate-600 dark:text-slate-300 first-letter:capitalize">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ArticleExp
