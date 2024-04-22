'use client'
import Link from 'next/link'
import React from 'react'
import { bungee } from '../fonts'
import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            className='flex relative justify-between items-center p-4 3xl:py-8 3xl:px-16 mb-16'>
            <Link className={`${bungee.className} from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent text-2xl md:text-4xl 3xl:text-[3.3rem]`} href="/home">DEEP</Link>
            <div className='hidden md:flex items-center justify-between gap-2 md:gap-8 3xl:gap-16 text-sm md:text-base 3xl:text-2xl text-white'>
                <Link className='hover:opacity-50 duration-200' href="/about-us">About us</Link>
                <Link className='hover:opacity-50 duration-200' href="/infos">The deep model</Link>
                <Link href="/" className='p-[2px] rounded-full from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <div className='h-full w-full text-center hover:bg-transparent transition-all duration-300 ease-in-out bg-[#010018] py-2 px-4 md:px-8 rounded-full'>
                        Resercher area
                    </div>
                </Link>
            </div>
            <div className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-[#ED5C8A]' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            <span className='absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent' />
        </motion.nav>
    )
}
