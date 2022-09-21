import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Navbar/Nav";
import NameFooter from "../../components/NameFooter";
import { Client } from "@notionhq/client";
import Block from "../../components/BlogBlocks/Block";
import Link from "next/link";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

type Props = {
  blocks: [any];
};

const Post: NextPage<Props> = ({ blocks }) => {
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
          <div className="flex flex-col px-4">
            <div className="flex flex-col gap-3">
              <Link href="/blog">
                <a className="text-xs text-slate-600 dark:text-slate-300">← Back to blog</a>
              </Link>
            </div>
            <div>
              {blocks.map((block, key) => {
                return <Block data={block} key={key} />;
              })}
            </div>
          </div>
        </div>
        <NameFooter />
      </main>
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }: { params: any }) {
  const entries = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      property: "niceUrl",
      rich_text: {
        equals: params.id,
      },
    },
  });

  if (
    entries.results.length === 0 ||
    // @ts-ignore
    entries.results[0].properties.visible.checkbox === false
  ) {
    return {
      notFound: true,
    };
  }

  const blocks = await notion.blocks.children.list({
    block_id: entries.results[0].id,
  });

  const mappedBlock = blocks.results.map((block) => {
    let filteredBlock = { ...block };
    return filteredBlock;
  });

  return {
    props: {
      blocks: mappedBlock,
    },
  };
}
