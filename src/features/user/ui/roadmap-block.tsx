import { Tick, Time } from "@/shared/icons"
import { motion } from "framer-motion"

export const RoadmapBlock = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div className="flex flex-col w-full" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="bg-border rounded-t-[17px]">
                <div className="flex flex-col gap-[5px] leading-[14px] justify-end items-start px-[24px] pb-[10px] text-[#cdcdcd] font-normal text-[12px] bg-block-token h-[118px] bg-cover rounded-t-[15px]">
                    <div className="flex items-start gap-[5px]">
                        <Tick />
                        <p>Q2-Q3 · 2025</p>
                    </div>
                    <p className="text-white">Тут укажите название</p>
                    <div className="flex flex-col gap-[5px]">
                        <li className="marker:text-[#B4F36F]">Описание процесса</li>
                        <li className="marker:text-[#B4F36F]">Описание процесса</li>
                        <li className="marker:text-[#B4F36F]">Описание процесса</li>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-col gap-[4px] leading-[14px] justify-end items-start px-[24px] py-[10px] text-[#cdcdcd] font-normal text-[12px] bg-roadmap bg-cover h-[107px]"
            >
                <div className="flex items-start gap-[4px]">
                    <Tick />
                    <p>Q2-Q3 · 2025</p>
                </div>
                <p className="text-white">Тут укажите название</p>
                <div className="flex flex-col gap-[4px]">
                    <li className="marker:text-[#B4F36F]">Описание процесса</li>
                    <li className="marker:text-[#B4F36F]">Описание процесса</li>
                    <li className="marker:text-[#B4F36F]">Описание процесса</li>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-col gap-[4px] leading-[14px] justify-end items-start px-[24px] py-[10px] text-[#cdcdcd] font-normal text-[12px] bg-roadmap bg-cover h-[107px]"
            >
                <div className="flex items-start gap-[4px]">
                    <Time />
                    <p>Q2-Q3 · 2025</p>
                </div>
                <p className="text-white">Тут укажите название</p>
                <div className="flex flex-col gap-[4px]">
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-col gap-[4px] leading-[14px] justify-end items-start px-[24px] py-[10px] text-[#cdcdcd] rounded-b-[17px] font-normal text-[12px] bg-roadmap bg-cover h-[107px]"
            >
                <div className="flex items-start gap-[4px]">
                    <Time />
                    <p>Q2-Q3 · 2025</p>
                </div>
                <p className="text-white">Тут укажите название</p>
                <div className="flex flex-col gap-[4px]">
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                    <li className="marker:text-[#5598EF]">Описание процесса</li>
                </div>
            </motion.div>
        </motion.div>
    )
}

