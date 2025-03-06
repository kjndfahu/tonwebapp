"use client"

import { ChevronRight} from "lucide-react"
import { useState } from "react"
import { RoadmapBlock } from "@/features/user/ui/roadmap-block"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link";

export const Accordion = () => {
    const t = useTranslations("User")
    const [isBlock, setIsBlock] = useState<string | null>(null)
    const toggleBlock = (block: string) => {
        setIsBlock((prev) => (prev === block ? null : block))
    }

    const ChevronAnimation = ({ isOpen }: { isOpen: boolean }) => (
        <motion.div
            animate={{
                x: isOpen ? "calc(-100% - 75vw)" : 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="absolute right-[10px]"
        >
            <motion.div
                animate={{
                    rotate: isOpen ? 180 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                <ChevronRight width={17} height={17} />
            </motion.div>
        </motion.div>
    )

    return (
        <div className="flex w-full gap-[10px] flex-col">
            <Link href="/my-nfts">
                <motion.div whileTap={{scale: 0.95}} className="w-full relative bg-border rounded-[10px] p-[1px]">
                    <div
                        className="flex relative items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer">
                        {t('nfts')}
                        <ChevronRight className="absolute w-[20px] h-[20px] right-[15px]"/>
                    </div>
                </motion.div>
            </Link>

            <Link href="/roadmap">
                <motion.div whileTap={{scale: 0.95}} className="w-full relative bg-border rounded-[10px] p-[1px]">
                    <div
                        className="flex relative items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer">
                        {t('roadmap')}
                        <ChevronRight className="absolute w-[20px] h-[20px] right-[15px]"/>
                    </div>
                </motion.div>
            </Link>
            <AnimatePresence>
                {isBlock === "map" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <RoadmapBlock />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full relative bg-border rounded-[10px] p-[1px]">
                <div
                    onClick={() => toggleBlock("rules")}
                    className="flex items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer"
                >
                    {t("rules")}
                    <ChevronAnimation isOpen={isBlock === "rules"} />
                </div>
            </div>
            <AnimatePresence>
                {isBlock === "rules" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-border rounded-[10px] p-[10px]"
                    >
                        <div className="flex flex-col text-left leading-[21px] font-medium md:text-[12px] text-[11px] text-white">
                            <p>1. {t("text1")}</p>
                            <p>2. {t("text2")}</p>
                            <p>3. {t("text3")}</p>
                            <p>4. {t("text4")}</p>
                            <p>5. {t("text5")}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

