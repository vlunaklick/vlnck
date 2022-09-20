import { useRouter } from "next/router";
import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

function Nav({}: Props) {
  const { asPath } = useRouter();

  return (
    <nav className="flex justify-around items-center">
      <NavLinks href={"/"} name={"Home"} asPath={asPath} />

      <NavLinks href={"/exp"} name={"Exp"} asPath={asPath} />

      <img src="/icon-me.png" alt="My emoji" className="rounded-full w-10" />

      <NavLinks href={"/blog"} name={"Blog"} asPath={asPath} />

      <NavLinks href={"/works"} name={"Works"} asPath={asPath} />
    </nav>
  );
}

export default Nav;
