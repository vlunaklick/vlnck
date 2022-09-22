import React from "react";
import Link from "next/link";

type Props = {
  start: Number;
  end: Number | string | null;
  title: string;
  place: string;
  url: string;
  description: string;
};

function ExpArticle({ start, end, title, place, url, description }: Props) {
  return (
    <article className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
      <p className="text-gray-600 dark:text-slate-400 min-w-[13ch] text-xs sm:text-[13px] leading-6 m-0">{end !== null ? start + " — " + end : start.toString()}</p>
      <div>
        <p className="text-xs sm:text-[13px] dark:text-white text-black font-medium leading-6 m-0">
          {title} at {' '}
          <Link href={url} passHref>
            <a target="_blank" className="underline">{place}</a>
          </Link>
        </p>
        <p className="text-gray-600 dark:text-slate-400 text-[11px] leading-6 mt-1">{description}</p>
      </div>
    </article>
  );
}

export default ExpArticle;
