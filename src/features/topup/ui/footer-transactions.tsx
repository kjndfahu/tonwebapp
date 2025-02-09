'use client';

import { useEffect, useState } from 'react';
import {CopyIcon} from "@/shared/icons";
import {FixedLayout} from "@telegram-apps/telegram-ui";
import { motion } from 'framer-motion';

export default function TimerPage() {
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds:number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="flex flex-col gap-[10px] pt-[18px] px-4 items-center justify-center text-white">
            <h1 className="text-[#F4BC00] text-[14px] font-bold">Осталось: {formatTime(timeLeft)}</h1>
            <p className="text-[#6b6b6b] text-[10px] pb-[75px] leading-[14px] text-center">
                Внимание, комиссия в 0.1 TON применяется ко всем депозитам.<br />
                Также не забудьте указать MEMO, иначе средства будут утеряны.
            </p>
            {timeLeft > 0 && (
                <FixedLayout className="w-full fixed bottom-[20px] px-4">
                    <motion.div whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    navigator.clipboard.writeText('Ваш_адрес');
                                }} className="bg-border rounded-[15px] p-[1px]">
                        <div
                            className="flex items-center justify-center h-[53px] gap-2 text-[24px] leading-[28px] font-bold bg-top rounded-[15px]">
                            <CopyIcon className="w-[23px] h-[23px]"/>
                            Скопировать адрес
                        </div>
                    </motion.div>
                </FixedLayout>
            )}
        </div>
    );
}

//bg-border rounded-[15px] p-[1px]
