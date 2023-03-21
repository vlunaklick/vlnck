import { WORKS } from '../../../../content/info/works'

import ArticleProject from './ArticleProject'

const SectionProject = () => {
  let worksCard = WORKS.map(work => {
    return (
      <ArticleProject
        key={work.title}
        description={work.content}
        github={work.code}
        image={work.src}
        tags={work.techs}
        title={work.title}
        url={work.liveview}
      />
    )
  })

  return <section className="flex flex-col gap-8">{worksCard}</section>
}

export default SectionProject
