/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts'
import { FaFileDownload } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
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
                <a href="/data/vg_annotated.csv" download className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><FaFileDownload /></span>
                        <span className='underline'>Download CSV file</span>
                    </a>
                    <p className='md:w-1/2'>More than <strong>16,000 video games</strong> automatically annotated with the DEEP model.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="https://osf.io/z3mvu" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline flex items-center gap-1'>https://osf.io/z3mvu<FiExternalLink className='text-xl' /></button>
                    </Link>
                    <p className='md:w-1/2'><strong>Preprint of our paper</strong> with theoretical framework and empirical tests.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="https://osf.io/eyn8u/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline flex items-center gap-1'>https://osf.io/eyn8u/<FiExternalLink className='text-xl' /></button>
                    </Link>
                    <p className='md:w-1/2'>OSF page where you can find <strong>the datasets and R scripts</strong>.</p>
                </div>
                <div className='flex items-center w-full flex-col gap-4 md:flex-row lg:w-2/3 rounded-md bg-white/10 p-6 self-center justify-between'>
                    <Link target='blank' href="/" className='flex gap-2 items-center cursor-pointer hover:opacity-50 duration-200'>
                        <span className='text-3xl text-red-400'><TbWorld /></span>
                        <button className='underline flex items-center gap-1 truncate'>frontiersin.org<FiExternalLink className='text-xl' /></button>
                    </Link>
                    <p className='md:w-1/2'><strong>Method article</strong> on the automatic annotation method (Frontiers in Artificial Intelligence).</p>
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
