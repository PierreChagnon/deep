'use client'
import { bungee } from './fonts';
import Image from 'next/image';
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  return (

    <main onClick={() => router.push("/home")} className="h-dvh hover:cursor-pointer flex flex-col bg-center overflow-hidden">
      <h1 className='flex-1 relative mx-12 md:mx-28 2xl:mx-32 flex justify-center items-center'>
        <Image src="/assets/title.png" fill={true} alt="DEEP" objectFit='contain' />
      </h1>
      <div className={`${bungee.className} flex justify-center justify-items-center text-center text-sm md:text-2xl 2xl:text-4xl py-8 px-2 md:px-4 text-white`}>
        <span>Dive</span>
        <span className="ml-1 from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent">deeper</span>
        <span className="ml-1">into</span>
        <span className="ml-1">your</span>
        <span className="ml-1">gaming</span>
        <span className="ml-1">preferences</span>
      </div>
    </main>

  );
}
