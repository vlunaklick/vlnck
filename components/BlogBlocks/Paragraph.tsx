import React from "react";
import { parseAnnParagraph } from "../../utils/parseAnnParagraph";

type Props = {
  blocks: [any];
};

function Paragraph({ blocks }: Props) {
  return (
    <p className="leading-loose text-xs">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnParagraph(text, key);
      })}
    </p>
  );
}

export default Paragraph;
