/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts'
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';


export default function page() {
    return (
        <main className='text-white flex flex-col items-center justify-between min-h-dvh relative px-2'>
            <div className='flex flex-col justify-center gap-8 px-2 3xl:text-xl md:px-28 2xl:px-32 3xl:px-96'>
                <h1 className={`${bungee.className} text-center text-3xl mb-8 3xl:text-4xl`}>Researcher area</h1>
                <p className='3xl:text-xl' >This dedicated space provides resources for exploring the DEEP model, a new
                    framework for games research developed by Edgar Dubourg and Valérian Chambon
                    at the Institut Jean Nicod, Ecole normale supérieure-PSL.</p>
                <div className='flex items-center flex-col gap-4 md:flex-row justify-between my-4'>
                    <Link target='blank' href="/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><FaFileDownload /></span>
                        <button className='underline'>Download the first paper</button>
                    </Link>
                    <p className='md:w-1/2'>This paper provides detailed information and empirical tests on the DEEP model.</p>
                </div>
                <p className='mt-12'>As you engage with the DEEP model and its associated resources, we welcome your
                    enquiries and are ready to provide scholarly support. Our team is available to discuss
                    opportunities for collaboration and welcomes any scientific suggestions that can
                    refine and advance the model.</p>
                <p>To contact us, please visit the <Link className='underline hover:no-underline' href="/about">About</Link> page.</p>
            </div>
            <Footer />
        </main>
    )
}
