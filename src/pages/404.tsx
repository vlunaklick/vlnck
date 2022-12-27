import Link from 'next/link'

import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'

const Custom404: NextPage = () => {
  return (
    <BodyLayout>
      <div className="mx-auto text-center font-bold flex flex-col items-center">
        <p className="text-2xl">Page not found</p>
        <Link href="/">
          <a className="text-slate-400 text-sm font-medium group max-w-min">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-slate-200" />
          </a>
        </Link>
      </div>
    </BodyLayout>
  )
}

export default Custom404
