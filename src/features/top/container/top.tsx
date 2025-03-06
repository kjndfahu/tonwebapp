"use client"

import type React from "react"
import { useRef, useLayoutEffect, useState } from "react"
import { BalanceBlock } from "@/features/top/ui/balance-block"
import { TopTypes } from "@/features/top/ui/top-types"

interface TopProps {
    isScrolled: boolean
}

export const Top: React.FC<TopProps> = ({ isScrolled }) => {
    const [topTypesHeight, setTopTypesHeight] = useState(0)
    const topTypesRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (topTypesRef.current) {
            setTopTypesHeight(topTypesRef.current.offsetHeight)
        }
    }, [])

    return (
            <div
                className={`absolute w-full max-w-[500px] left-1/2 -translate-x-1/2 top-0 bottom-0 z-[50] bg-top pt-[20px] transition-all duration-900 ease-in-out rounded-b-[35px] overflow-hidden ${
                    isScrolled ? "h-[95px]" : "h-[130px]"
                }`}
                style={{
                    clipPath: "inset(0 0 0 0 round 0 0 35px 35px)",
                }}
            >
                <div className="flex items-center justify-between w-full">
                    <div
                        className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">TON
                    </div>
                    <div
                        className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">BLOCK
                    </div>
                </div>
                <div
                    className={`transition-all duration-700 ease-in-out ${
                        isScrolled ? "opacity-100 translate-y-[0px]" : "opacity-100 translate-y-0"
                    }`}
                >
                    <BalanceBlock/>
                </div>
                <div
                    className={`absolute left-0 z-[10] right-0 transition-all duration-900 ease-in-out ${
                        isScrolled ? "opacity-0 translate-y-[-20px] max-h-0" : "opacity-100 translate-y-0 max-h-[100px]"
                    }`}
                    style={{
                        top: `${topTypesHeight}px`,
                        transform: `translateY(${isScrolled ? "32px" : "52px"})`,
                        overflow: "hidden",
                    }}
                    ref={topTypesRef}
                >
                    <TopTypes isScrolled={isScrolled}/>
                </div>
            </div>
    )
}

