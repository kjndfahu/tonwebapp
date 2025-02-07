import type React from "react"
import { TaskBlock } from "@/features/tasks/ui/task-block"
import { motion } from "framer-motion"

const taskTitles = [
    "Подписаться на канал проекта",
    "Вступить в чат проекта",
    "Пригласить 5 друзей",
    "Пригласить 20 друзей",
    "Пригласить 50 друзей",
]

export const Tasks: React.FC = () => {
    return (
        <div className="w-full px-4">
            <div className="flex items-center flex-col text-center text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
                <h2 className="text-white text-[16px]">Задания</h2>
                <p>Выполняй задания и получай награды в BLOCK!</p>
            </div>

            <motion.div
                className="flex flex-col gap-[10px]"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {taskTitles.map((title, index) => (
                    <TaskBlock key={index} title={title} index={index} />
                ))}
            </motion.div>
        </div>
    )
}

