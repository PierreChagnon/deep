'use client'
import { bungee } from './fonts';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

export default function Home() {

  const router = useRouter()

  //motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.5 }
    }
  }

  return (

    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      onClick={() => router.push("/home")} className="h-full hover:cursor-pointer flex-1 relative flex flex-col justify-center overflow-hidden">
      <motion.h1
        variants={item}
        className='h-44 lg:h-56 3xl:h-64 mb-44 relative mx-12 md:mx-28 2xl:mx-32 flex justify-center items-center'>
        <Image src="/assets/title.png" fill={true} alt="DEEP" objectFit='contain' />
      </motion.h1>
      <motion.div
        variants={item}
        className={`${bungee.className} flex px-16 justify-center justify-items-center text-center text-sm md:text-xl 2xl:text-2xl 3xl:text-3xl text-white`}>
        <p className='animate-pulse'>Dive<span className="from-[#7944F0] via-[#ED5C8A] to-[#FF922A] leading-loose bg-gradient-to-r bg-clip-text text-transparent"> deeper </span>into your gaming preferences</p>
      </motion.div>
    </motion.main>

  );
}
