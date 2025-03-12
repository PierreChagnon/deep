"use client";

import { motion } from "framer-motion";
import { bungee } from "@/app/fonts";
import { useRouter } from "next/navigation";
import FancyButton from "@/app/components/FancyButton";

export default function HomeClient({ userCount }) {
    const router = useRouter();

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
    );
}
