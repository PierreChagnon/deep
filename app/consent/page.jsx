'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import FancyButton from '../components/FancyButton';
import { useRouter } from 'next/navigation';
import { bungee } from '../fonts';

export default function Home() {

    const router = useRouter()

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />
            <div className='h-full px-8 md:px-20 2xl:px-48 flex flex-col 2xl:items-center gap-4 2xl:gap-16 2xl:text-2xl'>
                <h1 className={`${bungee.className} my-4 text-center text-2xl 2xl:text-[3rem]`}>Consent and data collection</h1>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold'>Discover Your Gaming Preferences</h2>
                    <p>Dive into our  questionnaire designed to assess your gaming preferences along four distinct dimensions. As you navigate through these 20  questions, you can also contribute to a pioneering gaming research project!</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold'>Contribute to Gaming Research</h2>
                    <p>This can be more than a survey to explore your gaming identity; it can be an opportunity to be part of an innovative citizen science project. By participating, you help us enhance our understanding of the diverse gaming community. Your anonymous responses will be invaluable in refining our model to capture the rich variety of gamers&apos; preferences. Remember, your privacy is our priority, and your data will be used solely for research purposes.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold'>Why Your Input is Crucial</h2>
                    <p>Every gamer is unique, and this uniqueness is mirrored in the myriad ways games are played. The more responses we collect, the more robust and inclusive our model becomes, allowing us to better represent the vast array of gaming styles. Your participation is key in helping us evolve our theory and understanding of the gaming world.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold'>Consent</h2>
                    <p>By ticking YES below, you certify that you have read this form, and agree to participate in accordance with the above conditions.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row w-full justify-center gap-4 2xl:gap-16 mt-8'>
                    <FancyButton onClick={() => router.push('/form?consent=true')}>Yes <span className='text-[10px] 2xl:text-xs ml-4'>I give my informed consent for researchers to use my responses</span></FancyButton>
                    <FancyButton onClick={() => router.push('/form?consent=false')}>No <span className='text-[10px] 2xl:text-xs ml-4'>I don’t want to share my responses, but still want to take the test </span></FancyButton>
                </div>
            </div>
            <Footer />
        </main>
    )
}
