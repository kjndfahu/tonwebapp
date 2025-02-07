import {BlockIcon, TonIcon} from "@/shared/icons";

export const BalanceBlock = () => {
    return (
        <div className="w-full px-4">
            <div className="w-full bg-border shadow-2xl p-[1px] rounded-[15px]">
                <div className="flex w-full rounded-[15px] bg-gradient">
                    <div
                        className="flex items-center text-[23px] font-extrabold gap-[5px] border-r-[2px] border-r-[#a0a0a0] justify-center rounded-l-[15px] w-full h-[44px]">
                        <TonIcon/>
                        0
                    </div>
                    <div
                        className="flex items-center text-[23px] font-extrabold gap-[5px] justify-center rounded-r-[15px] w-full h-[44px]">
                        <BlockIcon className="w-[22px] h-[22px]"/>
                        1,050
                    </div>
                </div>
            </div>
        </div>
    )
}