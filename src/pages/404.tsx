import Link from 'next/link'

import type { NextPage } from 'next'

import MainLayout from '../components/layouts/MainLayout'

const Custom404: NextPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto text-center font-bold">
        <p className="text-2xl">Page not found</p>
        <Link href="/">
          <a className="text-slate-400 text-sm text-center mx-auto underline">
            Home
          </a>
        </Link>
      </div>
    </MainLayout>
  )
}

export default Custom404
