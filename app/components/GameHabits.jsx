'use client'

import React, { useState } from 'react'

export default function GameHabits() {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleOption = (option) => {
        // Vérifier si l'option est déjà sélectionnée
        if (selectedOptions.includes(option)) {
            // Si oui, la retirer de la sélection
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            // Sinon, l'ajouter à la sélection
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleChange = (field, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [field]: option,
        }));
        console.log(selectedOptions)
    };
    return (
        <div className='flex flex-col'>
            <p className='mb-4'>Counting all types of video games, across all platforms (including mobile games), how many different video games have you played in the last year, approximately?</p>
            <div className='p-[2px] mb-10 max-w-xs rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input placeholder='0' type="number" className='h-full w-full bg-[#010018] py-2 px-2 rounded-md' />
            </div>
            <p className='mb-4'>Counting all types of video games, across all platforms (including mobile games), how many different video games have you played in the last year, approximately?</p>
            <div className='p-[2px] mb-10 max-w-xs rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input placeholder='0' type="number" className='h-full w-full bg-[#010018] py-2 px-2 rounded-md' />
            </div>
            <p className='mb-4'>On what platforms do you usually play? You can select multiple choices.</p>
            <div className='flex flex-col md:flex-row items-center gap-2 mb-4'>
                {["Home consoles", "Handheld consoles", "Computers", "Smartphones"].map((value, index) => (
                    <button onClick={() => toggleOption(value)} key={value} className='p-[2px] w-full flex-1 rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center w'>
                        <div className={`h-full w-full ${selectedOptions.includes(value) ? "from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r" : "bg-[#010018]"} py-2 px-2 rounded-md`}>{value}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}
