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
      <a className="p-4 w-full rounded flex mt-5 sm:mt-0 flex-col gap-1 cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-100 transition-colors">
        <h3 className="font-medium first-letter:capitalize text-lg">{title}</h3>
        <p className="first-letter:capitalize text-xs text-slate-800 dark:text-slate-200">
          {formatedDate}
        </p>
        <p className="text-sm leading-5 text-slate-600 dark:text-slate-400 first-letter:capitalize line-clamp-5 sm:line-clamp-3">
          {description}
        </p>
      </a>
    </Link>
  )
}

export default CardBlog
