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
      <p className="m-0 min-w-[13ch] text-[13px] leading-loose text-slate-800 dark:text-slate-400 sm:text-base">
        {end !== null && end !== undefined
          ? start + ' — ' + end
          : start.toString()}
      </p>

      <div>
        <p className="m-0 text-sm font-medium leading-loose text-black dark:text-white sm:text-base">
          {title} at{' '}
          <Link
            href={url}
            target="_blank"
            className="underline transition-colors hover:text-blue-500"
          >
            {place}
          </Link>
        </p>

        <p className="text-sm leading-loose text-slate-600 first-letter:capitalize dark:text-slate-400">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ArticleExp
