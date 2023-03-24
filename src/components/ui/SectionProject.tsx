import { WORKS } from '@/src/constants/works'

import ArticleProject from './ArticleProject'

const SectionProject = () => {
  return (
    <section className="flex flex-col gap-8">
      {WORKS.map(work => (
        <ArticleProject
          key={work.title}
          code={work.code}
          content={work.content}
          liveview={work.liveview}
          src={work.src}
          techs={work.techs}
          title={work.title}
        />
      ))}
    </section>
  )
}

export default SectionProject
