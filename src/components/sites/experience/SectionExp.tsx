import Experience from '../../../types/experience'

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

  return <>{experience}</>
}

export default SectionExp
