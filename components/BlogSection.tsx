import React from "react";
import BlogArticle from "./BlogArticle";

type Props = {
  entries: any;
};

function BlogSection({ entries }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium">Blog</p>
      {entries.length === 0 && (
        <p className="text-slate-400 text-xs">There are no entries</p>
      )}
      {entries.map((entry: any) => {
        return <BlogArticle key={entry.id} entry={entry} />;
      })}
    </div>
  );
}

export default BlogSection;
