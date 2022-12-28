import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto p-4 text-center mt-5">
      <Link href="/">
        <a className="dark:text-slate-700 text-slate-400 text-xs underline">
          vlunaklick
        </a>
      </Link>
    </footer>
  )
}

export default Footer
