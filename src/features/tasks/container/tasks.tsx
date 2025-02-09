import type React from "react"
import { TaskBlock } from "@/features/tasks/ui/task-block"
import { motion } from "framer-motion"
import {useTranslations} from "next-intl";


export const Tasks: React.FC = () => {
    const t = useTranslations('Tasks')

    return (
        <div className="w-full px-4">
            <div className="flex items-center flex-col text-center text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
                <h2 className="text-white text-[16px]">{t('tasks')}</h2>
                <p>{t('text')}</p>
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
                <TaskBlock key={0} title={t('task1')} index={0} />
                <TaskBlock key={1} title={t('task2')} index={1} />
                <TaskBlock key={2} title={t('task3')} index={2} />
                <TaskBlock key={3} title={t('task4')} index={3} />
                <TaskBlock key={4} title={t('task5')} index={4} />
            </motion.div>
        </div>
    )
}

