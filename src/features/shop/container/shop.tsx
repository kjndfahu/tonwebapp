'use client'

import {useState} from "react";
import {ShopTypes} from "@/features/shop/ui/shop-types";
import {TokensList} from "@/features/shop/ui/tokens-list";
import {NFTList} from "@/features/shop/ui/nft-list";

interface Tab {
    id: string
    label: string
    count: number
}

const tabs: Tab[] = [
    {id: "tokens", label: "Токены", count: 25},
    {id: "nft", label: "NFT", count: 7},
]

export const Shop = () => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
    return (
        <>
            <ShopTypes tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === tabs[0].id ? (
                <TokensList/>
            ) : (
                <NFTList/>
            )}
        </>
    )
}