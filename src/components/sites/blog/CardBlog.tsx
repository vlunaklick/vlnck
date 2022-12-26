import Link from 'next/link'

interface Props {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

const CardBlog = ({ slug, title, date, description, tags }: Props) => {
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={'/blog/' + slug}>
      <a>
        <article className="w-full rounded flex mt-5 sm:mt-0 flex-col gap-3 cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 sm:gap-3 text-sm sm:text-[13.5px] sm:flex-row flex-col">
              <h3 className="font-semibold first-letter:capitalize text-xs sm:text-sm">
                {title}
              </h3>
              <p className="first-letter:capitalize text-[10.5px] sm:text-[13.5px] text-gray-500 dark:text-slate-400">
                <span className="hidden sm:inline">— </span>
                {formatedDate}
              </p>
            </div>
            <p className="text-[10.5px] text-xs leading-5 text-gray-600 dark:text-slate-400 first-letter:capitalize line-clamp-3">
              {description}
            </p>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default CardBlog
