"use client"

import type React from "react"
import { useCallback, useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BalanceBlock } from "@/features/top/ui/balance-block"
import { TopTypes } from "@/features/top/ui/top-types"

interface TopProps {
    showTopTypes: boolean
}

export const Top: React.FC<TopProps> = ({ showTopTypes }) => {
    const [topTypesHeight, setTopTypesHeight] = useState(0)
    const topTypesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (topTypesRef.current) {
            setTopTypesHeight(topTypesRef.current.scrollHeight)
        }
    }, [topTypesRef])

    const renderTopTypes = useCallback(() => <TopTypes />, [])

    return (
        <div className="flex bg-top pt-[20px] pb-[10px] rounded-b-[35px] flex-col">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">TON</div>
                <div className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">BLOCK</div>
            </div>
            <BalanceBlock />
            <motion.div
                className="overflow-hidden"
                animate={{ height: showTopTypes ? topTypesHeight : 0 }}
                transition={{ duration: 0, ease: [0.02, 0.06, 0.03, 0.18] }}
            >
                <div ref={topTypesRef}>{renderTopTypes()}</div>
            </motion.div>
        </div>
    )
}

