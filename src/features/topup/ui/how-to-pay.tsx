"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import {useTranslations} from "next-intl";

export const HowToPay = () => {
    const [isOpen, setOpen] = useState(false)
    const t = useTranslations("TopUp")

    return (
        <div className="w-full px-[1px] bg-border rounded-[15px]">
            <motion.div
                onClick={() => setOpen(!isOpen)}
                className={`flex flex-col relative py-[10px] px-[20px] bg-top text-white text-[14px] font-bold rounded-[15px] cursor-pointer`}
                initial={false}
                animate={{ borderBottomLeftRadius: isOpen ? 15 : 15, borderBottomRightRadius: isOpen ? 15 : 15 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center">
                    <span>{t('title')}</span>
                    <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isOpen ? (
                            <ChevronUp className="text-white" width={20} height={20} />
                        ) : (
                            <ChevronDown className="text-white" width={20} height={20} />
                        )}
                    </motion.div>
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-col text-white text-[13px] font-medium gap-2 pt-[10px]">
                                <p>1. {t('ques1')}</p>
                                <p>2. {t('ques2')}</p>
                                <p>3. {t('ques3')}</p>
                                <p>
                                    4. {t('ques4')} <br />{" "}
                                    <span className="text-[12px] leading-[12px] text-[#9d9d9d] font-medium">
                    {t('p1')}
                  </span>{" "}
                                </p>
                                <p>
                                    5. {t('ques5')} <br />{" "}
                                    <span className="text-[12px] leading-[12px] text-[#9d9d9d] font-medium">
                    {t('p2')}
                  </span>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

