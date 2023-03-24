/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import Work from '@/src/types/works'

type Props = Work

const ArticleProject: React.FC<Props> = ({ title, content, liveview, code }) => {
  return (
    <article className="mt-5 flex flex-col justify-center gap-1 rounded transition-all sm:mt-0">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h3>

      <p className="text-sm leading-loose text-slate-700 dark:text-slate-300">{content}</p>

      <footer className="flex gap-2 text-sm text-blue-500">
        <Link
          aria-label="Live view"
          className="hover:text-blue-400"
          href={liveview}
          rel="noopener noreferrer"
          target="_blank"
        >
          Live view
        </Link>

        <p>•</p>

        <Link
          aria-label="Github"
          className="hover:text-blue-400"
          href={code}
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </Link>
      </footer>
    </article>
  )
}

export default ArticleProject
