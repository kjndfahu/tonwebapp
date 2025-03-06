'use client'
import { motion } from "framer-motion";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

export const BalanceControl = () => {
    const t = useTranslations("TopUp")
    return (
        <Link href="/">
            <motion.div whileTap={{scale: 0.9}} className="w-full rounded-[10px] bg-border p-[1px]">
                <div
                    className="flex relative cursor-pointer h-[40px] items-center justify-center text-white text-[16px] font-bold rounded-[10px] bg-top">
                    {t('balance')}
                    <div className="absolute left-[15px]">
                        <ChevronLeft color="#ffffff" width={18} height={18}/>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}