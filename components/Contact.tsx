import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='px-4 flex flex-col gap-3'>
        <h4 className='font-bold text-sm sm:text-base'>Contact</h4>
        <div className="flex gap-5 text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">LinkedIn</p>
            <a className="text-slate-900 dark:text-slate-50 font-medium" href="https://www.linkedin.com/in/vlunaklick/" target="_blank" rel="noreferrer">Valentín Lunaklick</a>
        </div>
        <div className="flex gap-5 text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">Github</p>
            <a className="text-slate-900 dark:text-slate-50 font-medium" href="https://github.com/vlunaklick" target="_blank" rel="noreferrer">vlunaklick</a>
        </div>
        <div className="flex gap-5 text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-400 min-w-[8ch]">Resume</p>
            <a className="text-slate-900 dark:text-slate-50 font-medium" href="valentin-lunaklick-resume.pdf" download="valentin-lunaklick-resume" target="_blank">Click to download</a>
        </div>
    </div>
  )
}

export default Contact