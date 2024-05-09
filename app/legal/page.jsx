import React from 'react'
import Footer from '../components/Footer';
import { bungee } from '../fonts';

export default function page() {
    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <div className='h-full px-8 md:px-20 3xl:px-48 flex flex-col 2xl:items-center gap-4 2xl:gap-16 3xl:text-2xl'>
                <h1 className={`${bungee.className} my-4 text-center text-2xl 3xl:text-5xl`}>Legal notices</h1>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Company Identity:</h2>
                    <p><strong>Beyond Games</strong></p>
                    <p><strong>Legal status: </strong>SAS</p>
                    <p><strong>Address: </strong>2 RUE ETIENNE MAREY 75020 PARIS</p>
                    <p><strong>Share capital: </strong>750.00€</p>
                    <p><strong>Contact: </strong>contact@beyongames.fr</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Hosting provider:</h2>
                    <p><strong>[HOSTING PROVIDER NAME]</strong></p>
                    <p><strong>Legal status: </strong>[HOSTING LEGAL STATUS]</p>
                    <p><strong>Address: </strong>[HOSTING PROVIDER ADRESS]</p>
                    <p><strong>Email: </strong>[HOSTING PROVIDER EMAIL ADRESS]</p>
                    <p><strong>Phone: </strong>[HOSTING PROVIDER PHONE NUMBER]</p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Additional Information:</h2>
                    <p>Beyond Games is a company specialized in developing digital solutions. The website created for the Jean Nicod Institute aims to collect information on preferences in video games for research purposes. The collected data is anonymized and used solely for scientific research.</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
