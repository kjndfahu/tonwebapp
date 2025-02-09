'use client'
import {TonBlack, TonIcon} from "@/shared/icons";
import {useState} from "react";
import {ModalBuyBlock} from "@/features/blocks/ui/modal-buy-block";
import {useTranslations} from "next-intl";

export const Block = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Blocks')
    return (
            <>
                <div className="flex flex-col items-center justify-between bg-block rounded-[15px] md:w-[173px] w-[165px] md:h-[173px] h-[165px] md:p-[10px] p-[5px]">
                    <div className="flex justify-between w-full">
                        <div
                            className="flex items-center backdrop-blur-2xl rounded-[5px] px-[18px] text-white bg-days justify-center text-[10px] h-[22px]">
                            21 {t('days')}
                        </div>
                        <div
                            className="flex items-center backdrop-blur-2xl rounded-[5px] px-[18px] text-gray-300 bg-days justify-center text-[10px] h-[22px]">
                            42 {t('fees')}
                        </div>
                    </div>
                    <div className="flex flex-col items-center font-bold text-[14px] text-white gap-[5px]">
                        {t('reward')}
                        <div className="flex items-center leading-[38px] text-white text-[32px] gap-[6px]">
                            <TonIcon className="w-[31px] h-[31px]"/>
                            3.47
                        </div>
                    </div>
                    <div onClick={() => setIsOpen(true)} className="flex items-center font-extrabold gap-[6px] justify-center py-[5px] text-[14px] text-[#161616] w-full bg-white rounded-[10px] border-[1px] border-[#d7d7d7]">
                        <TonBlack/>
                        5.7
                    </div>
                </div>
                {isOpen && <ModalBuyBlock isOpen={isOpen} setIsOpen={setIsOpen} /> }</>
    )
}