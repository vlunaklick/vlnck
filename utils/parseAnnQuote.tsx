import { COLORS_TEXT } from "./colors";
import Link from "next/link";

export function parseAnnQuote(text: any, key: string) {
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
