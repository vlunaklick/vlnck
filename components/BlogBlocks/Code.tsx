import React from "react";
import { parseAnnCode } from "../../utils/parseAnnCode";
import Tag from "./Tag";

type Props = {
  blocks: any;
  language: string;
};

function Code({ language, blocks }: Props) {
  return (
    <div className="flex flex-col gap-1 mt-3 mb-1">
      <Tag color="yellow" name={language} />
      <code className="bg-slate-200 dark:bg-slate-800 rounded p-4 flex flex-col">
        {blocks.map((text: any) => {
          const key = Math.random().toString(36).substring(7);
          return parseAnnCode(text, key);
        })}
      </code>
    </div>
  );
}

export default Code;
