import type { NextPage } from "next";
import DivLayout from "../../components/Layouts/DivLayout";
import MainLayout from "../../components/Layouts/MainLayout";
import { Client } from "@notionhq/client";
import Block from "../../components/BlogBlocks/Block";
import Link from "next/link";
import NormalLayout from "../../components/Layouts/NormalLayout";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

type Props = {
  blocks: [any];
  time: string;
  title: string;
};

const Post: NextPage<Props> = ({ blocks, time, title }) => {
  // Make a date like : Friday 12 Jun, 2021
  let date = new Date(time);
  let day = date.toLocaleString("en-us", { weekday: "long" });
  let month = date.toLocaleString("en-us", { month: "short" });
  let year = date.toLocaleString("en-us", { year: "numeric" });
  let dayNum = date.toLocaleString("en-us", { day: "numeric" });
  let dateStr = `${day} ${dayNum} ${month}, ${year}`;

  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <div className="flex flex-col px-4">
            <div className="flex flex-col gap-3">
              <Link href="/blog">
                <a className="text-xs text-slate-600 dark:text-slate-300">
                  ← Back to blog
                </a>
              </Link>
            </div>

            <div className="prose dark:prose-invert text-black dark:text-white max-w-none">
              <p className="text-xl sm:text-3xl font-bold mb-2 mt-5">{title}</p>
              <p className="text-xs mt-2 text-slate-400">{dateStr}</p>
              {blocks.map((block, key) => {
                return <Block data={block} key={key} />;
              })}
            </div>
          </div>
        </NormalLayout>
      </MainLayout>
    </DivLayout>
  );
};

export default Post;

export async function getServerSideProps({ params }: { params: any }) {
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
      // @ts-ignore
      time: entries.results[0].created_time,
      // @ts-ignore
      title: entries.results[0].properties.name.title[0].plain_text,
    },
  };
}
