import React from 'react'

type Props = {
    name: string;
}

function WorksTag({name}: Props) {
  return (
    <span className='text-[8px] font-bold text-slate-800 bg-slate-300 py-0.5 px-3 rounded-full'>
        {name}
    </span>
  )
}

export default WorksTag