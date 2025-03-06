'use client'
import { CopyIcon } from "@/shared/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import {useTranslations} from "next-intl";

export const TopUpBlock = () => {
    const t = useTranslations("TopUp")
    const [copied, setCopied] = useState(false);
    const memoText = "DJEOTYBANWOLBGR";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(memoText);
            setCopied(true);
            toast.success("Copied!");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    };

    return (
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex items-center flex-col gap-[10px] text-white text-[18px] font-bold">
                {t('address')}
                <div className="flex w-full items-center justify-center h-[35px] bg-[#6b6b6b] rounded-[10px] md:text-[12px] text-[10px] font-semibold px-[20px] py-[5px]">
                    UQCxteY100D8OJEsjeYmplxgYAwgGE9RQyKnx9QyZBsu...
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                MEMO
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="flex w-full h-[35px] relative items-center justify-center bg-[#6b6b6b] rounded-[10px] text-[12px] font-semibold px-[10px] py-[5px] cursor-pointer"
                    onClick={copyToClipboard}
                >
                    <div className="absolute left-[10px]">
                        <CopyIcon className="w-[13px] h-[13px]" />
                    </div>
                    {memoText}
                </motion.div>
            </div>
        </div>
    );
};
