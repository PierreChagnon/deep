'use client'

import React from 'react'

export default function BentoElement({ children }) {
    return (
        <div className='flex w-full p-[1px] bg-gradient-to-br rounded-md from-white'>
            <div className='flex flex-col gap-4 w-full h-full bg-neutral-900 p-4 rounded-md'>
                {children}
            </div>
        </div>
    )
}
