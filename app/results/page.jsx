/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter, useSearchParams } from 'next/navigation'
import BentoElement from '../components/BentoElement'
import BarChart from '../components/BarChart'

export default function Results() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const disc = searchParams.get('disc')
    const expa = searchParams.get('expa')
    const expe = searchParams.get('expe')
    const perf = searchParams.get('perf')

    console.log(disc, expa, expe, perf)

    // mise a l'echelle sur 100
    const discPercent = disc * 100 / 7
    const expaPercent = expa * 100 / 7
    const expePercent = expe * 100 / 7
    const perfPercent = perf * 100 / 7

    console.log(discPercent, expaPercent, expePercent, perfPercent)

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />
            <div className='flex flex-wrap gap-4 px-12 lg:px-36'>
                <BentoElement>
                    <p>
                        Your gaming style reveals a unique blend of curiosity and action, where the thrill of Experimenting and mastering new challenges defines your play. Unlike those who delve into the mysteries of Discovering or the depths of Expanding, you thrive on the immediate gratification that comes from exploring different strategies, tools, and mechanics to achieve concrete goals. This preference indicates a gamer who's less attracted to wandering through expansive lore or uncovering every hidden secret, but rather one who seeks out games that offer a variety of ways to tackle challenges head-on. Your adeptness at Performing suggests you're also committed to honing your skills, favoring games that demand precision and technique over those that primarily focus on narrative depth or exploration. You likely gravitate towards action-packed, skill-based titles or puzzle games that offer novel problems to solve, rather than immersive RPGs or open-world adventures.
                    </p>
                    <p>
                        Your gaming persona is one of a strategist and tactician, always on the lookout for the next engaging challenge to conquer.
                    </p>
                </BentoElement>
                <BentoElement>
                    <BarChart uid={'barchart1'} mean={50} textColor="text-[#7A45F0]" bgColors={["bg-[#7A45F0]", "bg-[#43297F]"]} name='discovering' value={discPercent} />
                    <BarChart uid={'barchart2'} mean={40} textColor="text-[#B751BA]" bgColors={["bg-[#B751BA]", "bg-[#622F64]"]} name='expanding' value={expaPercent} />
                    <BarChart uid={'barchart3'} mean={30} textColor="text-[#ED5C8A]" bgColors={["bg-[#ED5C8A]", "bg-[#7D354C]"]} name='expperimenting' value={expePercent} />
                    <BarChart uid={'barchart4'} mean={60} textColor="text-[#FF922B]" bgColors={["bg-[#FF922B]", "bg-[#86501C]"]} name='performing' value={perfPercent} />
                </BentoElement>
            </div>
            <Footer />
        </main>
    )
}
