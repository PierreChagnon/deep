import React, { useEffect } from 'react'
import { bungee } from '../fonts'

export default function BarChart({ value = 20, scoreColor, name, textColor, bgColors, mean = 50, uid }) {



    useEffect(() => {
        document.getElementById(uid).style.width = `${value}%`
        document.getElementById(name).style.width = `${mean}%`
    }, [uid, name, value, mean])

    return (
        <div className={`${bungee.className} ${textColor} flex text-sm flex-col gap-2 md:flex-row`}>
            <p className='w-1/3'>{name}</p>
            <div className='w-full'>
                <span className={`relative flex flex-1 ${bgColors[1]} items-center h-4 gap-2 rounded-e-full`}>
                    <span id={name} className={`absolute h-full border-e-4`}></span> {/* MEAN SPAN (white line) */}
                    <span id={uid} className={`flex items-center justify-end pr-4 h-full ${bgColors[0]} rounded-e-full`}>
                        <p className={`${scoreColor}`}>{Math.floor(value)}</p>
                    </span>
                </span>
            </div>
        </div>
    )
}
