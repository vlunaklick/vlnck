import React from "react";
import { parseAnnList } from "../../utils/parseAnnList";

type Props = {
  blocks: any;
};

function List({ blocks }: Props) {
  return (
    <>
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnList(text, key);
      })}
    </>
  );
}

export default List;
