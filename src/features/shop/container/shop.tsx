"use client";

import { useState } from "react";
import { ShopTypes } from "@/features/shop/ui/shop-types";
import { TokensList } from "@/features/shop/ui/tokens-list";
import { NFTList } from "@/features/shop/ui/nft-list";
import { usePathname } from "next/navigation";

export const Shop = () => {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    const tabs = [
        { id: "tokens", label: isEnglish ? "Tokens" : "Токены", count: 25 },
        { id: "nft", label: isEnglish ? "NFT" : "NFT", count: 7 },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <>
            <ShopTypes tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "tokens" ? <TokensList /> : <NFTList />}
        </>
    );
};
