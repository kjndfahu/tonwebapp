import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TonIcon} from "@/shared/icons"
import {UsersList} from "@/features/user/ui/users-list";
import {useTranslations} from "next-intl";

interface Props {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const ModalStatistics: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const [isClosing, setIsClosing] = useState(false)
    const t = useTranslations('User')

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false)
        }
    }, [isOpen])

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, 300)
    }

    const modalVariants = {
        hidden: { y: "100%" },
        visible: { y: 0 },
        exit: { y: "100%" },
    }

    return (
        <AnimatePresence>
            {(isOpen || isClosing) && (
                <>
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed z-[25] inset-0 bg-black/60 backdrop-blur-[5px]"
                        onClick={handleClose}
                    />

                    <motion.div
                        key="modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate={isClosing ? "exit" : "visible"}
                        exit="exit"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed z-[70] bottom-0 left-0 right-0 border-[3px] border-[#212121] bg-[#1E1E1E] rounded-t-[35px]"
                    >
                        <div className="relative max-h-[390px] z-[70] py-4">
                            <div className="flex relative border-b-[1px] border-[#424242] justify-center items-center mb-4">
                                <button
                                    className="absolute mx-4 left-0 top-[10%] w-[22px] h-[22px] flex text-[12px] items-center justify-center rounded-[10px] bg-[#404040]"
                                    onClick={handleClose}
                                >
                                    ✕
                                </button>
                                <div className="text-lg text-white mb-[20px] font-medium">{t('stat')}</div>
                            </div>

                            <div className="flex  items-center justify-between font-bold text-[#c4c4c4] text-[14px] px-4">
                                {t('referrals')}
                                <div className="flex items-center justify-center gap-1">
                                    <TonIcon className="w-[17px] opacity-70 h-[17px]"/>
                                    50
                                </div>
                            </div>

                            <UsersList/>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

