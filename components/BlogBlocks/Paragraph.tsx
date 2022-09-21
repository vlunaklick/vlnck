import Link from "next/link";
import React from "react";
import { COLORS_TEXT } from "../../utils/colors";

type Props = {
  blocks: [any];
};

function Paragraph({ blocks }: Props) {
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

    if (color && color != "default") {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = <span key={key} className={bg}>{content}</span>;
    }

    if (text.href) {
      type key = keyof typeof COLORS_TEXT;
      const colorKey = color as key;
      const bg = COLORS_TEXT[colorKey];
      content = (
        <Link key={key} href={text.href}>
          <a className={color == "default" ? "text-blue-500" : bg}>
            {content}
          </a>
        </Link>
      );
      return content;
    }

    return content;
  }

  return (
    <p className="dark:text-slate-300 text-slate-600 leading-loose text-xs">
      {blocks.map((text: any) => {
        const key = Math.random().toString(36).substring(7);
        return parseAnnotations(text, key);
      })}
    </p>
  );
}

export default Paragraph;
