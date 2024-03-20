/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useRef, useEffect, Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { bungee } from '../fonts';

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

            const text = await data.choices[0].message.content
            const regex = /(?:[A-Z][^.!?]*[.!?]){0,2}[.!?]?$/;
            const lastSentence = text.match(regex)[0];


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
            console.log("LIST = ", jsonList.game_list)
            // on setup les states en fonction du consent (5 jeux pour consent = false)
            if (consent === 'true') {
                setGameList(jsonList.game_list)
                setShownAskers(jsonList.game_list) // on montre les questions pour tous les jeux
            } else {
                const temp = jsonList.game_list
                const jsonListSpliced = temp.splice(0, 5)
                console.log("consent = false ", jsonListSpliced)
                setGameList(jsonListSpliced)
                // on ne set pas shownAskers pour ne pas poser les questions
            }



            //IMAGE API
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


    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />
            <h3 className={`${bungee.className} text-2xl text-center mb-8`}>Your <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> profile :</h3>
            <div className='flex flex-col justify-center gap-4 px-4 md:px-16 lg:px-40'>
                <div className='flex flex-col md:flex-row gap-4 lg:gap-8 w-full items-center'>
                    <Card imageURL={imageURL} gamingPersona={gamingPersona} discPercent={discPercentFloored} expaPercent={expaPercentFloored} expePercent={expePercentFloored} perfPercent={perfPercentFloored} />
                    <div className='md:h-96 w-full'>
                        <BentoElement>
                            {choices.length > 0 ?
                                <div className='flex w-full flex-col text-sm leading-relaxed gap-4 md:overflow-y-auto'>
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

                </div>
                <BentoElement>
                    <BarChart uid={'barchart1'} mean={50} scoreColor="text-[#43297F]" textColor="text-[#7A45F0]" bgColors={["bg-[#7A45F0]", "bg-[#43297F]"]} name='discovering' value={discPercent} />
                    <BarChart uid={'barchart2'} mean={40} scoreColor="text-[#622F64]" textColor="text-[#B751BA]" bgColors={["bg-[#B751BA]", "bg-[#622F64]"]} name='expanding' value={expaPercent} />
                    <BarChart uid={'barchart3'} mean={30} scoreColor="text-[#7D354C]" textColor="text-[#ED5C8A]" bgColors={["bg-[#ED5C8A]", "bg-[#7D354C]"]} name='experimenting' value={expePercent} />
                    <BarChart uid={'barchart4'} mean={60} scoreColor="text-[#86501C]" textColor="text-[#FF922B]" bgColors={["bg-[#FF922B]", "bg-[#86501C]"]} name='performing' value={perfPercent} />
                </BentoElement>
                <div className='flex flex-col w-full mt-16 gap-4 items-center'>
                    <h3 className={`${bungee.className} text-2xl mb-4`}>
                        <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>games</span> you might like :
                    </h3>
                    <ul className='flex flex-col gap-6 w-full'>
                        <AnimatePresence>
                            {gameList?.length > 0 && gameList.map((item, i) => (
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
                                            <div className='flex flex-col items-center w-full'>
                                                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent mb-2' />
                                                <GameAsker shownAskers={shownAskers} setShownAskers={setShownAskers} item={item} />
                                            </div>
                                        }
                                    </div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </div >
            <Footer />
        </main >
    )
}
