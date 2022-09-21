import React from "react";
import { COLORS_TEXT, BORDER_COLORS } from "../../utils/colors";
import Link from "next/link";

type Props = {
  blocks: any;
  color: string;
};

function Quote({ blocks, color }: Props) {
  function parseAnnotations(text: any, key: string) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color, underline, strikethrough } = annotations;

    if (italic) {
      content = <i key={key}>{content}</i>;
    }

    if (bold) {
      content = <strong key={key}>{content}</strong>;
    }

    if (underline) {
      content = <u key={key}>{content}</u>;
    }

    if (strikethrough) {
      content = <s key={key}>{content}</s>;
    }

    if (color) {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = (
        <span key={key} className={bg}>
          {content}
        </span>
      );
    }

    if (text.href) {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = (
        <Link key={key} href={text.href}>
          <a className={color == "default" ? "text-blue-500" : bg}>{content}</a>
        </Link>
      );
      return content;
    }

    return content;
  }

  type keyBorder = keyof typeof BORDER_COLORS;
  const colorKey = color as keyBorder;
  const bg = BORDER_COLORS[colorKey];

  return (
    <p
      className={`dark:text-slate-400 text-slate-600 leading-loose text-xs bg-slate-200 dark:bg-slate-800 rounded p-2 ${bg} border-l-2`}
    >
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnotations(text, key);
      })}
    </p>
  );
}

export default Quote;
