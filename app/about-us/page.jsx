/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts'
import Image from 'next/image'

export default function page() {
    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative px-2'>
            <div className='flex flex-col items-center justify-center gap-8 px-2 md:px-28 2xl:px-32 3xl:px-96'>
                <h1 className={`${bungee.className} text-3xl mb-8 3xl:text-4xl`}>About Us</h1>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-8 mb-8'>
                    <div className='relative h-40 w-40 min-w-40 rounded-full overflow-hidden'>
                        <Image src='/assets/aboutus/edgardubourg.jpeg' fill objectFit='cover' alt='photo Edgar Dubourg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl 3xl:text-3xl'>Edgar Dubourg</h2>
                        <p className='3xl:text-xl'>Edgar Dubourg is doing a PhD in cognitive science at the Département d’études cognitives of the Ecole normale supérieure (ENS-PSL). He is interested in how cognitive adaptations and adaptive sources of variability influence both the universality and the variability of preferences for fictional stories.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='relative h-40 w-40 min-w-40 rounded-full overflow-hidden'>
                        <Image src='/assets/aboutus/valerianchambon.png' fill objectFit='cover' alt='photo Valerian Chambon' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl 3xl:text-3xl'>Valérian Chambon</h2>
                        <p className='3xl:text-xl'>Valérian Chambon holds a CNRS senior position (Directeur de Recherche) at the Institut Jean Nicod (ENS-PSL). His research focuses on the 'sense of agency', i.e. the feeling of controlling one's own actions and the consequences of these actions in the outside world.  His research aims to characterize the neurocognitive mechanisms underlying this feeling, as well as its alterations (illusory control, delusion of control, out-of-the-loop phenomenon).</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
