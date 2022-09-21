import React from "react";
import { parseAnnHeading } from "../../utils/parseAnnHeading";

type Props = {
  blocks: any;
};

function Heading1({ blocks }: Props) {
  return (
    <h1 className="text-xl sm:text-3xl font-bold mt-7 mb-4">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnHeading(text, key);
      })}
    </h1>
  );
}

export default Heading1;
