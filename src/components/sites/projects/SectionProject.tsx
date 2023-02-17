import { WORKS } from '../../../../content/info/works'

import ArticleProject from './ArticleProject'

const SectionProject = () => {
  let worksCard = WORKS.map(work => {
    return (
      <ArticleProject
        key={work.title}
        title={work.title}
        description={work.content}
        tags={work.techs}
        url={work.liveview}
        github={work.code}
        image={work.src}
      />
    )
  })

  return <section className="flex flex-col gap-8">{worksCard}</section>
}

export default SectionProject
