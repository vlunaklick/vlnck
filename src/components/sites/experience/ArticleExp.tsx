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
    <li className="relative flex flex-col sm:pl-3">
      <div className="absolute -left-[0.4rem] mt-[0.37rem] hidden h-3 w-3 rounded-full border border-white bg-slate-300 dark:border-slate-900 dark:bg-slate-600 sm:block" />
      <time
        dateTime={start.toString()}
        title={start.toString()}
        className="mb-1 text-xs font-medium leading-loose text-slate-400 dark:text-slate-600"
      >
        {end !== null && end !== undefined
          ? start + ' — ' + end
          : start.toString()}
      </time>

      <p className="m-0 text-sm font-semibold leading-loose text-black dark:text-white sm:text-base">
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
    </li>
  )
}

export default ArticleExp
