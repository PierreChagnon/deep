'use client'

import React, { useEffect, useState } from 'react'

export default function Understanding({ setFormValues, setFormIsCompleted }) {

    const [levelOfUnderstanding, setLevelOfUnderstanding] = useState("Mostly")

    // useEffect to set the initial form values
    useEffect(() => {
        setFormValues((prevValues) => ({
            ...prevValues,
            level_of_understanding: "Mostly",
        }));
    }, [setFormValues])

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
                <p className='mb-8 mt-8 md:text-2xl'>How well have you understood all the questions presented to you ?</p>
                <div className='relative p-[2px] cursor-pointer mb-10 w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                    <select value={levelOfUnderstanding} onChange={(e) => {
                        setFormValues((prevValues) => ({
                            ...prevValues,
                            "level_of_understanding": e.target.value,
                        }));
                        setLevelOfUnderstanding(e.target.value)
                    }
                    }
                        name="understanding" id="understanding" className='h-full w-full appearance-none bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                        <option className='cursor-pointer p-2 text-sm' value="Not at all">Not at all</option>
                        <option className='cursor-pointer p-2 text-sm' value="Slightly">Slightly</option>
                        <option className='cursor-pointer p-2 text-sm' value="Moderately">Moderately</option>
                        <option className='cursor-pointer p-2 text-sm' value="Mostly">Mostly</option>
                        <option className='cursor-pointer p-2 text-sm' value="Completely">Completely</option>
                    </select>
                    {/* arrow */}
                    <span className='absolute right-4 w-2 h-2 border-b-2 border-r-2 rotate-45' />
                </div>
            </div>
        </div>
    )
}
