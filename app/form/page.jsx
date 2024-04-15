'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import DeepForm from '../components/DeepForm';
import BigFive from '../components/BigFive'
import { useRouter, useSearchParams } from 'next/navigation';
import GameHabits from '../components/GameHabits';
import FancyButton from '../components/FancyButton';
import PersonalInfos from '../components/PersonalInfos';
import jsonToCSV from '../utils/jsonToCSV';
import calcDeepScore from '../utils/calcDeepScore';

export default function Form() {

    const router = useRouter()

    const searchParams = useSearchParams()
    const consent = searchParams.get('consent')

    const [formIsCompleted, setFormIsCompleted] = useState(false)

    const [activeTab, setActiveTab] = useState(0)

    const [formElements, setFormElements] = useState([])

    const [formValues, setFormValues] = useState({})

    useEffect(() => {
        if (consent === 'false') {
            setFormElements([<DeepForm setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"deepform"} />])
        } else {
            setFormElements([
                <PersonalInfos setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"personalinfos"} />,
                <GameHabits setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"gamehabits"} />,
                <DeepForm setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"deepform"} />,
                <BigFive setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"bigfive"} />,
            ])
        }
    }, [consent])

    // Fonction de useEffect qui permet de reset le scroll à chaque changement de activeTab
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [activeTab])

    const handleOnClick = (callback) => {
        // On check si le formulaire en cours est complet
        if (formIsCompleted) {
            setFormIsCompleted(false) // on reset l'etat de completion du formulaire en cours
            // puis on fait l'action du bouton (NEXT ou REVEAL RESULTS)
            callback()
        } else {

        }
    }

    const handleRevealResultsNavigation = () => {
        const res = calcDeepScore(formValues)
        console.log("res = " + res)

        router.push('/results?'
            + 'consent=' + consent + '&'
            + 'disc=' + res[0] + '&'
            + 'expa=' + res[1] + '&'
            + 'expe=' + res[2] + '&'
            + 'perf=' + res[3]
        )
    }

    useEffect(() => {
        console.log(formValues)
        console.log("csv : ", jsonToCSV(formValues))
    }, [formValues])

    if (!formElements.length) return <h1 className='text-white min-h-dvh flex justify-center items-center text-center'>Loading...</h1>

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>

            {/* FORMULAIRE */}
            <div className='h-full px-8 md:px-20 2xl:px-48 flex flex-col gap-4 2xl:text-xl'>
                {
                    formElements[activeTab]
                }
            </div>
            {/* <button onClick={handleRevealResultsNavigation}>test</button> */}

            <div className='flex flex-wrap gap-x-6 mx-auto'>
                {
                    activeTab === formElements.length - 1
                        ?
                        <FancyButton
                            onClick={handleRevealResultsNavigation}
                            disabled={!formIsCompleted}
                        >
                            REVEAL MY RESULTS !
                        </FancyButton>
                        :
                        <FancyButton
                            onClick={() => handleOnClick(() => setActiveTab(prev => prev + 1))}
                            disabled={!formIsCompleted}
                        >
                            NEXT
                        </FancyButton>
                }
            </div>
            <Footer />
        </main>
    )
}
