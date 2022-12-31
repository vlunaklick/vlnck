import Code from './CodeMd'

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
