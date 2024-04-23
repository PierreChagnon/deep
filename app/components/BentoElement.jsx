'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function BentoElement({ children }) {
    return (
        <motion.div layout className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-3xl from-[#ffffff00]'>
            <div className='flex flex-col gap-4 w-full h-full bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] p-6 md:p-8 3xl:p-12 3xl:px-16 rounded-3xl'>
                {children}
            </div>
        </motion.div>
    )
}
