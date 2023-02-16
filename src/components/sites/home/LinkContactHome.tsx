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
    <div className="flex gap-5 text-sm sm:text-[14px]">
      <p className="min-w-[8ch] text-slate-600 dark:text-slate-400">{name}</p>
      <Link
        href={url}
        className="font-medium text-slate-900 underline hover:text-blue-500 dark:text-slate-50 dark:hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
        download={download ? download : undefined}
        aria-label={aria}
      >
        {content}
      </Link>
    </div>
  )
}

export default LinkContactHome
