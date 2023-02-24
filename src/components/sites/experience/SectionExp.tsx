import Experience from 'src/types/experience'

import ArticleExp from './ArticleExp'

interface Props {
  info: Experience[]
}

const SectionExp = ({ info }: Props) => {
  let experience = info.map(exp => {
    return (
      <ArticleExp
        key={exp.title + exp.place}
        start={exp.start}
        end={exp.end}
        title={exp.title}
        place={exp.place}
        url={exp.URL}
        description={exp.description}
      />
    )
  })

  return (
    <>
      <ol className="flex flex-col gap-3 sm:border-l sm:border-slate-300 dark:sm:border-slate-600 ">
        {experience}
      </ol>
    </>
  )
}

export default SectionExp
