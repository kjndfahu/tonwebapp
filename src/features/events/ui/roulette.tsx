"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import polygon from "../../../../public/img/polygon.png"
import { ArrowRight, TonIcon } from "@/shared/icons"
import { QuestionBlock } from "@/features/events/ui/question-block"
import { useTranslations } from "next-intl"
import { generateRandomNumber } from "@/enteties/roulette/generate-random-number"

const ITEM_HEIGHT = 92
const VISIBLE_ITEMS = 1.5
const TOTAL_ITEMS = 25.8
const SPIN_DURATION = 6
const EXTRA_ROTATIONS = 3

export const Roulette = () => {
    const [isSpinning, setIsSpinning] = useState(false)
    const [result, setResult] = useState<number | null>(null)
    const [items, setItems] = useState<Array<{ value: string; number: number }>>([])
    const controls = useAnimation()
    const y = useMotionValue(0)
    const t = useTranslations("Roulette")

    useEffect(() => {
        initializeItems()
    }, [])

    const initializeItems = () => {
        const { numbers } = generateRandomNumber()
        setItems(numbers.map((number) => ({ value: "V", number })))
    }

    useEffect(() => {
        const unsubscribe = y.onChange((latest) => {
            const wrappedY = latest % (ITEM_HEIGHT * TOTAL_ITEMS)
            y.set(wrappedY)
        })
        return () => unsubscribe()
    }, [y])

    useEffect(() => {
        if (!isSpinning && result !== null) {
            console.log("Вращение завершено. Результат:", result)
        }
    }, [isSpinning, result])

    const handleSpin = async () => {
        if (!isSpinning) {
            setIsSpinning(true)
            setResult(null)

            const numbers = Array.from({ length: TOTAL_ITEMS }, (_, i) => i + 1)
            const result = 14
            const targetIndex = 13 // Index of the 14th element (0-based)
            const centerOffset = Math.floor(VISIBLE_ITEMS / 2)
            const targetPosition = ITEM_HEIGHT * (VISIBLE_ITEMS - 1.9) // Changed from 1 to 1.25
            const spinDistance = ITEM_HEIGHT * TOTAL_ITEMS * EXTRA_ROTATIONS - targetPosition + targetIndex * ITEM_HEIGHT

            controls.set({ y: 0 })
            await controls.start({
                y: -spinDistance,
                transition: {
                    duration: SPIN_DURATION,
                    ease: [0.25, 0.1, 0.25, 1],
                },
            })

            setTimeout(() => {
                setResult(result)
                setItems(numbers.map((number) => ({ value: "V", number })))
                setIsSpinning(false)
            }, 500)
        }
    }

    return (
        <div className="bg-border z-[50] w-full rounded-[20px] p-[1px] h-[350px]">
            <div className="h-[348px] overflow-hidden bg-gradient z-[5] w-full relative rounded-[20px]">
                <QuestionBlock />
                <motion.div
                    animate={controls}
                    style={{ y }}
                    className="flex flex-col items-center z-[100] gap-[10px] absolute left-0 right-0"
                    initial={{ y: (-ITEM_HEIGHT * (VISIBLE_ITEMS - 1.9)) / 2 }} // Changed from 1 to 1.25
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="h-[92px] w-[173px] bg-block-token bg-cover rounded-[20px] mb-[2px] flex items-center z-[100] justify-center"
                            animate={{
                                scale: result === item.number ? 1.15 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex z-[100] items-center gap-3 px-4 py-2 rounded-xl">
                                <TonIcon className="w-[45px] opacity-70 h-[45px]" />
                                <span className="text-white opacity-70 font-extrabold text-[42px]">{item.number}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="absolute z-10 w-full rounded-[20px] h-[350px] bg-roulette bg-cover" />
                <Image className="absolute left-[20px] top-[143px]" src={polygon || "/placeholder.svg"} alt="Left arrow" />
                <Image
                    className="absolute right-[20px] top-[143px] transform scale-x-[-1]"
                    src={polygon || "/placeholder.svg"}
                    alt="Right arrow"
                />

                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[92px] border-zinc-600 pointer-events-none" />
                <div
                    className="absolute bottom-0 w-full h-[120px] z-[101] bg-[#1e1e1e]"
                    style={{
                        maskImage: "linear-gradient(to top, rgba(0,0,0,5), rgba(0,0,0,0))",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,5), rgba(0,0,0,0))",
                    }}
                ></div>

                <motion.div className="w-[80%] absolute left-1/2 bottom-[10px] rounded-[12px] bg-border p-[1px] -translate-x-1/2 z-[200]">
                    <motion.button
                        onClick={handleSpin}
                        disabled={isSpinning}
                        whileTap={{ scale: 0.98 }}
                        className="flex gap-2 w-full rounded-[12px] z-[201] items-center justify-center py-3 text-[22px] font-extrabold bg-gradient2 text-white"
                    >
                        {t("spin")}
                        <ArrowRight />
                        <div className="flex items-center leading-[26px] gap-[5px]">
                            <TonIcon />
                            5,7
                        </div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

