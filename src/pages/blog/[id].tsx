import Link from 'next/link'

import HeadLayout from '../../components/Layouts/HeadLayout'
import MainLayout from '../../components/Layouts/MainLayout'
import NormalLayout from '../../src/components/Layouts/NormalLayout'

const Post = () => {
  return (
    <HeadLayout>
      <MainLayout>
        <NormalLayout>
          <div className="flex flex-col px-4">
            <div className="flex flex-col gap-3">
              <Link href="/blog">
                <a className="text-xs text-slate-600 dark:text-slate-300">
                  ← Back to blog
                </a>
              </Link>
            </div>

            <div className="prose dark:prose-invert text-black dark:text-white max-w-none"></div>
          </div>
        </NormalLayout>
      </MainLayout>
    </HeadLayout>
  )
}

export default Post
