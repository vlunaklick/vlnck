interface Props {}

const BlockquoteMd = (props: Props) => {
  return (
    <blockquote
      className={
        'mb-6 border-l-4 border-slate-300 bg-slate-100 p-2 pl-4 text-base italic text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'
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
