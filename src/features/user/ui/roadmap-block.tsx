'use client'
import { Tick, Time } from "@/shared/icons"
import { motion } from "framer-motion"
import {useTranslations} from "next-intl";

export const RoadmapBlock = () => {
    const t = useTranslations('Roadmap')
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
                <div className="flex flex-col gap-[1px] leading-[14px] items-start justify-center md:px-[24px] px-[16px] pb-[10px] text-[#cdcdcd] font-normal xl:text-[11px] text-[10px] bg-block-token h-[118px] bg-cover rounded-t-[15px]">
                    <div className="flex text-left items-start gap-[5px]">
                        <Tick />
                        <p>Q3-Q4 • 2024</p>
                    </div>
                    <p className="text-left xl:text-[10px] text-[9px] text-white">{t('name')}</p>
                    <div className="flex flex-col xl:text-[10px] text-[9px] text-left gap-[2px]">
                        <li className="marker:text-[#B4F36F]">{t('description1')}</li>
                        <li className="marker:text-[#B4F36F]">{t('description2')}</li>
                        <li className="marker:text-[#B4F36F]">{t('description3')}</li>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-col gap-[1px] leading-[14px] items-start justify-center md:px-[24px] px-[16px] py-[10px] text-[#cdcdcd] font-normal xl:text-[11px] text-[10px] bg-roadmap bg-cover h-[120px]"
            >
                <div className="flex text-left items-start gap-[5px]">
                    <Tick />
                    <p>Q1-Q2• 2025</p>
                </div>
                <p className="text-left xl:text-[10px] text-[9px] text-white">{t('name2')}</p>
                <div className="flex flex-col xl:text-[10px] text-[9px] text-left gap-[2px]">
                    <li className="marker:text-[#B4F36F]">{t('description21')}</li>
                    <li className="marker:text-[#B4F36F]">{t('description22')}</li>
                    <li className="marker:text-[#B4F36F]">{t('description23')}</li>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex flex-col gap-[1px] leading-[14px] items-start justify-center md:px-[24px] px-[16px] py-[10px] text-[#cdcdcd] font-normal xl:text-[11px] text-[10px] bg-roadmap bg-cover h-[120px]"
            >
                <div className="flex text-left items-start gap-[5px]">
                    <Time />
                    <p>Q3 - 2025</p>
                </div>
                <p className="text-left xl:text-[10px] text-[9px] text-white">{t('name3')}</p>
                <div className="flex flex-col xl:text-[10px] text-[9px] text-left gap-[2px]">
                    <li className="marker:text-[#5598EF]">{t('description31')}</li>
                    <li className="marker:text-[#5598EF]">{t('description32')}</li>
                    <li className="marker:text-[#5598EF]">{t('description33')}</li>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="flex text-left flex-col gap-[1px] leading-[14px] items-start justify-center md:px-[24px] px-[16px] py-[10px] text-[#cdcdcd] rounded-b-[17px] font-normal xl:text-[11px] text-[10px] bg-roadmap bg-cover h-[107px]"
            >
                <div className="flex text-left items-start gap-[5px]">
                    <Time />
                    <p>Q4 - 2025</p>
                </div>
                <p className="text-left xl:text-[10px] text-[9px] text-white">{t('name4')}</p>
                <div className="flex flex-col xl:text-[10px] text-[9px] text-left gap-[2px]">
                    <li className="marker:text-[#5598EF]">{t('description41')}</li>
                    <li className="marker:text-[#5598EF]">{t('description42')}</li>
                    <li className="marker:text-[#5598EF]">{t('description43')}</li>
                </div>
            </motion.div>
        </motion.div>
    )
}

