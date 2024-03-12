import React, { useEffect } from 'react'
import { bungee } from '../fonts'

export default function BarChart({ value = 20, name, textColor, bgColors, mean = 50, uid }) {



    useEffect(() => {
        document.getElementById(uid).style.width = `${value}%`
        document.getElementById(name).style.width = `${mean}%`
    }, [uid, name, value, mean])

    return (
        <div className={`${bungee.className} ${textColor} flex text-sm flex-col gap-2 md:flex-row`}>
            <p>{name}</p>
            <div>
                <span className={`relative flex flex-1 ${bgColors[1]} items-center h-4 gap-2 rounded-e-full`}>
                    <span id={uid} className={`flex h-full ${bgColors[0]} rounded-e-full`}>
                        <span id={name} className={`absolute h-full border-e-4`}></span>
                    </span>
                    <p className=''>{Math.floor(value)}</p>
                </span>
            </div>
        </div>
    )
}
