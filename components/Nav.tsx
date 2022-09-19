import React from 'react'
import Link from 'next/link'

type Props = {}

function Nav({ }: Props) {
    return (
        <nav className='flex justify-around items-center'>
            <Link href="/exp">
                <a className="text-sm">Experience</a>
            </Link>

            <Link href="/">
                <a className="text-sm">Home</a>
            </Link>

            <img src="/icon-me.png" alt="My emoji" className="rounded-full w-9" />

            <a className="text-sm text-slate-400">
                Blog
                <sup className='text-[9px]'>soon</sup>
            </a>

            <Link href="/projects">
                <a className="text-sm">Projects</a>
            </Link>
        </nav>
    )
}

export default Nav