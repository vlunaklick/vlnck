interface Props {}

const BlockquoteMd = (props: Props) => {
  return (
    <blockquote
      className={
        'p-2 text-base dark:text-slate-100 text-slate-800 mb-6 italic border-l-4 border-slate-300 dark:border-slate-700 pl-4 bg-slate-100 dark:bg-slate-800'
      }
    >
      <p>
        {
          // @ts-ignore
          props.children[0].props.children[0]
        }
      </p>
    </blockquote>
  )
}

export default BlockquoteMd
