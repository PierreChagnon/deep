import Image from 'next/image'
import React from 'react'
import { bungee } from '../fonts'

export default function Card({ discPercent = 0, expaPercent = 0, expePercent = 0, perfPercent = 0, imageURL }) {
    return (
        <div className='flex w-60 h-96 p-[2px] bg-gradient-to-b from-[#DCCFF7] via-[#88324D] to-[#704217] rounded-xl shadow-[0_0_24px_5px_rgba(255,255,255,0.25)]'>
            <div className='flex flex-1 relative flex-col justify-between items-center p-6 bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] rounded-xl'>
                {
                    imageURL ?
                        <div className='relative h-40 w-40 border-2 rounded-full overflow-hidden'>
                            <Image src={imageURL} alt='avatar image' fill objectFit='contain' />
                        </div>
                        :
                        <div className='relative h-40 w-40 bg-gradient-to-br animate-pulse from-white via-white/20 to-white/50 opacity-20 border-2 rounded-full overflow-hidden'>
                            
                        </div>
                }
                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent' />
                <div className={`${bungee.className} w-full text-xs`}>
                    <div className='flex justify-between items-center w-full text-[#7A45F0]'>
                        <p>discovering</p>
                        <span>{discPercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#B751BA]'>
                        <p>expanding</p>
                        <span>{expaPercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#ED5C8A]'>
                        <p>experimenting</p>
                        <span>{expePercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#FF922B]'>
                        <p>performing</p>
                        <span>{perfPercent}</span>
                    </div>
                </div>
                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent' />
                <p className='w-full text-[0.5rem] text-center px-4'>Your gaming persona is one of a strategist and tactician, always on the lookout for the next engaging challenge to conquer.</p>

                {/* Absolute positioning */}
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#7A45F0] border-[#7A45F0] top-2 left-2 border-2 rounded-full w-7 h-7 pl-[1px]`}>D</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#B751BA] border-[#B751BA] top-2 right-2 border-2 rounded-full w-7 h-7 pl-[1px]`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#ED5C8A] border-[#ED5C8A] bottom-2 right-2 border-2 rounded-full w-7 h-7 pl-[1px]`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#FF922B] border-[#FF922B] bottom-2 left-2 border-2 rounded-full w-7 h-7 pl-[1px]`}>P</p>
            </div>
        </div>
    )
}
