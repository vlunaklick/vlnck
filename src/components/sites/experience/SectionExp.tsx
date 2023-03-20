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
        description={exp.description}
        end={exp.end}
        place={exp.place}
        start={exp.start}
        title={exp.title}
        url={exp.URL}
      />
    )
  })

  return (
    <>
      <ol className="flex flex-col gap-7 sm:border-l sm:border-slate-300 dark:sm:border-slate-600">
        {experience}
      </ol>
    </>
  )
}

export default SectionExp
