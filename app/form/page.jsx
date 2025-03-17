'use client'

import React, { useState, useEffect } from 'react'
import { collection, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import Footer from '../components/Footer';
import DeepForm from '../components/DeepForm';
import BigFive from '../components/BigFive'
import { useRouter, useSearchParams } from 'next/navigation';
import GameHabits from '../components/GameHabits';
import FancyButton from '../components/FancyButton';
import PersonalInfos from '../components/PersonalInfos';
import jsonToCSV from '../utils/jsonToCSV';
import calcDeepScore from '../utils/calcDeepScore';
import FavouriteGames from '../components/FavouriteGames';
import Understanding from '../components/Understanding';
import { db } from '../../firebase/firebase';

export default function Form() {

    const router = useRouter()

    const searchParams = useSearchParams()
    const consent = searchParams.get('consent')

    const [formIsCompleted, setFormIsCompleted] = useState(false)

    const [activeTab, setActiveTab] = useState(0)

    const [formElements, setFormElements] = useState([])

    const [formValues, setFormValues] = useState({})

    const NUMBER_OF_ITEMS = 107

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const percent = Math.floor(Object.keys(formValues).length / NUMBER_OF_ITEMS * 100)
        setProgress(percent)
    }, [formValues])

    function generateUniqueId() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `${timestamp}_${random}`;
    }

    useEffect(() => {

        // on ajoute une colonne "id"

        setFormValues((prevValues) => ({
            ...prevValues,
            id: generateUniqueId()
        }));

    }, [])


    useEffect(() => {
        if (consent === 'false') {
            setFormElements([<DeepForm consent={consent} setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"deepform"} />])
        } else {
            setFormElements([
                <PersonalInfos setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"personalinfos"} />,
                <GameHabits setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"gamehabits"} />,
                <DeepForm consent={consent} setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"deepform"} />,
                <FavouriteGames setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"favouritegames"} />,
                <BigFive setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"bigfive"} />,
                <Understanding setFormIsCompleted={setFormIsCompleted} setFormValues={setFormValues} key={"understanding"} />
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

    const handleRevealResultsNavigation = async () => {
        const res = calcDeepScore(formValues)

        try {
            // On incrémente le counter de la page d'accueil
            const counterRef = doc(db, "counters", "general");
            await updateDoc(counterRef, { userCount: increment(1) });
        } catch (error) {
            console.error("Error incrementing counter: ", error);
        }

        if (consent === 'true') {
            // console.log("submitting form to firestore at id : ", formValues.id)
            try {
                const docRef = await setDoc(doc(db, "users", formValues.id), {
                    data: formValues,
                });

                // On incrémente le counter de la page d'accueil
                const counterRef = doc(db, "counters", "general");
                // console.log("incrementing counter")
                await updateDoc(counterRef, { userCount: increment(1) });

                // console.log("Document written with ID: ", formValues.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        router.push('/results?'
            + 'consent=' + consent + '&'
            + 'disc=' + res[0] + '&'
            + 'expa=' + res[1] + '&'
            + 'expe=' + res[2] + '&'
            + 'perf=' + res[3] + '&'
            + 'id=' + formValues.id
        )
    }

    // useEffect(() => {
    //     // console.log(formValues)
    //     // console.log("csv : ", jsonToCSV(formValues))
    // }, [formValues])

    if (!formElements.length) return <h1 className='text-white min-h-dvh flex flex-1 justify-center items-center text-center'>Loading...</h1>

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            {/* Progress bar */}
            {
                consent === 'true' &&
                <div className='flex justify-center backdrop-blur-md z-50 py-4 w-full sticky top-0 items-center gap-4 mb-8 -mt-8'>
                    <p>{progress}%</p>
                    <div className='flex w-4/5 bg-slate-600 h-1 rounded-full'>
                        <span style={{ width: `${progress}%` }} className='h-full bg-[#ED5C8A] rounded-full' />
                    </div>
                </div>
            }

            {/* FORMULAIRE */}
            <div className='h-full px-8 md:px-20 2xl:px-48 flex flex-col gap-4 2xl:text-xl'>
                {
                    formElements[activeTab]
                }
            </div>
            {/* <button onClick={handleRevealResultsNavigation}>test</button> */}

            <div className='flex flex-wrap gap-x-6 mt-12 mx-auto'>
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
