import {useState} from "react";
import {MiniGamesTypes} from "@/features/events/ui/mini-games-types";
import {Roulette} from "@/features/events/ui/roulette";

interface Earn {
    id: string
    label: string
}

const earns: Earn[] = [
    {id: "roulette", label: "Рулетка"},
    {id: "lottery", label: "Лотерея"},
]

export const Earns = () => {
    const [activeTabGames, setActiveTabGames] = useState<string>(earns[0].id)
    return (
        <div className="flex flex-col px-4 gap-[15px]">
            <div
                className="flex items-center flex-col text-center text-[#666666] text-[12px] gap-1 pt-[15px]">
                <p>Играйте в захватывающие игры и<br/> получайте щедрые награды!</p>
            </div>
            <MiniGamesTypes tabs={earns} activeTab={activeTabGames} setActiveTab={setActiveTabGames}/>
            <Roulette/>
        </div>
    )
}