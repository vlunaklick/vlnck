import React from "react";
import { parseAnnHeading } from "../../utils/parseAnnHeading";

type Props = {
  blocks: any;
};

function Heading2({ blocks }: Props) {
  return (
    <h2 className="text-lg sm:text-2xl mt-7 mb-4">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnHeading(text, key);
      })}
    </h2>
  );
}

export default Heading2;
