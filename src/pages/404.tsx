import Link from 'next/link'

import type { NextPage } from 'next'
import { SEO_ERROR } from '../../content/seo'

import PageLayout from '../components/layouts/PageLayout'
import Seo from '../components/app/Seo'

const Custom404: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_ERROR} />

      <div className="mx-auto flex flex-col items-center text-center font-bold">
        <p className="text-2xl">Page not found</p>

        <Link href="/">
          <a className="group max-w-min text-sm font-medium text-slate-400">
            Home
            <span className="block h-[2px] max-w-0 bg-slate-200 transition-all duration-500 group-hover:max-w-full" />
          </a>
        </Link>
      </div>
    </PageLayout>
  )
}

export default Custom404
