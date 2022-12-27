/* eslint-disable @next/next/no-img-element */
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

import Tag from './TagProject'

interface Props {
  title: string
  description: string
  tags: string[]
  url: string
  github: string
  image: string
}

const ArticleProject = ({
  title,
  description,
  tags,
  url,
  github,
  image,
}: Props) => {
  let tagsCards = tags.map(tag => {
    return <Tag key={title + tag} name={tag} />
  })

  return (
    <article className="bg-slate-100 dark:bg-slate-800 sm:px-[11px] sm:py-[13px] rounded flex sm:flex-row flex-col p-4 gap-[14px] justify-center">
      <a
        href={url}
        target="_blank"
        className="sm:max-h-36 rounded aspect-video cursor-pointer w-full sm:min-w-max"
        rel="noopener noreferrer"
      >
        <img
          src={'/images/projects/' + image}
          alt={title}
          className="w-full h-full"
        />
      </a>
      <div className="flex flex-col justify-between gap-3 sm:gap-[13px]">
        <div className="flex flex-col gap-[2px] ">
          <div className="flex gap-2 items-center">
            <p className="text-gray-800 dark:text-gray-100 text-sm font-semibold">
              {title}
            </p>
            <Link href={github} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <BsGithub className="h-5" />
              </a>
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-[10.5px] leading-5 sm:leading-4 line-clamp-5">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">{tagsCards}</div>
      </div>
    </article>
  )
}

export default ArticleProject
