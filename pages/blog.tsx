import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Navbar/Nav";
import NameFooter from "../components/NameFooter";
import BlogSection from "../components/BlogPage/BlogSection";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

type Props = {
  entries: [any];
};

const Blog: NextPage<Props> = ({ entries }) => {
  return (
    <div className="dark:bg-[#080C24] w-full transition-colors">
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
          <BlogSection entries={entries} />
        </div>
        <NameFooter />
      </main>
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  let { results } = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });

  const entries = results.filter((entry: any) => {
    return entry.properties.visible.checkbox === true;
  });

  return {
    props: {
      entries,
    },
  };
}
