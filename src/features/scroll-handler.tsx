"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Top } from "@/features/top/container/top"

interface ScrollHandlerWrapperProps {
    children: React.ReactNode
}

export const ScrollHandlerWrapper: React.FC<ScrollHandlerWrapperProps> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (mainRef.current) {
                setIsScrolled(mainRef.current.scrollTop > 50)
            }
        }

        const mainElement = mainRef.current
        if (mainElement) {
            mainElement.addEventListener("scroll", handleScroll, { passive: true })
        }

        return () => {
            if (mainElement) {
                mainElement.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    return (
        <div className="flex flex-col w-full max-w-[500px] h-screen overflow-hidden">
            <Top isScrolled={isScrolled} />
            <main ref={mainRef} className="flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden">
                {children}
            </main>
        </div>
    )
}

