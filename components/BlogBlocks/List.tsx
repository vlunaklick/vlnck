import React from "react";

type Props = {
  blocks: any;
};

function List({ blocks }: Props) {
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
      content = <li className={`text-${color}-500`}>{content}</li>;
    } else {
      content = <li>{content}</li>;
    }

    return content;
  }
  return (
    <>
      {blocks.map((text: any) => {
        return parseAnnotations(text);
      })}
    </>
  );
}

export default List;
