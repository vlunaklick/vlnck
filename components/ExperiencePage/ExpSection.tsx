import React from "react";
import ExpArticle from "./ExpArticle";
import { EXPERIENCE, EDUCATION } from "../../utils/infoExp";

type Props = {};

function ExpSection({}: Props) {
  let experience = EXPERIENCE.map((exp) => {
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
    );
  });

  let education = EDUCATION.map((edu) => {
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
    );
  });

  return (
    <section className="flex flex-col gap-5 px-4">
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-black dark:text-white">Experience</p>
        {experience}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold text-slate-800 dark:text-slate-100">Education</p>
        {education}
      </div>
    </section>
  );
}

export default ExpSection;
