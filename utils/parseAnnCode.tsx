export function parseAnnCode(text: any, key: string) {
  if (!text) return;

  let content = text.plain_text;
  content = content.split("\n");
  let contentArray = content.map((content: string) => {
    const key2 = Math.random().toString(36).substring(7);
    return parseContent(content, key2);
  });

  return contentArray;
}

function parseContent(content: string, key: string) {
  return (
    <p
      className="text-xs leading-6 text-slate-600 dark:text-slate-400"
      key={key}
    >
      {content}
    </p>
  );
}
