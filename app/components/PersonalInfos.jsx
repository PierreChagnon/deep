'use client'

import React, { useState, useEffect } from 'react'

export default function PersonalInfos({ setFormValues, setFormIsCompleted }) {

    const [age, setAge] = useState("")
    const [option, setOption] = useState("Prefer not to say")

    const handleInputChange = (field, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    useEffect(() => {
        if (age !== "") {
            setFormIsCompleted(true)
        }
    }, [age, setFormIsCompleted])

    return (
        <div className='flex flex-col mb-4 text-base 3xl:text-2xl 2xl:items-center'>
            <p className='mb-4'>Gender</p>
            <div className='p-[2px] cursor-pointer mb-10 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <select value={option} onChange={(e) => {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        "Gender": e.target.value,
                    }));
                    setOption(e.target.value)
                }
                }
                    name="cars" id="cars" className='h-full w-full bg-[#010018] p-2 3xl:py-4 rounded-md 3xl:rounded-xl cursor-pointer'>
                    <option className='cursor-pointer p-2' value="Male">Male</option>
                    <option className='cursor-pointer p-2' value="Female">Female</option>
                    <option className='cursor-pointer p-2' value="Non-binary / third gender">Non-binary / third gender</option>
                    <option className='cursor-pointer p-2' value="Prefer not to say">Prefer not to say</option>
                </select>
            </div>
            <p className='mb-4'>What is your age ?</p>
            <div className='p-[2px] mb-10 max-w-xs rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                <input onChange={(e) => {
                    handleInputChange("age", e.currentTarget.value)
                    setAge(e.currentTarget.value)
                }
                }
                    placeholder='0' value={age} type="number" className='h-full w-full bg-[#010018] p-2 3xl:py-4 rounded-md 3xl:rounded-xl' />
            </div>
        </div>
    )
}
