'use client'

import React, { useEffect, useState } from 'react'

export default function GameHabits({ setFormValues, setFormIsCompleted }) {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const [numberOfGames, setNumberOfGames] = useState("")
    const [gamesPerWeek, setGamesPerWeek] = useState("")

    const toggleOption = (option, formatedOption) => {
        // Vérifier si l'option est déjà sélectionnée
        if (selectedOptions.includes(option)) {
            // Si oui, la retirer de la sélection
            setSelectedOptions(selectedOptions.filter((item) => item !== option));

            setFormValues((prevValues) => ({
                ...prevValues,
                [formatedOption]: 0,
            }));
        } else {
            // Sinon, l'ajouter à la sélection
            setSelectedOptions([...selectedOptions, option]);

            setFormValues((prevValues) => ({
                ...prevValues,
                [formatedOption]: 1,
            }));
        }
    };

    // on crée les 4 entrées des consoles pour le formulaire
    // permet d'avoir les 4 colonnes du csv avec la valeur "false" (pour "smartphones", "computers", ...)
    // car l'utilisateur peut mettre a jour l'etat d'un seul élément (dans ce cas on n'aurait pas les valeurs "false",
    // puisque l'etat des 3 autres éléments n'aurait pas été mis a jour)
    useEffect(() => {
        setFormValues((prevValues) => ({
            ...prevValues,
            "homeconsoles": 0,
            "handheldconsoles": 0,
            "computers": 0,
            "smartphones": 0,
        }));
    }, [setFormValues])

    useEffect(() => {
        if (selectedOptions.length > 0 && numberOfGames !== "" && gamesPerWeek !== "") {
            setFormIsCompleted(true)
        }
    }, [selectedOptions, numberOfGames, gamesPerWeek, setFormIsCompleted])

    const handleInputChange = (field, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };
    return (
        <div className='flex flex-col mb-4 text-base 3xl:text-2xl'>
            <p className='mb-4'>Counting all types of video games, across all platforms (including mobile games), how many different video games have you played in the last year, approximately?</p>
            <div className='p-[2px] mb-10 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input onChange={(e) => {
                    handleInputChange("n_gamesbyyear", e.currentTarget.value)
                    setNumberOfGames(e.currentTarget.value)
                }
                }
                    placeholder='0' value={numberOfGames} type="number" className='h-full w-full bg-[#010018] p-2 3xl:py-4 rounded-md 3xl:rounded-xl' />
            </div>
            <p className='mb-4'>Counting all types of video games across all platforms (including mobile games), how much time do you play per week, on average?</p>
            <div className='p-[2px] mb-10 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input onChange={(e) => {
                    handleInputChange("n_hoursperweek", e.currentTarget.value)
                    setGamesPerWeek(e.currentTarget.value)
                }
                }
                    placeholder='0' value={gamesPerWeek} type="number" className='h-full w-full bg-[#010018] p-2 3xl:py-4 rounded-md 3xl:rounded-xl' />
            </div>
            <p className='mb-4'>On what platforms do you usually play? You can select multiple choices.</p>
            <div className='flex flex-col md:flex-row items-center gap-2 mb-4'>
                {["Home consoles", "Handheld consoles", "Computers", "Smartphones"].map((value, i) => {
                    const formatedKey = ["homeconsoles", "handheldconsoles", "computers", "smartphones"]
                    return (
                        <button onClick={() => toggleOption(value, formatedKey[i])} key={value} className='p-[2px] w-full flex-1 rounded-md 2xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center w'>
                            <div className={`h-full w-full ${selectedOptions.includes(value) ? "from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r" : "bg-[#010018]"} py-2 px-2 3xl:py-4 rounded-md 2xl:rounded-xl`}>{value}</div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
