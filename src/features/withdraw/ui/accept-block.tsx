'use client'
import {FixedLayout} from "@telegram-apps/telegram-ui";
import { motion } from 'framer-motion';
import {useTranslations} from "next-intl";

export default function AcceptBlock() {
    const t = useTranslations("TopUp")

    return (
        <div className="flex flex-col gap-[10px] pt-[18px] px-4 items-center justify-center text-white">
                <FixedLayout className="w-full max-w-[500px] cursor-pointer fixed bottom-[20px] px-4">
                    <motion.div whileTap={{ scale: 0.9 }} className="bg-border rounded-[15px] p-[1px]">
                        <div
                            className="flex items-center cursor-pointer justify-center h-[53px] gap-2 text-[24px] leading-[28px] font-bold bg-top rounded-[15px]">
                            {t('confirm')}
                        </div>
                    </motion.div>
                </FixedLayout>
        </div>
    );
}

