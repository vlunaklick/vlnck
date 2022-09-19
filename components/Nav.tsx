import React from "react";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex justify-around items-center">
      <Link href="/exp">
        <a className="text-sm w-[10ch] text-center">Experience</a>
      </Link>

      <Link href="/">
        <a className="text-sm w-[10ch] text-center">Home</a>
      </Link>

      <img src="/icon-me.png" alt="My emoji" className="rounded-full w-9" />

      <a className="text-sm text-slate-400 w-[10ch] text-center">
        Blog
        <sup className="text-[9px]">soon</sup>
      </a>

      <Link href="/projects">
        <a className="text-sm w-[10ch] text-center">Projects</a>
      </Link>
    </nav>
  );
}

export default Nav;
