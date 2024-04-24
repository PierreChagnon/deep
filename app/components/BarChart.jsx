import React, { useEffect, useState } from 'react';
import { bungee, inter } from '../fonts';

export default function BarChart({ value = 20, scoreColor, name, textColor, bgColors, uid }) {

    useEffect(() => {
        document.getElementById(uid).style.width = `${value}%`;
    }, [uid, name, value]);

    return (
        <div className={`${bungee.className} ${textColor} flex text-sm flex-col gap-2 md:flex-row`}>
            <p className='w-1/3 3xl:text-2xl'>{name}</p>
            <div className='w-full'>
                <span
                    className={`relative group cursor-pointer flex flex-1 ${bgColors[1]} items-center h-4 lg:h-5 3xl:h-8 rounded-e-full`}
                >
                    <span id={uid} className={`flex items-center justify-end pr-4 h-full ${bgColors[0]} shadow-dark rounded-e-full`}>
                        <p className={`${scoreColor} 3xl:text-2xl`}>{Math.floor(value)}</p>
                    </span>
                </span>
            </div>
        </div>
    );
}
