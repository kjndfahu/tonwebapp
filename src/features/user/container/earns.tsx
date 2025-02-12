import { useState } from "react";
import { MiniGamesTypes } from "@/features/events/ui/mini-games-types";
import { Roulette } from "@/features/events/ui/roulette";
import { Lottery } from "@/features/events/ui/lottery";
import { useTranslations } from "next-intl";

export const Earns = () => {
    const [activeTabGames, setActiveTabGames] = useState("roulette");
    const t = useTranslations("Roulette");
    const tTabs = useTranslations("MiniGames");

    const earns = [
        { id: "roulette", label: tTabs("roulette") },
        { id: "lottery", label: tTabs("lottery") },
    ];

    return (
        <div className="flex flex-col px-4 gap-[15px]">
            <div className="flex items-center flex-col text-center text-[#666666] text-[12px] gap-1 pt-[15px]">
                <p>{t("text1")}<br />{t("text2")}</p>
            </div>
            <MiniGamesTypes tabs={earns} activeTab={activeTabGames} setActiveTab={setActiveTabGames} />
            {activeTabGames === "roulette" ? <Roulette /> : <Lottery />}
        </div>
    );
};
