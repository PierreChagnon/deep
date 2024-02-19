import React from 'react'
import Navbar from '../components/Navbar'
import { bungee } from '../fonts';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='text-white flex flex-col h-dvh max-h-screen overflow-hidden relative'>
            <div className='absolute bottom-0 -right-24 md:-right-10 -z-10 w-80 h-96'>
                <Image src='/assets/ashe.png' alt='ashe image' fill objectFit='contain' />
            </div>
            <div className='absolute bottom-0 -left-10 md:-left-0 -z-10 w-80 h-96'>
                <Image src='/assets/link.png' alt='link image' fill objectFit='contain' />
            </div>
            <Navbar />
            <div className='h-full px-8 md:px-20 flex flex-col items-center justify-around'>
                <h1 className={`${bungee.className} text-2xl md:text-[4rem]`}>
                    Wich <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>gamer</span> are you?
                </h1>
                <p className='px-4 md:px-48'>
                    The <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> model, elaborated by researchers at the École normale supérieure in PSL University, discerns four key dimensions of player agency in video games: Discovering, Experimenting, Expanding, and Performing.
                </p>
                <p>
                    1,394 gamers already took the test.
                </p>
                <Link href="/consent" className={`${bungee.className} from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200`}>Take the test</Link>
            </div>
            <Footer />
        </main>
    )
}
