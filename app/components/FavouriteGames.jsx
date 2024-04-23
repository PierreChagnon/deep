'use client'

import React, { useState, useEffect } from 'react'

export default function FavouriteGames({ setFormValues, setFormIsCompleted }) {

    const [favGames, setFavGames] = useState(["", "", "", "", ""])

    const handleInputChange = (field, value, index) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));

        // setFavGames at the right index
        setFavGames((prevGames) => {
            let temp = [...prevGames]
            temp[index] = value
            return temp
        })
    };

    useEffect(() => {
        console.log(favGames)
        if (favGames.includes("") === false) {
            setFormIsCompleted(true)
        } else {
            setFormIsCompleted(false)
        }
    }, [favGames, setFormIsCompleted])

    return (
        <div className='flex flex-col md:px-8 lg:px-16 3xl:px-48 mb-16 text-base 3xl:text-2xl items-center'>
            <p className='mb-16 md:text-lg'>Please now list the 5 titles of video games you have dedicated substancial time to in your recent gaming experiences. Include all type of video games from all platforms (including mobile games).</p>
            <div className='flex flex-col gap-8 md:px-24 w-full'>

                <div className='flex items-center gap-4 w-full'>
                    <p className=''>1.</p>
                    <div className='p-[2px] w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                        <input
                            onChange={(e) => {
                                handleInputChange("favourite_1", e.currentTarget.value, 0)
                            }
                            }
                            placeholder=''
                            type="text"
                            className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4 w-full'>
                    <p className=''>2.</p>
                    <div className='p-[2px] w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                        <input
                            onChange={(e) => {
                                handleInputChange("favourite_2", e.currentTarget.value, 1)
                            }
                            }
                            placeholder=''
                            type="text"
                            className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4 w-full'>
                    <p className=''>3.</p>
                    <div className='p-[2px] w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                        <input
                            onChange={(e) => {
                                handleInputChange("favourite_3", e.currentTarget.value, 2)
                            }
                            }
                            placeholder=''
                            type="text"
                            className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4 w-full'>
                    <p className=''>4.</p>
                    <div className='p-[2px] w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                        <input
                            onChange={(e) => {
                                handleInputChange("favourite_4", e.currentTarget.value, 3)
                            }
                            }
                            placeholder=''
                            type="text"
                            className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4 w-full'>
                    <p className=''>5.</p>
                    <div className='p-[2px] w-full rounded-md 3xl:rounded-xl from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                        <input
                            onChange={(e) => {
                                handleInputChange("favourite_5", e.currentTarget.value, 4)
                            }
                            }
                            placeholder=''
                            type="text"
                            className='h-full w-full bg-[#010018] p-2 md:p-4 3xl:py-5 rounded-md 3xl:rounded-xl'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
