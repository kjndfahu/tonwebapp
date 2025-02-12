"use client"
import { TonBlack, TonIcon } from "@/shared/icons"
import { useState } from "react"
import { ModalBuyBlock } from "@/features/blocks/ui/modal-buy-block"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export const Block = () => {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations("Blocks")
    return (
        <>
            <div className="flex flex-col items-center justify-between bg-block rounded-[15px] w-[48%] bg-cover aspect-square p-[10px]">
                <div className="flex justify-between w-full">
                    <div className="flex items-center backdrop-blur-2xl rounded-[5px] px-[10%] text-white bg-days justify-center text-[0.6em] h-[22px]">
                        21 {t("days")}
                    </div>
                    <div className="flex items-center backdrop-blur-2xl rounded-[5px] px-[10%] text-gray-300 bg-days justify-center text-[0.6em] h-[22px]">
                        42 {t("fees")}
                    </div>
                </div>
                <div className="flex flex-col items-center font-bold text-[0.85em] text-white gap-[5px]">
                    {t("reward")}
                    <div className="flex items-center leading-[38px] text-white text-[2em] gap-[6px]">
                        <TonIcon className="w-[1em] h-[1em]" />
                        3.47
                    </div>
                </div>
                <motion.div
                    whileTap={{scale: 0.8}}
                    onClick={() => setIsOpen(true)}
                    className="flex cursor-pointer items-center font-extrabold gap-[6px] justify-center py-[3%] text-[0.85em] text-[#161616] w-full bg-white rounded-[10px] border-[1px] border-[#d7d7d7]"
                >
                    <TonBlack />
                    5.7
                </motion.div>
            </div>
            {isOpen && <ModalBuyBlock isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}

