import React from "react";
import Header from '../Header'
import Nav from '../Navbar/Nav'
import NameFooter from '../NameFooter'

type Props = {
  children: React.ReactNode;
};

function NormalLayout({ children }: Props) {
  return (
    <>
      <div className="gap-7 flex flex-col">
        <Nav />
        <Header />
        {children}
      </div>
      <NameFooter />
    </>
  );
}

export default NormalLayout;
