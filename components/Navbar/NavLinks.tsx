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
        className={`text-sm text-center capitalize text-gray-800 dark:text-slate-400 relative group`}
      >
        {name}
        <span
          className={`sm:absolute sm:-bottom-0.5 sm:left-0 sm:h-0.5  sm:bg-gray-500 dark:sm:bg-slate-700 ${
            asPath === href
              ? "w-full"
              : "sm:transition-all sm:group-hover:w-full sm:w-0"
          }`}
        />
      </a>
    </Link>
  );
}

export default NavLinks;
