"use client"
import { useState } from "react"
import { Cross, WarningWhite } from "@/shared/icons"
import { motion, AnimatePresence } from "framer-motion"

export const QuestionBlock = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute z-[150] bg-top rounded-[20px] w-full"
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
                                Основные правила
                                <div className="text-[12px] font-medium">
                                    <p>1. Правило под номером один</p>
                                    <p>2. Правило под номером два</p>
                                    <p>3. Правило под номером три</p>
                                    <p>4. Правило под номером четыре</p>
                                    <p>5. Правило под номером пять</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
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

