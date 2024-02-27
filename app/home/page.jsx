'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import { bungee } from '../fonts';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FancyButton from '../components/FancyButton';

export default function Home() {
    const router = useRouter()
    return (
        <main className='text-white flex flex-col h-dvh max-h-screen overflow-hidden relative'>
            <div className='absolute bottom-0 2xl:mx-64 -right-24 md:-right-10 -z-10 w-80 2xl:w-[600px] h-96 2xl:h-1/2'>
                <Image src='/assets/ashe.png' alt='ashe image' fill objectFit='contain' />
            </div>
            <div className='absolute bottom-0 2xl:mx-64 -left-10 md:-left-0 -z-10 w-80 2xl:w-[600px] h-96 2xl:h-1/2'>
                <Image src='/assets/link.png' alt='link image' fill objectFit='contain' />
            </div>
            <Navbar />
            <div className='h-full px-8 md:px-20 2xl:px-32 flex flex-col items-center justify-around'>
                <h1 className={`${bungee.className} text-2xl md:text-[3rem]`}>
                    Wich <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>gamer</span> are you?
                </h1>
                <p className='px-4 md:px-16 2xl:px-48 2xl:w-1/2 2xl:text-2xl 2xl:leading-loose'>
                    The <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> model, elaborated by researchers at the École normale supérieure in PSL University, discerns four key dimensions of player agency in video games: Discovering, Experimenting, Expanding, and Performing.
                </p>
                <p className='2xl:text-2xl 2xl:leading-loose'>
                    1,394 gamers already took the test.
                </p>
                <div className='2xl:w-96'>
                    <FancyButton onClick={() => router.push("/consent")}>TAKE THE TEST</FancyButton>
                </div>
            </div>
            <Footer />
        </main>
    )
}
