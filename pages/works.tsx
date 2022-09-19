import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Link from "next/link";
import WorksSection from "../components/WorksSection";

const Works: NextPage = () => {
  return (
    <div className="dark:bg-[#080C24] w-full">
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="w-[350px] sm:w-[640px] mx-auto p-0 py-5 sm:p-5 flex flex-col justify-between min-h-screen gap-7">
        <div className="gap-7 flex flex-col">
          <Nav />
          <Header />
          <WorksSection />
        </div>
        <Link href="/">
          <a className="text-slate-700 text-xs text-center mx-auto underline">
            vlunaklick
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Works;
