import React from 'react'

import Header from '../Header'
import Nav from '../Navbar/Nav'
import NameFooter from '../NameFooter'
import ThemeButton from '../ThemeButton'

type Props = {
  children: React.ReactNode
}

const NormalLayout = ({ children }: Props) => {
  return (
    <>
      <div className="gap-7 flex flex-col relative">
        <Nav />
        <Header />
        <ThemeButton />
        {children}
      </div>
      <NameFooter />
    </>
  )
}

export default NormalLayout
