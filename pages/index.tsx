import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Navbar/Nav";
import NameFooter from "../components/NameFooter";

import HomeInfo from "../components/HomePage/HomeInfo";
import Contact from "../components/HomePage/Contact";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-[#080C24] bg-white w-full">
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="w-[350px] sm:w-[640px] mx-auto p-0 py-5 sm:p-5 flex flex-col justify-between min-h-screen gap-7">
        <div className="gap-7 flex flex-col">
          <Nav />
          <Header />
          <HomeInfo />
          <Contact />
        </div>
        <NameFooter />
      </main>
    </div>
  );
};

export default Home;
