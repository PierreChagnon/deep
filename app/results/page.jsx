/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts';
import html2canvas from 'html2canvas';
import Image from 'next/image'
import { discoveringScores, expandingScores, experimentingScores, performingScores, discoveringScores_100, performingScores_100, expandingScores_100, experimentingScores_100 } from '../utils/deepData'

import { useRouter, useSearchParams } from 'next/navigation'
import BentoElement from '../components/BentoElement'
import BarChart from '../components/BarChart'
import Card from '../components/Card'
import { AnimatePresence, motion } from "framer-motion";

import GameAsker from '../components/GameAsker';
import LoadingTextSkeleton from '../components/LoadingTextSkeleton';
import ChartComponent from '../components/ChartComponent';

export default function Results() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const disc = searchParams.get('disc')
    const expa = searchParams.get('expa')
    const expe = searchParams.get('expe')
    const perf = searchParams.get('perf')
    const id = searchParams.get('id')
    // console.log("disc = ", disc, "expa = ", expa, "expe = ", expe, "perf = ", perf)
    const consent = searchParams.get('consent')

    const [isNewUser, setIsNewUser] = useState(null)


    // on vérifie s'il exesite des scores dans le session storage et s'ils sont différents des scores actuels
    useEffect(() => {
        const storedScores = sessionStorage.getItem('scores');
        const currentScores = [disc, expa, expe, perf].join(',');
        if (!storedScores) {
            console.log("no scores in session storage");
            setIsNewUser(true);
        } else {
            console.log("scores in session storage", storedScores);
            if (storedScores === currentScores) {
                console.log("scores are the same");
                setIsNewUser(false);
            } else {
                console.log("scores are different");
                setIsNewUser(true);
            }
        }
    }, [disc, expa, expe, perf]);


    //API CALL
    const [choices, setChoices] = useState([])
    const [imageURL, setImageURL] = useState('')
    const [gamingPersona, setGamingPersona] = useState('')
    const [gameList, setGameList] = useState([])
    const [shownAskers, setShownAskers] = useState([])

    // Utilitaire pour récupérer les données en cache depuis le local storage
    const getCacheData = (key) => {
        const cachedData = sessionStorage.getItem(key);
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            return parsedData;
        }
        return null;
    }

    // Utilitaire pour mettre en cache les données dans le local storage
    const setCacheData = (key, data) => {
        sessionStorage.setItem(key, JSON.stringify(data));
    }


    const apiCall = async () => {
        console.log("apiCall")
        try {

            // Vérifier les données en cache
            const cachedData = getCacheData('apiData');
            console.log('new user = ', isNewUser)
            if (cachedData && isNewUser === false) {
                console.log("using cachedData", cachedData)
                // Utiliser les données en cache
                setChoices(cachedData.choices);
                setImageURL(cachedData.imageURL);
                setGamingPersona(cachedData.gamingPersona);
                setGameList(cachedData.gameList);
                setShownAskers(cachedData.shownAskers);
            } else {
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
                let temp = jsonList
                // on setup les states en fonction du consent (5 jeux pour consent = false)
                if (consent === 'true') {
                    // on prend seulement les 10 premiers
                    const jsonListSpliced = temp.splice(0, 10)
                    console.log("LIST SPLICED = ", jsonListSpliced)
                    setGameList(jsonListSpliced)
                    setShownAskers(jsonListSpliced) // on montre les questions pour tous les jeux
                    temp = jsonListSpliced
                } else {
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
                }, { cache: 'force-cache' });

                const URL = await responseURL.json()
                // console.log("URL : ", URL)
                setImageURL(URL)
                setGamingPersona(lastSentence)

                setCacheData('apiData', {
                    choices: data.choices,
                    imageURL: URL,
                    gamingPersona: lastSentence,
                    gameList: temp,
                    shownAskers: consent === 'true' ? temp : []
                });
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        if (isNewUser !== null) {
            sessionStorage.setItem('scores', [disc, expa, expe, perf].join(','));
            apiCall()
        }
    }, [isNewUser, consent, disc, expa, expe, perf])


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
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                className={`${bungee.className} text-2xl 3xl:text-5xl text-center mb-8`}>
                Your <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>DEEP</span> profile :
            </motion.h2>
            
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='flex flex-col justify-center gap-4 3xl:gap-8 px-4 md:px-16 lg:px-40 3xl:px-96'>

                <motion.div
                    variants={item}
                    className='flex flex-col md:flex-row gap-4 w-full items-center md:items-stretch'>
                    <div className='flex flex-col gap-4'>
                        <Card imageURL={imageURL} gamingPersona={gamingPersona} discPercent={discPercentFloored} expaPercent={expaPercentFloored} expePercent={expePercentFloored} perfPercent={perfPercentFloored} />
                        {/* button to download card blob as png */}
                        <motion.button
                            disabled={imageURL === '' ? true : false}
                            whileHover={{ scale: imageURL === '' ? 1 : 1.05 }}
                            whileTap={{ scale: imageURL === '' ? 1 : 0.95 }}
                            className='bg-gradient-to-r disabled:opacity-50 from-[#7944F0] via-[#ED5C8A] to-[#FF922A] px-4 py-2 3xl:py-4 rounded-lg'
                            onClick={() => {
                                const card = document.getElementById('card')
                                html2canvas(card).then(canvas => {
                                    const imgData = canvas.toDataURL('image/png')
                                    const img = document.createElement('img')
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
                                <div className='flex flex-col 3xl:text-xl gap-4 md:overflow-y-auto'>
                                    {choices.map((choice, i) => {
                                        return (
                                            <p className='select-text text-base md:text-sm lg:text-base 3xl:text-xl md:leading-relaxed 3xl:leading-loose' key={i}>{choice.message.content}</p>
                                        )
                                    })}
                                </div>
                                :
                                <LoadingTextSkeleton />
                            }
                        </BentoElement>
                    </div>

                </motion.div>
                <motion.div variants={item}>
                    <BentoElement>
                        <BarChart uid={'barchart1'} scoreColor="text-[#43297F]" textColor="text-[#7A45F0]" bgColors={["bg-[#7A45F0]", "bg-[#43297F]"]} name='discovering' value={discPercent} />
                        <BarChart uid={'barchart2'} scoreColor="text-[#622F64]" textColor="text-[#B751BA]" bgColors={["bg-[#B751BA]", "bg-[#622F64]"]} name='expanding' value={expaPercent} />
                        <BarChart uid={'barchart3'} scoreColor="text-[#7D354C]" textColor="text-[#ED5C8A]" bgColors={["bg-[#ED5C8A]", "bg-[#7D354C]"]} name='experimenting' value={expePercent} />
                        <BarChart uid={'barchart4'} scoreColor="text-[#86501C]" textColor="text-[#FF922B]" bgColors={["bg-[#FF922B]", "bg-[#86501C]"]} name='performing' value={perfPercent} />
                    </BentoElement>
                </motion.div>

                <motion.div variants={item}
                    className='flex flex-col gap-4 w-full items-center md:items-stretch'>
                    <div className='md:items-stretch'>
                        <BentoElement>
                            <div className='flex flex-col relative lg:flex-row lg:justify-center lg:py-10 lg:gap-16 lg:my-10 flex-wrap items-center gap-4'>
                                <p className='lg:w-1/3 lg:px-4 3xl:text-xl'><span className='text-[#7A45F0]'>Discovering</span>: High scorers are interested in exploring abstract concepts within a game. Lower scores suggest a preference for more straightforward, action-focused gameplay.</p>
                                <p className='lg:w-1/3 lg:px-4 3xl:text-xl'><span className='text-[#B751BA]'>Expanding</span>: High scorers are attracted to games with rich narratives and thematic depth. Lower score suggest a preference for games that focus less on narrative.</p>
                                <p className='lg:w-1/3 lg:px-4 3xl:text-xl'><span className='text-[#ED5C8A]'>Experimenting</span>: High scorers enjoy hands-on experimentation and learning through direct interaction. A lower score suggest a preference for games with more defined rules.</p>
                                <p className='lg:w-1/3 lg:px-4 3xl:text-xl'><span className='text-[#FF922A]'>Performing</span>: High scorers enjoy games where skill, precision, and efficiency are vital. A lower score  suggest a preference for games that are less about mastery.</p>
                                <div className='lg:absolute relative h-80 3xl:h-[442px] w-full lg:w-full lg:h-full'>
                                    <Image className='object-contain lg:scale-[1.1]' src='/assets/cross.png' alt='cross scheme' fill />
                                </div>
                            </div>
                        </BentoElement>
                    </div>

                    {/* maping the four graph representing each dimension */}
                    <div className='flex flex-col md:flex-row md:flex-wrap justify-between md:justify-normal gap-4 3xl:gap-8 3xl:mt-4 w-full'>
                        {
                            ["Discovering", "Expanding", "Experimenting", "Performing"].map((dimension, i) => {
                                const colors = ["#7A45F0", "#ED5C8A", "#B751BA", "#FF922A"]
                                const scores = [discoveringScores, expandingScores, experimentingScores, performingScores]
                                const userScores = [disc, expa, expe, perf]
                                const scores_100 = [discoveringScores_100, expandingScores_100, experimentingScores_100, performingScores_100]
                                const userScores_100 = [discPercent, expaPercent, expePercent, perfPercent]

                                return (
                                    <div key={dimension + i} className='flex flex-1 basis-1/3'>
                                        <BentoElement>
                                            <div className='flex flex-1 p-8 items-center justify-center'>
                                                <ChartComponent title={dimension} color={colors[i]} scores={scores[i]} scores_100={scores_100[i]} userScore={userScores[i]} userScore_100={userScores_100[i]} />
                                            </div>
                                        </BentoElement>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
                <div className='flex flex-col w-full mt-16 gap-4 3xl:gap-8 items-center'>
                    <h2 className={`${bungee.className} text-2xl 3xl:text-5xl mb-4`}>
                        <span className='from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r bg-clip-text text-transparent'>games</span> you might like :
                    </h2>
                    <ul className='flex flex-col gap-6 w-full'>
                        <AnimatePresence>
                            {gameList?.length > 0 ? gameList.map((item, i) => (
                                <motion.li
                                    layout
                                    className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-3xl from-[#ffffff00]'
                                    // initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    key={item + i}
                                >
                                    <div className='flex flex-col gap-2 bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] justify-between items-center w-full rounded-3xl p-6 md:p-8'>
                                        <p className='py-2 flex w-full justify-center md:text-lg 3xl:text-2xl'>{item}</p>
                                        {
                                            shownAskers && shownAskers.includes(item) && consent === 'true' &&
                                            <div className='flex flex-col items-center pb-2 w-full'>
                                                <span className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent mb-8' />
                                                <GameAsker shownAskers={shownAskers} setShownAskers={setShownAskers} item={item} id={id} index={i} />
                                            </div>
                                        }
                                    </div>
                                </motion.li>
                            ))
                                :
                                [0, 1, 2, 3, 4].map((item) => (
                                    <div key={item} className='flex w-full h-full p-[1px] bg-gradient-to-br rounded-3xl from-[#ffffff00]'>
                                        <div className='flex bg-gradient-to-br from-[#141414] via-[#070707] to-[#141414] justify-between items-center w-full rounded-3xl p-6 md:p-8'>
                                            <span className='flex-1 h-6 my-2 bg-gradient-to-r from-white/50 via-white/20 to-white/50 opacity-20 rounded-full animate-pulse' />
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
