import React from "react";
import Link from "next/link";

type Props = {
    name: string;
    href: string;
};

function NavLinks({name, href}: Props) {
  return (
    <Link href={href}>
      <a className="text-sm text-center transition duration-150 border-b-2 border-transparent hover:border-blue-500 capitalize">
        {name}
      </a>
    </Link>
  );
}

export default NavLinks;
