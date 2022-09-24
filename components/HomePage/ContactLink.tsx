import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  url: string;
  content: string;
  download?: string;
};

function ContactLink({ name, url, content, download }: Props) {
  return (
    <div className="flex gap-5 text-xs">
      <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">{name}</p>
      <Link href={url} passHref>
        <a
          className="text-slate-900 dark:text-slate-50 font-medium underline"
          target="_blank"
          rel="noreferrer"
          download={download ? download : undefined}
        >
          {content}
        </a>
      </Link>
    </div>
  );
}

export default ContactLink;
