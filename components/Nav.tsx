import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex justify-around items-center">
      <NavLinks href={"/"} name={"Home"} />

      <NavLinks href={"/exp"} name={"Exp"} />

      <img src="/icon-me.png" alt="My emoji" className="rounded-full w-10" />

      <a className="text-sm text-slate-400 text-center">Blog</a>

      <NavLinks href={"/works"} name={"Works"} />
    </nav>
  );
}

export default Nav;
