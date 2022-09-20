import React from "react";
import Tag from "./Tag";

type Props = {
  blocks: any;
  language: string;
};

function Code({ language, blocks }: Props) {
  function parseAnnotations(text: any) {
    if (!text) return;

    return text.plain_text;
  }
  return (
    <div>
      <div>
        <Tag color="yellow" name={language} />
      </div>
      <code>
        {blocks.map((text: any) => {
          return parseAnnotations(text);
        })}
      </code>
    </div>
  );
}

export default Code;
