import React from "react";
import Tag from "./Tag";

type Props = {
  blocks: any;
  language: string;
};

function Code({ language, blocks }: Props) {
  function parseContent(content: string, key: string) {
    return (
      <p
        className="text-xs leading-6 text-slate-600 dark:text-slate-400"
        key={key}
      >
        {content}
      </p>
    );
  }

  function parseAnnotations(text: any, key: string) {
    if (!text) return;

    let content = text.plain_text;
    content = content.split("\n");
    let contentArray = content.map((content: string) => {
      const key2 = Math.random().toString(36).substring(7);
      return parseContent(content, key2);
    });

    return contentArray;
  }
  return (
    <div className="flex flex-col gap-1 mt-3 mb-1">
      <Tag color="yellow" name={language} />
      <code className="bg-slate-200 dark:bg-slate-800 rounded p-4 flex flex-col">
        {blocks.map((text: any) => {
          const key = Math.random().toString(36).substring(7);
          return parseAnnotations(text, key);
        })}
      </code>
    </div>
  );
}

export default Code;
