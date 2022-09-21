import Paragraph from "../components/BlogBlocks/Paragraph";
import Code from "../components/BlogBlocks/Code";
import Heading1 from "../components/BlogBlocks/Heading1";
import Heading2 from "../components/BlogBlocks/Heading2";
import Heading3 from "../components/BlogBlocks/Heading3";
import List from "../components/BlogBlocks/List";
import ImageBlog from "../components/BlogBlocks/ImageBlog";
import Quote from "../components/BlogBlocks/Quote";

export const typesBlocks: { [key: string]: any } = {
  paragraph: (paragraph: any) => <Paragraph blocks={paragraph.rich_text} />,
  code: (code: any) => (
    <Code language={code.language} blocks={code.rich_text} />
  ),
  heading_1: (heading: any) => <Heading1 blocks={heading.rich_text} />,
  heading_2: (heading: any) => <Heading2 blocks={heading.rich_text} />,
  heading_3: (heading: any) => <Heading3 blocks={heading.rich_text} />,
  bulleted_list_item: (listItem: any) => <List blocks={listItem.rich_text} />,
  image: (image: any) => (
    <ImageBlog
      url={image.external?.url || image.file?.url}
      caption={image.caption[0].text.content || "Image"}
    />
  ),
  quote: (quote: any) => <Quote blocks={quote.rich_text} color={quote.color} />,
};
