/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Footer from '../components/Footer';
import FancyButton from '../components/FancyButton';
import { useRouter } from 'next/navigation';
import { bungee, inter } from '../fonts';

export default function Home() {

    const router = useRouter()

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <div className='h-full px-8 md:px-20 3xl:px-48 flex flex-col 2xl:items-center gap-4 2xl:gap-16 3xl:text-2xl'>
                <h1 className={`${bungee.className} my-4 text-center text-2xl 3xl:text-5xl`}>Consent and data collection</h1>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Discover Your Gaming Preferences</h2>
                    <p>Dive into our questionnaire designed to assess your gaming preferences along four distinct dimensions. As you navigate through these 20 questions, you can also contribute to a pioneering gaming research project!</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Contribute to Gaming Research</h2>
                    <p>This can be more than a survey to explore your gaming profile; it can be an opportunity to be part of an innovative citizen science project. By participating, you help us enhance our understanding of the diverse gaming community. Your anonymous responses will be invaluable in refining our model to capture the rich variety of gamers' preferences. Remember, your privacy is our priority, and your data will be used solely for research purposes by our team.</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Contribute to Gaming Research</h2>
                    <p>There's absolutely no risk associated with participating in this study. Your only task will be to answer a brief set of questions, which typically takes around 10 to 15 minutes. Feel free to pause or exit the questionnaire whenever you like. If you exit before the end, you will not have the results of the test. Additionally, if you ever wish to withdraw from the study, even after completion, simply send us an email (email addresses can be found on our "About us" page). You can also reach out via these email addresses to request the study's results.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Why Your Input is Crucial</h2>
                    <p>Every gamer is unique, and this uniqueness is mirrored in the myriad ways games are played. The more responses we collect, the more robust and inclusive our model becomes, allowing us to better represent the vast array of gaming styles. Your participation is key in helping us evolve our theory and understanding of the gaming world.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Consent</h2>
                    <p>By ticking YES below, you certify that you have read this form, and agree to participate in accordance with the above conditions. If you choose not to participate by selecting "NO," you can still access your gaming profile without data collection.</p>
                </div>
                <div className='flex flex-col items-center md:flex-row w-full justify-center gap-4 2xl:gap-16 mt-12 3xl:mt-16'>
                    <FancyButton onClick={() => router.push('/form?consent=true')}>Yes <span className={`${inter.className} text-left text-sm border-l-[3px] pl-4 ml-4`}>I give my informed consent for researchers to use my responses</span></FancyButton>
                    <FancyButton onClick={() => router.push('/form?consent=false')}>No <span className={`${inter.className} text-left text-sm border-l-[3px] pl-4 ml-4`}>I don’t want to share my responses, but still want to take the test </span></FancyButton>
                </div>
            </div>
            <Footer />
        </main>
    )
}
