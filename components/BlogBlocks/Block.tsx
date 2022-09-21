import React from "react";
import { typesBlocks } from "../../utils/typesBlocks";

type Props = {
  data: any;
};

function Block({ data }: Props) {
  const handleBlock = (blockData: any) => {
    const { type } = blockData;

    return typesBlocks[type] ? typesBlocks[type](blockData[type]) : "";
  };

  return <>{handleBlock(data)}</>;
}

export default Block;
