"use client"

import {Referrals} from "@/features/user/ui/referrals";
import {InviteBlock} from "@/features/user/ui/invite-block";
import {Accordion} from "@/features/user/ui/accordion";
import {LanguageSwitcher} from "@/features/user/ui/language-switcher";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

interface Tab {
    id: string
    label: string
}

const tabs: Tab[] = [
    { id: "ru", label: "Русский" },
    { id: "en", label: "English" },
]

export const UserContainer = () => {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState<string>("ru")
    const t = useTranslations('User')

    useEffect(() => {
        const locale = pathname.split("/")[1]
        if (tabs.some((tab) => tab.id === locale)) {
            setActiveTab(locale)
        }
    }, [pathname])
    return (
        <div
            className="flex items-start flex-col text-center font-bold px-4 text-[#b2b2b2] pt-[15px] text-[16px] gap-[15px]">
            <h2>{t('ref')}</h2>
            <Referrals/>
            <InviteBlock/>
            <h2>{t('settings')}</h2>
            <Accordion/>
            <h2>{t('lang')}</h2>
            <LanguageSwitcher tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    )
}