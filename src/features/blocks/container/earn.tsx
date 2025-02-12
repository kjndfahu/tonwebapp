"use client";

import { BlockTypes } from "@/features/blocks/ui/block-types";
import { AllBlocks } from "@/features/blocks/container/all-blocks";
import { ActiveBlocks } from "@/features/blocks/container/active-blocks";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Earn = () => {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    const tabs = [
        { id: "all", label: isEnglish ? "All Blocks" : "Все блоки", count: 25 },
        { id: "my", label: isEnglish ? "My Blocks" : "Мои блоки", count: 7 },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <>
            <BlockTypes tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "all" ? <AllBlocks /> : <ActiveBlocks />}
        </>
    );
};
