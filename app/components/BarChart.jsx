import React, { useEffect, useState } from 'react';
import { bungee, inter } from '../fonts';

export default function BarChart({ value = 20, scoreColor, name, textColor, bgColors, uid }) {
    const tooltipContent = {
        discovering: 'discovering content tregre g rerye hrerg htheh rhedf rerh rt htr hrthtrhr thrtrhth rhhrth',
        expanding: 'expanding content trert grerg egr egerg  grerg g re htrthr thtrejyte ykyjet jtyetyj ',
        experimenting: 'experimenting content ghtrj k th rjrth t htrth htrth ht ytrtr y trty ytrjy y uu',
        performing: 'performing content htrth htrth rtu kyty y yty yty yu hgf jyyy trtr thtrth jjyt ytyu',
    };

    useEffect(() => {
        document.getElementById(uid).style.width = `${value}%`;
    }, [uid, name, value]);

    return (
        <div className={`${bungee.className} ${textColor} flex text-sm flex-col gap-2 md:flex-row`}>
            <p className='w-1/3'>{name}</p>
            <div className='w-full'>
                <span
                    className={`relative group cursor-pointer flex flex-1 ${bgColors[1]} items-center h-4 lg:h-5 rounded-e-full`}
                >
                    <span id={uid} className={`flex items-center justify-end pr-4 h-full ${bgColors[0]} shadow-dark rounded-e-full`}>
                        <p className={`${scoreColor}`}>{Math.floor(value)}</p>
                    </span>
                </span>
            </div>
        </div>
    );
}
