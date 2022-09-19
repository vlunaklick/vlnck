import React from "react";
import { WORKS } from "../utils/infoWorks";
import WorksCard from "./WorksCard";

type Props = {};

function WorksSection({}: Props) {
  let worksCard = WORKS.map((work) => {
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
    );
  });

  return (
    <section className="flex flex-col gap-4">
      <p className="font-medium">Projects</p>
      {worksCard}
    </section>
  );
}

export default WorksSection;
