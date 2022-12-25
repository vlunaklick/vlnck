import { WORKS } from '../../../../content/info/works'

import WorksCard from './WorksCard'

const WorksSection = () => {
  let worksCard = WORKS.map(work => {
    return (
      <WorksCard
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

  return (
    <section className="flex flex-col gap-4 px-4">
      <p className="font-medium">Works</p>
      {worksCard}
    </section>
  )
}

export default WorksSection
