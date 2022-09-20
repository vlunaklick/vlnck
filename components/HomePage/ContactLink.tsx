import React from "react";

type Props = {
  name: string;
  url: string;
  content: string;
  download?: string;
};

function ContactLink({ name, url, content, download }: Props) {
  return (
    <div className="flex gap-5 text-xs sm:text-sm">
      <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">{name}</p>
      <a
        className="text-slate-900 dark:text-slate-50 font-medium underline"
        href={url}
        target="_blank"
        rel="noreferrer"
        download={download ? download : undefined}
      >
        {content}
      </a>
    </div>
  );
}

export default ContactLink;
