import { EXPERIENCE, EDUCATION } from '../../../content/info/experience'

import ExpArticle from './ExpArticle'

const ExpSection = () => {
  let experience = EXPERIENCE.map(exp => {
    return (
      <ExpArticle
        key={exp.title + exp.place}
        start={exp.start}
        end={exp.end}
        title={exp.title}
        place={exp.place}
        url={exp.URL}
        description={exp.text}
      />
    )
  })

  let education = EDUCATION.map(edu => {
    return (
      <ExpArticle
        key={edu.title + edu.place}
        start={edu.start}
        end={edu.end || null}
        title={edu.title}
        place={edu.place}
        url={edu.URL}
        description={edu.text}
      />
    )
  })

  return (
    <section className="flex flex-col gap-5 px-4 prose dark:prose-invert">
      <div className="flex flex-col gap-4">
        <p className="font-semibold m-0 dark:text-white text-black">
          Experience
        </p>
        {experience}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold m-0 dark:text-white text-black">
          Education
        </p>
        {education}
      </div>
    </section>
  )
}

export default ExpSection