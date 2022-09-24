import React from "react";
import { parseAnnQuote } from "../../utils/parseAnnQuote";
import { BORDER_COLORS } from "../../utils/colors";

type Props = {
  blocks: any;
  color: string;
};

function Quote({ blocks, color }: Props) {
  type keyBorder = keyof typeof BORDER_COLORS;
  const colorKey = color as keyBorder;
  const bg = BORDER_COLORS[colorKey];

  return (
    <p
      className={`dark:text-slate-300 text-slate-600 leading-loose text-xs bg-slate-100 dark:bg-slate-800 rounded-r p-2 ${bg} border-l-2`}
    >
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnQuote(text, key);
      })}
    </p>
  );
}

export default Quote;
