import Markdown from 'markdown-to-jsx'

import ParagraphMd from './ParagraphMd'
import PreBlock from './Code'
import AnchorMd from './AnchorMd'

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
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default ParserMd
