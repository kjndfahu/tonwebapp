'use client'
import {BlockTypes} from "@/features/blocks/ui/block-types";
import {AllBlocks} from "@/features/blocks/container/all-blocks";
import {useState} from "react";
import {ActiveBlocks} from "@/features/blocks/container/active-blocks";

interface Tab {
    id: string
    label: string
    count: number
}

const tabs: Tab[] = [
    {id: "all", label: "Все блоки", count: 25},
    {id: "my", label: "Мои блоки", count: 7},
]

export const Earn = () => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
    return (
        <>
            <BlockTypes tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === tabs[0].id ? (
                <AllBlocks/>
            ) : (
                <ActiveBlocks/>
            )}
        </>
    )
}