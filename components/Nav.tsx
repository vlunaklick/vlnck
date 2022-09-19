import React from "react";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex justify-around items-center">
      <Link href="/">
        <a className="text-sm text-center transition duration-150 border-b-2 border-transparent hover:border-blue-500">
          Home
        </a>
      </Link>

      <Link href="/exp">
        <a className="text-sm text-center transition duration-150 border-b-2 border-transparent hover:border-blue-500">
          Exp
        </a>
      </Link>

      <img src="/icon-me.png" alt="My emoji" className="rounded-full w-10" />

      <a className="text-sm text-slate-400 text-center">Blog</a>

      <Link href="/projects">
        <a className="text-sm text-center transition duration-150 border-b-2 border-transparent hover:border-blue-500">
          Works
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
