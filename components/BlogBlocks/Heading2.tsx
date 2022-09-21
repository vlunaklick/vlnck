import React from "react";
import { COLORS_TEXT } from "../../utils/colors";

type Props = {
  blocks: any;
};

function Heading2({ blocks }: Props) {
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

    if (color && color != "default") {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = <span key={key} className={bg}>{content}</span>;
    }
    return content;
  }

  return (
    <h2 className="text-lg sm:text-3xl mt-7 mb-4">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnotations(text, key);
      })}
    </h2>
  );
}

export default Heading2;
