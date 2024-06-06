/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts'
import { FaFileDownload } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';


export default function page() {
    return (
        <main className='text-white flex flex-col items-center justify-between min-h-dvh relative px-2'>
            <div className='flex flex-col justify-center gap-8 px-4 3xl:text-xl md:px-28 2xl:px-32 3xl:px-96'>
                <h1 className={`${bungee.className} text-center text-3xl mb-8 3xl:text-4xl`}>Researcher area</h1>
                <p className='3xl:text-xl mb-12' >This dedicated space provides resources for exploring the DEEP model, a new
                    framework for games research developed by Edgar Dubourg and Valérian Chambon
                    at the Institut Jean Nicod, Ecole normale supérieure-PSL.</p>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><FaFileDownload /></span>
                        <button className='underline'>Download the first paper</button>
                    </Link>
                    <p className='md:w-1/2'>This paper provides detailed information and empirical tests on the DEEP model.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><FaFileDownload /></span>
                        <button className='underline'>Download CSV file</button>
                    </Link>
                    <p className='md:w-1/2'>More than 16,000 video games automatically annotated with the DEEP model.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="https://osf.io/z3mvu" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline'>https://osf.io/z3mvu</button>
                    </Link>
                    <p className='md:w-1/2'>Preprint of our paper with theoretical framework and empirical tests.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="https://osf.io/eyn8u/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline'>https://osf.io/eyn8u/</button>
                    </Link>
                    <p className='md:w-1/2'>OSF page where you can find the datasets and R scripts.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline truncate'>frontiersin.org</button>
                    </Link>
                    <p className='md:w-1/2'>Method article on the automatic annotation method (Frontiers in Artificial Intelligence).</p>
                </div>
                <p className='mt-12'>As you engage with the DEEP model and its associated resources, we welcome your
                    enquiries and are ready to provide scholarly support. Our team is available to discuss
                    opportunities for collaboration and welcomes any scientific suggestions that can
                    refine and advance the model.</p>
                <p>To contact us, please visit the <Link className='underline hover:no-underline' href="/about-us">About</Link> page.</p>
            </div>
            <Footer />
        </main>
    )
}
