'use client'
import {FixedLayout} from "@telegram-apps/telegram-ui";
import { motion } from 'framer-motion';

export default function AcceptBlock() {
    return (
        <div className="flex flex-col gap-[10px] pt-[18px] px-4 items-center justify-center text-white">
                <FixedLayout className="w-full fixed bottom-[20px] px-4">
                    <motion.div whileTap={{ scale: 0.9 }} className="bg-border rounded-[15px] p-[1px]">
                        <div
                            className="flex items-center justify-center h-[53px] gap-2 text-[24px] leading-[28px] font-bold bg-top rounded-[15px]">
                            Подтвердить
                        </div>
                    </motion.div>
                </FixedLayout>
        </div>
    );
}

//bg-border rounded-[15px] p-[1px]
