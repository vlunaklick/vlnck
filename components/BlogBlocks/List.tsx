import React from "react";
import { COLORS_TEXT } from "../../utils/colors";

type Props = {
  blocks: any;
};

function List({ blocks }: Props) {
  function parseAnnotations(text: any, key: string) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color } = annotations;

    if (italic) {
      content = <i key={key}>{content}</i>;
    }

    if (bold) {
      content = <strong key={key}>{content}</strong>;
    }

    if (color) {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = <li key={key} className={bg}>{content}</li>;
    } else {
      content = <li key={key}>{content}</li>;
    }

    return content;
  }
  return (
    <>
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnotations(text, key);
      })}
    </>
  );
}

export default List;
