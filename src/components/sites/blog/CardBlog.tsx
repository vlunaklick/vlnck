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
      <a className="pointer-events-none sm:pointer-events-auto sm:p-4 w-full rounded flex mt-5 sm:mt-0 flex-col gap-1 cursor-pointer sm:hover:dark:bg-slate-800 sm:hover:bg-slate-200 transition-colors">
        <h3 className="font-medium first-letter:capitalize text-lg">{title}</h3>
        <p className="first-letter:capitalize text-xs text-slate-800 dark:text-slate-200">
          {formatedDate}
        </p>
        <p className="text-sm leading-5 text-slate-600 dark:text-slate-400 first-letter:capitalize line-clamp-5 sm:line-clamp-3">
          {description}
        </p>
        <Link href={'/blog/' + slug}>
          <a className="text-sm sm:hidden text-slate-50 sm:pointer-events-none pointer-events-auto">
            Read more →
          </a>
        </Link>
      </a>
    </Link>
  )
}

export default CardBlog
