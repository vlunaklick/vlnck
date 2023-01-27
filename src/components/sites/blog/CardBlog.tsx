import Link from 'next/link'

import { useFormatedDate } from 'src/hooks/useFormatedDate'

interface Props {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

const CardBlog = ({ slug, title, date, description, tags }: Props) => {
  const { formatedDate } = useFormatedDate(date)

  return (
    <article>
      <Link href={'/blog/' + slug}>
        <a className="pointer-events-none mt-5 flex w-full cursor-pointer flex-col gap-1 rounded transition-all hover:-translate-y-1 sm:pointer-events-auto sm:mt-0 sm:p-4 sm:hover:bg-slate-100 sm:hover:shadow-sm sm:hover:dark:bg-slate-800">
          <h3 className="text-lg font-medium text-slate-700 first-letter:capitalize dark:text-slate-100">
            {title}
          </h3>

          <time
            title={formatedDate}
            className="text-xs text-slate-500 first-letter:capitalize dark:text-slate-400"
          >
            {formatedDate}
          </time>

          <p className="text-sm leading-loose text-slate-600 line-clamp-5 first-letter:capitalize dark:text-slate-300 sm:line-clamp-3">
            {description}
          </p>
        </a>
      </Link>

      <Link href={'/blog/' + slug}>
        <a className="pointer-events-auto text-sm text-blue-500 transition-colors hover:text-blue-400 sm:pointer-events-none sm:hidden">
          Read more →
        </a>
      </Link>
    </article>
  )
}

export default CardBlog
