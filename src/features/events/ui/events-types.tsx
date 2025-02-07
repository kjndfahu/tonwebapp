"use client"
import { motion } from "framer-motion"
import type React from "react"

interface Props {
    activeTab: string
    setActiveTab: (activeTab: string) => void
    events: {
        id: string
        label: string
    }[]
}

export const EventsTypes: React.FC<Props> = ({ activeTab, setActiveTab, events }) => {
    return (
        <div className="w-full px-4 pt-[15px] ">
            <div className="rounded-[13px] w-full bg-border p-[1px]">
                <div className="relative flex p-[1px] z-10 rounded-xl bg-top backdrop-blur-xl ">
                    {events.map((event) => (
                        <button
                            key={event.id}
                            onClick={() => setActiveTab(event.id)}
                            className={`
                            relative z-20 w-full py-2.5 text-sm font-medium transition-colors duration-200 
                            ${activeTab === event.id ? "text-white" : "text-gray-300"}`}
                        >
                            <span>{event.label}</span>
                            {activeTab === event.id && (
                                <motion.div
                                    layoutId="active-tab-events"
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

