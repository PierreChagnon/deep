'use client'

import React, { useEffect, useState } from 'react'

export default function GameHabits({ setFormValues, setFormIsCompleted }) {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

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

    const toggleGameGenre = (option, formatedOption) => {
        // Vérifier si l'option est déjà sélectionnée
        if (selectedGenres.includes(option)) {
            // Si oui, la retirer de la sélection
            setSelectedGenres(selectedGenres.filter((item) => item !== option));

            setFormValues((prevValues) => ({
                ...prevValues,
                [formatedOption]: 0,
            }));
        } else {
            // Sinon, l'ajouter à la sélection
            setSelectedGenres([...selectedGenres, option]);

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
            "action": 0,
            "adventure": 0,
            "roleplaying": 0,
            "simulation": 0,
            "strategy": 0,
            "puzzle": 0,
            "sports": 0,
            "racing": 0,
            "fighting": 0,
            "shooter": 0,
            "horror": 0,
            "sandbox": 0,
            "towerdefense": 0,
            "platformer": 0,
            "massivemultiplayeronline": 0,
            "survival": 0,
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
        <div className='flex flex-col items-center mb-8 text-base 3xl:text-2xl'>
            <div className='flex flex-col w-full 3xl:w-2/3'>
                <p className='mb-4 3xl:mb-8 md:text-lg'>Counting all types of video games, across all platforms (including mobile games), how many different video games have you played in the last year, approximately?</p>
                <div className='p-[2px] mb-16 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <input onChange={(e) => {
                        handleInputChange("n_gamesbyyear", e.currentTarget.value)
                        setNumberOfGames(e.currentTarget.value)
                    }
                    }
                        placeholder='0' value={numberOfGames} type="number" className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl' />
                </div>
            </div>
            <div className='flex flex-col w-full 3xl:w-2/3'>
                <p className='mb-4 3xl:mb-8 md:text-lg'>Counting all types of video games across all platforms (including mobile games), how much time do you play per week, on average?</p>
                <div className='p-[2px] mb-16 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <input onChange={(e) => {
                        handleInputChange("n_hoursperweek", e.currentTarget.value)
                        setGamesPerWeek(e.currentTarget.value)
                    }
                    }
                        placeholder='0' value={gamesPerWeek} type="number" className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl' />
                </div>
            </div>
            <div className='flex flex-col w-full 3xl:w-2/3'>
                <p className='mb-4 3xl:mb-8 md:text-lg'>On what platforms do you usually play? You can select multiple choices.</p>
                <div className='flex flex-col mb-16 md:flex-row items-center gap-4 3xl:gap-8'>
                    {["Home consoles", "Handheld consoles", "Computers", "Smartphones"].map((value, i) => {
                        const formatedKey = ["homeconsoles", "handheldconsoles", "computers", "smartphones"]
                        return (
                            <button onClick={() => toggleOption(value, formatedKey[i])} key={value} className='p-[2px] w-full flex-1 rounded-md 2xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center w'>
                                <div className={`h-full w-full ${selectedOptions.includes(value) ? "from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r" : "bg-[#010018]"} p-2 md:p-4 3xl:py-5 rounded-md 2xl:rounded-xl`}>{value}</div>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col w-full 3xl:w-2/3'>
                <p className='mb-4 3xl:mb-8 md:text-lg'>Which game genres do you enjoy ? You can select multiple choices.</p>
                <div className='flex flex-col mb-16 md:flex-row md:flex-wrap items-center gap-4 3xl:gap-8'>
                    {["Action", "Adventure", "Role-Playing (RPG)", "Simulation", "Strategy", "Puzzle", "Sports", "Racing", "Fighting", "Shooter", "Horror", "Sandbox", "Tower Defense", "Platformer", "Massive Multiplayer Online (MMO)", "Survival"].map((value, i) => {
                        const formatedKey = ["action", "adventure", "roleplaying", "simulation", "strategy", "puzzle", "sports", "racing", "fighting", "shooter", "horror", "sandbox", "towerdefense", "platformer", "massivemultiplayeronline", "survival"]
                        return (
                            <button onClick={() => toggleGameGenre(value, formatedKey[i])} key={value} className='p-[2px] w-full flex-1 rounded-md 2xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center w'>
                                <div className={`h-full w-full ${selectedGenres.includes(value) ? "from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r" : "bg-[#010018]"} p-2 md:p-4 3xl:py-5 rounded-md 2xl:rounded-xl text-nowrap`}>{value}</div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
