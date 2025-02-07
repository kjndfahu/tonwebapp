import type React from "react"
import { motion } from "framer-motion"
import { BlockIcon } from "@/shared/icons"

interface Props {
    title: string
    index: number
}

export const TaskBlock: React.FC<Props> = ({ title, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1, // Добавляем задержку, зависящую от индекса
            }}
        >
            <div className="bg-border rounded-[15px] p-[1px]">
                <div className="flex items-center justify-between rounded-[15px] px-[20px] w-full text-white text-[14px] font-bold bg-top h-[38px]">
                    {title}
                    <div className="flex items-center gap-1">
                        +20
                        <BlockIcon className="w-[15px] h-[15px]" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

