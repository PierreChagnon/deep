'use client'

import React, { useState, useEffect } from 'react'
import { bungee } from '../fonts';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FancyButton from '../components/FancyButton';
import { motion } from 'framer-motion';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function Home() {
    const router = useRouter()

    const [userCount, setUserCount] = useState(2403);

    useEffect(() => {
        const fetchUserCount = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            // console.log(querySnapshot.size);
            setUserCount(querySnapshot.size);
        };

        // fetchUserCount();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                ease: "easeInOut",
                when: "beforeChildren"
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 1 }
        }
    }



    return (
        <main className='text-white flex flex-col flex-1 min-h-dvh overflow-x-hidden'>
            <div className='flex flex-col flex-1 relative'>
                <div
                    className='absolute bottom-0 md:mx-20 mx-8 lg:mx-40 2xl:mx-64 -right-24 md:-right-10 -z-10 w-64 h-3/5 md:w-80 2xl:w-[600px]'>
                    <Image src='/assets/ashe.png' alt='ashe image' fill objectFit='contain' />
                </div>
                <div
                    className='absolute bottom-0 md:mx-20 mx-8 lg:mx-40 2xl:mx-64 -left-10 md:-left-0 -z-10 w-64 h-3/5 md:w-80 2xl:w-[600px]'>
                    <Image src='/assets/link.png' alt='link image' fill objectFit='contain' />
                </div>
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='show'
                    className='h-full px-8 md:px-20 2xl:px-32 flex flex-col gap-16 mb-12 flex-1 items-center justify-around'>
                    <motion.h1
                        variants={item}
                        initial='hidden'
                        animate='show'
                        className={`${bungee.className} text-2xl md:text-5xl 3xl:text-7xl`}>
                        Which <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>gamer</span> are you?
                    </motion.h1>
                    <motion.p
                        variants={item}
                        initial='hidden'
                        animate='show'
                        className='px-4 py-6 md:px-24 3xl:px-48 2xl:w-1/2 3xl:text-2xl 2xl:leading-loose'>
                        The <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> model, developed by researchers at the École normale supérieure (PSL University), identifies four key dimensions of player agency in video games: Discovering, Experimenting, Expanding, and Performing
                    </motion.p>
                    <motion.p
                        variants={item}
                        initial='hidden'
                        animate='show'
                        className='3xl:text-2xl text-lg 2xl:leading-loose'>
                        <span className='font-bold'>{userCount}</span> gamers already took the test.
                    </motion.p>
                    <motion.div
                        variants={item}
                        initial='hidden'
                        animate='show'
                        className='2xl:w-96'>
                        <FancyButton onClick={() => router.push("/consent")}>TAKE THE TEST</FancyButton>
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
