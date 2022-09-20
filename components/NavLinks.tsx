import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  asPath: string;
};

function NavLinks({ name, href, asPath }: Props) {
  return (
    <Link href={href}>
      <a
        className={`text-sm text-center capitalize text-slate-400 relative group ${
          asPath === href ? "font-bold text-slate-300" : ""
        }`}
      >
        {name}
        {asPath === href ? null : (
          <span className="sm:absolute sm:-bottom-1 sm:left-0 sm:w-0 sm:h-0.5 sm:bg-slate-400 sm:transition-all sm:group-hover:w-full" />
        )}
      </a>
    </Link>
  );
}

export default NavLinks;
