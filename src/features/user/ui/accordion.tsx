"use client"
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"
import { useState } from "react"
import { MyNfts } from "@/features/user/ui/my-nfts"
import { RoadmapBlock } from "@/features/user/ui/roadmap-block"
import { motion, AnimatePresence } from "framer-motion"

export const Accordion = () => {
    const [isBlock, setIsBlock] = useState<string | null>(null)

    const toggleBlock = (block: string) => {
        setIsBlock((prev) => (prev === block ? null : block))
    }

    return (
        <div className="flex w-full gap-[10px] flex-col">
            <div className="w-full relative bg-border rounded-[10px] p-[1px]">
                <div
                    onClick={() => toggleBlock("nft")}
                    className="flex items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer"
                >
                    Мои NFT
                    <motion.div
                        animate={{
                            x: isBlock === "nft" ? "calc(-100% + 40px)" : 0,
                            left: isBlock === "nft" ? 20 : "auto",
                            right: isBlock === "nft" ? "auto" : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        {isBlock === "nft" ? <ChevronLeft width={17} height={17} /> : <ChevronRight width={17} height={17} />}
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {isBlock === "nft" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <MyNfts />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full relative bg-border rounded-[10px] p-[1px]">
                <div
                    onClick={() => toggleBlock("map")}
                    className="flex items-center justify-center h-[41px] text-[16px] font-bold text-white w-full rounded-[10px] bg-gradient cursor-pointer"
                >
                    Дорожная карта
                    <motion.div
                        animate={{
                            x: isBlock === "map" ? "calc(-100% + 40px)" : 0,
                            left: isBlock === "map" ? 20 : "auto",
                            right: isBlock === "map" ? "auto" : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        {isBlock === "map" ? <ChevronLeft width={17} height={17} /> : <ChevronRight width={17} height={17} />}
                    </motion.div>
                </div>
            </div>
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
                    Правила игры
                    <motion.div
                        animate={{
                            rotate: isBlock === "rules" ? 180 : 0,
                            left: isBlock === "rules" ? 20 : "auto",
                            right: isBlock === "rules" ? "auto" : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        <ChevronUp width={17} height={17} />
                    </motion.div>
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
                        <div className="flex flex-col text-left leading-[21px] font-medium text-[12px] text-white">
                            <p>1. Скопируйте адрес, отображенный ниже</p>
                            <p>2. Вставьте адрес в вашем кошельке или на бирже</p>
                            <p>3. Введите как минимум 0.2 TON для перевода</p>
                            <p>4. Пенные еще раз</p>
                            <p>5. Подтвердите транзакцию и дождитесь подтверждения</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

