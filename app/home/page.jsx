export const revalidate = 600; // Rafraîchit toutes les 10 minutes

import React from 'react'
import Footer from '../components/Footer';
import Image from 'next/image';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import HomeClient from './components/HomeClient';

async function getUserCount() {
    console.log("🔄 Fetching user count from Firestore..."); // Vérification console
    const docRef = doc(db, "counters", "general");
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().userCount : 0;
}

export default async function Home() {

    const userCount = await getUserCount()


    return (
        <main className='text-white flex flex-col flex-1 min-h-dvh overflow-x-hidden'>
            <div className='flex flex-col flex-1 relative'>
                <div
                    className='absolute bottom-0 md:mx-20 mx-8 lg:mx-40 2xl:mx-64 -right-24 md:-right-10 -z-10 w-64 h-3/5 md:w-80 2xl:w-[600px]'>
                    <Image src='/assets/ashe.png' alt='ashe image' fill className='object-contain' />
                </div>
                <div
                    className='absolute bottom-0 md:mx-20 mx-8 lg:mx-40 2xl:mx-64 -left-10 md:-left-0 -z-10 w-64 h-3/5 md:w-80 2xl:w-[600px]'>
                    <Image src='/assets/link.png' alt='link image' fill className='object-contain' />
                </div>
                <HomeClient userCount={userCount} />
            </div>
            <Footer />
        </main>
    )
}
