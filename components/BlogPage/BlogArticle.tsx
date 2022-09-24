import React from "react";
import Link from "next/link";
import Tag from "../BlogBlocks/Tag";

type Props = {
  entry: any;
};

function BlogArticle({ entry }: Props) {
  const { properties } = entry;
  const { description, name, tags, created, niceUrl, estimated } = properties;

  const date = new Date(created.created_time);
  const formatedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const title = name.title[0].plain_text;
  const desc = description.rich_text[0]?.plain_text || "";

  return (
    <Link href={`/blog/${niceUrl.rich_text[0].plain_text}`}>
      <a>
        <article className="w-full p-3 dark:bg-slate-800 bg-slate-100  rounded flex flex-col gap-3 cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-sm sm:text-md sm:flex-row flex-col">
              <h3 className="font-semibold first-letter:capitalize text-xs sm:text-sm">
                {title}
              </h3>
              <p className="hidden sm:block sm:text-sm text-gray-500 dark:text-gray-300">
                —
              </p>
              <p className="first-letter:capitalize text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                {formatedDate}
              </p>
            </div>
            <p className="text-[9px] dark:text-gray-400 text-gray-500 ">
              {estimated.rich_text[0].plain_text}
            </p>
            <p className="text-[10.5px] text-xs leading-5 text-gray-600 dark:text-gray-300 first-letter:capitalize line-clamp-2">
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
