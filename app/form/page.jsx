'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import DeepForm from '../components/DeepForm';
import BigFive from '../components/BigFive'
import { useRouter } from 'next/navigation';
import GameHabits from '../components/GameHabits';

export default function Form() {

    const router = useRouter()

    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <GameHabits key={"gamehabits"} />,
        <DeepForm key={"deepform"} />,
        <BigFive key={"bigfive"} />
    ]

    useEffect(() => {

    }, [])

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />

            {/* FORMULAIRE */}
            <div className='h-full px-8 md:px-20 flex flex-col gap-4'>
                {
                    formElements[activeTab]
                }
            </div>

            <div className='flex flex-wrap gap-x-6 mx-auto'>
                <button
                    disabled={activeTab === 0 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev + 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 1 ? <button className='px-4 py-2 rounded-xl bg-blue-600 text-white' onClick={() => console.log(data)}>Submit</button> : null
                }
            </div>
            <Footer />
        </main>
    )
}
