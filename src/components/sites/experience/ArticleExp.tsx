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
    <article className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
      <p className="text-slate-600 dark:text-slate-400 min-w-[13ch] text-[13px] sm:text-base leading-6 m-0">
        {end !== null && end !== undefined
          ? start + ' — ' + end
          : start.toString()}
      </p>
      <div>
        <p className="text-[13px] sm:text-base dark:text-white text-black font-medium leading-6 m-0">
          {title} at{' '}
          <Link href={url} passHref>
            <a target="_blank" className="underline">
              {place}
            </a>
          </Link>
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-[14px] leading-6 mt-1">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ArticleExp
