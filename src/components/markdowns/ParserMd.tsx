import Markdown from 'markdown-to-jsx'

import ParagraphMd from './ParagraphMd'
import PreBlock from './Code'
import AnchorMd from './AnchorMd'
import HeadingMd from './HeadingMd'
import BlockquoteMd from './BlockquoteMd'

interface Props {
  children: string
}

const ParserMd = ({ children }: Props) => {
  return (
    <Markdown
      options={{
        overrides: {
          p: {
            component: ParagraphMd,
          },
          pre: {
            component: PreBlock,
          },
          a: {
            component: AnchorMd,
          },
          blockquote: {
            component: BlockquoteMd,
          },
          h1: {
            component: HeadingMd,
            props: {
              level: 1,
            },
          },
          h2: {
            component: HeadingMd,
            props: {
              level: 2,
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default ParserMd
