"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Top } from "@/features/top/container/top"

interface ScrollHandlerWrapperProps {
    children: React.ReactNode,
}

export const ScrollHandlerWrapper: React.FC<ScrollHandlerWrapperProps> = ({ children }) => {
    const [showTopTypes, setShowTopTypes] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (mainRef.current) {
                const currentScrollPos = mainRef.current.scrollTop
                const isScrollingDown = currentScrollPos > prevScrollPos
                const isAtTop = currentScrollPos < 50

                setShowTopTypes(isAtTop || !isScrollingDown)
                setPrevScrollPos(currentScrollPos)
            }
        }

        const mainElement = mainRef.current
        if (mainElement) {
            mainElement.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (mainElement) {
                mainElement.removeEventListener("scroll", handleScroll)
            }
        }
    }, [prevScrollPos])

    return (
        <>
            <Top showTopTypes={showTopTypes} />
            <main ref={mainRef} className="flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden">
                {children}
            </main>
        </>
    )
}

