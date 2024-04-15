/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useRef, useEffect, Suspense } from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts';
import html2canvas from 'html2canvas';
import Image from 'next/image'

import { useRouter, useSearchParams } from 'next/navigation'
import BentoElement from '../components/BentoElement'
import BarChart from '../components/BarChart'
import Card from '../components/Card'
import { AnimatePresence, motion } from "framer-motion";

import GameAsker from '../components/GameAsker';
import LoadingTextSkeleton from '../components/LoadingTextSkeleton';

export default function Results() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const disc = searchParams.get('disc')
    const expa = searchParams.get('expa')
    const expe = searchParams.get('expe')
    const perf = searchParams.get('perf')
    const consent = searchParams.get('consent')

    //API CALL
    const [choices, setChoices] = useState([])
    const [imageURL, setImageURL] = useState('')
    const [gamingPersona, setGamingPersona] = useState('')
    const [gameList, setGameList] = useState([])
    const [shownAskers, setShownAskers] = useState([])


    const apiCall = async () => {
        console.log("apiCall")
        try {

            //CHAT API
            const response = await fetch("/api/chat-gpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    scores: [disc, expa, expe, perf]
                })
            });

            const data = await response.json();
            // console.log("data", data)
            setChoices(data.choices);
            // console.log("choices : ", data.choices)



            //LIST API
            const responseList = await fetch("/api/list-gpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    scores: [disc, expa, expe, perf]
                })
            });
            const list = await responseList.json()
            const jsonList = JSON.parse(list.choices[0].message.content)
            console.log("RESPONSE = ", list)
            console.log("LIST = ", jsonList)

            // on radomize la liste
            jsonList.sort(() => Math.random() - 0.5)

            // on setup les states en fonction du consent (5 jeux pour consent = false)
            if (consent === 'true') {
                setGameList(jsonList)
                setShownAskers(jsonList) // on montre les questions pour tous les jeux
            } else {
                const temp = jsonList
                const jsonListSpliced = temp.splice(0, 5)
                console.log("consent = false ", jsonListSpliced)
                setGameList(jsonListSpliced)
                // on ne set pas shownAskers pour ne pas poser les questions
            }



            //IMAGE API
            const text = await data.choices[0].message.content
            const regex = /(?:[A-Z][^.!?]*[.!?]){0,2}[.!?]?$/;
            const lastSentence = text.match(regex)[0];

            const responseURL = await fetch("/api/image-gpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lastSentence: lastSentence
                })
            });

            const URL = await responseURL.json()
            // console.log("URL : ", URL)
            setImageURL(URL)
            setGamingPersona(lastSentence)


        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        apiCall()
    }, [])


    // mise a l'echelle sur 100
    const discPercent = disc * 100 / 7
    const expaPercent = expa * 100 / 7
    const expePercent = expe * 100 / 7
    const perfPercent = perf * 100 / 7

    const discPercentFloored = Math.floor(discPercent)
    const expaPercentFloored = Math.floor(expaPercent)
    const expePercentFloored = Math.floor(expePercent)
    const perfPercentFloored = Math.floor(perfPercent)

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
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <motion.h3
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                className={`${bungee.className} text-2xl text-center mb-8`}>
                Your <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> profile :
            </motion.h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='flex flex-col justify-center gap-4 px-4 md:px-16 lg:px-40 3xl:px-96'>
                <motion.div variants={item}>
                    <BentoElement>
                        <BarChart uid={'barchart1'} scoreColor="text-[#43297F]" textColor="text-[#7A45F0]" bgColors={["bg-[#7A45F0]", "bg-[#43297F]"]} name='discovering' value={discPercent} />
                        <BarChart uid={'barchart2'} scoreColor="text-[#622F64]" textColor="text-[#B751BA]" bgColors={["bg-[#B751BA]", "bg-[#622F64]"]} name='expanding' value={expaPercent} />
                        <BarChart uid={'barchart3'} scoreColor="text-[#7D354C]" textColor="text-[#ED5C8A]" bgColors={["bg-[#ED5C8A]", "bg-[#7D354C]"]} name='experimenting' value={expePercent} />
                        <BarChart uid={'barchart4'} scoreColor="text-[#86501C]" textColor="text-[#FF922B]" bgColors={["bg-[#FF922B]", "bg-[#86501C]"]} name='performing' value={perfPercent} />
                    </BentoElement>
                </motion.div>
                <motion.div
                    variants={item}
                    className='flex flex-col md:flex-row gap-4 lg:gap-8 w-full items-center md:items-stretch'>
                    <div className='flex flex-col gap-2'>
                        <Card imageURL={imageURL} gamingPersona={gamingPersona} discPercent={discPercentFloored} expaPercent={expaPercentFloored} expePercent={expePercentFloored} perfPercent={perfPercentFloored} />
                        {/* button to download card blob as png */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-gradient-to-r from-[#7944F0] via-[#ED5C8A] to-[#FF922A] px-4 py-2 rounded-md'
                            onClick={() => {
                                const card = document.getElementById('card')
                                html2canvas(card).then(canvas => {
                                    const imgData = canvas.toDataURL('image/png')
                                    const img = new Image()
                                    img.src = imgData
                                    const link = document.createElement('a')
                                    link.download = 'DEEP-Profile.png'
                                    link.href = imgData
                                    link.click()

                                    //remove element from DOM
                                    link.remove()
                                })
                            }}  >
                            Download as PNG
                        </motion.button>
                    </div>
                    <div className='w-full'>
                        <BentoElement>
                            {choices.length > 0 ?
                                <div className='flex w-full h-full flex-col text-sm leading-relaxed gap-4 md:overflow-y-auto'>
                                    {choices.map((choice, i) => {
                                        return (
                                            <p className='select-text' key={i}>{choice.message.content}</p>
                                        )
                                    })}
                                </div>
                                :
                                <LoadingTextSkeleton />
                            }
                        </BentoElement>
                    </div>

                </motion.div>

                {/* maping the four graph representing each dimension */}
                {
                    ["discovering", "expanding", "experimenting", "performing"].map((dimension, i) => (
                        <motion.div variants={item} key={i} className='flex flex-col md:flex-row gap-4 lg:gap-8 w-full items-center md:items-stretch'>
                            <div>
                                <BentoElement>
                                    <span>{dimension}</span>
                                </BentoElement>
                            </div>
                        </motion.div>
                    ))
                }

                <motion.div
                    variants={item}
                    className='flex flex-col md:flex-row gap-4 lg:gap-8 w-full items-center md:items-stretch'>
                    <div className='flex flex-col gap-2'>
                        <BentoElement>
                            <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 relative lg:flex-row lg:justify-center lg:py-10 lg:gap-16 lg:my-10 flex-wrap items-center text-xs gap-4'>
                                <p className='lg:w-1/3 lg:px-4'><span className='text-[#ED5C8A]'>Expanding</span>: High scorers here are attracted to games with rich narratives and thematic depth. They find games like Mass Effect or The Witcher series captivating, where immersing in the story is key. Gamers with lower scores in Expanding may prefer games that focus less on narrative and more on immediate gameplay mechanics.</p>
                                <p className='lg:w-1/3 lg:px-4'><span className='text-[#B751BA]'>Experimenting</span>: Gamers who score high in Experimenting enjoy hands-on experimentation and learning through direct interaction. They thrive in games like Minecraft or Kerbal Space Program, where trial and error lead to tangible outcomes. A lower score in this dimension might suggest a preference for games with more defined rules or structured gameplay.</p>
                                <p className='lg:w-1/3 lg:px-4'><span className='text-[#7A45F0]'>Discovering</span>: This dimension measures a player's interest in exploring abstract concepts within a game. High scorers are drawn to games that offer rich, complex worlds to unravel, like the intricate lore in The Elder Scrolls series or the boundless universe of No Man's Sky. Lower scores might indicate a preference for more straightforward, action-focused gameplay.</p>
                                <p className='lg:w-1/3 lg:px-4'><span className='text-[#FF922A]'>Performing</span>: Those who score high in Performing excel in and enjoy games where skill, precision, and efficiency are vital. Titles like Dark Souls and competitive esports games like League of Legends are typical favorites. A lower score in this dimension might indicate a preference for games that are less about mastery and more about exploration or narrative.</p>
                                <div className='lg:absolute relative h-80 w-full lg:w-full lg:h-full'>
                                    <Image className='object-contain lg:scale-[1.15]' src='/assets/cross.png' alt='cross scheme' fill />
                                </div>
                            </div>
                        </BentoElement>
                    </div>

                </motion.div>
                <div className='flex flex-col w-full mt-16 gap-4 items-center'>
                    <h3 className={`${bungee.className} text-2xl mb-4`}>
                        <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>games</span> you might like :
                    </h3>
                    <ul className='flex flex-col gap-6 w-full'>
                        <AnimatePresence>
                            {gameList?.length > 0 ? gameList.map((item, i) => (
                                <motion.li
                                    layout
                                    className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-md from-white'
                                    // initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    key={item}
                                >
                                    <div className='flex flex-col gap-2 bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] justify-between items-center w-full rounded-md p-4'>
                                        <p className='py-2 flex w-full justify-center'>{item}</p>
                                        {
                                            shownAskers.includes(item) && consent === 'true' &&
                                            <div className='flex flex-col items-center pb-2 w-full'>
                                                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent mb-8' />
                                                <GameAsker shownAskers={shownAskers} setShownAskers={setShownAskers} item={item} />
                                            </div>
                                        }
                                    </div>
                                </motion.li>
                            ))
                                :
                                [0, 1, 2, 3, 4].map((item) => (
                                    <div key={item} className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-md from-white'>
                                        <div className='flex bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] justify-between items-center w-full rounded-md p-4'>
                                            <span className='flex-1 h-6 bg-gradient-to-r from-white/50 via-white/20 to-white/50 opacity-20 rounded-full animate-pulse' />
                                        </div>
                                    </div>
                                ))
                            }
                        </AnimatePresence>
                    </ul>
                </div>
            </motion.div >
            <Footer />
        </main >
    )
}
