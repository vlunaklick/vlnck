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
      <p className="text-slate-600 dark:text-slate-500 min-w-[13ch] text-sm">{end !== null ? start + " — " + end : start.toString()}</p>
      <div>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-50">
          {title} at {' '}
          <Link href={url} passHref>
            <a target="_blank" className="underline">{place}</a>
          </Link>
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-xs leading-6">{description}</p>
      </div>
    </article>
  );
}

export default ExpArticle;
