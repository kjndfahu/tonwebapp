'use client'
import {Coin, TonBlack} from "@/shared/icons";
import {AnimatePresence, motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {ModalNFT} from "@/features/shop/ui/modal-nft";
import {useState} from "react";
import coin from '../../../../public/img/coins.png'
import Image from "next/image";

export const TokenBlock = () => {
    const t = useTranslations('Shop')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePurchaseClick = () => {
        setIsModalOpen(true)
    }
    return (
        <>
            <div
                className="flex w-full items-center bg-cover gap-[12px] bg-block-token rounded-[16px] h-[150px]">
                <div className="flex items-center justify-center rounded-l-[19px] bg-coin w-[164px] h-full">
                    <Coin/>
                </div>
                <div className="flex flex-col py-[12px] md:gap-0 gap-[5px] justify-between h-full md:text-[14px] text-[12px] font-bold text-white">
                    <div className="flex md:gap-0 gap-[5px] pt-[5px] flex-col">
                        BLOCK
                        <h2 className="md:text-[42px] text-[32px] md:leading-[42px] leading-[34px]">1.250</h2>
                        <p className="text-[10px] font-medium text-[#7c7c7c]"><span
                            className="text-[#B4F36F]">+36% </span> {t('yield')}</p>
                    </div>
                    <motion.div onClick={handlePurchaseClick} whileTap={{scale: 0.9}}
                                className="flex items-center cursor-pointer justify-center text-black text-[14px] font-extrabold md:w-[169px] w-[120px] rounded-[10px] bg-[#ADADAD] gap-1 border-[2px] border-[#FEFEFE14] py-[5px]">
                        <TonBlack className="w-[17px] h-[17px]"/>
                        2
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <ModalNFT setIsModalOpen={setIsModalOpen}/>
                )}
            </AnimatePresence></>
    )
}