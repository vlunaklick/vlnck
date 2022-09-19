import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex flex-col gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Valentín Lunaklick</h1>
        <h3 className="font-medium text-slate-400">Fullstack Developer</h3>
      </div>
      <hr className="w-full border-[#35384B]" />
    </header>
  );
}

export default Header;
