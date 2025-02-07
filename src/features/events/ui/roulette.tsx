"use client"

import Image from "next/image"
import {useEffect, useRef, useState} from "react"
import {motion, useAnimation, useMotionValue} from "framer-motion"

const ITEM_HEIGHT = 92
const VISIBLE_ITEMS = 3
const TOTAL_ITEMS = 20

import polygon from '../../../../public/img/polygon.png'
import {ArrowRight, TonIcon} from "@/shared/icons";
import {ArrowRightIcon} from "lucide-react";
import {QuestionBlock} from "@/features/events/ui/question-block";

export const Roulette = () => {
    const [isSpinning, setIsSpinning] = useState(false)
    const [result, setResult] = useState<number | null>(null)
    const controls = useAnimation()
    const y = useMotionValue(0)
    const itemsRef = useRef<Array<{ value: string; number: number }>>(
        Array(TOTAL_ITEMS)
            .fill(null)
            .map((_, i) => ({
                value: "V",
                number: Math.floor(Math.random() * 10) + 1,
            })),
    )

    const handleSpin = async () => {
        if (!isSpinning) {
            setIsSpinning(true)
            setResult(null)
            const newResult = Math.floor(Math.random() * TOTAL_ITEMS)

            await controls.start({
                y: -ITEM_HEIGHT * TOTAL_ITEMS * 10,
                transition: {
                    duration: 2,
                    ease: [0.41, 0.06, 0.49, 0.97],
                },
            })

            await controls.start({
                y: -ITEM_HEIGHT * TOTAL_ITEMS * 12,
                transition: {
                    duration: 1.5,
                    ease: [0.33, 0, 0.67, 1],
                },
            })

            const finalPosition = -ITEM_HEIGHT * (newResult + TOTAL_ITEMS * 12)
            await controls.start({
                y: finalPosition,
                transition: {
                    duration: 1,
                    ease: [0.23, 1, 0.32, 1],
                },
            })

            setResult(newResult)
            setIsSpinning(false)
        }
    }

    useEffect(() => {
        const unsubscribe = y.onChange((latest) => {
            const wrappedY = latest % (ITEM_HEIGHT * TOTAL_ITEMS)
            y.set(wrappedY)
        })

        return () => unsubscribe()
    }, [y])

    const items = [...itemsRef.current, ...itemsRef.current, ...itemsRef.current]

    return (
        <div className="bg-border z-[50] w-full rounded-[20px] p-[1px] h-[350px]">
            <div className="h-[340px] overflow-hidden bg-gradient z-[5] w-full relative rounded-[20px]">
                <QuestionBlock  />
                <motion.div
                    animate={controls}
                    style={{y}}
                    className="flex flex-col items-center z-[100] gap-[10px] absolute left-0 right-0"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`h-[92px] w-[173px] bg-block-token bg-cover rounded-[20px] mb-[2px] flex items-center z-[100] justify-center`}
                            animate={{
                                scale: result === index % TOTAL_ITEMS ? 1.15 : 1
                            }}
                            transition={{duration: 0.3}}
                        >
                            <div className="flex z-[100] items-center gap-3  px-4 py-2 rounded-xl">
                                <TonIcon className="w-[45px] opacity-70 h-[45px]"/>
                                <span className="text-white opacity-70 font-extrabold text-[42px]">{item.number}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="absolute z-10 w-full rounded-[20px] h-[350px] bg-roulette bg-cover"/>
                <Image
                    className="absolute left-[20px] top-[143px]"
                    src={polygon || "/placeholder.svg"}
                    alt="Left arrow"
                />
                <Image
                    className="absolute right-[20px] top-[143px] transform scale-x-[-1]"
                    src={polygon || "/placeholder.svg"}
                    alt="Right arrow"
                />

                <div
                    className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[92px]  border-zinc-600 pointer-events-none"/>

                <motion.button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    className={`
          w-full absolute flex gap-2 bottom-0 items-center justify-center z-[120] py-3 opacity-100 text-[22px] font-extrabold bg-top rounded-lg text-white transition-colors`}
                    whileTap={{scale: 0.98}}
                >
                    Крутить за
                    <ArrowRight/>
                    <div className="flex items-center leading-[26px] gap-[5px]">
                        <TonIcon/>
                        5,7
                    </div>
                </motion.button>

            </div>
        </div>
    )
}

