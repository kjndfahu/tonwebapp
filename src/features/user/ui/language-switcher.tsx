"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import type React from "react" // Import React

interface Props {
    activeTab: string
    setActiveTab: (activeTab: string) => void
    tabs: {
        id: string
        label: string
    }[]
}

export const LanguageSwitcher: React.FC<Props> = ({ activeTab, setActiveTab, tabs }) => {
    const router = useRouter()

    const toggleLanguage = () => {
        const nextLocale = activeTab === "ru" ? "en" : "ru"
        setActiveTab(nextLocale)
        router.push(`/${nextLocale}/user`)
    }

    return (
        <div className="w-full z-[20] pb-[20px]">
            <div className="rounded-[13px] w-full bg-border p-[1px]">
                <div className="relative flex p-[1px] z-10 rounded-xl bg-top backdrop-blur-xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id)
                                toggleLanguage()
                            }}
                            className={`
                            relative z-20 w-full py-2.5 text-sm font-medium transition-colors duration-200 
                            ${activeTab === tab.id ? "text-white" : "text-gray-300"}`}
                        >
                            <span>{tab.label}</span>
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-border rounded-[13px]"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

