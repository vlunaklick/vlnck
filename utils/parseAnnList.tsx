import { COLORS_TEXT } from "./colors";

export function parseAnnList(text: any, key: string) {
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
    content = (
      <li key={key} className={bg}>
        {content}
      </li>
    );
  } else {
    content = <li key={key}>{content}</li>;
  }

  return content;
}
