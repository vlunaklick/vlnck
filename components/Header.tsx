import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col gap-7">
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl font-semibold">
          Valentín Lunaklick
        </h1>
        <h2>Fullstack Developer</h2>
      </div>
      <hr className="w-full border-slate-300 dark:border-[#35384B]" />
    </header>
  )
}

export default Header
