import Experience from '../../../types/experience'

import ExpArticle from './ExpArticle'

interface Props {
  info: Experience[]
}

const ExpSection = ({ info }: Props) => {
  let experience = info.map(exp => {
    return (
      <ExpArticle
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

export default ExpSection
