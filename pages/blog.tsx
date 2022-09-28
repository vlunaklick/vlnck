import type { NextPage } from "next";
import DivLayout from "../components/Layouts/DivLayout";
import MainLayout from "../components/Layouts/MainLayout";
import NormalLayout from "../components/Layouts/NormalLayout";

import BlogSection from "../components/BlogPage/BlogSection";
import { Client } from "@notionhq/client";
import { Entries } from "../types/entries";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

type Props = {
  entries: [Entries];
};

const Blog: NextPage<Props> = ({ entries }) => {
  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <BlogSection entries={entries} />
        </NormalLayout>
      </MainLayout>
    </DivLayout>
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
