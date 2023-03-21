import Link from 'next/link'

import TimelineDot from './TimelineDot'

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
      <TimelineDot />
      <time
        className="text-xs font-medium leading-loose text-slate-400 dark:text-slate-600 sm:mb-1"
        dateTime={start.toString()}
        title={start.toString()}
      >
        {end !== null && end !== undefined ? start + ' — ' + end : start.toString()}
      </time>

      <p className="m-0 text-sm font-semibold leading-loose text-black dark:text-white sm:text-lg">
        {title} at{' '}
        <Link className="underline hover:text-blue-500" href={url} target="_blank">
          {place}
        </Link>
      </p>

      <p className="text-sm leading-loose text-slate-700 dark:text-slate-300">{description}</p>
    </li>
  )
}

export default ArticleExp
