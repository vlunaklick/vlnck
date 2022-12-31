import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mx-auto mt-7 max-w-2xl p-4 pb-1 text-center">
      <Link href="/">
        <a className="text-xs text-slate-400 underline dark:text-slate-700">
          vlunaklick
        </a>
      </Link>
    </footer>
  )
}

export default Footer
