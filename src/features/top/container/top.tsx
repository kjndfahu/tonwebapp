import {BalanceBlock} from "@/features/top/ui/balance-block";
import {TopTypes} from "@/features/top/ui/top-types";

export const Top = () => {
    return (
        <div className="flex bg-top pt-[40px] pb-[10px] rounded-b-[35px] flex-col">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">TON</div>
                <div className="flex items-center font-medium text-[12px] text-[#d1d1d1] justify-center w-[60%]">BLOCK</div>
            </div>
            <BalanceBlock/>
            <TopTypes/>
        </div>
    )
}