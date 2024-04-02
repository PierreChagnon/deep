import React, { useEffect, useState } from 'react';
import { bungee, inter } from '../fonts';

export default function BarChart({ value = 20, scoreColor, name, textColor, bgColors, mean = 50, uid }) {
    const tooltipContent = {
        discovering: 'discovering content tregre g rerye hrerg htheh rhedf rerh rt htr hrthtrhr thrtrhth rhhrth',
        expanding: 'expanding content trert grerg egr egerg  grerg g re htrthr thtrejyte ykyjet jtyetyj ',
        experimenting: 'experimenting content ghtrj k th rjrth t htrth htrth ht ytrtr y trty ytrjy y uu',
        performing: 'performing content htrth htrth rtu kyty y yty yty yu hgf jyyy trtr thtrth jjyt ytyu',
    };

    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        // setTooltipPosition({ x: e.clientX - document.getElementById('tooltip-' + name).getBoundingClientRect().left, y: e.clientY - document.getElementById('tooltip-' + name).getBoundingClientRect().top });
    };

    useEffect(() => {
        document.getElementById(uid).style.width = `${value}%`;
        document.getElementById(name).style.width = `${mean}%`;
    }, [uid, name, value, mean]);

    return (
        <div className={`${bungee.className} ${textColor} flex text-sm flex-col gap-2 md:flex-row`}>
            <p className='w-1/3'>{name}</p>
            <div className='w-full'>
                <span
                    className={`relative group cursor-pointer flex flex-1 ${bgColors[1]} items-center h-4 lg:h-5 rounded-e-full`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseMove={isHovered ? handleMouseMove : null}
                >
                    <span id={name} className={`absolute h-6 lg:h-7 border-e-8 shadow-dark`}></span> {/* MEAN SPAN (white line) */}
                    <span id={uid} className={`flex items-center justify-end pr-4 h-full ${bgColors[0]} shadow-dark rounded-e-full`}>
                        <p className={`${scoreColor}`}>{Math.floor(value)}</p>
                    </span>
                    {/* TOOLTIP */}
                    <span
                        id={`tooltip-${name}`}
                        className={`absolute w-64 duration-500 flex flex-col transition-opacity ${bgColors[1]} text-sm border border-white p-4 text-white rounded-md z-20 opacity-0`}
                        style={{ top: tooltipPosition.y + 10, left: tooltipPosition.x + 10, opacity: isHovered ? 1 : 0 }}
                    >
                        <p className={`${inter.className} text-base text-white font-bold`}>{name}</p>
                        <p className={`${inter.className} ${textColor} text-sm`}>{tooltipContent[name]}</p>
                    </span>
                </span>
            </div>
        </div>
    );
}
