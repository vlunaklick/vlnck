import Link from 'next/link'

interface Props {
  name: string
  url: string
  content: string
  download?: string
  aria?: string
}

const LinkContactHome = ({ name, url, content, download, aria }: Props) => {
  return (
    <div className="flex gap-5 text-sm sm:text-[15px]">
      <p className="min-w-[8ch] text-slate-600 dark:text-slate-400">{name}</p>
      <Link
        aria-label={aria}
        className="font-medium text-slate-900 underline hover:text-blue-500 dark:text-slate-50 dark:hover:text-blue-500"
        download={download ? download : undefined}
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </Link>
    </div>
  )
}

export default LinkContactHome
