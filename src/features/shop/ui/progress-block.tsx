"use client"

import {useEffect, useState} from "react"

interface ProgressBlockProps {
    current: number
    total: number
}

export default function ProgressBlock({current, total}: ProgressBlockProps) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage((current / total) * 100)
    }, [current, total])

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat("ru-RU").format(num).replace(/,/g, " ")
    }

    return (
        <div>
            <div className="w-full bg-border px-[1px] rounded-t-[10px]">
                <div className="flex items-center rounded-t-[10px] text-white text-[16px] h-[32px] font-bold justify-center bg-top">
                    {formatNumber(current)} / {formatNumber(total)} BLOCK
                </div>
            </div>
            <div className="w-full bg-border rounded-b-[10px] p-[1px]">
                <div className="w-full h-[9px] relative bg-top rounded-b-[10px]">
                    <div
                        className="absolute rounded-bl-[10px] top-0 left-0 h-full bg-gradient-to-r from-white/60 to-white/20 transition-all duration-300 ease-out"
                        style={{width: `${percentage}%`}}
                    />
                </div>
            </div>
        </div>
    )
}

// <div className="w-full max-w-lg mx-auto p-4">
//     <div
//         className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-lg">
//         <div
//             className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/20 to-white/5 transition-all duration-300 ease-out"
//             style={{width: `${percentage}%`}}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"/>
//         <div className="relative px-6 py-4">
//             <p className="text-center text-white text-xl font-bold tracking-wider">
//                 {formatNumber(current)} / {formatNumber(total)} BLOCK
//             </p>
//         </div>
//         <div
//             className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
//     </div>
// </div>

