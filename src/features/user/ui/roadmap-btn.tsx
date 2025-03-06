'use client'
import {ChevronLeft} from "lucide-react";
import { motion } from "framer-motion"
import Link from "next/link";
import {useTranslations} from "next-intl";

export const RoadmapBtn = () => {
    const t = useTranslations("User")
    return (
        <Link href="/user">
            <motion.div whileTap={{scale: 0.95}} className="w-full relative bg-border rounded-[10px] p-[1px]">
                <div
                    className="flex relative items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer">
                    {t('roadmap')}
                    <ChevronLeft className="absolute w-[20px] h-[20px] left-[15px]"/>
                </div>
            </motion.div>
        </Link>

    )
}