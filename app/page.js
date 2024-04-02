'use client'
import { bungee } from './fonts';
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (

    <main onClick={() => router.push("/home")} className="h-dvh hover:cursor-pointer relative flex flex-col justify-center overflow-hidden">
      <h1 className='h-44 lg:h-56 3xl:h-64 mb-44 relative mx-12 md:mx-28 2xl:mx-32 flex justify-center items-center'>
        <Image src="/assets/title.png" fill={true} alt="DEEP" objectFit='contain' />
      </h1>
      <div className={`${bungee.className} flex px-16 justify-center justify-items-center text-center text-sm md:text-xl 2xl:text-2xl 3xl:text-3xl text-white`}>
        <p>Dive<span className="from-[#7944F0] via-[#ED5C8A] to-[#FF922A] leading-loose bg-gradient-to-r bg-clip-text text-transparent"> deeper </span>into your gaming preferences</p>
      </div>
    </main>

  );
}
