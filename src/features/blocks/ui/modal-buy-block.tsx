import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, TonIcon, WarningIcon } from "@/shared/icons"

interface Props {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const ModalBuyBlock: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const [isClosing, setIsClosing] = useState(false)

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
                        <div className="relative z-[70] py-4">
                            <div className="flex relative border-b-[1px] border-[#424242] justify-center items-center mb-4">
                                <button
                                    className="absolute mx-4 left-0 top-[10%] w-[22px] h-[22px] flex text-[12px] items-center justify-center rounded-[10px] bg-[#404040]"
                                    onClick={handleClose}
                                >
                                    ✕
                                </button>
                                <div className="text-lg mb-[20px] font-medium">Покупка блока</div>
                            </div>

                            <div className="bg-[#15130B] mx-4 rounded-[15px] backdrop-blur-2xl p-4 mb-[19px]">
                                <div className="flex items-start gap-3">
                                    <WarningIcon className="w-[30px] h-[30px]" />
                                    <div className="flex flex-col">
                                        <div className="text-yellow-500 font-bold">На счете недостаточно средств</div>
                                        <div className="text-sm font-medium text-yellow-500">
                                            Вы будете перенаправлены на страницу пополнения счета при нажатии на кнопку
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 mx-4 gap-[5px] mb-[20px]">
                                <div className="text-center">
                                    <div className="text-white font-bold text-[12px]">Стоимость</div>
                                    <div className="bg-price text-[20px] font-extrabold leading-[24px] rounded-lg py-2 px-3 gap-[5px] flex items-center justify-center">
                                        <TonIcon />
                                        3.47
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-bold text-[12px]">Дней</div>
                                    <div className="bg-[#8b8b8b] text-[20px] font-extrabold leading-[24px] rounded-lg py-2 px-3">21</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-bold text-[12px]">Награда</div>
                                    <div className="bg-prize rounded-lg text-white text-[20px] font-extrabold leading-[24px] gap-[5px] py-2 px-3 flex items-center justify-center">
                                        <TonIcon />
                                        3.47
                                    </div>
                                </div>
                            </div>

                            <div className="text-[12px] mx-4 font-normal text-gray-400 text-center mb-[10px]">
                                Получай награды каждые 12 часов в течении 21 дня
                            </div>

                            <div className="w-full px-4">
                                <button className="w-full bg-border text-[24px] font-extrabold gap-[10px] rounded-[15px] py-3 flex items-center justify-center">
                                    <span>Подтвердить</span>
                                    <ArrowRight />
                                    <div className="flex items-center text-[24px] font-extrabold gap-[5px] justify-center">
                                        <TonIcon className="w-[27px] h-[27px]" />
                                        5.7
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

