import React from "react";
import Link from "next/link";
import Tag from "./BlogBlocks/Tag";

type Props = {
  entry: any;
};

function BlogArticle({ entry }: Props) {
  const { properties } = entry;
  const { description, name, tags, created, niceUrl } = properties;

  const date = new Date(created.created_time);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "long" });

  const title = name.title[0].plain_text;
  const desc = description.rich_text[0].plain_text;

  return (
    <Link href={`/blog/${niceUrl.rich_text[0].plain_text}`}>
      <a>
        <article className="w-full p-3 bg-slate-800 rounded flex flex-col gap-3 cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-sm sm:text-md">
              <h3 className="font-medium capitalize">{title}</h3>
              <p className="capitalize text-slate-300">
                — {month} {year}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 capitalize line-clamp-2">
              {desc}
            </p>
          </div>
          <div className="flex gap-3 text-xs sm:text-sm">
            {tags.multi_select.map((tag: any) => {
              return <Tag key={tag.id} name={tag.name} color={tag.color} />;
            })}
          </div>
        </article>
      </a>
    </Link>
  );
}

export default BlogArticle;
