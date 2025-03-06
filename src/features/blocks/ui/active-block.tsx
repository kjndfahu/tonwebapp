'use client'

import {TonBlack, TonIcon} from "@/shared/icons";
import {useTranslations} from "next-intl";

export const ActiveBlock = () => {
    const t = useTranslations('Blocks')
    return (
        <div
            className="flex flex-col items-center justify-between bg-[url('/img/block.png')] rounded-[15px] w-[48%] bg-cover aspect-square p-[10px]">
            <div className="flex justify-between w-full">
                <div
                    className="flex gap-[2px] items-center backdrop-blur-2xl w-[35px] rounded-[5px]  text-white bg-days justify-center text-[0.6em] h-[22px]">
                    <TonIcon className="w-[8px] opacity-60 h-[8px]"/>
                    5.7
                </div>
                <div
                    className="flex items-center backdrop-blur-2xl w-[35px] rounded-[5px] text-gray-300 bg-days justify-center text-[0.6em] h-[22px]">
                    0 · 42
                </div>
            </div>
            <div className="flex flex-col items-center font-bold text-[0.85em] text-white gap-[5px]">
                    Получено
                <div className="flex items-center leading-[38px] text-white text-[2em] gap-[6px]">
                    <TonIcon className="w-[1em] h-[1em]"/>
                    3.47
                </div>
                <div className="flex gap-[3px] font-medium text-[10px] text-[#999999]">
                    Награда
                    <div className="flex gap-[2px] items-center text-[#c4c4c4]">
                    <TonIcon className="w-[8px] h-[8px]"/>
                    0.87
                    </div>
                    за сбор
                </div>
            </div>
            <div
                className="flex cursor-pointer items-center font-extrabold gap-[6px] justify-center py-[3%] text-[0.85em] text-[#161616] w-full bg-[#d7d7d7] rounded-[10px] border-[1px] border-[#FEFEFE14]"
            >
                Забрать
            </div>
        </div>
        // <div className="flex flex-col items-center justify-between bg-block rounded-[15px] md:w-[173px] w-[165px] md:h-[173px] h-[165px] md:p-[10px] p-[5px]">
        //     <div className="flex justify-between w-full">
        //         <div
        //             className="flex items-center justify-center rounded-[5px] gap-[2px] text-[10px] font-bold text-[#c4c4c4] bg-days w-[35px] h-[22px]">
        //             <TonIcon className="w-[8px] opacity-60 h-[8px]"/>
        //             5.7
        //         </div>
        //         <div
        //             className="flex items-center justify-center rounded-[5px] gap-[2px] text-[10px] font-bold text-[#c4c4c4] bg-days w-[35px] h-[22px]">
        //             0 · 42
        //         </div>
        //     </div>
        //     <div className="flex flex-col items-center font-bold text-[14px] text-white gap-[5px]">
        //         Получено
        //         <div className="flex items-center leading-[38px] text-white text-[32px] gap-[6px]">
        //             <TonIcon className="w-[31px] h-[31px]"/>
        //             3.47
        //         </div>
        //         <div className="flex gap-[3px] font-medium text-[10px] text-[#999999]">
        //             Награда
        //             <div className="flex gap-[2px] items-center text-[#c4c4c4]">
        //                 <TonIcon className="w-[8px] h-[8px]"/>
        //                 0.87
        //             </div>
        //             за сбор
        //         </div>
        //     </div>
        //     <div className="flex items-center font-extrabold cursor-pointer gap-[6px] justify-center py-[5px] text-[14px] text-[#161616] w-full bg-[#d7d7d7] rounded-[10px] border-[1px] border-[#FEFEFE14]">
        //         Забрать
        //     </div>
        // </div>
    )
}