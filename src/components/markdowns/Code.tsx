import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  children: any
  className?: string
}

const Code = ({ children, className }: Props) => {
  const language = className?.replace(/lang-/, '')

  return (
    <SyntaxHighlighter
      language={language}
      style={dark}
      wrapLines={true}
      customStyle={{
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '1rem 0',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        fontSize: '12px',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

interface PreBlock {
  children: React.ReactNode
}

const PreBlock = ({ children, ...rest }: PreBlock) => {
  // @ts-ignore
  if ('type' in children && children['type'] === 'code') {
    // @ts-ignore
    return Code(children['props'])
  }
  return <pre {...rest}>{children}</pre>
}

export default PreBlock
