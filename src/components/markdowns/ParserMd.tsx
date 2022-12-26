import Markdown from 'markdown-to-jsx'

import ParagraphMd from './ParagraphMd'

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
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default ParserMd
