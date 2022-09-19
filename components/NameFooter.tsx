import React from "react";
import Link from "next/link";


type Props = {};

function NameFooter({}: Props) {
  return (
    <Link href="/">
      <a className="text-slate-700 text-xs text-center mx-auto underline">
        vlunaklick
      </a>
    </Link>
  );
}

export default NameFooter;
