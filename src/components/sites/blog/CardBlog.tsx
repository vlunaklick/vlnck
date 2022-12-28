import Link from 'next/link'

import { formatDate } from '../../../utils/formatDate'

interface Props {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

const CardBlog = ({ slug, title, date, description, tags }: Props) => {
  const formatedDate = formatDate(date)

  return (
    <Link href={'/blog/' + slug}>
      <a className="pointer-events-none sm:pointer-events-auto sm:p-4 w-full rounded flex mt-5 sm:mt-0 flex-col gap-1 cursor-pointer sm:hover:dark:bg-slate-800 sm:hover:bg-slate-100 transition-colors sm:hover:shadow-sm">
        <h3 className="font-medium first-letter:capitalize text-lg text-slate-700 dark:text-slate-100">
          {title}
        </h3>
        <p className="first-letter:capitalize text-xs text-slate-500 dark:text-slate-400">
          {formatedDate}
        </p>
        <p className="text-sm leading-loose text-slate-600 dark:text-slate-300 first-letter:capitalize line-clamp-5 sm:line-clamp-3">
          {description}
        </p>
        <Link href={'/blog/' + slug}>
          <a className="text-sm sm:hidden text-blue-500 sm:pointer-events-none pointer-events-auto">
            Read more →
          </a>
        </Link>
      </a>
    </Link>
  )
}

export default CardBlog
