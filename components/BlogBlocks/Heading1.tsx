import React from "react";

type Props = {
  blocks: any;
};

function Heading1({ blocks }: Props) {
  function parseAnnotations(text: any) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color } = annotations;

    if (italic) {
      content = <i>{content}</i>;
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }

    if (color) {
      content = <span className={`text-${color}-500`}>{content}</span>;
    }
    return content;
  }

  return (
    <h1 className="text-xl sm:text-3xl font-bold mt-7 mb-4">
      {blocks.map((text: any) => {
        return parseAnnotations(text);
      })}
    </h1>
  );
}

export default Heading1;
