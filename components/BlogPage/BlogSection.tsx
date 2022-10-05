import React from "react";
import { Entries } from "../../types/entries";
import BlogArticle from "./BlogArticle";

type Props = {
  entries: [Entries] | [];
};

function BlogSection({ entries }: Props) {
  return (
    <div className="flex flex-col sm:gap-7 px-4">
      <p className="font-semibold">Blog</p>
      {entries.length === 0 && (
        <p className="dark:text-slate-400 text-slate-800 text-xs">
          There are no entries
        </p>
      )}
      {entries.map((entry: Entries) => {
        return <BlogArticle key={entry.id} entry={entry} />;
      })}
    </div>
  );
}

export default BlogSection;
