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
                    <p>Dive into our questionnaire designed to assess your gaming preferences. By
                        navigating through these 20 questions, you can also contribute to a pioneering
                        research project in the field of video games!</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Contribute to Gaming Research</h2>
                    <p>This is not just a survey of your gamer profile, but also an opportunity to take part in
                        an innovative citizen science project. By participating, you are helping us to better
                        understand the diversity of the gaming community. Your anonymous responses will
                        be invaluable in refining our model and better understanding the wide variety of
                        player preferences. Remember, your privacy is our priority, and your data will only be
                        used for research purposes by our team.</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Risk and Data Usage</h2>
                    <p>There&#39;s absolutely no risk involved in taking part in this study. Your only task will be
                        to answer a short series of questions, which generally takes between 10 and 15
                        minutes. Feel free to pause or leave the questionnaire whenever you like. If you
                        leave the questionnaire before the end, you will not receive the test results. In
                        addition, if you wish to withdraw from the study, even after it has been completed,
                        simply send us an email (email addresses can be found on our &quot;About us&quot; page).
                        You can also request the results of the study via these email addresses.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Why Your Input is Crucial</h2>
                    <p>Every player is unique, and this uniqueness is reflected in the myriad ways in which
                        games are played. The more responses we collect, the more robust and inclusive our
                        model becomes, allowing us to better represent the wide range of gaming styles.
                        Your participation is essential to help us develop our theory and understanding of
                        what makes video games so special.</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Consent</h2>
                    <p>By ticking YES below, you certify that you have read this form and agree to
                        participate in accordance with the above conditions. If you choose not to participate
                        by selecting &quot;NO&quot;, you can still access your gaming profile without any data being
                        collected. If you are under the age of 18, please ensure you have parental consent to share your data with us.</p>
                </div>
                <div className='flex flex-col items-center md:flex-row w-full justify-center gap-4 2xl:gap-16 mt-12 3xl:mt-16'>
                    <FancyButton onClick={() => router.push('/form?consent=true')}>Yes <span className={`${inter.className} text-left text-sm border-l-[3px] pl-4 ml-4`}>I give my informed consent for researchers to use my responses</span></FancyButton>
                    <FancyButton onClick={() => {
                        sessionStorage.clear() // on clear au cas ou dans la meme session un gender aurait été défini.
                        router.push('/form?consent=false')
                    }}>No <span className={`${inter.className} text-left text-sm border-l-[3px] pl-4 ml-4`}>I don’t want to share my responses, but still want to take the test </span></FancyButton>
                </div>
            </div>
            <Footer />
        </main>
    )
}
