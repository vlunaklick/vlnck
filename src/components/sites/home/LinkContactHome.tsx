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
      <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">{name}</p>
      <Link href={url} passHref>
        <a
          className="text-slate-900 dark:text-slate-50 font-medium underline"
          target="_blank"
          rel="noopener noreferrer"
          download={download ? download : undefined}
          aria-label={aria}
        >
          {content}
        </a>
      </Link>
    </div>
  )
}

export default LinkContactHome
