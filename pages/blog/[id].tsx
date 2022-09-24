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
};

const Post: NextPage<Props> = ({ blocks }) => {
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
    },
  };
}
