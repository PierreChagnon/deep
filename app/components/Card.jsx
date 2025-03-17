import Image from 'next/image'
import React from 'react'
import { bungee } from '../fonts'

export default function Card({ discPercent = 0, expaPercent = 0, expePercent = 0, perfPercent = 0, imageURL, gamingPersona }) {
    return (
        <div id='card' className='flex relative w-60 h-96 3xl:w-72 3xl:h-[456px] p-[2px] bg-gradient-to-b from-[#DCCFF7] via-[#88324D] to-[#704217] rounded-xl shadow-[0_0_24px_5px_rgba(255,255,255,0.25)]'>
            <div className='flex flex-1 flex-col justify-between items-center p-6 bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] rounded-xl'>
                {
                    imageURL ?
                        <div className='relative h-40 w-40 3xl:w-48 3xl:h-48 border-2 rounded-full overflow-hidden'>
                            <Image unoptimized={true} src={imageURL} alt='avatar image' fill objectFit='contain' />
                        </div>
                        :
                        <div className='relative flex justify-center flex-col items-center h-40 w-40 3xl:w-44 3xl:h-44 bg-gradient-to-br animate-pulse from-white via-white/20 to-white/50 opacity-20 border-2 rounded-full overflow-hidden'>
                            <p className='text-center text-sm text-white'>Almost there! </p>
                            <p className='text-center text-sm text-white'>Your one-of-a-kind gaming avatar is about to emerge. </p>
                        </div>
                }
                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent' />
                <div className={`${bungee.className} w-full text-xs`}>
                    <div className='flex justify-between items-center w-full text-[#7A45F0] 3xl:text-base'>
                        <p>discovering</p>
                        <span>{discPercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#B751BA] 3xl:text-base'>
                        <p>expanding</p>
                        <span>{expaPercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#ED5C8A] 3xl:text-base'>
                        <p>experimenting</p>
                        <span>{expePercent}</span>
                    </div>
                    <div className='flex justify-between items-center w-full text-[#FF922B] 3xl:text-base'>
                        <p>performing</p>
                        <span>{perfPercent}</span>
                    </div>
                </div>
                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent' />
                {
                    gamingPersona !== '' ?
                        <p className='w-full text-[0.5rem] 3xl:textsm text-center px-4 3xl:px-8'>{gamingPersona}</p>
                        :
                        <div className='flex animate-pulse flex-col gap-1 w-full items-center px-4'>
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-4/5' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-5/6' />
                        </div>}

                {/* Absolute positioning */}
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#7A45F0] border-[#7A45F0] 3xl:text-2xl top-3 left-3 border-2 rounded-full w-7 h-7 3xl:w-10 3xl:h-10`}>D</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#B751BA] border-[#B751BA] 3xl:text-2xl top-3 right-3 border-2 rounded-full w-7 h-7 3xl:w-10 3xl:h-10`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#ED5C8A] border-[#ED5C8A] 3xl:text-2xl bottom-3 right-3 border-2 rounded-full w-7 h-7 3xl:w-10 3xl:h-10`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#FF922B] border-[#FF922B] 3xl:text-2xl bottom-3 left-3 border-2 rounded-full w-7 h-7 3xl:w-10 3xl:h-10`}>P</p>
            </div>
        </div>
    )
}