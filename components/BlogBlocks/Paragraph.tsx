import Link from "next/link";
import React from "react";

type Props = {
  blocks: [any];
};

function Paragraph({ blocks }: Props) {
  function parseAnnotations(text: any) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color, underline } = annotations;

    if (italic) {
      content = <i>{content}</i>;
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }

    if (underline) {
      content = <u>{content}</u>;
    }

    if (color) {
      content = <span className={`text-${color}-500`}>{content}</span>;
    }

    if (text.href) {
      content = (
        <Link href={text.href}>
          <a className={color == "default" ? "text-blue-500" : `text-${color}-500`}>
            {content}
          </a>
        </Link>
      );
      return content;
    }

    return content;
  }

  return (
    <p className="text-slate-300 leading-loose text-xs">
      {blocks.map((text: any) => {
        return parseAnnotations(text);
      })}
    </p>
  );
}

export default Paragraph;
