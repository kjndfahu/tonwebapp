'use client'
import {TonBlack} from "@/shared/icons";
import {AnimatePresence, motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {ModalNFT} from "@/features/shop/ui/modal-nft";
import Image from "next/image";
import nft from '../../../../public/img/nft.png'

export const NFTBlock = () => {
    const t = useTranslations('Shop')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePurchaseClick = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <div className="flex w-full items-center bg-cover gap-[10px] bg-block-token rounded-[16px] h-[150px]">
                <Image alt="/" src={nft} className="w-[166px] rounded-l-[16px] h-[150px]"/>
                <div className="flex flex-col h-full pt-[20px] pb-[15px] px-2 md:text-[14px] text-[12px] font-bold text-white">
                    <div className="flex gap-[2px] flex-col">
                        {t('nft')}
                        <h2 className="md:text-[12px] text-[10px] font-medium md:leading-[14px] leading-3">{t('description')}<br/> {t('posted')}</h2>
                        <p className="text-[10px] pt-[8px] font-medium text-[#bfbfbf]">{t('additional')}</p>
                    </div>
                    <motion.div onClick={handlePurchaseClick} whileTap={{ scale: 0.9 }} className="flex mt-[8px] cursor-pointer items-center justify-center text-black text-[14px] font-extrabold md:w-[169px] w-[130px] rounded-[10px] bg-[#ADADAD] gap-1 border-[2px] border-[#FEFEFE14] py-[5px]">
                        <TonBlack className="w-[17px] h-[17px]"/>
                        2
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <ModalNFT setIsModalOpen={setIsModalOpen}/>
                )}
            </AnimatePresence>
        </>

    )
}