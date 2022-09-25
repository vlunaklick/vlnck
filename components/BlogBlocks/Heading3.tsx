import React from "react";
import { parseAnnHeading } from "../../utils/parseAnnHeading";

type Props = {
  blocks: any;
};

function Heading3({ blocks }: Props) {
  return (
    <h3 className="text-sm sm:text-base mt-7 mb-4">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnHeading(text, key);
      })}
    </h3>
  );
}

export default Heading3;
