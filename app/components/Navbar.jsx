import Link from 'next/link'
import React from 'react'
import { bungee } from '../fonts'

export default function Navbar() {
    return (
        <div className='flex relative justify-between items-center p-4 3xl:py-8 3xl:px-16 mb-16'>
            <Link className={`${bungee.className} from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent text-2xl md:text-4xl 3xl:text-[3.3rem]`} href="/">DEEP</Link>
            <div className='flex items-center justify-between gap-2 md:gap-8 3xl:gap-16 text-sm md:text-base 3xl:text-2xl'>
                <Link className='underline' href="/infos">The deep model ?</Link>
                <Link href="/" className='p-[2px] rounded-full from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <div className='h-full w-full bg-[#010018] py-2 px-4 md:px-8 rounded-full'>
                        Resercher area
                    </div>
                </Link>
            </div>
            <span className='absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent' />
        </div>
    )
}
