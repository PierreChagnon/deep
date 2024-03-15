'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function BentoElement({ children }) {
    return (
        <motion.div layout className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-md from-white'>
            <div className='flex flex-col gap-4 w-full h-full bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] p-4 md:p-6 rounded-md'>
                {children}
            </div>
        </motion.div>
    )
}
