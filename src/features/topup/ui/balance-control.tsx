'use client'
import { motion } from "framer-motion";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

export const BalanceControl = () => {
    return (
        <Link href="/">
            <motion.div whileTap={{scale: 0.9}} className="w-full rounded-[10px] bg-border p-[1px]">
                <div
                    className="flex relative cursor-pointer h-[40px] items-center justify-center text-white text-[16px] font-bold rounded-[10px] bg-top">
                    Управление балансом
                    <div className="absolute left-[15px]">
                        <ChevronLeft color="#ffffff" width={18} height={18}/>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}