'use client'
import {Referrals} from "@/features/user/ui/referrals";
import {InviteBlock} from "@/features/user/ui/invite-block";
import {useState} from "react";
import {LanguageSwitcher} from "@/features/user/ui/language-switcher";
import {Accordion} from "@/features/user/ui/accordion";

interface Tab {
    id: string
    label: string
}

const tabs: Tab[] = [
    {id: "rus", label: "Русский"},
    {id: "en", label: "English"},
]

export default function UserPage() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-[90px]">
            <div className="flex items-start flex-col text-center font-bold px-4 text-[#b2b2b2] pt-[15px] text-[16px] gap-[15px]">
                <h2>Реферральная система</h2>
                <Referrals/>
                <InviteBlock/>
                <h2>Настройки</h2>
                <Accordion/>
                <h2>Язык</h2>
                <LanguageSwitcher tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    )
}
