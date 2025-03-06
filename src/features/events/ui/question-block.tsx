"use client"
import { useState } from "react"
import { Cross, WarningWhite } from "@/shared/icons"
import { motion, AnimatePresence } from "framer-motion"
import {useTranslations} from "next-intl";

export const QuestionBlock = () => {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('QuestionBlock')
    return (
        <>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.8 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="absolute z-[150] bg-top rounded-[20px] h-[17px] w-full overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                        >
                            <div
                                onClick={() => setIsOpen(false)}
                                className="absolute bg-[#454545] top-[15px] p-[6px] rounded-[6px] right-[15px] cursor-pointer"
                            >
                                <Cross />
                            </div>
                            <div className="flex gap-[20px] px-[20px] py-[10px]">
                                <div className="pt-[10px]">
                                    <WarningWhite />
                                </div>
                                <div className="flex flex-col gap-1 text-white font-semibold text-[13px]">
                                    {t('rules')}
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: 0.2, duration: 0.3}}
                                        className="text-[12px] font-medium"
                                    >
                                        <p>{t('question')}</p>
                                        <p>{t('question')}</p>
                                        <p>{t('question')}</p>
                                        <p>{t('question')}</p>
                                        <p>{t('question')}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, ease: "backOut" }}
                        onClick={() => setIsOpen(true)}
                        className="absolute z-[150] top-[15px] right-[15px] bg-border rounded-full p-[1px] cursor-pointer"
                    >
                        <div className="flex items-center text-white text-[8px] font-extrabold justify-center bg-gradient rounded-full w-[15px] h-[15px]">
                            ?
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

