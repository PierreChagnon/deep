import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export default function GameAsker({ item, setShownAskers, shownAskers }) {
    const [showEverPlayedQuestion , setShowEverPlayedQuestion] = useState(true)

    return (
        <div className='w-full'>
            <AnimatePresence mode='popLayout'>
                {showEverPlayedQuestion &&
                    <motion.div
                        className='flex flex-col w-full items-center'
                        exit={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                    >
                        <p className='italic opacity-70 mb-3 3xl:text-xl'>Have you ever played this game before ?</p>
                        <div className='flex justify-center gap-4 md:gap-8 w-full md:px-24'>
                            {/* <button className={`${bungee.className} text-white from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 3xl:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center w-full`}>YES</button>
                                                            <button className={`${bungee.className} text-white from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 3xl:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center w-full`}>NO</button> */}
                            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='p-[2px] max-w-56 w-full shadow-md shadow-white/15 rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                                <button
                                    onClick={() => {
                                        setShowEverPlayedQuestion(false)
                                    }}
                                    className='w-full 3xl:text-xl bg-[#090909] text-white py-2 px-4 md:px-8 rounded-md'>
                                    Yes
                                </button>
                            </motion.div>
                            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='p-[2px] max-w-56 w-full shadow-md shadow-white/15 rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                                <button
                                    onClick={() => {
                                        setShowEverPlayedQuestion(false)
                                    }}
                                    className='w-full 3xl:text-xl bg-[#090909] text-white py-2 px-4 md:px-8 rounded-md'>
                                    No
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>


            {!showEverPlayedQuestion &&
                <motion.div
                    className='flex flex-col w-full items-center'
                    initial={{ y: 50, opacity: 0 }}
                    exit={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                >
                    <p className='italic opacity-70 mb-3 3xl:text-xl'>Did you like it ?</p>
                    <div className='flex justify-center gap-4 md:gap-8 w-full md:px-24'>
                        {/* <button className={`${bungee.className} text-white from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 3xl:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center w-full`}>YES</button>
                                                             <button className={`${bungee.className} text-white from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 3xl:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center w-full`}>NO</button> */}
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='p-[2px] max-w-56 w-full shadow-md shadow-white/15 rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                            <button
                                onClick={() => {
                                    let temp = [...shownAskers]
                                    const index = temp.indexOf(item)
                                    temp.splice(index, 1)
                                    setShownAskers(temp)
                                }}
                                className='w-full 3xl:text-xl bg-[#090909] text-white py-2 px-4 md:px-8 rounded-md'>
                                Yes
                            </button>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className='p-[2px] max-w-56 w-full shadow-md shadow-white/15 rounded-md from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r flex justify-center items-center'>
                            <button
                                onClick={() => {
                                    let temp = [...shownAskers]
                                    const index = temp.indexOf(item)
                                    temp.splice(index, 1)
                                    setShownAskers(temp)
                                }}
                                className='w-full 3xl:text-xl bg-[#090909] text-white py-2 px-4 md:px-8 rounded-md'>
                                No
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            }

        </div>
    )
}
