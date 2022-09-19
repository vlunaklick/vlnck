import React from "react";
import WorkTags from "./WorksTag";

type Props = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
  image: string;
};

function WorksCard({ title, description, tags, url, github, image }: Props) {
  let tagsCards = tags.map((tag) => {
    return <WorkTags key={title + tag} name={tag} />;
  });

  return (
    <article className="bg-slate-800 sm:px-[11px] sm:py-[13px] rounded flex sm:flex-row flex-col p-4 gap-[14px] justify-center">
      <img src={image} alt={title} className="sm:max-h-36 rounded aspect-video" />
      <div className="flex flex-col justify-between gap-3 sm:gap-[13px]">
        <div className="flex flex-col gap-[2px] ">
          <p className="text-slate-100 text-sm font-bold">{title}</p>
          <p className="text-slate-400 text-xs leading-5 sm:leading-4">{description}</p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          {tagsCards}
        </div>
      </div>
    </article>
  );
}

export default WorksCard;
