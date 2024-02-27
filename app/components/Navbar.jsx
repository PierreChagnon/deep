import Link from 'next/link'
import React from 'react'
import { bungee } from '../fonts'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center p-4 2xl:p-8 mb-4'>
            <Link className={`${bungee.className} from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent text-2xl md:text-4xl 2xl:text-[4rem]`} href="/">DEEP</Link>
            <div className='flex items-center justify-between gap-2 md:gap-8 text-sm md:text-base 2xl:text-2xl'>
                <Link className='underline' href="/infos">The deep model ?</Link>
                <Link href="/" className='p-[2px] rounded-full from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <div className='h-full w-full bg-[#010018] py-2 px-4 md:px-8 rounded-full'>
                        Resercher area
                    </div>
                </Link>
            </div>
        </div>
    )
}
