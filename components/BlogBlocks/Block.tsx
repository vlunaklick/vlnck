import React from "react";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Paragraph from "./Paragraph";
import ImageBlog from "./ImageBlog";
import Code from "./Code";
import List from "./List";
import { KeyObjectType } from "crypto";

type Props = {
  data: any;
};

function Block({ data }: Props) {
  const handleBlock = (blockData: any) => {
    const { type } = blockData;

    console.log(blockData);

    const types: { [key: string]: any } = {
      paragraph: (paragraph: any) => <Paragraph blocks={paragraph.rich_text} />,
      code: (code: any) => (
        <Code language={code.language} blocks={code.rich_text} />
      ),
      heading_1: (heading: any) => <Heading1 blocks={heading.rich_text} />,
      heading_2: (heading: any) => <Heading2 blocks={heading.rich_text} />,
      heading_3: (heading: any) => <Heading3 blocks={heading.rich_text} />,
      bulleted_list_item: (listItem: any) => (
        <List blocks={listItem.rich_text} />
      ),
      image: (image: any) => (
        <ImageBlog
          url={image.external?.url || image.file?.url}
          caption={image.caption[0].text.content || "Image"}
        />
      ),
    };

    return types[type] ? types[type](blockData[type]) : "";
  };

  return <>{handleBlock(data)}</>;
}

export default Block;
