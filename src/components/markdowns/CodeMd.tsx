import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  children: any
  className?: string
}

const Code = ({ children, className }: Props) => {
  if (!className) {
    return (
      <code className="text-sm font-mono dark:text-slate-900 text-slate-100 bg-gray-600 rounded-sm dark:bg-slate-100 py-[2px] px-1">
        {children}
      </code>
    )
  }

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

export default Code
