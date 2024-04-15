import Image from 'next/image'
import React from 'react'
import { bungee } from '../fonts'

export default function Card({ discPercent = 0, expaPercent = 0, expePercent = 0, perfPercent = 0, imageURL, gamingPersona }) {
    return (
        <div id='card' className='flex relative w-60 h-96 p-[2px] bg-gradient-to-b from-[#DCCFF7] via-[#88324D] to-[#704217] rounded-xl shadow-[0_0_24px_5px_rgba(255,255,255,0.25)]'>
            <div className='flex flex-1 flex-col justify-between items-center p-6 bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] rounded-xl'>
                {
                    imageURL ?
                        <div className='relative h-40 w-40 border-2 rounded-full overflow-hidden'>
                            <Image src={imageURL} alt='avatar image' fill objectFit='contain' />
                        </div>
                        :
                        <div className='relative flex justify-center flex-col items-center h-40 w-40 bg-gradient-to-br animate-pulse from-white via-white/20 to-white/50 opacity-20 border-2 rounded-full overflow-hidden'>
                            <p className='text-center text-sm text-white'>Almost there! </p>
                            <p className='text-center text-sm text-white'>Your one-of-a-kind gaming avatar is about to emerge. </p>
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
                {
                    gamingPersona !== '' ?
                        <p className='w-full text-[0.5rem] text-center px-4'>{gamingPersona}</p>
                        :
                        <div className='flex animate-pulse flex-col gap-1 w-full items-center px-4'>
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-4/5' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
                            <span className='h-2 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-5/6' />
                        </div>}

                {/* Absolute positioning */}
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#7A45F0] border-[#7A45F0] top-3 left-3 border-2 rounded-full w-7 h-7`}>D</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#B751BA] border-[#B751BA] top-3 right-3 border-2 rounded-full w-7 h-7`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#ED5C8A] border-[#ED5C8A] bottom-3 right-3 border-2 rounded-full w-7 h-7`}>E</p>
                <p className={`${bungee.className} absolute flex items-center justify-center text-center text-[#FF922B] border-[#FF922B] bottom-3 left-3 border-2 rounded-full w-7 h-7`}>P</p>
            </div>
        </div>
    )
}