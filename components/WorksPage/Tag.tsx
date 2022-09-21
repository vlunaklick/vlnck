import React from 'react'

type Props = {
    name: string;
}

function Tag({name}: Props) {
  return (
    <span className='text-[7px] font-semibold dark:text-slate-800 dark:bg-slate-300 bg-slate-300 text-slate-800 py-0.5 px-3 rounded-full'>
        {name}
    </span>
  )
}

export default Tag