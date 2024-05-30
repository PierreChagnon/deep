/* eslint-disable react/no-unescaped-entities */
'use client'

import { COUNTRIES } from '@/lib/countries'
import React, { useState, useEffect } from 'react'

export default function PersonalInfos({ setFormValues, setFormIsCompleted }) {

    const [age, setAge] = useState("")
    const [option, setOption] = useState("Prefer not to say")
    const [levelOfEnglish, setLevelOfEnglish] = useState("Intermediate")
    const [country, setCountry] = useState("France")
    const [alreadyDone, setAlreadyDone] = useState("No")

    // useEffect to set the initial form values
    useEffect(() => {
        setFormValues((prevValues) => ({
            ...prevValues,
            age: "",
            already_done: 0,
            level_of_english: "Intermediate",
            gender: "Prefer not to say",
            country: "France",
        }));
    }, [setFormValues])


    const handleClick = (option) => {
        setAlreadyDone(option)
        const temp = option === "Yes" ? 1 : 0
        setFormValues((prevValues) => ({
            ...prevValues,
            "already_done": temp,
        }));
    };

    // show error state
    const [error, setError] = useState(false)


    const handleInputChange = (field, value) => {
        if (value < 15) {
            setError(true)
            return
        }
        setError(false)
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    useEffect(() => {
        if (age !== "" && age >= 15) {
            setFormIsCompleted(true)
        }
        else {
            setFormIsCompleted(false)
        }
    }, [age, setFormIsCompleted])

    return (
        <div className='flex flex-col mb-4 text-base 3xl:text-2xl items-center'>
            <p className='mb-4 mt-8 md:text-xl'>Have you already taken this test? (It's ok if you have) </p>
            <div className='flex md:w-1/2 3xl:w-1/3 w-full items-center gap-2 3xl:gap-4 mb-4'>
                {["Yes", "No"].map((value) => {
                    const active = alreadyDone === value
                    return (
                        <button onClick={() => handleClick(value)} key={value} className='p-[2px] md:w-1/2 3xl:w-1/3 w-full flex-1 rounded-md 2xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center w'>
                            <div className={`h-full w-full ${active ? "from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r" : "bg-[#010018]"} p-2 md:p-4 rounded-md 2xl:rounded-xl`}>{value}</div>
                        </button>
                    )
                })}
            </div>
            <p className='mb-4 mt-8 md:text-xl'>Gender</p>
            <div className='relative p-[2px] md:w-1/2 3xl:w-1/3 w-full cursor-pointer mb-10 rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <select value={option} onChange={(e) => {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        "gender": e.target.value,
                    }));
                    setOption(e.target.value)
                }
                }
                    name="gender" id="gender" className='appearance-none h-full w-full bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                    <option className='cursor-pointer p-2 text-sm' value="Male">Male</option>
                    <option className='cursor-pointer p-2 text-sm' value="Female">Female</option>
                    <option className='cursor-pointer p-2 text-sm' value="Non-binary / third gender">Non-binary / third gender</option>
                    <option className='cursor-pointer p-2 text-sm' value="Prefer not to say">Prefer not to say</option>
                </select>
                {/* arrow */}
                <span className='absolute right-4 w-2 h-2 border-b-2 border-r-2 rotate-45' />
            </div>
            <p className='mb-4 mt-8 md:text-xl'>What is your age ?</p>
            {
                error && <p className='text-red-500 mb-2 -mt-2'>You must be at least 15 years old</p>
            }
            <div className='p-[2px] md:w-1/2 3xl:w-1/3 w-full mb-10 rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input onChange={(e) => {
                    handleInputChange("age", e.currentTarget.value)
                    setAge(e.currentTarget.value)
                }
                }
                    placeholder='0' value={age} type="number" className='h-full w-full bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl' />
            </div>
            <p className='mb-4 mt-8 md:text-xl'>Country of residence</p>
            <div className='relative p-[2px] md:w-1/2 3xl:w-1/3 cursor-pointer mb-10 w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <select value={country} onChange={(e) => {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        "country": e.target.value,
                    }));
                    setCountry(e.target.value)
                }
                }
                    name="level" id="level" className='appearance-none h-full w-full bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                    {COUNTRIES.map((item) => {
                        const country = item.title

                        return (<option key={country} className='cursor-pointer p-2 text-sm' value={country}>{country}</option>)
                    })}
                </select>
                {/* arrow */}
                <span className='absolute right-4 w-2 h-2 border-b-2 border-r-2 rotate-45' />
            </div>
            <p className='mb-4 mt-8 md:text-xl'>How would you rate your level of english proeficiency ?</p>
            <div className='relative p-[2px] md:w-1/2 3xl:w-1/3 cursor-pointer mb-10 w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <select value={levelOfEnglish} onChange={(e) => {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        "level_of_english": e.target.value,
                    }));
                    setLevelOfEnglish(e.target.value)
                }
                }
                    name="level" id="level" className='appearance-none h-full w-full bg-[#010018] p-2 md:p-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                    <option className='cursor-pointer p-2 text-sm' value="Beginner">Beginner</option>
                    <option className='cursor-pointer p-2 text-sm' value="Intermediate">Intermediate</option>
                    <option className='cursor-pointer p-2 text-sm' value="Advanced">Advanced</option>
                    <option className='cursor-pointer p-2 text-sm' value="Bilingual">Bilingual</option>
                    <option className='cursor-pointer p-2 text-sm' value="Native speaker">Native speaker</option>
                </select>
                {/* arrow */}
                <span className='absolute right-4 w-2 h-2 border-b-2 border-r-2 rotate-45' />
            </div>
        </div >
    )
}
