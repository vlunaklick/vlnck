import Markdown from 'markdown-to-jsx'

import ParagraphMd from './ParagraphMd'
import PreBlock from './Code'

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
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default ParserMd
