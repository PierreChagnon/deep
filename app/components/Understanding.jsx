'use client'

import React, { useEffect, useState } from 'react'

export default function Understanding({ setFormValues, setFormIsCompleted }) {

    const [levelOfUnderstanding, setLevelOfUnderstanding] = useState("Mostly")


    useEffect(() => {
        if (levelOfUnderstanding !== "") {
            setFormIsCompleted(true)
        } else {
            setFormIsCompleted(false)
        }
    }, [levelOfUnderstanding, setFormIsCompleted])

    return (
        <div className='flex flex-col items-center mb-4 text-base 3xl:text-2xl'>
            <div className='flex flex-col'>
                <p className='mb-8 mt-8 md:text-lg'>How well have you understood all the questions presented to you ?</p>
                <div className='p-[2px] cursor-pointer mb-10 w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <select value={levelOfUnderstanding} onChange={(e) => {
                        setFormValues((prevValues) => ({
                            ...prevValues,
                            "level_of_understanding": e.target.value,
                        }));
                        setLevelOfUnderstanding(e.target.value)
                    }
                    }
                        name="understanding" id="understanding" className='h-full w-full bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                        <option className='cursor-pointer p-2 text-sm' value="Not at all">Not at all</option>
                        <option className='cursor-pointer p-2 text-sm' value="Slightly">Slightly</option>
                        <option className='cursor-pointer p-2 text-sm' value="Moderately">Moderately</option>
                        <option className='cursor-pointer p-2 text-sm' value="Mostly">Mostly</option>
                        <option className='cursor-pointer p-2 text-sm' value="Completely">Completely</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
