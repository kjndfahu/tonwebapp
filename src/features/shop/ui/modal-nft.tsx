'use client'
import { motion } from "framer-motion";
import {TonBlack} from "@/shared/icons";

interface Props{
    setIsModalOpen: (bool:boolean) => void;
}

export const ModalNFT:React.FC<Props> = ({setIsModalOpen}) => {
    const handleConfirm = () => {
        console.log("Purchase confirmed")
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 px-[30px] flex items-center justify-center z-[100]"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="flex bg-border z-[101] rounded-lg p-[1px]"
                    >
                        <div className="flex bg-top z-[102] rounded-lg">
                            <div className="flex-1 p-5">
                                <h3 className="text-white font-bold text-[14px] mb-2">Подтверждение покупки</h3>
                                <p className="text-[12px] text-[#bfbfbf] font-medium mb-4">
                                    Уверены ли вы что хотите купить предмет?
                                </p>
                                <div className="flex w-full gap-3">
                                    <motion.button
                                        whileTap={{scale: 0.95}}
                                        onClick={handleCancel}
                                        className="flex w-full items-center justify-center py-[5px] text-[14px] font-bold rounded-[10px] bg-[#2D2D2D] text-white border border-[#FEFEFE14]"
                                    >
                                        Отмена
                                    </motion.button>
                                    <motion.button
                                        whileTap={{scale: 0.95}}
                                        onClick={handleConfirm}
                                        className="flex w-full items-center justify-center gap-1 text-[14px] font-bold rounded-[10px] bg-[#ADADAD] text-black border border-[#FEFEFE14]"
                                    >
                                        <TonBlack className="w-[17px] h-[17px]"/>
                                        2
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

    )
}